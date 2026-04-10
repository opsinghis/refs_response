import { NexusProducer, TokenizationClient, DeduplicationClient, RetrierClient } from '@pandora/nexus-sdk';
import { EmployeeCreatedEvent } from '../models/EmployeeCreatedEvent';
import { config } from '../config';
import { logger } from '../logger';

// ── Workday Webhook Payload ───────────────────────────────────────────────────
// Based on Workday REST API v36 standard Worker_Hire event shape.
// Every field marked // CONFIRM: must be verified with the Workday HR team
// before deploying to production.

interface WorkdayWebhookPayload {
  event: string;
  eventId: string;          // CONFIRM: may be named "transactionId" in some Workday tenants
  timestamp: string;        // CONFIRM: ISO-8601 string or epoch milliseconds
  tenant: string;
  worker: {
    wid: string;
    employeeId: string;     // CONFIRM: may be "Employee_ID" or "workdayId"
    personalData: {
      legalName: {
        givenName: string;
        familyName: string;
      };
      contactData: {
        emailAddresses: Array<{
          type: string;     // e.g. "WORK", "HOME"
          address: string;
          primary: boolean;
        }>;
      };
    };
    employment: {
      position: {
        title: string;
        department: { name: string; code?: string };
        startDate: string;  // ISO-8601 date
        employmentType: string; // CONFIRM: Workday enum — see EMPLOYMENT_TYPE_MAP below
        costCenter?: string;
      };
      location: {
        site?: string;
        address: { country: string }; // ISO 3166-1 alpha-2
      };
      manager?: {
        employeeId?: string; // CONFIRM: field name
      };
    };
  };
}

// CONFIRM: verify these Workday employment type strings match your tenant configuration
const EMPLOYMENT_TYPE_MAP: Record<string, EmployeeCreatedEvent['employmentType']> = {
  'Regular': 'FULL_TIME',
  'Part-time': 'PART_TIME',
  'Contractor': 'CONTRACTOR',
  'Intern': 'INTERN',
};

// ── EventPublisher ────────────────────────────────────────────────────────────

/**
 * EventPublisher — Workday Employee Created producer
 *
 * Responsibilities:
 *   1. Receive employee-created payload from Workday webhook
 *   2. Transform Workday payload → EmployeeCreatedEvent (Nexus schema)
 *   3. Validate required fields and business rules
 *   4. Tokenize PD fields (firstName, lastName, email)
 *   5. Check deduplication (eventId + sourceSystem, 24h window)
 *   6. Publish to nexus.employee.created.v1 via Nexus Ingress with retry
 *
 * TODO: REVIEW REQUIRED — implement transformPayload() and validate()
 * See storydetails/PRD.md for field mapping and implementation guide.
 */
export class EventPublisher {
  private producer: NexusProducer;
  private tokenization: TokenizationClient;
  private deduplication: DeduplicationClient;
  private retrier: RetrierClient;

  constructor(
    producer: NexusProducer,
    tokenization: TokenizationClient,
    deduplication: DeduplicationClient,
    retrier: RetrierClient,
  ) {
    this.producer = producer;
    this.tokenization = tokenization;
    this.deduplication = deduplication;
    this.retrier = retrier;
  }

  /**
   * Publish a Workday employee-created event to Nexus.
   * @param rawPayload — Raw webhook body from Workday HR (parsed JSON)
   */
  async publish(rawPayload: unknown): Promise<void> {
    // Step 1: Transform Workday payload → EmployeeCreatedEvent
    const event = this.transformPayload(rawPayload);

    // Step 2: Validate business rules
    this.validate(event);

    // Step 3: Check deduplication (eventId + sourceSystem, 24h window)
    const isDuplicate = await this.deduplication.isDuplicate(
      event.eventId,
      event.sourceSystem,
    );
    if (isDuplicate) {
      logger.warn({ eventId: event.eventId }, 'Duplicate event detected — skipping');
      return;
    }

    // Step 4: Tokenize PD fields before publishing
    const tokenizedEvent = await this.tokenizeFields(event);

    // Step 5: Publish via Nexus Ingress (wrapped by retrier for graduated backoff)
    await this.retrier.execute(async () => {
      await this.producer.send({
        topic: config.kafka.topic,
        messages: [
          {
            key: event.employeeId,  // partition key
            value: tokenizedEvent,
          },
        ],
      });
    });

    logger.info({ eventId: event.eventId, employeeId: event.employeeId }, 'Event published');
  }

  /**
   * TODO: REVIEW REQUIRED — Map Workday webhook payload to EmployeeCreatedEvent.
   *
   * The interface `WorkdayWebhookPayload` above matches the standard Workday REST API
   * Worker_Hire event shape (v36). Fields marked // CONFIRM: must be verified with the
   * Workday HR team before production deployment.
   *
   * See storydetails/PRD.md § "Implementation Guide: Step 1" for the complete
   * field-by-field mapping table and the reference implementation to paste here.
   */
  private transformPayload(raw: unknown): EmployeeCreatedEvent {
    const payload = raw as WorkdayWebhookPayload;
    const w = payload.worker;

    const primaryEmail = w.personalData.contactData.emailAddresses
      .find(e => e.primary)?.address ?? null;

    return {
      eventId: payload.eventId,              // CONFIRM: may be payload.transactionId
      sourceSystem: 'WorkdayHR',
      eventTimestamp: payload.timestamp,     // CONFIRM: ISO-8601 or epoch ms
      schemaVersion: '1.0.0',
      employeeId: w.employeeId,              // CONFIRM: may be w.Employee_ID
      firstName: w.personalData.legalName.givenName,
      lastName: w.personalData.legalName.familyName,
      email: primaryEmail,
      department: w.employment.position.department.name,
      jobTitle: w.employment.position.title,
      startDate: w.employment.position.startDate,
      employmentType: EMPLOYMENT_TYPE_MAP[w.employment.position.employmentType] ?? 'FULL_TIME',
      country: w.employment.location.address.country,
      officeLocation: w.employment.location.site ?? null,
      managerId: w.employment.manager?.employeeId ?? null,
      costCenter: w.employment.position.costCenter ?? null,
    };
  }

  /**
   * TODO: REVIEW REQUIRED — Add business-specific validation rules.
   *
   * Avro schema validation (required fields, type checks) is handled by the SDK serialiser.
   * Add rules that are specific to Pandora / Workday HR business requirements here.
   *
   * See storydetails/PRD.md § "Step 2: validate()" for the reference implementation.
   */
  private validate(event: EmployeeCreatedEvent): void {
    if (!event.eventId) throw new Error('eventId is required');
    if (!event.employeeId) throw new Error('employeeId is required');
    if (!event.department) throw new Error('department is required');
    if (!event.startDate.match(/^\d{4}-\d{2}-\d{2}$/))
      throw new Error('startDate must be ISO-8601 date (YYYY-MM-DD)');
    if (!['FULL_TIME', 'PART_TIME', 'CONTRACTOR', 'INTERN'].includes(event.employmentType))
      throw new Error(`Unknown employmentType: ${event.employmentType}`);
    if (event.country.length !== 2)
      throw new Error('country must be ISO 3166-1 alpha-2 (2 chars)');
  }

  /**
   * Tokenize PD fields via Nexus Tokenization service.
   * Authority: customer — tokens are opaque to Nexus platform.
   * email is nullable — skip tokenization if null.
   */
  private async tokenizeFields(event: EmployeeCreatedEvent): Promise<EmployeeCreatedEvent> {
    const [firstName, lastName, email] = await Promise.all([
      this.tokenization.tokenize(event.firstName, 'customer'),
      this.tokenization.tokenize(event.lastName, 'customer'),
      event.email !== null
        ? this.tokenization.tokenize(event.email, 'customer')
        : Promise.resolve(null),
    ]);

    return { ...event, firstName, lastName, email };
  }
}

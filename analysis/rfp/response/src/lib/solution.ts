// Centralised content for the Solution experience (the A.4 group in the RFP tree).
// Mirrors the research notes in ../../solution/*.md so the site and docs stay in sync.

// The original A.4 objective bullets — what this section must cover. Surfaced as a
// collapsible "objective" blob at the top of the solution pages for live coverage checks.
export const a4Objective: { id: string; text: string; detail?: string }[] = [
  {
    id: "A.4.1",
    text: "Target-state reference architecture across Data, Integration, and DevOps platforms",
    detail:
      "Insert the integrated target-state architecture (Nexus / Olympus / PAKS / portal / Kong / observability) and the golden-path flow.",
  },
  { id: "A.4.2", text: "Cross-cutting platform principles: everything-as-code, governed-by-default, observable end-to-end, AI-ready" },
  { id: "A.4.3", text: "The 'golden path / shift-left / self-service over tickets' operating concept" },
  { id: "A.4.4", text: "How the three sub-domains interlock and feed a common foundation for other TS&F verticals" },
  { id: "A.4.5", text: "AI-native operating model — AI for operations, agentic workflows, AI developer tooling, AI governance" },
];

export interface Hero {
  code: string;
  title: string;
  tagline: string;
  posture: string;
  accent: string;
  accent2: string;
  intro: string;
}

// Hero block per solution section id. A.4.1–A.4.5 mirror the A.4 objective;
// commerce + context graph now live in the Appendix.
export const heroes: Record<string, Hero> = {
  "sol-overview": {
    code: "A.4",
    title: "Overall Solution Architecture & Approach",
    tagline: "One integrated target state, run by one AI-native operating model",
    posture: "Architecture",
    accent: "#e0218a",
    accent2: "#e2231a",
    intro:
      "Our approach is a single integrated target state across Data, Integration and DevOps — built on shared principles, experienced through golden paths, interlocking into one common foundation, and run by an AI-native operating model. This section follows that exact thread (A.4.1 → A.4.5).",
  },
  "sol-principles": {
    code: "A.4.2",
    title: "Platform Principles",
    tagline: "The cross-cutting rules every platform is built by",
    posture: "Principles",
    accent: "#e2231a",
    accent2: "#ad1568",
    intro:
      "Four principles apply across all three platforms and make the target state coherent rather than three disconnected estates: everything-as-code, governed-by-default, observable end-to-end, and AI-ready.",
  },
  "sol-goldenpath": {
    code: "A.4.3",
    title: "Golden-Path Operating Concept",
    tagline: "Self-service and golden paths over tickets; shift-left",
    posture: "Operating concept",
    accent: "#ad1568",
    accent2: "#e0218a",
    intro:
      "How teams experience the platform: common requests are met by self-service golden paths — not tickets and queues — with CI/CD, observability and security wired in by default. The result is days-to-minutes.",
  },
  "sol-interlock": {
    code: "A.4.4",
    title: "How the Sub-domains Interlock",
    tagline: "Three domains, one common foundation for the wider org",
    posture: "Interlock",
    accent: "#e0218a",
    accent2: "#5b2a4e",
    intro:
      "Data, Integration and DevOps are run by focused domain teams but share one foundation — golden paths, governance, observability and the operating model — which in turn becomes a reusable foundation for other TS&F verticals.",
  },
  "sol-operating-model": {
    code: "A.4.5",
    title: "AI-Native Operating Model",
    tagline: "AI for operations · agentic workflows · AI dev tooling · AI governance",
    posture: "Operating model",
    accent: "#e0218a",
    accent2: "#e2231a",
    intro:
      "The model that runs the target state: a repeatable Agentic Delivery Fabric for all work, proactive agentic operations to keep it healthy, AI developer tooling, and the AI-governance guardrails that keep 'less human, more agents' safe.",
  },
  "sol-commerce": {
    code: "E.11",
    title: "Agentic Commerce & Kong",
    tagline: "Appendix — strategic opportunity for the Kong investment",
    posture: "Appendix · strategic",
    accent: "#5b2a4e",
    accent2: "#e0218a",
    intro:
      "A strategic opportunity, kept in the appendix: agentic commerce is the answer to the RFP's open 'why Kong?' question. Kong becomes the governed front door and AI gateway through which external and internal agents safely transact — a low-regret, high-optionality bet.",
  },
  "sol-context-graph": {
    code: "E.12",
    title: "Enterprise Context Graph",
    tagline: "Appendix — high-value, high-risk, deferred future component",
    posture: "Appendix · future",
    accent: "#877b8c",
    accent2: "#5b2a4e",
    intro:
      "A future component, kept in the appendix: a single graph of the whole estate that would let agents reason over unified context and dissolve the federation problem. High value but high risk, so we keep it value-gated and never a day-one dependency.",
  },
};

// --- A.4.1: target-state reference architecture ------------------------------
export interface ArchNode {
  id: string;
  name: string;
  detail: string;
}
export interface ArchDomain {
  id: string;
  name: string;
  tint: string;
  nodes: ArchNode[];
}
export const archDomains: ArchDomain[] = [
  {
    id: "data",
    name: "Data platform",
    tint: "#e2231a",
    nodes: [
      { id: "olympus", name: "Olympus", detail: "Databricks + Unity Catalog — governed, self-serve data products with lineage and cost transparency." },
      { id: "powerbi", name: "Power BI", detail: "Self-service analytics namespaces with governance and managed cost." },
      { id: "openmeta", name: "Open Metadata", detail: "Discovery of data objects across Databricks, Kong and Nexus." },
    ],
  },
  {
    id: "integration",
    name: "Integration platform",
    tint: "#e0218a",
    nodes: [
      { id: "nexus", name: "Nexus", detail: "Event-driven integration on Kafka (Confluent) — schema registry, dedup, tokenization, facades; data-quality enforced before downstream." },
      { id: "kong", name: "Kong", detail: "API gateway, developer portal and AI gateway — the governed, standardized API front door." },
    ],
  },
  {
    id: "devops",
    name: "DevOps platform",
    tint: "#5b2a4e",
    nodes: [
      { id: "paks", name: "PAKS", detail: "AKS namespace-as-a-service — a secure, self-serve Kubernetes foundation." },
      { id: "portal", name: "Developer Portal", detail: "Backstage → Port.io — golden paths, scorecards and self-service actions." },
      { id: "github", name: "GitHub + Actions", detail: "Source, CI/CD and shared pipeline templates (replacing Azure DevOps)." },
    ],
  },
];
export const archCrossCutting: ArchNode[] = [
  { id: "obs", name: "Observability — New Relic", detail: "End-to-end / business observability wired into every service by default." },
  { id: "gov", name: "Security & AI-governance", detail: "Policy-as-code, RBAC and audit; the Kong AI Gateway controls agent traffic." },
  { id: "eac", name: "Everything-as-code — Terraform / CI-CD", detail: "Automation by default across all three domains; no manual provisioning." },
];

// --- A.4.2: platform principles ----------------------------------------------
export interface Principle {
  id: string;
  title: string;
  detail: string;
}
export const principles: Principle[] = [
  { id: "eac", title: "Everything-as-code", detail: "Automation by default; eliminate manual process. Infrastructure, pipelines, policy and golden paths are all code — versioned, reviewed, repeatable." },
  { id: "gov", title: "Governed by default", detail: "Governance, security and cost controls are wired in at provisioning time — not bolted on later. The safe path is the easy path." },
  { id: "obs", title: "Observable end-to-end", detail: "Every service is born observable; business-level observability spans domains so issues are seen before customers feel them." },
  { id: "ai", title: "AI-ready", detail: "A governed context and API layer that agents can reason over and act through safely — the precondition for agentic workflows." },
];

// --- A.4.4: interlock --------------------------------------------------------
export const interlockDomains = [
  { id: "data", name: "Data", tint: "#e2231a", note: "Governed data products, lineage, cost transparency" },
  { id: "integration", name: "Integration", tint: "#e0218a", note: "Event backbone, APIs, data quality" },
  { id: "devops", name: "DevOps", tint: "#5b2a4e", note: "Runtime, golden paths, developer experience" },
];
export const foundationItems = [
  "Golden paths & self-service",
  "Shared governance & security",
  "End-to-end observability",
  "The AI-native operating model",
];

// --- Fabric: universal phase skeleton ----------------------------------------
export interface Phase {
  id: string;
  label: string;
  reads: string;
  writes: string;
  blurb: string;
  gate?: boolean;
}

export const phases: Phase[] = [
  {
    id: "intake",
    label: "Intake",
    reads: "similar past work, owners, dependencies",
    writes: "new work-item node",
    blurb: "Classify the request and find existing work to reuse instead of duplicate.",
  },
  {
    id: "design",
    label: "Plan / Design",
    reads: "schemas, contracts, policies, cost guardrails",
    writes: "design decisions",
    blurb: "Ground the design in what already exists. Reuse-vs-create decided here.",
  },
  {
    id: "build",
    label: "Build / Scaffold",
    reads: "which golden-path template applies",
    writes: "artifacts linked to services",
    blurb: "Agents scaffold from the right template — CI/CD, observability, security wired in by default.",
  },
  {
    id: "verify",
    label: "Verify",
    reads: "DQ rules, SLAs, test baselines",
    writes: "quality signals",
    blurb: "Automated tests and data-quality checks before anything ships.",
  },
  {
    id: "gate",
    label: "Human Gate",
    reads: "blast radius, policy compliance, cost impact",
    writes: "approval edge (who / when / why)",
    blurb: "The point where a human approves with full context. Pandora leads here.",
    gate: true,
  },
  {
    id: "operate",
    label: "Deploy / Operate",
    reads: "topology, runbooks",
    writes: "deployment + telemetry events",
    blurb: "Ship and run. Hands off to the continuous operations loop.",
  },
  {
    id: "learn",
    label: "Learn",
    reads: "—",
    writes: "outcomes + new/updated templates",
    blurb: "Every run writes learnings back — the system compounds and gets more autonomous.",
  },
];

export interface Plane {
  id: string;
  name: string;
  role: string;
  detail: string;
  tools: string;
}

export const planes: Plane[] = [
  {
    id: "control",
    name: "Control plane",
    role: "Orchestration",
    detail:
      "A workflow engine that runs phases and enforces idempotency, retries, quality gates, blocker tracking and human-guidance injection. Already proven in the repo as nexus-workflow (INTAKE → … → CLOSE).",
    tools: "nexus-workflow · phase engine · gates",
  },
  {
    id: "knowledge",
    name: "Knowledge plane",
    role: "Living machine-readable memory",
    detail:
      "Runbooks, ADRs, schema registry, golden-path templates and accumulated learnings that agents read and write. Day one built from tools Pandora already owns. (The Enterprise Context Graph is its future evolution.)",
    tools: "Open Metadata · developer portal · schema registry",
  },
  {
    id: "guardrail",
    name: "Guardrail plane",
    role: "AI-governance & security",
    detail:
      "Policy-as-code, RBAC, cost controls, audit and approval gates — with the Kong AI Gateway as the control point for agent operations. Agents only act inside the guardrails.",
    tools: "Kong AI Gateway · policy-as-code · audit",
  },
];

// --- Operations: closed loop + autonomy ladder -------------------------------
export interface OpsStep {
  id: string;
  label: string;
  blurb: string;
}

export const opsLoop: OpsStep[] = [
  { id: "observe", label: "Observe", blurb: "Ingest metrics, logs, traces, events, SLO burn-rate, cost and anomalies — via observability wired in by default." },
  { id: "detect", label: "Detect", blurb: "Continuous anomaly and SLO burn-rate detection. Alerts are signals to act on, not pages for a human to chase." },
  { id: "prevent", label: "Predict / Prevent", blurb: "Forecast breaches, capacity exhaustion, cost spikes, cert expiry, version lag and schema drift — and act before customer impact." },
  { id: "diagnose", label: "Diagnose", blurb: "Correlate what changed, blast radius, dependencies, past incidents and the right runbook → hypothesis + evidence in seconds." },
  { id: "resolve", label: "Resolve", blurb: "Execute safe, known fixes as runbook-as-code; propose risky or novel ones to a human with full evidence." },
  { id: "verify", label: "Verify", blurb: "Confirm the SLO recovered. If not, escalate automatically." },
  { id: "learn", label: "Learn", blurb: "Write the resolution back as a new automated runbook — so next time it is prevented or auto-resolved." },
];

export interface AutonomyLevel {
  id: string;
  level: string;
  who: string;
  when: string;
  examples: string;
  tone: "auto" | "approve" | "human";
}

export const autonomyLevels: AutonomyLevel[] = [
  {
    id: "auto",
    level: "Auto-resolve",
    who: "Agent executes — no human",
    when: "High-confidence, low-blast-radius, reversible, known pattern",
    examples: "restart pod · scale out · roll back canary · clear DLQ · rotate cert",
    tone: "auto",
  },
  {
    id: "approve",
    level: "Propose & approve",
    who: "Agent recommends → human approves → agent executes",
    when: "Medium risk",
    examples: "config change · targeted failover · capacity change",
    tone: "approve",
  },
  {
    id: "human",
    level: "Human-led, agent-assisted",
    who: "Human drives; agent supplies context, evidence, runbook and does the toil",
    when: "Novel, ambiguous, or P1 core payment / order / customer flows",
    examples: "major incident · data-loss risk · unknown failure mode",
    tone: "human",
  },
];

// --- Commerce & Kong ---------------------------------------------------------
export interface CommerceDirection {
  id: string;
  title: string;
  flow: string;
  kongJob: string;
}

export const commerceDirections: CommerceDirection[] = [
  {
    id: "inbound",
    title: "Inbound — external agents → Pandora",
    flow: "Consumer & marketplace AI agents discover, compare and transact Pandora products",
    kongJob:
      "API Gateway + developer portal: expose agent-ready commerce APIs (catalog, availability, pricing, promotions, checkout/payment) — secured, identity-bound, rate-limited, observable.",
  },
  {
    id: "internal",
    title: "Internal — Pandora agents → services / LLMs",
    flow: "The fabric's agents plus commerce / merchandising agents consume services and models",
    kongJob:
      "AI Gateway: govern agent traffic — cost control, rate limiting, semantic routing/caching, PII guardrails, audit.",
  },
];

export interface KongRole {
  id: string;
  role: string;
  detail: string;
}

export const kongRoles: KongRole[] = [
  { id: "gw", role: "API Gateway", detail: "The agent-facing commerce front door." },
  { id: "portal", role: "Developer portal + standardization", detail: "Discoverability and consistency so agents — and the protocols they speak — can find and trust Pandora's capabilities." },
  { id: "ai", role: "AI Gateway", detail: "The governance/control point for all agent traffic. The guardrail plane — now with real money and customers behind it. This is how the AI Gateway's value is finally proven." },
];

// --- Context Graph maturity model --------------------------------------------
export interface MaturityLevel {
  id: string;
  name: string;
  inGraph: string;
  powers: string;
  future?: boolean;
}

export const maturityLevels: MaturityLevel[] = [
  { id: "L0", name: "Fragmented (today)", inGraph: "Context lives in silos; humans stitch it together", powers: "Manual, ticket-driven work" },
  { id: "L1", name: "Seeded", inGraph: "Service catalog + schema registry + ownership", powers: "Read-only context for one workflow (e.g. Nexus facade)", future: true },
  { id: "L2", name: "Connected", inGraph: "+ observability, incidents, cost, CI/CD, data lineage", powers: "Agents query across domains; richer triage & provisioning", future: true },
  { id: "L3", name: "Decisioning", inGraph: "+ policies, SLAs/SLOs, change history", powers: "Graph drives local agent decisions and gate logic", future: true },
  { id: "L4", name: "Predictive / closed-loop", inGraph: "+ derived signals, risk scores, embeddings", powers: "Agents predict and pre-empt; closed-loop remediation; self-improving", future: true },
];

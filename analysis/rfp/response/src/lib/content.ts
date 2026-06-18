import type { Group } from "./types";

// ---------------------------------------------------------------------------
// FULL RFP RESPONSE CONTENT
// Faithfully encodes RFP-RESPONSE-OUTLINE.md (Modules A–E + Process).
// "[Response block]" / focus-area / submission / SLA points are tagged.
// Solutioning content is represented as `placeholder` blocks to be authored.
// ---------------------------------------------------------------------------

export const groups: Group[] = [
  // =========================================================================
  // MODULE A — OVERALL PROPOSAL
  // =========================================================================
  {
    id: "module-a",
    letter: "A",
    label: "Overall Proposal",
    subtitle: "Scope & approach — submission component #1",
    sections: [
      // A.1 — built-out Executive Summary page (custom-rendered with the objective
      // collapsible at the top). See components/exec/ExecutiveSummary.tsx.
      { id: "a1", num: "A.1", title: "Executive Summary", blocks: [] },
      // A.2 & A.3 — built-out custom pages (objective collapsible on top).
      // See components/exec/Understanding.tsx and Alignment.tsx.
      { id: "a2", num: "A.2", title: "Understanding of Context & Pain Points", blocks: [] },
      { id: "a3", num: "A.3", title: "Strategic & Objective Alignment", tags: ["focus"], blocks: [] },
      // A.4 — the interactive Overall Solution Approach. Subsections mirror the A.4
      // objective exactly (A.4.1 architecture → A.4.5 operating model). Sections prefixed
      // "sol-" are rendered by SolutionSection (diagrams), with the A.4 objective shown as
      // a collapsible blob at the top.
      { id: "sol-overview", num: "A.4", title: "Overall Solution Architecture & Approach", tags: ["submission"], blocks: [] },
      { id: "sol-principles", num: "A.4.2", title: "Platform Principles", blocks: [] },
      { id: "sol-goldenpath", num: "A.4.3", title: "Golden-Path Operating Concept", tags: ["response"], blocks: [] },
      { id: "sol-interlock", num: "A.4.4", title: "How the Sub-domains Interlock", blocks: [] },
      { id: "sol-operating-model", num: "A.4.5", title: "AI-Native Operating Model", tags: ["response"], blocks: [] },
      // A.5 — built-out Operational Model page with the global delivery world map.
      // See components/exec/OperationalModel.tsx.
      { id: "a5", num: "A.5", title: "Operational Model (Overall)", tags: ["submission", "focus"], blocks: [] },
      {
        // A.6 – A.16: built-out, data-driven pages (GenericExecPage + src/lib/execPages.ts).
        // Objective blobs with carried "To author" notes live in execPages; blocks unused here.
        id: "a6", num: "A.6", title: "Governance & Relationship Management", tags: ["focus"], blocks: [],
      },
      { id: "a7", num: "A.7", title: "Evolution & Innovation Approach", tags: ["focus"], blocks: [] },
      { id: "a8", num: "A.8", title: "Implementation & Execution Model (Overall)", tags: ["submission"], blocks: [] },
      { id: "a9", num: "A.9", title: "Resource Pool & Talent Strategy (Overall)", tags: ["focus"], blocks: [] },
      { id: "a10", num: "A.10", title: "Transition & Knowledge Transfer Blueprint (Overall)", tags: ["focus"], blocks: [] },
      { id: "a11", num: "A.11", title: "Cyber Security, Compliance, and Risk", tags: ["focus"], blocks: [] },
      { id: "a12", num: "A.12", title: "Cultural Compatibility & Collaboration", tags: ["focus"], blocks: [] },
      { id: "a13", num: "A.13", title: "Sustainability", tags: ["focus"], blocks: [] },
      { id: "a14", num: "A.14", title: "Commercial Model (Overall)", tags: ["focus", "commercial"], blocks: [] },
      { id: "a15", num: "A.15", title: "Architectural & Technological Fit Summary", tags: ["focus"], blocks: [] },
      { id: "a16", num: "A.16", title: "Why This Submission Wins — vs the 11 Focus Areas", blocks: [] },
    ],
  },

  // =========================================================================
  // MODULE B — DATA & INTEGRATION PLATFORMS
  // =========================================================================
  {
    id: "module-b",
    letter: "B",
    label: "Data & Integration Platforms",
    subtitle: "Vertical module — submission component #2",
    sections: [
      {
        id: "b1",
        num: "B.1",
        title: "Introduction to Vertical Solution",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "lead",
            text: "Our thesis: a self-serve, event-driven, governed-by-default, observable and AI-ready backbone that makes enterprise data feel like one product.",
          },
          {
            type: "list",
            items: [
              "B.1.1 — Our understanding of the Data & Integration domain situation",
              "B.1.2 — Solution thesis: self-serve, event-driven, governed-by-default, observable, AI-ready backbone",
              "B.1.3 — The 'enterprise data as one product' vision — unified interaction, support model, interfaces",
            ],
          },
          {
            type: "subhead",
            text: "B.1.4 — Current-state assets we will operate, improve, and evolve",
          },
          {
            type: "cards",
            items: [
              {
                title: "Nexus",
                body: "Event-driven integration platform (Kafka by Confluent). In-house interfaces, deduplication, tokenization, AVRO schema registry, Java/.NET templates, Kubernetes-hosted user services; facade build-and-handback model.",
              },
              {
                title: "Pong (Pandora-Kong)",
                body: "Reusable Kong template. Address low adoption and e-commerce teams diverging from the central template.",
              },
              {
                title: "Kong AI Gateway",
                body: "Controlling/optimising AI-agent operations. Resolve centralized-federated setup issues; prove value beyond the test phase.",
              },
              {
                title: "Olympus",
                body: "Databricks setup with IaC templates. Improve observability, compute/storage split, lineage, cost, automated governance, data quality/ownership.",
              },
              {
                title: "Power BI",
                body: "Infra management, self-service namespaces, access automation & governance. Resolve the self-service support model & cost; evaluate Fabric.",
              },
              {
                title: "Open Metadata",
                body: "Surfacing data objects across Databricks, Kong, and Nexus to empower engineers.",
              },
            ],
          },
        ],
      },
      {
        id: "b2",
        num: "B.2",
        title: "Goals We Will Deliver Against",
        blocks: [
          {
            type: "subhead",
            text: "B.2.1 — Data Platform objectives (target: self-serve data-mesh, unified access/governance)",
          },
          {
            type: "list",
            variant: "check",
            items: [
              "Provision a new data-product workspace in under 30 minutes without platform-engineer involvement",
              "Near-real-time access to Nexus event data via Unity Catalog",
              "Discover / understand / trust data via a single governance layer",
              "Centralized data storage with an open data format",
              "Rapidly productionize dashboards / data pipelines and changes to them",
              "Observe health & metrics of deployed dashboards / pipelines; triage when issues arise",
              "Granular cost transparency + proactive cost-increase alarms",
              "Decommission legacy EDW and Azure Synapse; reduce data infra cost ~20%",
            ],
          },
          {
            type: "subhead",
            text: "B.2.2 — Integration Platform objectives (target: central single source of truth event system)",
          },
          {
            type: "list",
            variant: "check",
            items: [
              "Industry-leading engineering standards — end-to-end automation, self-service",
              "Reliable real-time, low-latency, and relaxed-latency data mart",
              "AI-ready infrastructure",
              "No data loss + transparency in end-to-end data lifecycle",
              "Data Quality enforcement on Kafka (completeness, accuracy, consistency, schema compliance before downstream consumption)",
              "Flexible Kafka ingestion (real-time streaming, batch micro-ingestion, event-driven triggers)",
              "Kong API developer portal + API standardization (consistent design, documentation, discoverability, governance)",
              "Decommission Microsoft BizTalk by next year — while retaining competency to operate it during migration",
            ],
          },
          {
            type: "subhead",
            text: "B.2.3 — Migration strategy: BizTalk 2020 / EDW / Synapse → event-driven modern platforms",
          },
          {
            type: "list",
            items: [
              "B.2.3.1 — Strangler-pattern migration approach; workload & user migration",
              "B.2.3.2 — Building an action plan & budget model where none exists today",
              "B.2.3.3 — New data production/ingestion patterns (Flink, events → Databricks tables, Kafka connectors)",
            ],
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Migration plan & wave model",
            text: "Inventory → categorise → wave-plan the >50% legacy workloads; define the budget model Pandora lacks today.",
          },
        ],
      },
      {
        id: "b3",
        num: "B.3",
        title: "Operational Model for Each Service Area",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "list",
            items: [
              "B.3.1 — Data platform service-area operating model",
              "B.3.2 — Integration platform service-area operating model",
              "B.3.3 — Operating Nexus (facade build-and-handback vs. managed-operation cases)",
              "B.3.4 — Reducing operational load via AI (automation, complexity/diversity reduction)",
              "B.3.5 — Increasing adoption through direct team engagement",
              "B.3.6 — 24/7 on-call support model for foundation platforms (incl. legacy BizTalk + central Kubernetes)",
              "B.3.7 — Incident management aligned to MTTA / MTTD / MTTR + customer satisfaction; 99.99% uptime target",
            ],
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Service-area operating model",
            text: "Per-area team shape, on-call rota, AI-assisted ops runbooks, and the adoption engagement motion.",
          },
        ],
      },
      {
        id: "b4",
        num: "B.4",
        title: "Roles & Responsibilities — RACI (per service area)",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "list",
            items: [
              "B.4.1 — RACI for Data platform service area (Pandora mgmt / team lead / member × Vendor mgmt / team lead / member)",
              "B.4.2 — RACI for Integration platform service area",
              "B.4.3 — Boundary definition: Pandora retains Lead & Senior Engineers, architecture, standards, roadmap; vendor runs day-to-day",
              "B.4.4 — Activities: resource scheduling, operations, monitoring, reporting, license management, +extensions (full table in Appendix E.2)",
            ],
          },
          {
            type: "placeholder",
            title: "Solution placeholder — RACI matrices",
            text: "Complete the R/A/C/I grid per service area, adapted and expanded from Pandora's template.",
          },
        ],
      },
      {
        id: "b5",
        num: "B.5",
        title: "Resource Pool Specification + Named Lead Profiles",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "list",
            items: [
              "B.5.1 — Resource pool & skills matrix (Kafka/Confluent, Databricks, Kong, Flink, Unity Catalog, Power BI/Fabric, AVRO/schema, Azure)",
              "B.5.2 — Named profiles for lead resources (CVs/credentials → Appendix E.3)",
              "B.5.3 — Enablement plan to close Pandora's Kubernetes/Kafka/DevOps fundamentals gap",
              "B.5.4 — Scaling and retention approach for this service area",
            ],
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Named lead profiles",
            text: "Insert named lead resources with role, location, certifications, and relevant experience.",
          },
        ],
      },
      {
        id: "b6",
        num: "B.6",
        title: "Approach to Continuous Improvement",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "list",
            items: [
              "B.6.1 — Continuous-improvement backlog and prioritisation",
              "B.6.2 — Cost-optimisation program (storage optimisation, software-component operation, ~20% infra reduction path)",
              "B.6.3 — Reliability & data-quality improvement loop",
              "B.6.4 — Adoption-growth program (Pong/Kong, Open Metadata, self-service)",
              "B.6.5 — Proactive risk/opportunity surfacing (without being asked)",
            ],
          },
        ],
      },
      {
        id: "b7",
        num: "B.7",
        title: "Timelines for the Transition Phase",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "para",
            text: "Aligned to the RFP's mandated Expected Transition Period.",
          },
          {
            type: "table",
            caption: "B.7 — Transition phases, durations and expectations",
            headers: ["Phase", "Duration", "Expectations"],
            rows: [
              [
                "Phase I — Support Team: Ramp & Transition-in",
                "0–60 days (from contract effective)",
                "Full support team hired in; on-parallel shadow; knowledge acquisition/tooling; handle P3–P5",
              ],
              [
                "Phase I — Support Team: Fully autonomous",
                "60 days beyond",
                "Full on-call rotation live; full ownership of support; handle P1/P2; monthly on-call quality evaluation vs SLA/SLO",
              ],
              [
                "Phase II — Dev Team: Ramp & Transition-in",
                "60–120 days",
                "Full dev teams hired in; on-parallel shadow; knowledge handover; feature development & operate systems",
              ],
              [
                "Phase II — Dev Team: Fully autonomous",
                "120 days beyond",
                "Proficient in all dev/ops tasks; proactively lifting quality bar & delivery efficiency; monthly performance review",
              ],
            ],
          },
          {
            type: "callout",
            variant: "warn",
            title: "Mandatory",
            text: "B.7.3 — Bi-weekly ramp-up plan and on-call readiness status assessment. B.7.4 — Milestones, success criteria, and dependencies for each phase.",
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Ramp-up & readiness plan",
            text: "Detail the hiring/onboarding plan and the bi-weekly readiness scorecard format.",
          },
        ],
      },
      {
        id: "b8",
        num: "B.8",
        title: "Evolutionary Plan (post-transition)",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "list",
            variant: "arrow",
            items: [
              "B.8.1 — Full decommission of EDW, Synapse, and BizTalk",
              "B.8.2 — Maturing the data-mesh & single governance layer",
              "B.8.3 — Extending AI/agentic and real-time AI use cases on the event backbone",
              "B.8.4 — Multi-year innovation roadmap & target metrics evolution",
            ],
          },
        ],
      },
      {
        id: "b9",
        num: "B.9",
        title: "SLA Commitments (Data & Integration)",
        tags: ["sla", "focus"],
        blocks: [
          {
            type: "list",
            items: [
              "B.9.1 — 'You build it, you run it' — developer on-call roster, 24/7 P1/P2 support",
              "B.9.2 — Incident SLAs: P1 15-min ack / 1.5H RTO; P2 2.5H RTO; P3 24H; P4 48H",
            ],
          },
          {
            type: "table",
            caption: "B.9.3 — SLO tiers & monthly error budgets",
            headers: ["Tier", "Scope", "SLO", "Error budget / month"],
            rows: [
              ["P1", "Mission critical (core payment, order, customer data flows)", "99.99%", "~4.3 min"],
              ["P2", "Business-critical integrations", "99.95%", "~21.9 min"],
              ["P3", "Non-critical batch jobs, internal tooling", "99.9%", "~43 min"],
              ["P4", "Dev/test pipelines, experimental integrations", "99.5%", "~3.6 hr"],
            ],
          },
          {
            type: "callout",
            variant: "info",
            title: "B.9.4 — Integration platform performance commitments",
            text: "Availability 99.99%; onboarding days → minutes; pipeline/dashboard setup days → <1 hour; error rate <0.1%.",
          },
        ],
      },
      {
        id: "b10",
        num: "B.10",
        title: "Performance Targets — As-Is → To-Be (Data platform)",
        tags: ["focus"],
        blocks: [
          {
            type: "table",
            caption: "B.10.1 — Commitment table",
            headers: ["Metric", "As-is", "To-be"],
            rows: [
              ["Data assets with metadata", "<10%", "100%"],
              ["Lead time to acquire an analytics workspace", "Days", "Minutes"],
              ["Developer & analyst satisfaction", "Not measured", "Monitored & improved"],
              ["Lead time to discover usable data", "Weeks", "Minutes"],
              ["Platform-user productivity (pipeline/dashboard to prod)", "Weeks", "<1 hour"],
            ],
          },
          {
            type: "para",
            text: "B.10.2 — Measurement & reporting method per metric.",
          },
        ],
      },
      {
        id: "b11",
        num: "B.11",
        title: "Qualitative Requirements Compliance",
        blocks: [
          {
            type: "list",
            variant: "check",
            items: [
              "B.11.1 — Code standards, engineering practices, continuous improvement, industry best practice",
              "B.11.2 — Everything-as-code / automation-by-default / eliminate manual process",
              "B.11.3 — Living documentation (runbooks, ADRs, knowledge wiki, architecture diagrams)",
              "B.11.4 — Knowledge sharing & transfer so Pandora staff can maintain/operate any vendor-delivered capability",
              "B.11.5 — Operate within Pandora's current tooling ecosystem → full mapping in Appendix E.1",
            ],
          },
        ],
      },
      {
        id: "b12",
        num: "B.12",
        title: "Commercial Model (Data & Integration)",
        tags: ["commercial"],
        blocks: [
          {
            type: "list",
            items: [
              "B.12.1 — Service-area commercial structure → quotation file (Module D)",
              "B.12.2 — Value-share / cost-down mechanics specific to this area",
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // MODULE C — DEVOPS PLATFORM
  // =========================================================================
  {
    id: "module-c",
    letter: "C",
    label: "DevOps Platform",
    subtitle: "Vertical module — submission component #2",
    sections: [
      {
        id: "c1",
        num: "C.1",
        title: "Introduction to Vertical Solution",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "lead",
            text: "A reliable, AI-native, self-service platform. Pandora retains direction, architecture, standards and AI-governance; the vendor operates and continuously improves it as one team.",
          },
          {
            type: "list",
            items: [
              "C.1.1 — Our understanding of the DevOps platform situation (federation, fundamentals gaps)",
              "C.1.2 — Solution thesis: reliable, AI-native, self-service; Pandora retains direction/architecture/standards/AI-governance; vendor operates & improves as one team",
              "C.1.3 — DevEx-first philosophy — minimal friction, low cognitive load, fast first productive contribution",
            ],
          },
          {
            type: "subhead",
            text: "C.1.4 — Current-state assets we will operate, improve, and evolve",
          },
          {
            type: "cards",
            items: [
              {
                title: "DevOps Tooling",
                body: "Toolchains across Pandora; access management + technical aspects of Jira, Confluence, Opsgenie, Miro, Azure DevOps, shared runners, New Relic, Claude, GitHub Copilot, GitHub.",
              },
              {
                title: "PAKS",
                body: "Pandora AKS infrastructure; namespace-as-a-service; adding 24/7 support; goal: provision infra in minutes, enable citizen coders, take over other Kubernetes setups.",
              },
              {
                title: "Helios Developer Portal",
                body: "Backstage-based IDP (joiner-mover-leaver, data/tool discoverability); open question on Backstage fit (moving to Port.io).",
              },
              {
                title: "DevEx Focus",
                body: "Defending developer interests while keeping tools scalable & secure at enterprise level.",
              },
            ],
          },
        ],
      },
      {
        id: "c2",
        num: "C.2",
        title: "Goals We Will Deliver Against",
        blocks: [
          {
            type: "subhead",
            text: "C.2.1 — Vision alignment",
          },
          {
            type: "para",
            text: "Reliable, AI-native, self-service platform; one-team operating model.",
          },
          {
            type: "subhead",
            text: "C.2.2 — Objectives",
          },
          {
            type: "list",
            variant: "check",
            items: [
              "Establish shared Kubernetes infrastructure (reduce duplication & operational overhead)",
              "Enable AI-assisted development tooling — incl. Azure DevOps → GitHub migration as a foundational step",
              "Build end-to-end observability flows for business observability at scale",
              "Special focus: developer experience & onboarding (golden paths, self-service environments, fast feedback loops, single IDP)",
            ],
          },
          {
            type: "subhead",
            text: "C.2.3 — In-flight migrations we will support",
          },
          {
            type: "list",
            variant: "arrow",
            items: [
              "Azure DevOps → GitHub",
              "OpsGenie → PagerDuty",
              "Backstage → Port.io",
            ],
          },
          {
            type: "subhead",
            text: "C.2.4 — Open decisions we will help resolve",
          },
          {
            type: "list",
            items: [
              "Code-quality scanning toolset (none approved yet)",
              "Security scanning tool selection (Snyk vs GitHub Advanced Security)",
              "AI tooling adoption — cost monitoring, shared skills, supporting agents + agentic-workflow framework",
            ],
          },
        ],
      },
      {
        id: "c3",
        num: "C.3",
        title: "Operational Model for Each Service Area",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "callout",
            variant: "note",
            text: "Vendor scope = the two service areas below. Pandora retains Lead/Senior Engineers, architecture, standards and roadmap.",
          },
          {
            type: "subhead",
            text: "C.3.1 — PAKS — AKS-based infrastructure platform (operations & support)",
          },
          {
            type: "list",
            items: [
              "Operate/monitor/maintain AKS clusters + platform components (ingress, networking, secrets, certificates, autoscaling)",
              "Patch/upgrade/lifecycle-manage Kubernetes versions, node pools, add-ons (minimal disruption)",
              "Namespace-as-a-service (onboarding, quotas, isolation, self-service provisioning)",
              "Capacity & cost management (right-sizing, autoscaling, consumption/spend reporting)",
              "24/7 operations, on-call, incident response (triage, mitigation, restoration, post-incident follow-up)",
              "Runbooks & standard operating procedures",
              "Security posture per Pandora standards (RBAC, network policy, image & supply-chain hygiene) with Security team",
              "Backup, restore, disaster recovery for platform-managed state",
            ],
          },
          {
            type: "subhead",
            text: "C.3.2 — Developer Portal & DevOps AI tooling (operations & support)",
          },
          {
            type: "list",
            items: [
              "Operate/support IDP (Backstage → Port.io): catalogue accuracy, scorecards, self-service actions, integrations",
              "Operate/support golden-path toolset: GitHub & GitHub Actions, Jira, Confluence, Terraform, New Relic, PagerDuty (incl. runners, shared pipeline templates, reusable workflows)",
              "Support in-flight migrations (ADO → GitHub, OpsGenie → PagerDuty)",
              "Administer approved AI dev tooling (Claude, GitHub Copilot, Open Code) + IDE/pipeline integrations",
              "Consolidate & support test tooling (close current test-tooling gaps)",
              "Maintain golden paths & software templates (CI/CD, observability, security wired in by default)",
              "L2/L3 support for portal & tooling (triage, resolution, escalation, root-cause follow-up)",
              "Drive adoption, enablement, education; track tooling health/adoption/DevEx",
            ],
          },
          {
            type: "list",
            variant: "arrow",
            items: [
              "C.3.3 — One-team embedding model with Pandora's platform-engineering teams",
              "C.3.4 — Shift-left model (self-service & golden paths over tickets)",
            ],
          },
        ],
      },
      {
        id: "c4",
        num: "C.4",
        title: "Roles & Responsibilities — RACI (per service area)",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "list",
            items: [
              "C.4.1 — RACI for PAKS service area",
              "C.4.2 — RACI for Developer Portal & DevOps AI tooling service area",
              "C.4.3 — Pandora-leads / vendor-executes boundary mapping",
              "C.4.4 — Joint incident & problem management; defined escalation paths",
              "C.4.5 — Full activity RACI (resource scheduling, operations, monitoring, reporting, license management, +extensions) → Appendix E.2",
            ],
          },
          {
            type: "placeholder",
            title: "Solution placeholder — RACI matrices",
            text: "Complete R/A/C/I grids for PAKS and Developer Portal & AI tooling service areas.",
          },
        ],
      },
      {
        id: "c5",
        num: "C.5",
        title: "Resource Pool Specification + Named Lead Profiles",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "list",
            items: [
              "C.5.1 — Resource pool & skills matrix — core tech: IaC, Kubernetes, Terraform, observability tooling, Azure, CI/CD",
              "C.5.2 — Profiles: DevOps engineers, JS engineers (agile experience mandatory)",
              "C.5.3 — Named lead-resource profiles → Appendix E.3",
              "C.5.4 — Right-sizing vs current team baseline (4 internal + 6 external engineers; supporting 600 engineers + ~1,500 non-engineers)",
              "C.5.5 — Enablement to address fundamentals gaps + retention strategy",
            ],
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Named lead profiles & sizing",
            text: "Insert named leads and the proposed team size vs the current 4+6 baseline.",
          },
        ],
      },
      {
        id: "c6",
        num: "C.6",
        title: "Approach to Continuous Improvement",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "list",
            items: [
              "C.6.1 — Maturity & efficiency uplift program for tooling usage",
              "C.6.2 — AI-tooling adoption roadmap (cost monitoring, shared skills, agent support, agentic-workflow framework)",
              "C.6.3 — Trusted-advisor model + prioritised continuous-improvement backlog",
              "C.6.4 — DevEx as a managed, measured outcome (reduce friction/cognitive load, improve feedback loops & flow)",
            ],
          },
        ],
      },
      {
        id: "c7",
        num: "C.7",
        title: "Timelines for the Transition Phase",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "list",
            items: [
              "C.7.1 — Phase I — Support Team Transition (0–60 days shadow/P3–P5; 60+ autonomous/P1–P2) — see B.7 model",
              "C.7.2 — Phase II — Dev Team Transition (60–120 days shadow; 120+ autonomous)",
              "C.7.3 — Bi-weekly ramp-up & on-call readiness assessment",
              "C.7.4 — Realistic, phased transition building on Pandora's current foundations without disrupting teams",
              "C.7.5 — Milestones, success criteria, dependencies",
            ],
          },
        ],
      },
      {
        id: "c8",
        num: "C.8",
        title: "Evolutionary Plan (post-transition)",
        tags: ["response", "submission"],
        blocks: [
          {
            type: "list",
            variant: "arrow",
            items: [
              "C.8.1 — Consolidating other Kubernetes setups onto PAKS (provision infra in minutes; citizen coders)",
              "C.8.2 — Completing migrations (GitHub, PagerDuty, Port.io) and maturing golden paths",
              "C.8.3 — Scaling AI-native development & agentic workflows under AI-governance",
              "C.8.4 — Continuous DORA & DevEx improvement; raising developer NPS beyond 16",
            ],
          },
        ],
      },
      {
        id: "c9",
        num: "C.9",
        title: "SLA Commitments (DevOps)",
        tags: ["sla", "focus"],
        blocks: [
          {
            type: "list",
            items: [
              "C.9.1 — 24/7 support & on-call for PAKS (production runtime); agreed coverage windows for portal & tooling",
              "C.9.2 — Platform availability targets (PAKS + developer portal/tooling)",
              "C.9.3 — Incident response & restoration times by priority",
              "C.9.4 — Patch/upgrade cadence + maximum version lag",
              "C.9.5 — Support response & resolution times for portal/tooling requests",
              "C.9.6 — Agreed change & maintenance windows",
            ],
          },
        ],
      },
      {
        id: "c10",
        num: "C.10",
        title: "Quantitative Requirements & Performance Targets",
        tags: ["focus"],
        blocks: [
          {
            type: "list",
            items: [
              "C.10.1 — DORA metrics (deployment frequency, lead time for changes, change-failure rate, time to restore service)",
              "C.10.2 — Developer experience & satisfaction — improve from current NPS 16",
              "C.10.3 — DevEx dimensions — feedback loops, cognitive load, flow",
              "C.10.4 — Developer onboarding time to first productive contribution",
              "C.10.5 — PAKS + developer-tooling availability/reliability",
              "C.10.6 — Patch & version currency",
              "C.10.7 — Adoption of developer portal + approved AI engineering tooling",
              "C.10.8 — Reduction in operational toil and platform run-cost",
            ],
          },
          {
            type: "stats",
            items: [
              { value: "16", label: "current developer NPS (baseline to beat)" },
              { value: "600", label: "engineers" },
              { value: "~1,500", label: "non-engineers with tooling" },
              { value: "4 + 6", label: "current internal + external team" },
            ],
          },
        ],
      },
      {
        id: "c11",
        num: "C.11",
        title: "Qualitative Requirements & General Expectations",
        blocks: [
          {
            type: "list",
            variant: "check",
            items: [
              "C.11.1 — Provide named, suitably skilled resources; operate as one team",
              "C.11.2 — Adopt & embrace Pandora's toolset (Azure/AKS, GitHub & Actions, Backstage→Port.io, Jira, Confluence, Terraform, New Relic, PagerDuty, Claude, GitHub Copilot) + future selections",
              "C.11.3 — Treat DevEx as a managed, measured outcome",
              "C.11.4 — Operate within AI-governance & security guardrails (with Security team)",
              "C.11.5 — Act as trusted advisor on platform, automation, AI tooling; maintain prioritised improvement backlog",
              "C.11.6 — Realistic, phased, non-disruptive transition",
            ],
          },
        ],
      },
      {
        id: "c12",
        num: "C.12",
        title: "Commercial Model (DevOps)",
        tags: ["commercial"],
        blocks: [
          {
            type: "list",
            items: [
              "C.12.1 — Service-area commercial structure → quotation file (Module D)",
              "C.12.2 — Cost-down / value-share mechanics (PAKS consolidation, toil reduction)",
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // MODULE D — QUOTATION / COMMERCIAL
  // =========================================================================
  {
    id: "module-d",
    letter: "D",
    label: "Quotation & Commercial",
    subtitle: "Completed quotation files — submission component #3",
    sections: [
      {
        id: "d1",
        num: "D",
        title: "Quotation Files (Commercial)",
        tags: ["commercial", "submission"],
        blocks: [
          {
            type: "callout",
            variant: "note",
            text: "Satisfies submission component #3: 'Completed quotation files for the vertical.' Delivered in Excel format.",
          },
          {
            type: "list",
            items: [
              "D.1 — Completed Pandora-provided quotation template(s) — per vertical/service area",
              "D.2 — Pricing model & rate cards (named profiles, blended rates, location-based)",
              "D.3 — Commercial mechanisms — year-on-year productivity cost-downs / value-share",
              "D.4 — Transition-phase vs steady-state cost breakdown (Phase I support, Phase II dev, run/operate)",
              "D.5 — Cost-reduction commitments mapped to savings (data infra ~20%, PAKS consolidation, toil reduction)",
              "D.6 — Assumptions, exclusions, and dependencies underpinning the quotation",
            ],
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Commercial model & quotation",
            text: "Build the pricing model, value-share/cost-down mechanics, and complete the Pandora Excel quotation template.",
          },
        ],
      },
    ],
  },

  // =========================================================================
  // MODULE E — APPENDICES
  // =========================================================================
  {
    id: "module-e",
    letter: "E",
    label: "Appendices",
    subtitle: "Supporting evidence & traceability",
    sections: [
      {
        id: "e1",
        num: "E.1",
        title: "Technology Ecosystem Compliance Matrix",
        blocks: [
          {
            type: "para",
            text: "Full mapping to Pandora's tooling ecosystem (migrations shown with →).",
          },
          {
            type: "table",
            headers: ["Function", "Tooling"],
            rows: [
              ["Source control", "Azure DevOps → GitHub"],
              ["Cloud", "Azure"],
              ["Observability", "New Relic"],
              ["Project management", "Jira"],
              ["Documentation", "Confluence / GitHub"],
              ["Ticketing", "ServiceNOW"],
              ["Incident management", "OpsGenie → PagerDuty"],
              ["IaC", "Terraform"],
              ["Backend languages", "Python, Bash, Java, .NET / C#"],
              ["Frontend languages", "React, TypeScript, Node.js"],
              ["Comms", "Microsoft Teams"],
              ["Internal developer portal", "Backstage → Port.io"],
              ["API / AI Gateway", "Kong"],
              ["Messaging", "Confluent Kafka"],
            ],
          },
        ],
      },
      {
        id: "e2",
        num: "E.2",
        title: "Full RACI Tables",
        blocks: [
          {
            type: "para",
            text: "Per service area, expanded from Pandora's template (R/A/C/I across Pandora & Vendor roles: management, team lead, team member).",
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Expanded RACI",
            text: "Insert complete RACI grids for all service areas.",
          },
        ],
      },
      {
        id: "e3",
        num: "E.3",
        title: "Named Lead-Resource Profiles",
        blocks: [
          {
            type: "para",
            text: "CVs, certifications, and relevant engagement evidence for lead resources.",
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Profiles",
            text: "Attach named lead-resource profiles for Data & Integration and DevOps service areas.",
          },
        ],
      },
      {
        id: "e4",
        num: "E.4",
        title: "Case Studies & References",
        blocks: [
          {
            type: "para",
            text: "Comparable transformations, including transparency on past failures / lessons learned.",
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Case studies",
            text: "Select 2–3 comparable references with measurable outcomes and one honest lessons-learned story.",
          },
        ],
      },
      {
        id: "e5",
        num: "E.5",
        title: "Evaluation Focus-Area Traceability Matrix",
        blocks: [
          {
            type: "para",
            text: "The 11 focus areas → response location(s).",
          },
          {
            type: "list",
            variant: "check",
            items: [
              "1. Strategic & Objective Alignment",
              "2. Continuous Improvement & Innovation",
              "3. Financial Alignment & Value-Share",
              "4. Resource Pool Viability & Talent Retention",
              "5. Governance & Relationship Management",
              "6. Operational Effectiveness (Scenario Competence)",
              "7. Transition & Knowledge Transfer",
              "8. Architectural & Technological Fit",
              "9. Cyber Security, Compliance, and Risk",
              "10. Cultural Compatibility & Collaboration",
              "11. Sustainability",
            ],
          },
        ],
      },
      {
        id: "e6",
        num: "E.6",
        title: "Requirements Traceability Matrix",
        blocks: [
          {
            type: "para",
            text: "Every Specification requirement → response location + compliance statement.",
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Requirements traceability",
            text: "Build the line-by-line requirement → response → compliance grid.",
          },
        ],
      },
      {
        id: "e7",
        num: "E.7",
        title: "Risk Register & Mitigation Plan",
        blocks: [
          {
            type: "para",
            text: "Transition and steady-state risks with owners, likelihood, impact, and mitigations.",
          },
          {
            type: "placeholder",
            title: "Solution placeholder — Risk register",
            text: "Populate the risk register covering transition and run-state risks.",
          },
        ],
      },
      {
        id: "e8",
        num: "E.8",
        title: "Security & Compliance Evidence",
        blocks: [
          {
            type: "para",
            text: "Certifications, SDLC, GDPR, BCP/DR documentation.",
          },
        ],
      },
      {
        id: "e9",
        num: "E.9",
        title: "Sustainability Evidence",
        blocks: [
          {
            type: "para",
            text: "Reporting framework, emissions / energy-efficiency commitments.",
          },
        ],
      },
      {
        id: "e10",
        num: "E.10",
        title: "Glossary",
        blocks: [
          {
            type: "para",
            text: "Nexus, Pong, Olympus, Helios, PAKS, Open Metadata, Kong AI Gateway, and related terms.",
          },
        ],
      },
      // Relocated from A.4 — strategic / future material, rendered with interactive diagrams.
      { id: "sol-commerce", num: "E.11", title: "Agentic Commerce & Kong", blocks: [] },
      { id: "sol-context-graph", num: "E.12", title: "Enterprise Context Graph", blocks: [] },
    ],
  },

  // =========================================================================
  // PROCESS & SUBMISSION COMPLIANCE
  // =========================================================================
  {
    id: "process",
    letter: "✓",
    label: "Process & Compliance",
    subtitle: "Timeline, submission rules & checklists",
    sections: [
      {
        id: "p-timeline",
        num: "P.1",
        title: "Timeline (non-negotiable — no individual extensions)",
        blocks: [
          {
            type: "table",
            headers: ["Date", "Event", "Our action"],
            rows: [
              ["June 18", "Issue of RFP", "Received; kickoff internal bid team"],
              ["June 25, 14:00", "Q&A round 1 (questions to Pandora)", "Submit clarifying questions via Scan Market"],
              ["July 3, 14:00", "Q&A round 2 (questions to Pandora)", "Submit follow-up questions via Scan Market"],
              ["July 12", "RFP submission deadline", "Submit full modular package"],
              ["Aug 17 – Sep 9", "Vendor workshops, deep-dives, site visits", "Prepare deep-dive decks + host site visit"],
              ["October 30", "Contract award", "—"],
            ],
          },
        ],
      },
      {
        id: "p-rules",
        num: "P.2",
        title: "Submission rules",
        blocks: [
          {
            type: "list",
            variant: "check",
            items: [
              "All communication via Scan Market only (primary Pandora contact only for access issues)",
              "Documents in PDF; quotation files in Excel",
              "Delivered as modules — one per vertical/area + one overall package",
              "Conforms exactly to the required format/structure (non-conforming = disregarded)",
              "'What-level' operational specifics in every response block (no generic marketing)",
              "NDA / Commercial-in-Confidence handling — no third-party sharing without written consent",
            ],
          },
        ],
      },
      {
        id: "p-deepdive",
        num: "P.3",
        title: "Deep-dive / workshop readiness",
        blocks: [
          {
            type: "para",
            text: "Aug–Sep, Copenhagen, mixed online + in-person.",
          },
          {
            type: "list",
            variant: "check",
            items: [
              "Transition approach",
              "Organisation, resource pools, and knowledge transfer",
              "Automation and tooling",
              "Service operation and SRE",
              "Commercials",
              "Site-visit pack for proposed delivery location(s)",
            ],
          },
        ],
      },
      {
        id: "p-module-structure",
        num: "P.4",
        title: "Mandatory vertical-module structure (Modules B & C)",
        blocks: [
          {
            type: "list",
            variant: "check",
            items: [
              "1. Introduction to vertical solution (understanding & approach)",
              "2. Operational model for each service area",
              "3. Roles & responsibilities (RACI per service area)",
              "4. Resource pool specification + named lead profiles",
              "5. Approach to continuous improvement",
              "6. Timelines for transition phase",
              "7. Evolutionary plan for time after transition",
            ],
          },
        ],
      },
      {
        id: "p-execplan",
        num: "P.5",
        title: "Implementation & execution plan must contain",
        blocks: [
          {
            type: "list",
            variant: "check",
            items: [
              "Preparation, upskilling, platform spin-up",
              "Transition & consolidation period",
              "Transformation cycles (months/years ahead)",
              "Major milestones with success criteria",
              "Dependencies on prior activities + external factors",
              "Both overall-level and per-vertical detail",
              "Agility built into transformation-cycle planning/execution",
            ],
          },
        ],
      },
    ],
  },
];

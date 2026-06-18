// Data-driven pages for A.6 – A.16, rendered by GenericExecPage.
// Each page mirrors its A.x objective; original "To author" placeholders are carried
// into the objective as `detail` notes (per the project rule).

export interface Hero {
  code: string;
  title: string;
  tagline: string;
  posture: string;
  accent: string;
  accent2: string;
  intro: string;
}

export type Panel =
  | { kind: "lead"; text: string }
  | { kind: "steps"; eyebrow?: string; title?: string; loop?: boolean; items: { label: string; body: string }[] }
  | { kind: "timeline"; eyebrow?: string; title?: string; items: { phase: string; duration: string; detail: string }[] }
  | { kind: "cadence"; eyebrow?: string; title?: string; items: { tier: string; when: string; points: string[] }[] }
  | { kind: "cards"; eyebrow?: string; title?: string; items: { title: string; body: string }[] }
  | { kind: "pillars"; eyebrow?: string; title?: string; items: { name: string; detail: string }[] }
  | { kind: "table"; eyebrow?: string; title?: string; headers: string[]; rows: string[][] }
  | { kind: "stats"; eyebrow?: string; title?: string; items: { value: string; label: string }[] }
  | { kind: "twocol"; eyebrow?: string; title?: string; leftTitle: string; left: string[]; rightTitle: string; right: string[] }
  | { kind: "callout"; tone: "note" | "info" | "ok" | "warn"; title?: string; text: string };

export interface ExecPage {
  code: string;
  hero: Hero;
  objective: { id: string; text: string; detail?: string }[];
  panels: Panel[];
  next?: { id: string; label: string; cta: string };
}

export const execPages: Record<string, ExecPage> = {
  // ============================ A.6 ============================
  a6: {
    code: "A.6",
    hero: {
      code: "A.6", title: "Governance & Relationship Management", tagline: "Transparent governance across practical and executive levels", posture: "Evaluation focus area", accent: "#e0218a", accent2: "#e2231a",
      intro: "Governance that is light to run but never opaque: clear cadences from the daily stand-up to the executive review, defined escalation paths, joint incident and problem management, and a transparent reporting framework.",
    },
    objective: [
      { id: "A.6.1", text: "Governance model across practical and executive levels" },
      { id: "A.6.2", text: "Operational cadences (team/domain-level + monthly performance feedback Eng Manager → vendor manager)", detail: "Governance cadence calendar to author: daily / weekly / monthly / quarterly cadence map with attendees, inputs and decisions at each tier." },
      { id: "A.6.3", text: "Escalation paths and joint incident/problem management" },
      { id: "A.6.4", text: "Transparent relationship management & reporting framework" },
      { id: "A.6.5", text: "Service-review cadence (reliability, adoption, DevEx, cost, continuous-improvement backlog)" },
    ],
    panels: [
      { kind: "cadence", eyebrow: "A.6.2 & A.6.5 · cadences", title: "Governance cadence — daily to executive", items: [
        { tier: "Daily", when: "domain pods", points: ["Stand-up", "On-call handover", "Incident watch"] },
        { tier: "Weekly", when: "team / domain", points: ["Delivery review", "Backlog grooming", "Reliability & adoption"] },
        { tier: "Monthly", when: "Eng Manager → vendor manager", points: ["Performance feedback", "SLA/SLO review", "Cost", "Continuous-improvement backlog"] },
        { tier: "Quarterly", when: "executive", points: ["Strategic review", "Roadmap & value-share", "Risk & relationship health"] },
      ] },
      { kind: "steps", eyebrow: "A.6.3 · escalation", title: "Escalation & joint incident/problem management", items: [
        { label: "Pod / on-call", body: "First response within SLA; triage and mitigate using runbooks." },
        { label: "Domain lead", body: "Cross-team coordination; engage Pandora lead for P1/P2." },
        { label: "Joint war-room", body: "Pandora + vendor incident management; shared comms and timeline." },
        { label: "Executive", body: "Major-incident review, problem management and prevention follow-up." },
      ] },
      { kind: "cards", eyebrow: "A.6.1 & A.6.4 · model", title: "Two-level model, one transparent view", items: [
        { title: "Practical level", body: "Domain pods + Pandora engineers run the day-to-day to shared ways of working." },
        { title: "Executive level", body: "Strategic alignment, value-share and relationship health reviewed quarterly." },
        { title: "Transparent reporting", body: "Shared dashboards for reliability, adoption, DevEx and cost — no surprises, proactive flags." },
      ] },
    ],
    next: { id: "a7", label: "How we keep improving and innovating", cta: "Open A.7" },
  },

  // ============================ A.7 ============================
  a7: {
    code: "A.7",
    hero: {
      code: "A.7", title: "Evolution & Innovation Approach", tagline: "A formalised engine for continuous improvement and reusable innovation", posture: "Evaluation focus area", accent: "#e2231a", accent2: "#ad1568",
      intro: "Improvement is not ad-hoc: a formal intake-to-adopt loop reduces technical debt and introduces automation proactively over the contract life, and the mechanisms are designed to be reused across the other TS&F verticals.",
    },
    objective: [
      { id: "A.7.1", text: "Formalized continuous-improvement framework (technical-debt reduction, workflow optimisation)", detail: "Innovation engine to author: intake → backlog → experiment → adopt loop, plus the cross-vertical reuse model." },
      { id: "A.7.2", text: "Proactive automation introduction over the contract lifecycle" },
      { id: "A.7.3", text: "Cross-vertical mechanisms & methodologies reusable across TS&F" },
      { id: "A.7.4", text: "Documented current competencies + near-future transformation path" },
      { id: "A.7.5", text: "Agility model — adapting transformation cycles to unprecedented technology pace" },
    ],
    panels: [
      { kind: "steps", eyebrow: "A.7.1 & A.7.2 · the engine", title: "The innovation engine", loop: true, items: [
        { label: "Intake", body: "Ideas, friction points and tech-debt surfaced by pods, agents and the knowledge base." },
        { label: "Backlog", body: "A prioritised continuous-improvement backlog, scored by value and effort." },
        { label: "Experiment", body: "Safe, time-boxed trials behind guardrails — measured against clear criteria." },
        { label: "Adopt", body: "Winners become golden-path templates; learnings written back for reuse." },
      ] },
      { kind: "cards", eyebrow: "A.7.3 · reuse", title: "Reusable across TS&F", items: [
        { title: "Golden-path templates", body: "Patterns proven here are packaged for other verticals to adopt." },
        { title: "Shared methodologies", body: "The agentic operating model and workflows port across domains." },
        { title: "Knowledge compounding", body: "Every run enriches a shared knowledge base the whole org benefits from." },
      ] },
      { kind: "callout", tone: "info", title: "A.7.4 & A.7.5 · competency + agility", text: "We document current competencies and a near-future transformation path, and run transformation in agile cycles so plans adapt to an unprecedented technology pace rather than locking in a multi-year fixed plan." },
    ],
    next: { id: "a8", label: "How we implement and execute", cta: "Open A.8" },
  },

  // ============================ A.8 ============================
  a8: {
    code: "A.8",
    hero: {
      code: "A.8", title: "Implementation & Execution Model", tagline: "Prepare → transition → transform, with milestones and built-in agility", posture: "Submission requirement", accent: "#ad1568", accent2: "#e0218a",
      intro: "A clear, phased execution model: prepare and spin up, transition and consolidate, then run transformation cycles — each phase with milestones, success criteria and dependencies, and agility built in.",
    },
    objective: [
      { id: "A.8.1", text: "Phase 1: Preparation, upskilling, and platform spin-up" },
      { id: "A.8.2", text: "Phase 2: Transition and consolidation period" },
      { id: "A.8.3", text: "Phase 3: Transformation cycles (months/years to follow)" },
      { id: "A.8.4", text: "Major milestones with success criteria and dependencies (prior activities + external factors)", detail: "Master roadmap (Gantt) to author: overall timeline with milestones, success criteria and dependency markers; agility built in." },
      { id: "A.8.5", text: "Agile planning model for transformation cycles" },
      { id: "A.8.6", text: "Master roadmap (overall) — per-vertical detail in Modules B & C" },
    ],
    panels: [
      { kind: "timeline", eyebrow: "A.8.1 – A.8.3 · phases", title: "Three phases", items: [
        { phase: "Prepare & spin-up", duration: "Phase 1", detail: "Hire and onboard the team, upskill, stand up tooling and access, begin platform spin-up." },
        { phase: "Transition & consolidate", duration: "Phase 2", detail: "Shadow → reverse-shadow → autonomy; consolidate operations and reach full ownership." },
        { phase: "Transformation cycles", duration: "Phase 3 — months/years", detail: "Continuous, agile transformation cycles — migrations, automation and innovation." },
      ] },
      { kind: "cards", eyebrow: "A.8.4 · milestones", title: "Milestones, criteria & dependencies", items: [
        { title: "Success criteria", body: "Each milestone has explicit, measurable exit criteria — not just a date." },
        { title: "Dependencies", body: "Tracked against prior activities and external factors so risk is visible early." },
        { title: "Per-vertical detail", body: "Overall roadmap here; detailed Data/Integration and DevOps plans in Modules B & C." },
      ] },
      { kind: "callout", tone: "note", title: "A.8.5 · agile by design", text: "Because technology moves fast, transformation cycles are planned and executed agilely — re-prioritised each cycle against value, rather than fixed years in advance." },
    ],
    next: { id: "a9", label: "Who delivers it — talent & retention", cta: "Open A.9" },
  },

  // ============================ A.9 ============================
  a9: {
    code: "A.9",
    hero: {
      code: "A.9", title: "Resource Pool & Talent Strategy", tagline: "A stable, growing, retained team — with named leads", posture: "Evaluation focus area", accent: "#e0218a", accent2: "#e2231a",
      intro: "Stability and continuity are first-order: a real talent pipeline, a training infrastructure that keeps skills current, the ability to scale, and concrete retention guarantees for key personnel on the account.",
    },
    objective: [
      { id: "A.9.1", text: "Talent pipeline and sourcing model", detail: "Talent & retention model to author: pipeline funnel, academy/upskilling tracks, attrition targets and continuity guarantees for key roles." },
      { id: "A.9.2", text: "Training infrastructure & continuous upskilling commitment" },
      { id: "A.9.3", text: "Team scaling capability" },
      { id: "A.9.4", text: "Key-personnel retention & continuity strategy" },
      { id: "A.9.5", text: "Named lead profiles summary (full profiles in Modules B/C and Appendix E.3)" },
    ],
    panels: [
      { kind: "steps", eyebrow: "A.9.1 & A.9.2 · pipeline", title: "From sourcing to retained capability", items: [
        { label: "Source", body: "A pipeline tuned to Pandora's stack (Kafka, Databricks, Kong, AKS, GitHub)." },
        { label: "Vet & onboard", body: "Skills-matched, security-cleared, onboarded to shared ways of working." },
        { label: "Academy", body: "Continuous upskilling — fundamentals (K8s, Kafka) and AI-assisted engineering." },
        { label: "Retain", body: "Engagement, growth paths and continuity guarantees for key roles." },
      ] },
      { kind: "cards", eyebrow: "A.9.3 – A.9.5 · scale, retain, lead", title: "Scaling, retention & named leads", items: [
        { title: "Scaling capability", body: "Flex the resource pool up or down by domain without losing continuity." },
        { title: "Retention & continuity", body: "Named key personnel with continuity commitments and overlap on rotation." },
        { title: "Named lead profiles", body: "Lead resources named here in summary; full profiles in Modules B/C and Appendix E.3." },
      ] },
    ],
    next: { id: "a10", label: "How we transition with zero disruption", cta: "Open A.10" },
  },

  // ============================ A.10 ============================
  a10: {
    code: "A.10",
    hero: {
      code: "A.10", title: "Transition & Knowledge Transfer Blueprint", tagline: "Zero business disruption — discovery to autonomy", posture: "Evaluation focus area", accent: "#e2231a", accent2: "#ad1568",
      intro: "A transition designed around one principle — zero business disruption. Structured discovery, on-parallel shadowing, reverse-shadowing and a gated path to autonomy, with risk mitigation and bi-weekly readiness checks throughout.",
    },
    objective: [
      { id: "A.10.1", text: "Transition blueprint and operating principle: zero business disruption", detail: "Transition blueprint to author: discovery → shadow → reverse-shadow → autonomy model with gates, RACI shifts and rollback safety." },
      { id: "A.10.2", text: "Risk-mitigation strategies" },
      { id: "A.10.3", text: "Shadowing processes (on-parallel shadow of current teams)" },
      { id: "A.10.4", text: "System discovery methodologies" },
      { id: "A.10.5", text: "Bi-weekly readiness / on-call assessment mechanism" },
    ],
    panels: [
      { kind: "steps", eyebrow: "A.10.1 & A.10.3 · the blueprint", title: "Discovery → shadow → reverse-shadow → autonomy", items: [
        { label: "Discovery", body: "Map systems, runbooks, dependencies and tribal knowledge methodically." },
        { label: "Shadow", body: "On-parallel shadow of current teams; learn by doing alongside." },
        { label: "Reverse-shadow", body: "We lead, incumbents observe and validate — confidence before handover." },
        { label: "Autonomy", body: "Gated handover with rollback safety; full ownership against SLA/SLO." },
      ] },
      { kind: "cards", eyebrow: "A.10.2 & A.10.4 · safety", title: "Risk mitigation & system discovery", items: [
        { title: "Risk mitigation", body: "Each gate has rollback safety and clear RACI shifts; no big-bang cutovers." },
        { title: "System discovery", body: "Repeatable methodology to surface undocumented behaviour before we own it." },
        { title: "Zero disruption", body: "Phased, parallel-run transition that builds on current foundations." },
      ] },
      { kind: "callout", tone: "warn", title: "A.10.5 · readiness checks", text: "On-call readiness is assessed bi-weekly against defined criteria, so autonomy is granted only when the team is demonstrably ready — mirroring Pandora's own transition expectations." },
    ],
    next: { id: "a11", label: "How we keep it secure & compliant", cta: "Open A.11" },
  },

  // ============================ A.11 ============================
  a11: {
    code: "A.11",
    hero: {
      code: "A.11", title: "Cyber Security, Compliance & Risk", tagline: "Secure posture, secure lifecycle, GDPR, BCP/DR — within Pandora's guardrails", posture: "Evaluation focus area", accent: "#5b2a4e", accent2: "#e0218a",
      intro: "Security is built in: a strong internal posture, a secure development lifecycle, GDPR-grade data privacy, business continuity and disaster recovery — all operated within Pandora's AI-governance and security guardrails, in coordination with the dedicated Security team.",
    },
    objective: [
      { id: "A.11.1", text: "Internal security posture", detail: "Security & compliance dossier to author: certifications, SDLC controls, GDPR posture, BCP/DR runbooks and AI-governance guardrails. Evidence in Appendix E.8." },
      { id: "A.11.2", text: "Secure development lifecycle (SDLC)" },
      { id: "A.11.3", text: "Data privacy & GDPR adherence" },
      { id: "A.11.4", text: "Business continuity / disaster recovery protocols" },
      { id: "A.11.5", text: "Operating within Pandora's AI-governance and security guardrails (with the dedicated Security team)" },
      { id: "A.11.6", text: "Supply-chain hygiene, RBAC, network policy, image hygiene" },
    ],
    panels: [
      { kind: "cards", eyebrow: "A.11.1 – A.11.6 · controls", title: "The control set", items: [
        { title: "Security posture", body: "Certified internal posture; least-privilege access and continuous monitoring." },
        { title: "Secure SDLC", body: "Security wired into the pipeline — code scanning, secrets, reviews by default." },
        { title: "Data privacy & GDPR", body: "Privacy-by-design and GDPR adherence across data handling." },
        { title: "BCP / DR", body: "Backup, restore and disaster-recovery protocols for platform-managed state." },
        { title: "AI-governance guardrails", body: "Agents act only within policy; Kong AI Gateway governs and audits agent traffic." },
        { title: "Supply-chain & cluster hygiene", body: "RBAC, network policy, image and supply-chain hygiene to Pandora standards." },
      ] },
      { kind: "callout", tone: "info", title: "With the Security team", text: "All of the above is operated in coordination with Pandora's dedicated Security team, within their AI-governance and security guardrails. Certifications and evidence are in Appendix E.8." },
    ],
    next: { id: "a12", label: "How we collaborate — culture & fit", cta: "Open A.12" },
  },

  // ============================ A.12 ============================
  a12: {
    code: "A.12",
    hero: {
      code: "A.12", title: "Cultural Compatibility & Collaboration", tagline: "Transparent, agile, collaborative — and honest about failure", posture: "Evaluation focus area", accent: "#e0218a", accent2: "#5b2a4e",
      intro: "Beyond capability, this tender weighs how we work: a transparent, proactive communication style, organisational agility, genuine alignment with Pandora's collaborative culture, and on-site synergy when it matters.",
    },
    objective: [
      { id: "A.12.1", text: "Communication style and organisational agility" },
      { id: "A.12.2", text: "Transparency regarding past failures (lessons-learned evidence)", detail: "Culture & ways of working to author: demonstrate transparency with a real lessons-learned story and the collaboration rituals we bring." },
      { id: "A.12.3", text: "Alignment with Pandora's corporate culture and collaborative mindset" },
      { id: "A.12.4", text: "Onsite synergy model (expected onsite 1–2 times/year; Copenhagen)" },
    ],
    panels: [
      { kind: "cards", eyebrow: "A.12.1 – A.12.4 · how we work", title: "Ways of working", items: [
        { title: "Transparent communication", body: "Proactive, no-surprises communication; issues and risks surfaced early." },
        { title: "Organisational agility", body: "Small empowered pods that adapt quickly to changing priorities." },
        { title: "Cultural alignment", body: "One-team mindset matching Pandora's collaborative, engineering-led culture." },
        { title: "On-site synergy", body: "On-site presence 1–2× a year (Copenhagen) for workshops and relationship-building." },
      ] },
      { kind: "callout", tone: "note", title: "A.12.2 · transparency about failure", text: "We will bring a real, named lessons-learned story — what went wrong, what we changed, and the result — rather than a polished myth. Transparency about past failure is itself the evidence." },
    ],
    next: { id: "a13", label: "How we support sustainability", cta: "Open A.13" },
  },

  // ============================ A.13 ============================
  a13: {
    code: "A.13",
    hero: {
      code: "A.13", title: "Sustainability", tagline: "Efficient operations that cut emissions and report transparently", posture: "Evaluation focus area", accent: "#1f9d6b", accent2: "#e0218a",
      intro: "Sustainability is a built-in outcome of how we operate: responsible sourcing, energy-efficient and right-sized cloud operations that reduce emissions, transparent environmental reporting, and responsible lifecycle management of technology assets.",
    },
    objective: [
      { id: "A.13.1", text: "Support for Pandora's sustainability objectives" },
      { id: "A.13.2", text: "Responsible sourcing" },
      { id: "A.13.3", text: "Energy-efficient operations & emissions reduction (incl. cloud/compute optimisation)", detail: "Sustainability commitments to author: tie cloud/compute right-sizing to emissions reduction; define reporting cadence and metrics. Evidence in Appendix E.9." },
      { id: "A.13.4", text: "Transparent environmental reporting" },
      { id: "A.13.5", text: "Responsible lifecycle management of technology assets" },
    ],
    panels: [
      { kind: "cards", eyebrow: "A.13.1 – A.13.5 · commitments", title: "Sustainability commitments", items: [
        { title: "Right-sized compute", body: "Cost and capacity optimisation (PAKS, Databricks) directly cuts energy use and emissions." },
        { title: "Responsible sourcing", body: "Sourcing aligned to Pandora's responsible-sourcing standards." },
        { title: "Transparent reporting", body: "A defined reporting cadence and metrics for environmental impact." },
        { title: "Lifecycle management", body: "Responsible lifecycle management of technology assets." },
      ] },
      { kind: "callout", tone: "ok", title: "Efficiency = sustainability", text: "The same automation and consolidation that reduce run-cost also reduce compute and emissions — sustainability is a by-product of operating well, not a separate workstream. Evidence in Appendix E.9." },
    ],
    next: { id: "a14", label: "The commercial model", cta: "Open A.14" },
  },

  // ============================ A.14 ============================
  a14: {
    code: "A.14",
    hero: {
      code: "A.14", title: "Commercial Model", tagline: "Value-share and year-on-year cost-downs that return savings to Pandora", posture: "Focus area · commercial", accent: "#e2231a", accent2: "#e0218a",
      intro: "A commercial model built around shared value: concrete mechanisms — including year-on-year productivity cost-downs — ensure operational savings and efficiency gains flow back to Pandora over the life of the contract.",
    },
    objective: [
      { id: "A.14.1", text: "Commercial model overview for the vertical" },
      { id: "A.14.2", text: "Concrete value-share mechanisms (e.g., year-on-year productivity cost-downs)" },
      { id: "A.14.3", text: "How operational savings & efficiency gains return to Pandora" },
      { id: "A.14.4", text: "Pointer to completed quotation files (Module D)" },
    ],
    panels: [
      { kind: "steps", eyebrow: "A.14.2 · value-share", title: "Year-on-year productivity cost-downs", items: [
        { label: "Year 1", body: "Baseline established; transition and stabilisation." },
        { label: "Year 2", body: "Automation and agentic operations reduce toil — first cost-downs." },
        { label: "Year 3+", body: "Compounding efficiency returns committed back to Pandora as cost-downs." },
      ] },
      { kind: "cards", eyebrow: "A.14.1 & A.14.3 · model", title: "How savings return", items: [
        { title: "Commercial model", body: "Transparent, outcome-aligned commercial structure for the vertical." },
        { title: "Savings return", body: "Efficiency gains from automation are shared back, not retained by the vendor." },
        { title: "Aligned incentives", body: "We are rewarded for taking cost and toil out — the same goal as Pandora." },
      ] },
      { kind: "callout", tone: "info", title: "A.14.4 · cross-reference", text: "Detailed pricing and the completed quotation template live in Module D (Excel)." },
    ],
    next: { id: "a15", label: "Our fit with Pandora's stack", cta: "Open A.15" },
  },

  // ============================ A.15 ============================
  a15: {
    code: "A.15",
    hero: {
      code: "A.15", title: "Architectural & Technological Fit", tagline: "Certified depth in Pandora's exact stack", posture: "Evaluation focus area", accent: "#e0218a", accent2: "#e2231a",
      intro: "We bring deep, certified expertise across Pandora's core technology stack and the ability to design future-state solutions within Pandora's standards and risk appetite — not generalist resources learning on the job.",
    },
    objective: [
      { id: "A.15.1", text: "Certified expertise across Pandora's core stack (Azure, AKS, Kafka/Confluent, Databricks, Kong, GitHub, Terraform, New Relic, Power BI)" },
      { id: "A.15.2", text: "Ability to design future-state solutions within Pandora's standards and risk appetite" },
      { id: "A.15.3", text: "Detailed technology mapping → Appendix E.1" },
    ],
    panels: [
      { kind: "cards", eyebrow: "A.15.1 · the stack", title: "Certified across the core stack", items: [
        { title: "Cloud & runtime", body: "Azure, AKS (PAKS), Terraform — secure, self-serve infrastructure." },
        { title: "Data & integration", body: "Kafka / Confluent, Databricks, Unity Catalog, Kong, Power BI." },
        { title: "DevOps & observability", body: "GitHub & Actions, New Relic, PagerDuty, the developer portal." },
      ] },
      { kind: "callout", tone: "ok", title: "A.15.2 · future-state design", text: "Beyond running today's stack, we design future-state solutions that stay within Pandora's standards and risk appetite. The full technology compliance matrix is in Appendix E.1." },
    ],
    next: { id: "a16", label: "Why this submission wins", cta: "Open A.16" },
  },

  // ============================ A.16 ============================
  a16: {
    code: "A.16",
    hero: {
      code: "A.16", title: "Why This Submission Wins", tagline: "Every one of the 11 evaluation focus areas has a dedicated home", posture: "Synthesis", accent: "#e0218a", accent2: "#e2231a",
      intro: "We map each of Pandora's eleven evaluation focus areas to where it is addressed in this response — with what-level operational specifics, not generic marketing (the explicit scoring guidance on RFP p.9).",
    },
    objective: [
      { id: "A.16.1", text: "Traceability summary table (focus area → where addressed) → Appendix E.5" },
    ],
    panels: [
      { kind: "table", eyebrow: "A.16.1 · traceability", title: "11 focus areas → where addressed", headers: ["Evaluation focus area", "Where addressed"], rows: [
        ["Strategic & objective alignment", "A.3, A.1"],
        ["Continuous improvement & innovation", "A.7"],
        ["Financial alignment & value-share", "A.14, Module D"],
        ["Resource pool viability & retention", "A.9, E.3"],
        ["Governance & relationship mgmt", "A.6"],
        ["Operational effectiveness", "A.4.5, Modules B & C (SLAs)"],
        ["Transition & knowledge transfer", "A.10"],
        ["Architectural & technological fit", "A.15, E.1"],
        ["Cyber security, compliance & risk", "A.11, E.8"],
        ["Cultural compatibility & collaboration", "A.12"],
        ["Sustainability", "A.13, E.9"],
      ] },
      { kind: "callout", tone: "ok", title: "Scoring guidance honoured", text: "Every focus area has a dedicated home with what-level operational specifics rather than generic marketing (RFP p.9). Full traceability is in Appendix E.5." },
    ],
    next: { id: "sol-overview", label: "Revisit the solution approach", cta: "Open A.4" },
  },
};

// Content for the A.1 Executive Summary page.

export const a1Objective: { id: string; text: string; detail?: string }[] = [
  {
    id: "A.1.1",
    text: "Our understanding of Pandora's transformation goal (reactive/manual → proactive/AI-enabled)",
    detail:
      "Executive narrative to carry: signature headline statistic + single-sentence value proposition; 3–5 headline commitments tied to evaluation focus areas; a target-state-at-a-glance visual across Data, Integration and DevOps.",
  },
  { id: "A.1.2", text: "The single value proposition: enterprise data & platforms 'as one product', days → minutes" },
  { id: "A.1.3", text: "Why we are the right Strategic Partner (not a traditional provider) — execute and elevate" },
  { id: "A.1.4", text: "Headline commitments (efficiency, value-share, talent retention, zero-disruption transition)" },
  { id: "A.1.5", text: "Summary of proposed engagement across all three sub-domains" },
];

export const execHero = {
  code: "A.1",
  title: "Executive Summary",
  tagline: "Enterprise data & platforms as one product — from days to minutes",
  posture: "Executive",
  accent: "#e0218a",
  accent2: "#e2231a",
  intro:
    "Pandora is moving from a reactive, manual model to a proactive, AI-enabled one. We propose a partnership where Pandora leads and the vendor executes and elevates — making enterprise data and platforms feel like one product, and turning service turnaround from days into minutes.",
};

// A.1.1 — the shift
export const fromTo = {
  from: ["Reactive & manual", "Tickets & queues", "Days to deliver", "Tribal knowledge", "Toil-heavy operations"],
  to: ["Proactive & AI-enabled", "Self-service golden paths", "Minutes to deliver", "Governed & observable", "Agentic, low-toil operations"],
};

// A.1.4 — headline commitments
export const commitments: { title: string; detail: string }[] = [
  { title: "Efficiency", detail: "Agents handle the high-volume, repeatable work — materially fewer people for the same scope, with onboarding cut from weeks to days, and the 99.99% bar held." },
  { title: "Value-share", detail: "Concrete commercial mechanisms — year-on-year productivity cost-downs — that return operational savings and efficiency gains to Pandora." },
  { title: "Talent retention", detail: "A stable, named team with a real pipeline, continuous upskilling, and continuity guarantees for key roles on the account." },
  { title: "Zero-disruption transition", detail: "Discovery → shadow → reverse-shadow → autonomy, with rollback safety and bi-weekly readiness checks. No business interruption." },
];

// A.1.5 — engagement across the three sub-domains
export const subdomains: { name: string; detail: string }[] = [
  { name: "Data platform", detail: "Self-serve, governed data products; a new workspace in under 30 minutes; decommission legacy EDW & Synapse and cut data-infra cost ~20%." },
  { name: "Integration platform", detail: "A single, event-driven backbone on Kafka; onboarding from days to minutes; Kong API standardization; decommission BizTalk." },
  { name: "DevOps platform", detail: "PAKS self-service Kubernetes, golden paths and AI-assisted development; reduced toil and a rising developer NPS." },
];

// ============================================================================
// A.2 — Understanding of Pandora's Context & Pain Points
// ============================================================================
export const a2Objective: { id: string; text: string }[] = [
  { id: "A.2.1", text: "The federation problem: autonomy-driven non-standard patterns; tool duplication (MuleSoft, Solace, Ark)" },
  { id: "A.2.2", text: "Legacy debt: >50% of data-transfer use cases on BizTalk 2020 / EDW / Synapse; deprecation decided, no plan/budget" },
  { id: "A.2.3", text: "Skills concentration risk: SaaS-specialist engineers; gaps in Kubernetes, Kafka, modern DevOps fundamentals" },
  { id: "A.2.4", text: "The enablement / education imperative (a stated 'critical responsibility')" },
  { id: "A.2.5", text: "Scale snapshot of the estate" },
];

export const a2Hero = {
  code: "A.2",
  title: "Understanding of Context & Pain Points",
  tagline: "We have listened — every pain point here is answered later by a concrete commitment",
  posture: "Understanding",
  accent: "#e2231a",
  accent2: "#ad1568",
  intro:
    "Before we propose anything, we show we understand the situation Pandora described — the federation legacy, the deprecated-but-unfunded platforms, the concentration of SaaS skills, and the resulting enablement imperative. Each is mirrored by a commitment in Modules B and C.",
};

export const painPoints: { id: string; title: string; detail: string; response: string }[] = [
  {
    id: "A.2.1",
    title: "Federation & autonomy",
    detail: "Departments historically held autonomy and adopted non-standard integration patterns — so MuleSoft, Solace and Ark still run alongside the main platforms, creating duplication, cost and harder data access.",
    response: "Re-unify through shared standards, golden paths and a common context — without removing domain autonomy.",
  },
  {
    id: "A.2.2",
    title: "Legacy debt, unfunded",
    detail: ">50% of data-transfer use cases still sit on BizTalk 2020, EDW and Synapse. Deprecation is decided, but no action plan or budget exists yet — and migration is the biggest challenge ahead.",
    response: "A strangler-pattern migration with an actual wave plan and budget model — while keeping the competency to operate BizTalk until it's gone.",
  },
  {
    id: "A.2.3",
    title: "Skills concentration",
    detail: "The org specialised in specific SaaS platforms, so fundamentals — Kubernetes, Kafka, modern DevOps — are thin. That makes enablement a first-order risk, not an afterthought.",
    response: "Treat developer enablement and education as a managed, measured outcome — academy tracks, golden paths and AI assist.",
  },
  {
    id: "A.2.4",
    title: "Enablement imperative",
    detail: "Pandora itself calls education a 'critical responsibility' for these teams — the platform must lift people, not just run technology.",
    response: "Knowledge sharing by construction: living docs, shadowing, and capability that Pandora staff can own and operate.",
  },
];

export const scaleStats: { value: string; label: string }[] = [
  { value: ">650", label: "engineers supported" },
  { value: "50+", label: "data-platform teams" },
  { value: "100+", label: "streaming apps" },
  { value: "~300M", label: "events / day" },
  { value: "~1,500", label: "non-engineer tooling users" },
  { value: ">50%", label: "use cases on legacy platforms" },
];

// ============================================================================
// A.3 — Strategic & Objective Alignment
// ============================================================================
export const a3Objective: { id: string; text: string; detail?: string }[] = [
  {
    id: "A.3.1",
    text: "Mapping our proposed solution to Pandora's overarching business goals (profitability, market growth, global scale)",
    detail: "Alignment map to carry: explicit traceability from business goal → platform capability → measurable outcome.",
  },
  { id: "A.3.2", text: "Reducing service turnaround from days to minutes (self-service + automated workflows)" },
  { id: "A.3.3", text: "Embedding AI, observability, and SRE into daily operations" },
  { id: "A.3.4", text: "'Pandora leads; vendor executes and elevates' — how we operationalise the engagement principle" },
];

export const a3Hero = {
  code: "A.3",
  title: "Strategic & Objective Alignment",
  tagline: "Every capability traces to a Pandora business goal",
  posture: "Evaluation focus area",
  accent: "#e0218a",
  accent2: "#e2231a",
  intro:
    "Our solution is anchored to Pandora's overarching goals, not to technology for its own sake. We map business goal → platform capability → measurable outcome, commit to the days-to-minutes turnaround, embed AI/observability/SRE into daily operations, and operationalise the 'Pandora leads; vendor executes and elevates' principle.",
};

// A.3.1 — goal → capability → outcome
export const alignmentRows: { goal: string; capability: string; outcome: string }[] = [
  { goal: "Profitability & market growth", capability: "Days-to-minutes self-service & automation", outcome: "Faster time-to-value; less spend on toil" },
  { goal: "Global scale", capability: "One repeatable, agentic operating model", outcome: "Scale without linear headcount growth" },
  { goal: "Resilience & continuity", capability: "Proactive operations at 99.99%", outcome: "Fewer incidents; protected revenue flows" },
  { goal: "Engineering maturity", capability: "Golden paths, enablement, AI tooling", outcome: "Higher developer NPS and DORA performance" },
];

// A.3.3 — embedded into daily operations
export const a3Pillars: { name: string; detail: string }[] = [
  { name: "AI", detail: "AI for operations and agentic workflows woven into the day-to-day — not a side project." },
  { name: "Observability", detail: "End-to-end / business observability so issues are seen before customers feel them." },
  { name: "SRE", detail: "Error budgets, SLOs and reliability engineering as the operating discipline." },
];

// ============================================================================
// A.5 — Operational Model (Overall)
// ============================================================================
export const a5Objective: { id: string; text: string; detail?: string }[] = [
  { id: "A.5.1", text: "Team-centred, geographically distributed model (offices, stores, factories, HQ)" },
  { id: "A.5.2", text: "Mix of Pandora employees + partner resources operating as one team" },
  {
    id: "A.5.3",
    text: "Domain-team structure aligned to the three independent platform domains",
    detail:
      "Operating model diagram (to author): show pod/domain structure, the one-team embedding model, and onshore/nearshore/offshore distribution.",
  },
  { id: "A.5.4", text: "How the structure supports both daily operations and transformation" },
];

export const a5Hero = {
  code: "A.5",
  title: "Operational Model (Overall)",
  tagline: "One team, geographically distributed — follow-the-sun coverage",
  posture: "Submission · focus area",
  accent: "#e0218a",
  accent2: "#e2231a",
  intro:
    "Our operating model is team-centred and distributed across Pandora's footprint and our delivery centres — a single team of Pandora and partner resources. Pandora sets direction from Copenhagen; engineering and 24/7 operations run from our delivery centre in Gurgaon, with on-site presence for synergy.",
};

// A.5.1 / A.5.2 — delivery locations (coords are [longitude, latitude])
export const a5Locations: {
  id: string;
  name: string;
  country: string;
  role: string;
  coords: [number, number];
  kind: "hq" | "vendor" | "onsite";
}[] = [
  {
    id: "cph",
    name: "Copenhagen",
    country: "Denmark · Pandora HQ",
    role: "Pandora HQ — sets direction, architecture and standards. Workshops, deep-dives and governance happen here; vendor leads visit 1–2× a year for on-site synergy.",
    coords: [12.5683, 55.6761],
    kind: "hq",
  },
  {
    id: "ggn",
    name: "Gurgaon",
    country: "India · Vendor delivery centre",
    role: "Primary vendor delivery centre — embedded engineering pods and 24/7 on-call operations for the platforms, operating to shared ways of working as one team with Pandora.",
    coords: [77.0266, 28.4595],
    kind: "vendor",
  },
];

// A.5.3 — domain-team structure
export const a5Domains: { name: string; detail: string }[] = [
  { name: "Data platform pod", detail: "Owns day-to-day operation and improvement of Olympus, Power BI and Open Metadata." },
  { name: "Integration platform pod", detail: "Owns Nexus, Kong and the event backbone — data quality and API standardization." },
  { name: "DevOps platform pod", detail: "Owns PAKS, the developer portal and golden-path tooling, plus 24/7 PAKS on-call." },
];

// A.5.4 — supports both ops and transformation
export const a5Dual: { title: string; detail: string }[] = [
  { title: "Runs daily operations", detail: "Embedded pods deliver support, on-call and incident response against the SLAs — the bread-and-butter operate scope." },
  { title: "Drives transformation", detail: "The same structure carries the continuous-improvement backlog and transformation cycles, so running and improving are one motion, not two teams." },
];

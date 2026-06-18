"use client";

import { heroes } from "@/lib/solution";
import { PillarHero, SectionHeading, Callout } from "./ui";
import ArchitectureDiagram from "./ArchitectureDiagram";
import PrinciplesGrid from "./PrinciplesGrid";
import GoldenPath from "./GoldenPath";
import InterlockDiagram from "./InterlockDiagram";
import VideoFeature from "./VideoFeature";
import PhaseFlow from "./PhaseFlow";
import PlanesDiagram from "./PlanesDiagram";
import OpsLoop from "./OpsLoop";
import AutonomyLadder from "./AutonomyLadder";
import CommerceFlow from "./CommerceFlow";
import MaturityStepper from "./MaturityStepper";

// The A.4 thread — what each subsection delivers, in order.
const THREAD = [
  { id: "sol-principles", code: "A.4.2", title: "Platform Principles", blurb: "The cross-cutting rules every platform is built by." },
  { id: "sol-goldenpath", code: "A.4.3", title: "Golden-Path Operating Concept", blurb: "Self-service and golden paths over tickets; shift-left." },
  { id: "sol-interlock", code: "A.4.4", title: "How the Sub-domains Interlock", blurb: "Three domains, one common foundation for the wider org." },
  { id: "sol-operating-model", code: "A.4.5", title: "AI-Native Operating Model", blurb: "AI ops, agentic workflows, AI dev tooling, AI governance." },
];

// --- A.4 Overview (target-state architecture = A.4.1) ------------------------
export function SolutionOverviewBody({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="space-y-14">
      <PillarHero {...heroes["sol-overview"]} />

      <section>
        <SectionHeading eyebrow="A.4.1 · target state" title="Integrated target-state architecture">
          One integrated estate across Data, Integration and DevOps — with self-service &amp; golden
          paths on top and cross-cutting observability, governance and everything-as-code underneath.
          Click any block.
        </SectionHeading>
        <ArchitectureDiagram />
      </section>

      <section>
        <SectionHeading eyebrow="The thread" title="How this section is structured (A.4.2 → A.4.5)">
          The architecture above is delivered through four connected ideas — open each in order.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {THREAD.map((t) => (
            <button
              key={t.id}
              onClick={() => onSelect(t.id)}
              className="group flex items-start gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white p-5 text-left shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl brand-gradient text-sm font-black text-white">
                {t.code.replace("A.", "")}
              </span>
              <span>
                <span className="block text-lg font-bold text-[color:var(--color-ink)]">{t.title}</span>
                <span className="block text-base text-[color:var(--color-ink-soft)]">{t.blurb}</span>
                <span className="mt-1 block text-sm font-bold text-[color:var(--color-pandora)] opacity-0 transition-opacity group-hover:opacity-100">
                  Open {t.code} →
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

// --- A.4.2 Principles --------------------------------------------------------
export function PrinciplesBody() {
  return (
    <div className="space-y-14">
      <PillarHero {...heroes["sol-principles"]} />
      <section>
        <SectionHeading eyebrow="A.4.2 · cross-cutting" title="Four principles, every platform">
          These hold across Data, Integration and DevOps — they are what make the target state one
          coherent estate rather than three. Click a principle.
        </SectionHeading>
        <PrinciplesGrid />
      </section>
    </div>
  );
}

// --- A.4.3 Golden paths ------------------------------------------------------
export function GoldenPathBody() {
  return (
    <div className="space-y-14">
      <PillarHero {...heroes["sol-goldenpath"]} />
      <section>
        <SectionHeading eyebrow="A.4.3 · how teams experience it" title="Self-service golden paths, not tickets">
          The same request, two ways. Golden paths turn days into minutes and shift common work left.
        </SectionHeading>
        <GoldenPath />
      </section>
    </div>
  );
}

// --- A.4.4 Interlock ---------------------------------------------------------
export function InterlockBody() {
  return (
    <div className="space-y-14">
      <PillarHero {...heroes["sol-interlock"]} />
      <section>
        <SectionHeading eyebrow="A.4.4 · how it fits together" title="Three domains, one common foundation">
          Focused domain teams, one shared foundation — which then becomes a reusable foundation for
          other TS&amp;F verticals.
        </SectionHeading>
        <InterlockDiagram />
      </section>
    </div>
  );
}

// --- A.4.5 AI-native operating model (Fabric + Operations + tooling + gov) ----
export function OperatingModelBody({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="space-y-14">
      <PillarHero {...heroes["sol-operating-model"]} />

      {/* Worked example video */}
      <section>
        <SectionHeading eyebrow="Watch" title="Our approach to AI-native — a worked example">
          A short, looping walkthrough of how the AI-native operating model plays out on a concrete
          example. Use the controls to pause or scrub; expand full-screen for the session.
        </SectionHeading>
        <VideoFeature
          src="/media/approach-to-ai-native.mp4"
          poster="/media/approach-poster.jpg"
          caption="Our approach to AI-native operations, illustrated through a worked example (silent, auto-looping)."
          autoPlay
          loop
          muted
        />
      </section>

      {/* Deliver — the fabric */}
      <section>
        <SectionHeading eyebrow="A.4.5 · deliver" title="The Agentic Delivery Fabric — one pattern for all work">
          Codify work once as golden-path workflows; agents execute the phases; humans own direction
          and gates. New work is just a new template on the same skeleton. Click any phase.
        </SectionHeading>
        <PhaseFlow />
        <div className="mt-5">
          <PlanesDiagram />
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Callout tone="note" title="Agents — high-volume, repeatable execution">
            Scaffolding, schema/transform generation, tests, provisioning, incident triage,
            migrations, doc generation, cost optimization.
          </Callout>
          <Callout tone="info" title="Humans (fewer) — non-repeating judgment">
            Architecture, gate approval, exception handling, direction. Exactly &ldquo;Pandora leads;
            vendor executes and elevates&rdquo; — except most of <em>execute</em> is agentic.
          </Callout>
        </div>
        <div className="mt-4">
          <Callout tone="ok" title="Proof of work, not a slide">
            The repo already contains a working instance — <strong>nexus-workflow</strong> with{" "}
            <code>INTAKE → SCHEMA → … → CLOSE</code>, idempotent phase markers, gate approvals and a
            knowledge base. The fabric productionizes this pattern.
          </Callout>
        </div>
      </section>

      {/* Run — operations */}
      <section>
        <SectionHeading eyebrow="A.4.5 · run" title="Proactive agentic operations — observe → prevent → resolve">
          A continuous loop keeps the estate healthy: prevent incidents before customer impact,
          resolve the rest fast, and keep humans on the judgment path via a graduated autonomy ladder.
        </SectionHeading>
        <OpsLoop />
        <div className="mt-6">
          <AutonomyLadder />
        </div>
      </section>

      {/* AI developer tooling */}
      <section>
        <SectionHeading eyebrow="A.4.5 · AI developer tooling" title="AI woven into the developer workflow">
          Approved AI tooling administered and integrated into the IDE and pipeline — to lift maturity
          and reduce cognitive load.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Claude & GitHub Copilot", d: "Approved AI developer tooling, integrated into IDE and pipeline." },
            { t: "Golden-path templates", d: "New services scaffolded with CI/CD, observability and security by default." },
            { t: "Agentic workflows", d: "A framework so the platform supports not just engineers, but agents." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)]">
              <h5 className="text-lg font-bold text-[color:var(--color-ink)]">{c.t}</h5>
              <p className="mt-2 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI governance */}
      <section>
        <SectionHeading eyebrow="A.4.5 · AI governance" title="Guardrails that keep 'less human' safe" />
        <Callout tone="warn" title="Governed by the Kong AI Gateway">
          Policy-as-code, RBAC, cost controls, audit and approval gates — agents only act inside the
          guardrails, in coordination with Pandora&rsquo;s dedicated Security team. This is how
          &ldquo;more agents, less human&rdquo; stays safe.
        </Callout>
      </section>

      {/* Future enabler */}
      <Callout tone="note" title="Future enabler — the Enterprise Context Graph">
        The operating model gets sharper still with a unified context layer agents reason over. We
        assessed it as high-value / high-risk and keep it as a deferred, value-gated component —
        documented in the appendix.{" "}
        <button onClick={() => onSelect("sol-context-graph")} className="font-bold text-[color:var(--color-pandora-deep)] underline">
          See E.12 →
        </button>
      </Callout>
    </div>
  );
}

// --- Appendix E.11 Commerce --------------------------------------------------
export function CommerceBody() {
  return (
    <div className="space-y-14">
      <PillarHero {...heroes["sol-commerce"]} />
      <Callout tone="info" title="Why this is in the appendix">
        Agentic commerce is a strong strategic opportunity, but it sits <em>on top of</em> the
        platforms rather than being part of the core architecture — so we keep it here as upside,
        out of the A.4 through-line.
      </Callout>
      <section>
        <SectionHeading eyebrow="Two directions, one gateway" title="How agents reach Pandora">
          Both external shopping agents and Pandora&rsquo;s own agents route through Kong. Click a path.
        </SectionHeading>
        <CommerceFlow />
      </section>
      <section>
        <SectionHeading eyebrow="The bet" title="A cleaner bet than the context graph" />
        <div className="grid gap-4 md:grid-cols-2">
          <Callout tone="ok" title="Kong-fronted, agent-ready API + AI gateway — lean in">
            High value, <strong>low-regret</strong> (good API hygiene and agent-traffic governance are
            worth doing regardless), <strong>high optionality</strong> on a strategic upside Pandora
            explicitly wants.
          </Callout>
          <Callout tone="info" title="Protocol-agnostic by design">
            Agent-commerce and payment standards are moving fast and unsettled.{" "}
            <strong>Don&rsquo;t bet on a protocol — bet on the gateway</strong> that lets Pandora adopt
            whichever wins.
          </Callout>
        </div>
      </section>
    </div>
  );
}

// --- Appendix E.12 Context Graph ---------------------------------------------
export function ContextGraphBody() {
  return (
    <div className="space-y-14">
      <PillarHero {...heroes["sol-context-graph"]} />
      <Callout tone="warn" title="Positioning — read this first">
        We deliberately evaluated this and concluded it is <strong>high value but high risk</strong>.
        It is a <strong>future, value-gated component — not a transition commitment</strong>. Day one,
        the Knowledge plane uses tools Pandora already owns; the graph is pursued only when a specific
        workflow&rsquo;s value justifies it, Pandora-owned, and never a single point of failure.
      </Callout>
      <section>
        <SectionHeading eyebrow="Start small, grow deliberately" title="The L0 → L4 maturity model">
          We do not boil the ocean. Seed a thin graph, prove value on one workflow, then expand one
          step at a time. Click each level.
        </SectionHeading>
        <MaturityStepper />
      </section>
      <section>
        <SectionHeading eyebrow="Why it would change the game" title="From guessing to grounded agents" />
        <div className="grid gap-4 md:grid-cols-2">
          <Callout tone="note" title="From tickets to context">
            Every request answered against live context, not tribal knowledge.
          </Callout>
          <Callout tone="note" title="From fragmented to unified">
            One queryable map across the silos — <strong>without taking autonomy away</strong> from
            domain teams. The move that finally addresses federation.
          </Callout>
          <Callout tone="note" title="From reactive to proactive">
            Predict and prevent — cost spikes, schema drift, dependency-induced incidents.
          </Callout>
          <Callout tone="note" title="A migration-proof, compounding moat">
            Spans ADO→GitHub, Backstage→Port.io, OpsGenie→PagerDuty and survives all of them.
          </Callout>
        </div>
      </section>
    </div>
  );
}

// --- Dispatcher --------------------------------------------------------------
export default function SolutionSection({
  id,
  onSelect,
}: {
  id: string;
  onSelect: (id: string) => void;
}) {
  switch (id) {
    case "sol-overview":
      return <SolutionOverviewBody onSelect={onSelect} />;
    case "sol-principles":
      return <PrinciplesBody />;
    case "sol-goldenpath":
      return <GoldenPathBody />;
    case "sol-interlock":
      return <InterlockBody />;
    case "sol-operating-model":
      return <OperatingModelBody onSelect={onSelect} />;
    case "sol-commerce":
      return <CommerceBody />;
    case "sol-context-graph":
      return <ContextGraphBody />;
    default:
      return null;
  }
}

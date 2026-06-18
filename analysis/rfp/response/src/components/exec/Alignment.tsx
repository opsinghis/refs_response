"use client";

import { a3Hero, alignmentRows, a3Pillars } from "@/lib/exec";
import { PillarHero, SectionHeading, Callout } from "@/components/solution/ui";

export default function Alignment({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="animate-in space-y-14">
      <PillarHero {...a3Hero} />

      {/* A.3.1 — goal → capability → outcome */}
      <section>
        <SectionHeading eyebrow="A.3.1 · the mapping" title="Business goal → capability → outcome">
          Nothing is technology for its own sake — every capability traces to a Pandora goal and a
          measurable outcome.
        </SectionHeading>
        <div className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
          <div className="grid grid-cols-3 brand-gradient text-white">
            <div className="px-5 py-3.5 text-base font-bold">Business goal</div>
            <div className="px-5 py-3.5 text-base font-bold">Capability we bring</div>
            <div className="px-5 py-3.5 text-base font-bold">Measurable outcome</div>
          </div>
          {alignmentRows.map((r, i) => (
            <div key={r.goal} className={`grid grid-cols-3 ${i % 2 ? "bg-[color:var(--color-bg-alt)]" : "bg-white"}`}>
              <div className="px-5 py-4 text-base font-semibold text-[color:var(--color-ink)]">{r.goal}</div>
              <div className="px-5 py-4 text-base text-[color:var(--color-ink-soft)]">{r.capability}</div>
              <div className="px-5 py-4 text-base text-[color:var(--color-ink-soft)]">{r.outcome}</div>
            </div>
          ))}
        </div>
      </section>

      {/* A.3.2 — days to minutes */}
      <section>
        <SectionHeading eyebrow="A.3.2 · the headline outcome" title="Service turnaround: days → minutes" />
        <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-[color:var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)]">
          <div className="text-2xl font-black text-[color:var(--color-muted)] line-through">days</div>
          <div className="text-3xl font-black brand-gradient-text">→</div>
          <div className="text-5xl font-black brand-gradient-text">minutes</div>
          <p className="max-w-md text-lg text-[color:var(--color-ink-soft)]">
            Achieved through self-service and automated workflows — the primary goal Pandora set for
            the transformation.
          </p>
        </div>
      </section>

      {/* A.3.3 — embedded into daily operations */}
      <section>
        <SectionHeading eyebrow="A.3.3 · embedded, not bolted on" title="AI, observability & SRE in daily operations">
          Three disciplines woven into how the platform runs every day.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {a3Pillars.map((p) => (
            <div key={p.name} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]" style={{ borderTopWidth: 4, borderTopColor: "var(--color-pandora)" }}>
              <h4 className="text-xl font-black brand-gradient-text">{p.name}</h4>
              <p className="mt-2 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* A.3.4 — engagement principle */}
      <section>
        <SectionHeading eyebrow="A.3.4 · the engagement principle" title="Pandora leads; the vendor executes and elevates" />
        <Callout tone="note" title="How we operationalise it">
          Pandora keeps direction, architecture and standards. We own operational excellence within
          scope, surface issues and improvements without being asked, and bring the engineering maturity
          that elevates the estate — with <strong>most of the execution agentic</strong>, supervised by
          fewer humans at the right gates.
        </Callout>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl brand-gradient p-7 text-white">
        <div>
          <div className="text-xl font-black">The architecture &amp; approach</div>
          <div className="text-base text-white/85">Overall Solution Architecture &amp; Approach (A.4).</div>
        </div>
        <button
          onClick={() => onSelect("sol-overview")}
          className="rounded-xl bg-white px-6 py-3 text-base font-bold text-[color:var(--color-pandora-deep)] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
        >
          Open A.4 →
        </button>
      </div>
    </div>
  );
}

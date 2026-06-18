"use client";

import { a2Hero, painPoints, scaleStats } from "@/lib/exec";
import { PillarHero, SectionHeading, Callout } from "@/components/solution/ui";

export default function Understanding({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="animate-in space-y-14">
      <PillarHero {...a2Hero} />

      {/* A.2.1–A.2.4 pain points → response */}
      <section>
        <SectionHeading eyebrow="A.2.1 – A.2.4 · the pain points" title="What we heard — and how we answer it">
          Each pain point Pandora named, with the commitment that answers it.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {painPoints.map((p) => (
            <div key={p.id} className="flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2.5">
                <span className="rounded-md bg-[color:var(--color-sapient-soft)] px-2.5 py-1 font-mono text-xs font-bold text-[color:var(--color-sapient-deep)]">
                  {p.id}
                </span>
                <h4 className="text-xl font-bold text-[color:var(--color-ink)]">{p.title}</h4>
              </div>
              <p className="mt-3 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{p.detail}</p>
              <div className="mt-4 rounded-lg border-l-4 border-[color:var(--color-pandora)] bg-[color:var(--color-pandora-soft)]/50 px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wide text-[color:var(--color-pandora-deep)]">Our response</span>
                <p className="mt-1 text-base text-[color:var(--color-ink-soft)]">{p.response}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A.2.5 scale snapshot */}
      <section>
        <SectionHeading eyebrow="A.2.5 · scale snapshot" title="The estate, in numbers">
          The scale that any solution has to operate at — and the legacy weight it has to move.
        </SectionHeading>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {scaleStats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)]">
              <div className="text-3xl font-black brand-gradient-text">{s.value}</div>
              <div className="mt-1.5 text-sm font-medium text-[color:var(--color-muted)] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Callout tone="note" title="The through-line">
        These four pain points are not background — they are the brief. Modules B and C answer each
        one directly, and the AI-native operating model (A.4) is how we do it at this scale.
      </Callout>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl brand-gradient p-7 text-white">
        <div>
          <div className="text-xl font-black">How we align to the goals</div>
          <div className="text-base text-white/85">Strategic &amp; Objective Alignment (A.3).</div>
        </div>
        <button
          onClick={() => onSelect("a3")}
          className="rounded-xl bg-white px-6 py-3 text-base font-bold text-[color:var(--color-pandora-deep)] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
        >
          Open A.3 →
        </button>
      </div>
    </div>
  );
}

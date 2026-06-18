"use client";

import { execHero, fromTo, commitments, subdomains } from "@/lib/exec";
import { PillarHero, SectionHeading, Callout } from "@/components/solution/ui";

export default function ExecutiveSummary({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="animate-in space-y-14">
      <PillarHero {...execHero} />

      {/* A.1.2 — value proposition */}
      <section>
        <SectionHeading eyebrow="A.1.2 · the value proposition" title="One product. Days to minutes." />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { v: "1", l: "way to interact — enterprise data & platforms as one product" },
            { v: "days → minutes", l: "service turnaround through self-service & automation" },
            { v: "99.99%", l: "uptime held while we take cost and toil out" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <div className="text-3xl md:text-4xl font-black brand-gradient-text">{s.v}</div>
              <div className="mt-2 text-base font-medium text-[color:var(--color-muted)]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* A.1.1 — the shift */}
      <section>
        <SectionHeading eyebrow="A.1.1 · the shift" title="From reactive & manual → proactive & AI-enabled">
          The transformation Pandora has named, made concrete.
        </SectionHeading>
        <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)] p-6">
            <div className="text-sm font-bold uppercase tracking-wide text-[color:var(--color-muted)]">Today</div>
            <ul className="mt-3 space-y-2">
              {fromTo.from.map((f) => (
                <li key={f} className="flex items-center gap-2 text-lg text-[color:var(--color-ink-soft)]">
                  <span className="text-[color:var(--color-muted)]">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center text-3xl font-black brand-gradient-text">→</div>
          <div className="rounded-2xl border-2 border-[color:var(--color-pandora)]/40 bg-[color:var(--color-pandora-soft)]/50 p-6">
            <div className="text-sm font-bold uppercase tracking-wide text-[color:var(--color-pandora-deep)]">Target state</div>
            <ul className="mt-3 space-y-2">
              {fromTo.to.map((t) => (
                <li key={t} className="flex items-center gap-2 text-lg font-medium text-[color:var(--color-ink)]">
                  <span className="text-[color:var(--color-pandora)]">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* A.1.3 — why us */}
      <section>
        <SectionHeading eyebrow="A.1.3 · why us" title="A Strategic Partner, not a traditional provider" />
        <Callout tone="note" title="Pandora leads; the vendor executes and elevates">
          We operate as one team with Pandora&rsquo;s engineers — owning operational excellence within
          scope, surfacing issues and improvements without being asked, and bringing the AI-native
          engineering maturity that lifts the whole estate. Pandora keeps direction, architecture and
          standards; we make them real and run them, with <strong>most of the execution agentic</strong>.
        </Callout>
      </section>

      {/* A.1.4 — headline commitments */}
      <section>
        <SectionHeading eyebrow="A.1.4 · headline commitments" title="Four commitments we sign up to" />
        <div className="grid gap-4 md:grid-cols-2">
          {commitments.map((c, i) => (
            <div key={c.title} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg brand-gradient text-sm font-black text-white">
                  {i + 1}
                </span>
                <h4 className="text-xl font-bold text-[color:var(--color-ink)]">{c.title}</h4>
              </div>
              <p className="mt-3 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* A.1.5 — across three sub-domains */}
      <section>
        <SectionHeading eyebrow="A.1.5 · the engagement" title="One model across three sub-domains" />
        <div className="grid gap-4 md:grid-cols-3">
          {subdomains.map((d) => (
            <div key={d.name} className="flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]" style={{ borderTopWidth: 4, borderTopColor: "var(--color-pandora)" }}>
              <h4 className="text-lg font-bold text-[color:var(--color-ink)]">{d.name}</h4>
              <p className="mt-2 flex-1 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl brand-gradient p-7 text-white">
        <div>
          <div className="text-xl font-black">See how we deliver it</div>
          <div className="text-base text-white/85">The Overall Solution Architecture &amp; Approach (A.4).</div>
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

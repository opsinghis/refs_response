"use client";

import { execPages } from "@/lib/execPages";
import type { Panel } from "@/lib/execPages";
import { PillarHero, SectionHeading, Callout } from "@/components/solution/ui";

function PanelHead({ eyebrow, title }: { eyebrow?: string; title?: string }) {
  if (!title && !eyebrow) return null;
  return <SectionHeading eyebrow={eyebrow} title={title ?? ""} />;
}

function PanelView({ p }: { p: Panel }) {
  switch (p.kind) {
    case "lead":
      return (
        <p className="max-w-6xl border-l-4 border-[color:var(--color-pandora)] pl-6 text-2xl font-medium leading-relaxed text-[color:var(--color-ink-soft)] md:text-3xl">
          {p.text}
        </p>
      );

    case "steps":
      return (
        <section>
          <PanelHead eyebrow={p.eyebrow} title={p.title} />
          <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
            {p.items.map((s, i) => (
              <div key={i} className="flex flex-1 items-stretch gap-3">
                <div className="flex-1 rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg brand-gradient text-sm font-black text-white">
                      {i + 1}
                    </span>
                    <h5 className="text-lg font-bold text-[color:var(--color-ink)]">{s.label}</h5>
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{s.body}</p>
                </div>
                {i < p.items.length - 1 && (
                  <span className="hidden shrink-0 items-center text-2xl text-[color:var(--color-border-strong)] md:flex">→</span>
                )}
              </div>
            ))}
          </div>
          {p.loop && (
            <p className="mt-3 text-center text-sm font-semibold text-[color:var(--color-muted)]">↺ a continuous loop — each cycle feeds the next</p>
          )}
        </section>
      );

    case "timeline":
      return (
        <section>
          <PanelHead eyebrow={p.eyebrow} title={p.title} />
          <div className="grid gap-3 md:grid-cols-3">
            {p.items.map((t, i) => (
              <div key={i} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <div className="mb-3 h-1.5 rounded brand-gradient" />
                <div className="text-xs font-bold uppercase tracking-wide text-[color:var(--color-muted)]">{t.duration}</div>
                <h5 className="mt-1 text-lg font-black text-[color:var(--color-ink)]">{t.phase}</h5>
                <p className="mt-2 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case "cadence":
      return (
        <section>
          <PanelHead eyebrow={p.eyebrow} title={p.title} />
          <div className="space-y-3">
            {p.items.map((t, i) => (
              <div key={i} className="flex flex-col gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center">
                <div className="w-full shrink-0 sm:w-44">
                  <div className="text-lg font-black brand-gradient-text">{t.tier}</div>
                  <div className="text-sm font-medium text-[color:var(--color-muted)]">{t.when}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.points.map((pt, j) => (
                    <span key={j} className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)] px-3 py-1.5 text-sm font-semibold text-[color:var(--color-ink-soft)]">
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case "cards":
      return (
        <section>
          <PanelHead eyebrow={p.eyebrow} title={p.title} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {p.items.map((c, i) => (
              <div key={i} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full brand-gradient" />
                  <h5 className="text-lg font-bold text-[color:var(--color-ink)]">{c.title}</h5>
                </div>
                <p className="mt-2 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{c.body}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case "pillars":
      return (
        <section>
          <PanelHead eyebrow={p.eyebrow} title={p.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {p.items.map((c, i) => (
              <div key={i} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]" style={{ borderTopWidth: 4, borderTopColor: "var(--color-pandora)" }}>
                <h5 className="text-xl font-black brand-gradient-text">{c.name}</h5>
                <p className="mt-2 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{c.detail}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case "table":
      return (
        <section>
          <PanelHead eyebrow={p.eyebrow} title={p.title} />
          <div className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
            <div className="grid brand-gradient text-white" style={{ gridTemplateColumns: `repeat(${p.headers.length}, minmax(0,1fr))` }}>
              {p.headers.map((h, i) => (
                <div key={i} className="px-5 py-3.5 text-base font-bold">{h}</div>
              ))}
            </div>
            {p.rows.map((row, ri) => (
              <div key={ri} className={`grid ${ri % 2 ? "bg-[color:var(--color-bg-alt)]" : "bg-white"}`} style={{ gridTemplateColumns: `repeat(${p.headers.length}, minmax(0,1fr))` }}>
                {row.map((cell, ci) => (
                  <div key={ci} className={`px-5 py-4 text-base ${ci === 0 ? "font-semibold text-[color:var(--color-ink)]" : "text-[color:var(--color-ink-soft)]"}`}>{cell}</div>
                ))}
              </div>
            ))}
          </div>
        </section>
      );

    case "stats":
      return (
        <section>
          <PanelHead eyebrow={p.eyebrow} title={p.title} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {p.items.map((s, i) => (
              <div key={i} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <div className="text-3xl md:text-4xl font-black brand-gradient-text">{s.value}</div>
                <div className="mt-1.5 text-sm font-medium text-[color:var(--color-muted)]">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      );

    case "twocol":
      return (
        <section>
          <PanelHead eyebrow={p.eyebrow} title={p.title} />
          <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)] p-6">
              <div className="text-sm font-bold uppercase tracking-wide text-[color:var(--color-muted)]">{p.leftTitle}</div>
              <ul className="mt-3 space-y-2">
                {p.left.map((x, i) => (
                  <li key={i} className="flex items-center gap-2 text-lg text-[color:var(--color-ink-soft)]"><span className="text-[color:var(--color-muted)]">•</span>{x}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center text-3xl font-black brand-gradient-text">→</div>
            <div className="rounded-2xl border-2 border-[color:var(--color-pandora)]/40 bg-[color:var(--color-pandora-soft)]/50 p-6">
              <div className="text-sm font-bold uppercase tracking-wide text-[color:var(--color-pandora-deep)]">{p.rightTitle}</div>
              <ul className="mt-3 space-y-2">
                {p.right.map((x, i) => (
                  <li key={i} className="flex items-center gap-2 text-lg font-medium text-[color:var(--color-ink)]"><span className="text-[color:var(--color-pandora)]">✓</span>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      );

    case "callout":
      return (
        <Callout tone={p.tone} title={p.title}>
          {p.text}
        </Callout>
      );
  }
}

export default function GenericExecPage({
  id,
  onSelect,
}: {
  id: string;
  onSelect: (id: string) => void;
}) {
  const page = execPages[id];
  if (!page) return null;
  return (
    <div className="animate-in space-y-14">
      <PillarHero {...page.hero} />
      {page.panels.map((p, i) => (
        <PanelView key={i} p={p} />
      ))}
      {page.next && (
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl brand-gradient p-7 text-white">
          <div className="text-xl font-black">{page.next.label}</div>
          <button
            onClick={() => onSelect(page.next!.id)}
            className="rounded-xl bg-white px-6 py-3 text-base font-bold text-[color:var(--color-pandora-deep)] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
          >
            {page.next.cta} →
          </button>
        </div>
      )}
    </div>
  );
}

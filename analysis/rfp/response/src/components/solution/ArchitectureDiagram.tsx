"use client";

import { useState } from "react";
import { archDomains, archCrossCutting } from "@/lib/solution";

const ALL = [...archDomains.flatMap((d) => d.nodes), ...archCrossCutting];

export default function ArchitectureDiagram() {
  const [active, setActive] = useState(ALL[0].id);
  const sel = ALL.find((n) => n.id === active)!;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)] md:p-6">
        {/* Entry band */}
        <div className="rounded-xl brand-gradient px-4 py-3 text-center text-sm font-bold text-white">
          Engineers · Analysts · Agents — self-service &amp; golden paths
        </div>
        <div className="my-2 text-center text-lg text-[color:var(--color-border-strong)]">↓</div>

        {/* Domains */}
        <div className="grid gap-3 md:grid-cols-3">
          {archDomains.map((d) => (
            <div key={d.id} className="rounded-xl border p-3" style={{ borderColor: d.tint + "55", background: d.tint + "0d" }}>
              <div className="mb-2 text-center text-xs font-black uppercase tracking-wide" style={{ color: d.tint }}>
                {d.name}
              </div>
              <div className="space-y-2">
                {d.nodes.map((n) => {
                  const on = n.id === active;
                  return (
                    <button
                      key={n.id}
                      onClick={() => setActive(n.id)}
                      className={`w-full rounded-lg border px-3 py-2 text-sm font-bold transition-all ${
                        on ? "border-transparent text-white shadow-[var(--shadow-pop)]" : "border-[color:var(--color-border)] bg-white text-[color:var(--color-ink)] hover:-translate-y-0.5"
                      }`}
                      style={on ? { background: d.tint } : undefined}
                    >
                      {n.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="my-2 text-center text-lg text-[color:var(--color-border-strong)]">↓</div>

        {/* Cross-cutting band */}
        <div className="grid gap-2 sm:grid-cols-3">
          {archCrossCutting.map((n) => {
            const on = n.id === active;
            return (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={`rounded-lg border px-3 py-2 text-xs font-bold transition-all ${
                  on ? "border-transparent text-white shadow-[var(--shadow-pop)]" : "border-dashed border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-alt)] text-[color:var(--color-ink)] hover:-translate-y-0.5"
                }`}
                style={on ? { background: "linear-gradient(135deg,#e0218a,#e2231a)" } : undefined}
              >
                {n.name}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-center text-sm text-[color:var(--color-muted)]">
          Cross-cutting layers (dashed) span all three domains. Click any block.
        </p>
      </div>

      {/* Detail */}
      <div className="flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
        <div className="text-xs font-bold uppercase tracking-wide text-[color:var(--color-muted)]">Component</div>
        <h4 className="mt-1 text-2xl font-black text-[color:var(--color-ink)]">{sel.name}</h4>
        <p className="mt-4 flex-1 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">{sel.detail}</p>
      </div>
    </div>
  );
}

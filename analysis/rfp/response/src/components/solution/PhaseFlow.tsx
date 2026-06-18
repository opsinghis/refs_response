"use client";

import { useState } from "react";
import { phases } from "@/lib/solution";

export default function PhaseFlow() {
  const [active, setActive] = useState(phases[0].id);
  const sel = phases.find((p) => p.id === active)!;

  return (
    <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)] md:p-7">
      {/* Flow */}
      <div className="flex flex-wrap items-stretch gap-2 md:flex-nowrap">
        {phases.map((p, i) => {
          const isActive = p.id === active;
          return (
            <div key={p.id} className="flex flex-1 items-center gap-2">
              <button
                onClick={() => setActive(p.id)}
                className={`flex w-full flex-col items-center justify-center rounded-xl border px-2 py-3 text-center transition-all ${
                  isActive
                    ? "border-transparent text-white shadow-[var(--shadow-pop)]"
                    : p.gate
                    ? "border-[color:var(--color-warn)]/40 bg-[#fff4e6] text-[color:var(--color-ink)] hover:-translate-y-0.5"
                    : "border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)] text-[color:var(--color-ink)] hover:-translate-y-0.5"
                }`}
                style={isActive ? { background: p.gate ? "var(--color-warn)" : "linear-gradient(135deg,#e0218a,#e2231a)" } : undefined}
              >
                <span className="text-xs font-mono opacity-60">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-0.5 text-sm font-bold leading-tight">{p.label}</span>
                {p.gate && (
                  <span className={`mt-1 text-[10px] font-bold uppercase ${isActive ? "text-white/90" : "text-[color:var(--color-warn)]"}`}>
                    human
                  </span>
                )}
              </button>
              {i < phases.length - 1 && (
                <span className="hidden shrink-0 text-lg text-[color:var(--color-border-strong)] md:inline">→</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail */}
      <div className="mt-6 grid gap-4 rounded-xl bg-[color:var(--color-bg-alt)]/60 p-5 md:grid-cols-[1fr_auto_auto] md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full brand-gradient" />
            <h4 className="text-xl font-black text-[color:var(--color-ink)]">{sel.label}</h4>
            {sel.gate && (
              <span className="rounded-full bg-[color:var(--color-warn)]/15 px-2.5 py-0.5 text-xs font-bold uppercase text-[color:var(--color-warn)]">
                Human gate
              </span>
            )}
          </div>
          <p className="mt-2 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">{sel.blurb}</p>
        </div>
        <div className="rounded-lg border border-[color:var(--color-border)] bg-white px-4 py-3">
          <div className="text-xs font-bold uppercase tracking-wide text-[color:var(--color-info)]">Reads from graph</div>
          <div className="mt-1 text-base font-medium text-[color:var(--color-ink)]">{sel.reads}</div>
        </div>
        <div className="rounded-lg border border-[color:var(--color-border)] bg-white px-4 py-3">
          <div className="text-xs font-bold uppercase tracking-wide text-[color:var(--color-pandora-deep)]">Writes back</div>
          <div className="mt-1 text-base font-medium text-[color:var(--color-ink)]">{sel.writes}</div>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-[color:var(--color-muted)]">
        Click any phase. New work = a new template on the <strong>same</strong> skeleton.
      </p>
    </div>
  );
}

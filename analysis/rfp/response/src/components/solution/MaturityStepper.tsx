"use client";

import { useState } from "react";
import { maturityLevels } from "@/lib/solution";

export default function MaturityStepper() {
  const [active, setActive] = useState("L0");
  const idx = maturityLevels.findIndex((l) => l.id === active);
  const sel = maturityLevels[idx];

  return (
    <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)] md:p-7">
      {/* Stepper track */}
      <div className="relative flex items-start justify-between gap-2">
        <div className="absolute left-0 right-0 top-5 h-1 rounded bg-[color:var(--color-bg-alt)]" />
        <div
          className="absolute left-0 top-5 h-1 rounded brand-gradient transition-all duration-500"
          style={{ width: `${(idx / (maturityLevels.length - 1)) * 100}%` }}
        />
        {maturityLevels.map((l) => {
          const isActive = l.id === active;
          const isPast = maturityLevels.findIndex((x) => x.id === l.id) <= idx;
          return (
            <button
              key={l.id}
              onClick={() => setActive(l.id)}
              className="relative z-10 flex flex-1 flex-col items-center gap-2 text-center"
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-full border-2 text-sm font-black transition-all ${
                  isActive
                    ? "scale-110 border-transparent text-white shadow-[var(--shadow-pop)]"
                    : isPast
                    ? "border-transparent text-white"
                    : "border-[color:var(--color-border-strong)] bg-white text-[color:var(--color-muted)]"
                }`}
                style={isActive || isPast ? { background: "linear-gradient(135deg,#e0218a,#e2231a)" } : undefined}
              >
                {l.id}
              </span>
              <span
                className={`text-xs font-bold leading-tight md:text-sm ${
                  isActive ? "text-[color:var(--color-ink)]" : "text-[color:var(--color-muted)]"
                }`}
              >
                {l.name}
              </span>
              {l.future && (
                <span className="rounded-full bg-[color:var(--color-bg-alt)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[color:var(--color-muted)]">
                  future
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Detail */}
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)]/60 p-5">
          <div className="text-xs font-bold uppercase tracking-wide text-[color:var(--color-info)]">What's in the graph</div>
          <p className="mt-1.5 text-lg text-[color:var(--color-ink)]">{sel.inGraph}</p>
        </div>
        <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)]/60 p-5">
          <div className="text-xs font-bold uppercase tracking-wide text-[color:var(--color-pandora-deep)]">What it powers</div>
          <p className="mt-1.5 text-lg text-[color:var(--color-ink)]">{sel.powers}</p>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-[color:var(--color-muted)]">
        We are at <strong>L0</strong>. Any advance beyond is <strong>value-gated and at Pandora's pace</strong> — no committed outcome depends on it.
      </p>
    </div>
  );
}

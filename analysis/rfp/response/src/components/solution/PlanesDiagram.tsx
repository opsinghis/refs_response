"use client";

import { useState } from "react";
import { planes } from "@/lib/solution";

export default function PlanesDiagram() {
  const [active, setActive] = useState("control");
  const sel = planes.find((p) => p.id === active)!;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
      {/* Stacked planes */}
      <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)]">
        <div className="space-y-3">
          {planes.map((p, i) => {
            const isActive = p.id === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all ${
                  isActive
                    ? "border-transparent text-white shadow-[var(--shadow-pop)]"
                    : "border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)] hover:-translate-y-0.5"
                }`}
                style={isActive ? { background: "linear-gradient(115deg,#e0218a,#e2231a)" } : undefined}
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg text-lg font-black ${
                    isActive ? "bg-white/20 text-white" : "bg-white text-[color:var(--color-pandora)]"
                  }`}
                >
                  {i + 1}
                </span>
                <span>
                  <span className="block text-lg font-bold">{p.name}</span>
                  <span className={`block text-sm ${isActive ? "text-white/85" : "text-[color:var(--color-muted)]"}`}>
                    {p.role}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[color:var(--color-bg-alt)] py-2.5 text-sm font-semibold text-[color:var(--color-ink-soft)]">
          <span>work flows top → bottom, every agent action passes all three planes</span>
        </div>
      </div>

      {/* Detail */}
      <div className="flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
        <h4 className="text-2xl font-black text-[color:var(--color-ink)]">{sel.name}</h4>
        <div className="mt-1 text-base font-bold uppercase tracking-wide brand-gradient-text">{sel.role}</div>
        <p className="mt-4 flex-1 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">{sel.detail}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {sel.tools.split("·").map((t) => (
            <span
              key={t}
              className="rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-alt)] px-3 py-1.5 text-sm font-semibold text-[color:var(--color-ink)]"
            >
              {t.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

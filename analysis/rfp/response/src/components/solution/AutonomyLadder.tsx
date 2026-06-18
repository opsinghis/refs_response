"use client";

import { useState } from "react";
import { autonomyLevels } from "@/lib/solution";

const TONE: Record<string, { bar: string; soft: string; text: string }> = {
  auto: { bar: "#1f9d6b", soft: "#eafaf3", text: "#1f9d6b" },
  approve: { bar: "#c97a12", soft: "#fff4e6", text: "#c97a12" },
  human: { bar: "#e2231a", soft: "#fde6e4", text: "#b3160f" },
};

export default function AutonomyLadder() {
  const [active, setActive] = useState("auto");
  const sel = autonomyLevels.find((l) => l.id === active)!;
  const tone = TONE[sel.tone];

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
      {/* Ladder */}
      <div className="flex flex-col gap-3">
        {autonomyLevels.map((l, i) => {
          const t = TONE[l.tone];
          const isActive = l.id === active;
          return (
            <button
              key={l.id}
              onClick={() => setActive(l.id)}
              className={`relative overflow-hidden rounded-xl border px-5 py-4 text-left transition-all ${
                isActive ? "shadow-[var(--shadow-pop)]" : "hover:-translate-y-0.5"
              }`}
              style={{
                borderColor: isActive ? t.bar : "var(--color-border)",
                background: isActive ? t.soft : "white",
                marginLeft: `${i * 8}%`,
              }}
            >
              <span className="absolute left-0 top-0 h-full w-1.5" style={{ background: t.bar }} />
              <div className="flex items-center justify-between gap-3">
                <span className="text-lg font-black text-[color:var(--color-ink)]">{l.level}</span>
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white"
                  style={{ background: t.bar }}
                >
                  {l.tone === "auto" ? "most autonomy" : l.tone === "human" ? "most oversight" : "balanced"}
                </span>
              </div>
              <div className="mt-1 text-base font-semibold" style={{ color: t.text }}>
                {l.who}
              </div>
            </button>
          );
        })}
        <p className="mt-1 text-center text-sm text-[color:var(--color-muted)]">
          Autonomy is <strong>earned per pattern</strong> and <strong>tightens</strong> for P1 flows and peak retail seasons.
        </p>
      </div>

      {/* Detail */}
      <div
        className="flex flex-col rounded-2xl border p-6 shadow-[var(--shadow-soft)]"
        style={{ borderColor: tone.bar, background: tone.soft }}
      >
        <h4 className="text-2xl font-black text-[color:var(--color-ink)]">{sel.level}</h4>
        <div className="mt-4 space-y-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide" style={{ color: tone.text }}>
              Who acts
            </div>
            <div className="mt-1 text-lg font-semibold text-[color:var(--color-ink)]">{sel.who}</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide" style={{ color: tone.text }}>
              When it applies
            </div>
            <div className="mt-1 text-lg text-[color:var(--color-ink-soft)]">{sel.when}</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide" style={{ color: tone.text }}>
              Examples
            </div>
            <div className="mt-1 text-lg text-[color:var(--color-ink-soft)]">{sel.examples}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

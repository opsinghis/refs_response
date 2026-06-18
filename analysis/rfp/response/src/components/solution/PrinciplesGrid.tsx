"use client";

import { useState } from "react";
import { principles } from "@/lib/solution";

export default function PrinciplesGrid() {
  const [active, setActive] = useState(principles[0].id);
  const sel = principles.find((p) => p.id === active)!;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
      <div className="grid grid-cols-2 gap-3">
        {principles.map((p, i) => {
          const on = p.id === active;
          return (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex aspect-square flex-col justify-between rounded-2xl border p-5 text-left transition-all ${
                on ? "border-transparent text-white shadow-[var(--shadow-pop)]" : "border-[color:var(--color-border)] bg-white hover:-translate-y-0.5"
              }`}
              style={on ? { background: "linear-gradient(135deg,#e0218a,#e2231a)" } : undefined}
            >
              <span className={`text-3xl font-black ${on ? "text-white/80" : "text-[color:var(--color-border-strong)]"}`}>
                0{i + 1}
              </span>
              <span className={`text-xl font-black leading-tight ${on ? "text-white" : "text-[color:var(--color-ink)]"}`}>
                {p.title}
              </span>
            </button>
          );
        })}
      </div>
      <div className="flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
        <h4 className="text-2xl font-black brand-gradient-text">{sel.title}</h4>
        <p className="mt-4 flex-1 text-xl leading-relaxed text-[color:var(--color-ink-soft)]">{sel.detail}</p>
      </div>
    </div>
  );
}

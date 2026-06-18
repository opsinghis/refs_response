"use client";

import { useState } from "react";
import { commerceDirections, kongRoles } from "@/lib/solution";

export default function CommerceFlow() {
  const [active, setActive] = useState("inbound");
  const sel = commerceDirections.find((d) => d.id === active)!;

  return (
    <div className="space-y-5">
      {/* Flow diagram */}
      <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)] md:p-7">
        <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_auto_auto_1fr]">
          {/* Left: agents */}
          <div className="flex flex-col gap-2">
            {commerceDirections.map((d) => (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-bold transition-all ${
                  d.id === active
                    ? "border-transparent text-white shadow-[var(--shadow-pop)]"
                    : "border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)] text-[color:var(--color-ink)] hover:-translate-y-0.5"
                }`}
                style={d.id === active ? { background: "linear-gradient(135deg,#5b2a4e,#e0218a)" } : undefined}
              >
                {d.id === "inbound" ? "External AI agents" : "Internal Pandora agents"}
              </button>
            ))}
          </div>

          <div className="hidden items-center justify-center text-2xl text-[color:var(--color-border-strong)] md:flex">→</div>

          {/* Kong */}
          <div className="grid place-items-center rounded-xl border-2 border-[color:var(--color-pandora)]/50 bg-[color:var(--color-pandora-soft)] px-6 py-4 text-center">
            <span className="text-2xl font-black brand-gradient-text">KONG</span>
            <span className="mt-1 text-xs font-semibold text-[color:var(--color-pandora-deep)]">
              API Gateway · Dev Portal · AI Gateway
            </span>
          </div>

          <div className="hidden items-center justify-center text-2xl text-[color:var(--color-border-strong)] md:flex">→</div>

          {/* Right: capabilities */}
          <div className="grid place-items-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)] px-4 py-3 text-center text-sm font-bold text-[color:var(--color-ink)]">
            {active === "inbound" ? "Commerce capabilities (catalog · pricing · checkout)" : "Internal services & LLMs"}
          </div>
        </div>

        {/* Selected detail */}
        <div className="mt-5 rounded-xl bg-[color:var(--color-bg-alt)]/60 p-5">
          <h4 className="text-xl font-black text-[color:var(--color-ink)]">{sel.title}</h4>
          <p className="mt-2 text-lg text-[color:var(--color-ink-soft)]">{sel.flow}</p>
          <div className="mt-3 rounded-lg border-l-4 border-[color:var(--color-pandora)] bg-white p-4">
            <span className="text-xs font-bold uppercase tracking-wide text-[color:var(--color-pandora-deep)]">Kong's job</span>
            <p className="mt-1 text-lg text-[color:var(--color-ink-soft)]">{sel.kongJob}</p>
          </div>
        </div>
      </div>

      {/* Three roles */}
      <div className="grid gap-4 md:grid-cols-3">
        {kongRoles.map((r, i) => (
          <div key={r.id} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg brand-gradient text-sm font-black text-white">
                {i + 1}
              </span>
              <h5 className="text-lg font-bold text-[color:var(--color-ink)]">{r.role}</h5>
            </div>
            <p className="mt-2.5 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{r.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { opsLoop } from "@/lib/solution";

const CX = 50;
const CY = 50;
const R = 39;
const START = -90; // degrees, first node at top
const STEP = 360 / opsLoop.length;
const toRad = (d: number) => (d * Math.PI) / 180;

function nodePos(i: number) {
  const a = toRad(START + i * STEP);
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
}

// Clockwise arrowheads at the midpoints between nodes.
function arrows() {
  return opsLoop.map((_, i) => {
    const a = START + (i + 0.5) * STEP;
    const r = toRad(a);
    const x = CX + R * Math.cos(r);
    const y = CY + R * Math.sin(r);
    return { x, y, rot: a + 90 };
  });
}

export default function OpsLoop() {
  const [active, setActive] = useState(0);
  const sel = opsLoop[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,520px)_1fr] lg:items-center">
      {/* Ring */}
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="ringgrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e0218a" />
              <stop offset="100%" stopColor="#e2231a" />
            </linearGradient>
          </defs>
          <circle
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke="url(#ringgrad)"
            strokeWidth={1.4}
            strokeDasharray="0.5 3"
            strokeLinecap="round"
            opacity={0.7}
          />
          {arrows().map((a, i) => (
            <polygon
              key={i}
              points="-1.6,-1.3 1.6,0 -1.6,1.3"
              fill="url(#ringgrad)"
              transform={`translate(${a.x} ${a.y}) rotate(${a.rot})`}
            />
          ))}
        </svg>

        {/* Center detail */}
        <div className="absolute left-1/2 top-1/2 w-[52%] -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
            Step {active + 1} / {opsLoop.length}
          </div>
          <div className="mt-1 text-2xl font-black leading-tight brand-gradient-text">{sel.label}</div>
          <div className="mx-auto mt-2 h-1 w-10 rounded brand-gradient" />
        </div>

        {/* Node buttons */}
        {opsLoop.map((s, i) => {
          const { x, y } = nodePos(i);
          const isActive = i === active;
          return (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-label={s.label}
            >
              <span
                className={`grid h-[60px] w-[60px] place-items-center rounded-full border-2 px-1 text-center text-[11px] font-bold leading-none transition-all md:h-[72px] md:w-[72px] md:text-xs ${
                  isActive
                    ? "border-transparent text-white shadow-[var(--shadow-pop)] scale-110"
                    : "border-[color:var(--color-border-strong)] bg-white text-[color:var(--color-ink)] hover:scale-105"
                }`}
                style={isActive ? { background: "linear-gradient(135deg,#e0218a,#e2231a)" } : undefined}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg brand-gradient text-base font-black text-white">
            {active + 1}
          </span>
          <h4 className="text-2xl font-black text-[color:var(--color-ink)]">{sel.label}</h4>
        </div>
        <p className="mt-4 text-xl leading-relaxed text-[color:var(--color-ink-soft)]">{sel.blurb}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {opsLoop.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
                i === active
                  ? "brand-gradient text-white"
                  : "bg-[color:var(--color-bg-alt)] text-[color:var(--color-ink-soft)] hover:bg-[color:var(--color-border)]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

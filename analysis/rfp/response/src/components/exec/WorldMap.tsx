"use client";

import { useMemo, useState } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";
import { a5Locations } from "@/lib/exec";

const W = 820;
const H = 420;

const KIND_COLOR: Record<string, string> = {
  hq: "#e0218a",
  vendor: "#e2231a",
  onsite: "#5b2a4e",
};

export default function WorldMap() {
  const [active, setActive] = useState(a5Locations[0].id);

  const { countries, sphere, connector, points } = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wd = worldData as any;
    const fc = feature(wd, wd.objects.countries) as unknown as {
      features: unknown[];
    };
    const projection = geoEqualEarth().fitExtent(
      [
        [12, 12],
        [W - 12, H - 12],
      ],
      { type: "Sphere" }
    );
    const pathGen = geoPath(projection);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const countries = fc.features.map((f) => pathGen(f as any) || "");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sphere = pathGen({ type: "Sphere" } as any) || "";

    const points = a5Locations.map((l) => {
      const xy = projection(l.coords as [number, number]);
      return { ...l, x: xy ? xy[0] : 0, y: xy ? xy[1] : 0 };
    });

    let connector = "";
    if (points.length >= 2) {
      const a = points[0];
      const b = points[1];
      const mx = (a.x + b.x) / 2;
      const my = Math.min(a.y, b.y) - 46;
      connector = `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
    }
    return { countries, sphere, connector, points };
  }, []);

  const sel = a5Locations.find((l) => l.id === active)!;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr]">
      <div className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white p-3 shadow-[var(--shadow-soft)]">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
          {/* ocean */}
          <path d={sphere} fill="#f3ebf1" stroke="#ecdfe8" strokeWidth={1} />
          {/* countries */}
          <g>
            {countries.map((d, i) => (
              <path key={i} d={d} fill="#e4d4df" stroke="#ffffff" strokeWidth={0.5} />
            ))}
          </g>
          {/* connector */}
          {connector && (
            <path
              d={connector}
              fill="none"
              stroke="url(#linkgrad)"
              strokeWidth={2}
              strokeDasharray="2 4"
              strokeLinecap="round"
            />
          )}
          <defs>
            <linearGradient id="linkgrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e0218a" />
              <stop offset="100%" stopColor="#e2231a" />
            </linearGradient>
          </defs>
          {/* markers */}
          {points.map((p) => {
            const on = p.id === active;
            const color = KIND_COLOR[p.kind] ?? "#e0218a";
            return (
              <g
                key={p.id}
                transform={`translate(${p.x} ${p.y})`}
                onClick={() => setActive(p.id)}
                style={{ cursor: "pointer" }}
              >
                {on && <circle r={13} fill={color} opacity={0.18} className="pulse-soft" />}
                <circle r={on ? 7 : 5} fill={color} stroke="#fff" strokeWidth={2} />
                <text
                  x={9}
                  y={4}
                  fontSize={14}
                  fontWeight={800}
                  fill="#1c1320"
                  stroke="#ffffff"
                  strokeWidth={3}
                  paintOrder="stroke"
                  style={{ pointerEvents: "none" }}
                >
                  {p.name}
                </text>
              </g>
            );
          })}
        </svg>
        {/* location chips */}
        <div className="mt-2 flex flex-wrap gap-2 px-1">
          {a5Locations.map((l) => (
            <button
              key={l.id}
              onClick={() => setActive(l.id)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${
                l.id === active
                  ? "border-transparent text-white"
                  : "border-[color:var(--color-border)] bg-white text-[color:var(--color-ink-soft)] hover:bg-[color:var(--color-bg-alt)]"
              }`}
              style={l.id === active ? { background: KIND_COLOR[l.kind] } : undefined}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: l.id === active ? "#fff" : KIND_COLOR[l.kind] }}
              />
              {l.name}
            </button>
          ))}
        </div>
      </div>

      {/* detail */}
      <div className="flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
        <span
          className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
          style={{ background: KIND_COLOR[sel.kind] }}
        >
          {sel.kind === "hq" ? "Pandora" : sel.kind === "vendor" ? "Vendor" : "On-site"}
        </span>
        <h4 className="mt-3 text-2xl font-black text-[color:var(--color-ink)]">{sel.name}</h4>
        <div className="text-base font-semibold text-[color:var(--color-muted)]">{sel.country}</div>
        <p className="mt-4 flex-1 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">{sel.role}</p>
      </div>
    </div>
  );
}

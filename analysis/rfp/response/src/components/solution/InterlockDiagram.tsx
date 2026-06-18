import { interlockDomains, foundationItems } from "@/lib/solution";

export default function InterlockDiagram() {
  return (
    <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 shadow-[var(--shadow-soft)] md:p-7">
      {/* Three domains */}
      <div className="grid gap-3 md:grid-cols-3">
        {interlockDomains.map((d) => (
          <div key={d.id} className="rounded-xl border-2 p-4 text-center" style={{ borderColor: d.tint, background: d.tint + "0d" }}>
            <div className="text-lg font-black" style={{ color: d.tint }}>{d.name}</div>
            <div className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{d.note}</div>
          </div>
        ))}
      </div>

      <div className="my-3 flex items-center justify-center gap-2 text-[color:var(--color-border-strong)]">
        <span className="text-lg">↓</span>
        <span className="text-sm font-semibold text-[color:var(--color-muted)]">run by focused domain teams, sharing one foundation</span>
        <span className="text-lg">↓</span>
      </div>

      {/* Common foundation */}
      <div className="rounded-xl brand-gradient p-5 text-center">
        <div className="text-base font-black uppercase tracking-wide text-white">Common platform foundation</div>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {foundationItems.map((f) => (
            <span key={f} className="rounded-full bg-white/20 px-3 py-1.5 text-sm font-semibold text-white">{f}</span>
          ))}
        </div>
      </div>

      <div className="my-3 text-center text-lg text-[color:var(--color-border-strong)]">↓</div>

      {/* Other verticals */}
      <div className="rounded-xl border border-dashed border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-alt)] p-4 text-center">
        <div className="text-base font-bold text-[color:var(--color-ink)]">A reusable foundation for other TS&amp;F verticals</div>
        <div className="mt-1 text-sm text-[color:var(--color-muted)]">
          The same golden paths, governance, observability and operating model extend beyond this vertical.
        </div>
      </div>
    </div>
  );
}

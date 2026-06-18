import type { Group } from "@/lib/types";

export default function Cover({
  groups,
  onSelect,
  onStart,
}: {
  groups: Group[];
  onSelect: (id: string) => void;
  onStart: () => void;
}) {
  return (
    <div className="animate-in mx-auto max-w-[1500px]">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white shadow-[var(--shadow-soft)]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full brand-gradient opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full brand-gradient opacity-10 blur-3xl" />
        <div className="relative px-8 py-12 md:px-14 md:py-16">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            <span className="h-2.5 w-2.5 rounded-full brand-gradient pulse-soft" />
            Strategic Partner Selection 2027
          </div>

          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-[color:var(--color-ink)] md:text-6xl">
            Data, Integration &amp; DevOps
            <br />
            <span className="brand-gradient-text">Platforms — RFP Response</span>
          </h1>

          <p className="mt-6 max-w-3xl text-xl md:text-2xl leading-relaxed text-[color:var(--color-ink-soft)]">
            From a reactive, manual model to a proactive, AI-enabled one. We propose a
            partnership where <strong>Pandora leads and the vendor executes and elevates</strong> —
            turning service turnaround from <strong>days into minutes</strong> and making enterprise
            data feel like <em>one product</em>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onStart}
              className="rounded-xl brand-gradient px-6 py-3 text-base font-bold text-white shadow-[var(--shadow-pop)] transition-transform hover:-translate-y-0.5"
            >
              Begin the walkthrough →
            </button>
            <button
              onClick={() => onSelect("sol-overview")}
              className="rounded-xl border-2 px-6 py-3 text-base font-bold transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--color-pandora)", color: "var(--color-pandora-deep)" }}
            >
              View the Solution →
            </button>
            <button
              onClick={() => onSelect("process")}
              className="rounded-xl border border-[color:var(--color-border-strong)] bg-white px-6 py-3 text-base font-bold text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-bg-alt)]"
            >
              Process &amp; compliance
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { v: "3", l: "platform sub-domains" },
              { v: ">650", l: "engineers served" },
              { v: "~300M", l: "events / day" },
              { v: "99.99%", l: "uptime target" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)]/60 p-4">
                <div className="text-3xl font-black brand-gradient-text">{s.v}</div>
                <div className="mt-1 text-sm font-medium text-[color:var(--color-muted)]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Module map */}
      <div className="mt-10">
        <h2 className="text-2xl font-black tracking-tight text-[color:var(--color-ink)]">
          The submission, in modules
        </h2>
        <p className="mt-1.5 text-lg text-[color:var(--color-muted)]">
          Delivered exactly as Pandora requires — jump to any module below.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <button
              key={g.id}
              onClick={() => onSelect(g.sections[0].id)}
              className="group flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-5 text-left shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-[color:var(--color-pandora)]/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl brand-gradient text-lg font-black text-white">
                  {g.letter}
                </span>
                <span className="rounded-full bg-[color:var(--color-bg-alt)] px-2.5 py-1 text-xs font-semibold text-[color:var(--color-muted)]">
                  {g.sections.length} sections
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-[color:var(--color-ink)]">{g.label}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {g.subtitle}
              </p>
              <span className="mt-4 text-sm font-bold text-[color:var(--color-pandora)] opacity-0 transition-opacity group-hover:opacity-100">
                Open module →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PillarHero({
  code,
  title,
  tagline,
  posture,
  accent,
  accent2,
  intro,
}: {
  code: string;
  title: string;
  tagline: string;
  posture: string;
  accent: string;
  accent2: string;
  intro: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white shadow-[var(--shadow-soft)]">
      <div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})` }}
      />
      <div className="relative px-7 py-10 md:px-12 md:py-12">
        <div className="flex items-center gap-3">
          <span
            className="grid h-11 w-11 place-items-center rounded-xl text-lg font-black text-white"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})` }}
          >
            {code}
          </span>
          <span
            className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
            style={{ background: accent }}
          >
            {posture}
          </span>
        </div>
        <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[color:var(--color-ink)] md:text-6xl">
          {title}
        </h1>
        <p className="mt-3 text-xl font-semibold md:text-2xl" style={{ color: accent }}>
          {tagline}
        </p>
        <p className="mt-5 max-w-4xl text-xl leading-relaxed text-[color:var(--color-ink-soft)]">
          {intro}
        </p>
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-7">
      {eyebrow && (
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-1.5 text-3xl font-black tracking-tight text-[color:var(--color-ink)] md:text-4xl">
        {title}
      </h2>
      {children && (
        <p className="mt-3 max-w-4xl text-xl leading-relaxed text-[color:var(--color-ink-soft)]">
          {children}
        </p>
      )}
    </div>
  );
}

export function Callout({
  tone = "note",
  title,
  children,
}: {
  tone?: "note" | "warn" | "ok" | "info";
  title?: string;
  children: React.ReactNode;
}) {
  const map = {
    note: "border-[color:var(--color-pandora)]/40 bg-[color:var(--color-pandora-soft)]",
    warn: "border-[color:var(--color-warn)]/40 bg-[#fff4e6]",
    ok: "border-[color:var(--color-ok)]/35 bg-[#eafaf3]",
    info: "border-[color:var(--color-info)]/30 bg-[#eef4ff]",
  };
  return (
    <div className={`rounded-2xl border-l-4 p-6 ${map[tone]}`}>
      {title && <div className="text-lg font-bold text-[color:var(--color-ink)]">{title}</div>}
      <div className="mt-1 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">{children}</div>
    </div>
  );
}


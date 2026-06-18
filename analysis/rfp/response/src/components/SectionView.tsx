import type { Block, ListItem, Section, Tag } from "@/lib/types";

const TAG_META: Record<Tag, { label: string; cls: string }> = {
  response: {
    label: "Response block",
    cls: "bg-[color:var(--color-pandora-soft)] text-[color:var(--color-pandora-deep)] border-[color:var(--color-pandora)]/30",
  },
  focus: {
    label: "Evaluation focus area",
    cls: "bg-[color:var(--color-sapient-soft)] text-[color:var(--color-sapient-deep)] border-[color:var(--color-sapient)]/30",
  },
  submission: {
    label: "Submission requirement",
    cls: "bg-[#eef4ff] text-[color:var(--color-info)] border-[color:var(--color-info)]/25",
  },
  sla: {
    label: "SLA / SLO",
    cls: "bg-[#fff4e6] text-[color:var(--color-warn)] border-[color:var(--color-warn)]/30",
  },
  commercial: {
    label: "Commercial",
    cls: "bg-[#eafaf3] text-[color:var(--color-ok)] border-[color:var(--color-ok)]/30",
  },
};

function TagChip({ tag }: { tag: Tag }) {
  const meta = TAG_META[tag];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-semibold uppercase tracking-wide ${meta.cls}`}
    >
      {meta.label}
    </span>
  );
}

function listText(item: ListItem): string {
  return typeof item === "string" ? item : item.text;
}
function listSub(item: ListItem): string[] | undefined {
  return typeof item === "string" ? undefined : item.sub;
}

const CALLOUT_META = {
  note: { cls: "border-[color:var(--color-pandora)]/40 bg-[color:var(--color-pandora-soft)]", icon: "✎" },
  info: { cls: "border-[color:var(--color-info)]/30 bg-[#eef4ff]", icon: "ℹ" },
  warn: { cls: "border-[color:var(--color-warn)]/40 bg-[#fff4e6]", icon: "▲" },
  ok: { cls: "border-[color:var(--color-ok)]/35 bg-[#eafaf3]", icon: "✓" },
} as const;

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="max-w-6xl text-2xl md:text-3xl leading-relaxed text-[color:var(--color-ink-soft)] font-medium border-l-4 border-[color:var(--color-pandora)] pl-6">
          {block.text}
        </p>
      );
    case "para":
      return (
        <p className="max-w-6xl text-xl md:text-2xl leading-relaxed text-[color:var(--color-ink-soft)]">
          {block.text}
        </p>
      );
    case "subhead":
      return (
        <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--color-ink)] mt-2">
          {block.text}
        </h3>
      );
    case "list": {
      const marker =
        block.variant === "check" ? "✓" : block.variant === "arrow" ? "→" : "•";
      const markerCls =
        block.variant === "check"
          ? "text-[color:var(--color-ok)]"
          : block.variant === "arrow"
          ? "text-[color:var(--color-sapient)]"
          : "text-[color:var(--color-pandora)]";
      return (
        <ul className="max-w-6xl space-y-4">
          {block.items.map((item, i) => {
            const sub = listSub(item);
            return (
              <li key={i} className="flex gap-3.5 text-xl md:text-2xl leading-relaxed">
                <span className={`mt-1.5 shrink-0 font-bold ${markerCls}`}>{marker}</span>
                <div>
                  <span className="text-[color:var(--color-ink-soft)]">{listText(item)}</span>
                  {sub && (
                    <ul className="mt-2.5 space-y-2 pl-1">
                      {sub.map((s, j) => (
                        <li key={j} className="flex gap-2 text-lg text-[color:var(--color-muted)]">
                          <span className="mt-1 shrink-0 text-[color:var(--color-border-strong)]">–</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      );
    }
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="brand-gradient text-white">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-6 py-4 text-lg md:text-xl font-bold tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-white" : "bg-[color:var(--color-bg-alt)]"}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-6 py-4 align-top text-lg md:text-xl ${
                        ci === 0
                          ? "font-semibold text-[color:var(--color-ink)]"
                          : "text-[color:var(--color-ink-soft)]"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && (
            <p className="px-6 py-3.5 text-base italic text-[color:var(--color-muted)] bg-white border-t border-[color:var(--color-border)]">
              {block.caption}
            </p>
          )}
        </div>
      );
    case "stats":
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {block.items.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="text-4xl md:text-5xl font-extrabold brand-gradient-text">{s.value}</div>
              <div className="mt-2 text-base md:text-lg font-medium text-[color:var(--color-muted)] leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      );
    case "cards":
      return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {block.items.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full brand-gradient" />
                <h4 className="text-xl md:text-2xl font-bold text-[color:var(--color-ink)]">{c.title}</h4>
              </div>
              <p className="mt-3 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">{c.body}</p>
            </div>
          ))}
        </div>
      );
    case "callout": {
      const meta = CALLOUT_META[block.variant];
      return (
        <div className={`flex max-w-6xl gap-3.5 rounded-xl border-l-4 p-5 ${meta.cls}`}>
          <span className="text-2xl font-bold text-[color:var(--color-ink-soft)]">{meta.icon}</span>
          <div>
            {block.title && (
              <div className="text-lg md:text-xl font-bold text-[color:var(--color-ink)]">{block.title}</div>
            )}
            <p className="text-lg leading-relaxed text-[color:var(--color-ink-soft)]">{block.text}</p>
          </div>
        </div>
      );
    }
    case "placeholder":
      return (
        <div className="max-w-6xl rounded-2xl border-2 border-dashed border-[color:var(--color-pandora)]/40 bg-[color:var(--color-pandora-soft)]/40 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-md brand-gradient px-3 py-1 text-sm font-bold uppercase tracking-wider text-white">
              To author
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-[color:var(--color-pandora-deep)]">{block.title}</h4>
          </div>
          <p className="mt-3 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">{block.text}</p>
          {block.items && (
            <ul className="mt-4 space-y-2">
              {block.items.map((it, i) => (
                <li key={i} className="flex gap-2.5 text-lg text-[color:var(--color-ink-soft)]">
                  <span className="mt-1 shrink-0 text-[color:var(--color-pandora)]">▸</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
  }
}

export default function SectionView({
  section,
  groupLabel,
}: {
  section: Section;
  groupLabel: string;
}) {
  return (
    <article className="animate-in">
      <header className="mb-9">
        <div className="text-base font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
          {groupLabel}
        </div>
        <div className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <span className="text-3xl md:text-4xl font-black brand-gradient-text">{section.num}</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[color:var(--color-ink)]">
            {section.title}
          </h2>
        </div>
        {section.tags && section.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {section.tags.map((t) => (
              <TagChip key={t} tag={t} />
            ))}
          </div>
        )}
        <hr className="rule-gradient mt-5 w-24" />
      </header>

      <div className="space-y-8">
        {section.blocks.map((b, i) => (
          <BlockView key={i} block={b} />
        ))}
      </div>
    </article>
  );
}

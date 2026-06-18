import { a4Objective } from "@/lib/solution";

// Collapsed-by-default "objective" blob shown at the top of the A.4 solution pages.
// Expand during a session to confirm the solution covers the section's stated objective.
export default function ObjectiveBlob() {
  return (
    <details className="group mb-8 rounded-xl border border-[color:var(--color-border)] bg-white/70 shadow-[var(--shadow-soft)] backdrop-blur">
      <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-3">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md brand-gradient text-xs font-black text-white">
          A.4
        </span>
        <span className="text-sm font-bold text-[color:var(--color-ink)]">
          Section objective — what A.4 must cover
        </span>
        <span className="ml-2 hidden text-xs font-medium text-[color:var(--color-muted)] sm:inline">
          click to expand · coverage check
        </span>
        <span className="ml-auto text-[color:var(--color-muted)] transition-transform group-open:rotate-90">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </summary>
      <div className="border-t border-[color:var(--color-border)] px-5 py-4">
        <ul className="space-y-2.5">
          {a4Objective.map((o) => (
            <li key={o.id} className="flex gap-3 text-base leading-relaxed">
              <span className="shrink-0 font-mono text-sm font-bold text-[color:var(--color-pandora)]">
                {o.id}
              </span>
              <span className="text-[color:var(--color-ink-soft)]">
                {o.text}
                {o.detail && (
                  <span className="mt-1 block rounded-md border-l-2 border-[color:var(--color-pandora)]/40 bg-[color:var(--color-pandora-soft)]/50 px-3 py-1.5 text-sm italic text-[color:var(--color-ink-soft)]">
                    {o.detail}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm italic text-[color:var(--color-muted)]">
          The subsections below (A.4.1–A.4.4) deliver against this objective.
        </p>
      </div>
    </details>
  );
}

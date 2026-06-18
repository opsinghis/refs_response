const OLD = ["Raise a ticket", "Wait in a queue", "Manual provisioning", "Back-and-forth", "Live — days later"];
const NEW = ["Pick a golden path", "Self-service action", "CI/CD + obs + security wired in", "Guardrails enforced", "Live — minutes"];

export default function GoldenPath() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Old way */}
        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-alt)] p-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[color:var(--color-muted)]/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[color:var(--color-muted)]">
              Today — ticket-driven
            </span>
          </div>
          <ol className="mt-4 space-y-2">
            {OLD.map((s, i) => (
              <li key={i} className="flex items-center gap-3 text-lg text-[color:var(--color-ink-soft)]">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-sm font-bold text-[color:var(--color-muted)]">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
          <div className="mt-4 text-2xl font-black text-[color:var(--color-muted)]">⏱ days</div>
        </div>

        {/* Golden path */}
        <div className="rounded-2xl border-2 border-[color:var(--color-pandora)]/40 bg-[color:var(--color-pandora-soft)]/50 p-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full brand-gradient px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Golden path — self-service
            </span>
          </div>
          <ol className="mt-4 space-y-2">
            {NEW.map((s, i) => (
              <li key={i} className="flex items-center gap-3 text-lg font-medium text-[color:var(--color-ink)]">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full brand-gradient text-sm font-bold text-white">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
          <div className="mt-4 text-2xl font-black brand-gradient-text">⚡ minutes</div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[color:var(--color-pandora)] bg-white p-5 shadow-[var(--shadow-soft)]">
        <span className="text-lg font-bold text-[color:var(--color-ink)]">Shift-left:</span>{" "}
        <span className="text-lg text-[color:var(--color-ink-soft)]">
          common requests are met at the source by self-service and golden paths rather than escalated as
          tickets — so platform engineers are freed for the genuinely novel, and developer cognitive load drops.
        </span>
      </div>
    </div>
  );
}

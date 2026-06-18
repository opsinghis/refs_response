"use client";

import { a5Hero, a5Domains, a5Dual } from "@/lib/exec";
import { PillarHero, SectionHeading, Callout } from "@/components/solution/ui";
import WorldMap from "./WorldMap";

export default function OperationalModel({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="animate-in space-y-14">
      <PillarHero {...a5Hero} />

      {/* A.5.1 / A.5.2 — the map */}
      <section>
        <SectionHeading eyebrow="A.5.1 & A.5.2 · distributed, one team" title="Where the work happens">
          A team-centred model spread across Pandora&rsquo;s footprint and our delivery centre —
          Pandora and partner resources operating as one team. Click a location.
        </SectionHeading>
        <WorldMap />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Callout tone="note" title="One team, not two organisations">
            Named vendor resources are embedded with Pandora&rsquo;s platform-engineering teams,
            working to shared ways of working — with a clear &ldquo;Pandora leads; vendor executes
            and elevates&rdquo; boundary.
          </Callout>
          <Callout tone="info" title="Follow-the-sun, 24/7">
            The Copenhagen ↔ Gurgaon spread gives time-zone coverage for 24/7 on-call and faster
            turnaround, with on-site visits for synergy.
          </Callout>
        </div>
      </section>

      {/* A.5.3 — domain-team structure */}
      <section>
        <SectionHeading eyebrow="A.5.3 · structure" title="Domain pods aligned to the three platforms">
          The three platforms are run by focused, independent domain teams — each a pod that operates
          and improves its area.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {a5Domains.map((d) => (
            <div
              key={d.name}
              className="flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]"
              style={{ borderTopWidth: 4, borderTopColor: "var(--color-pandora)" }}
            >
              <h4 className="text-lg font-bold text-[color:var(--color-ink)]">{d.name}</h4>
              <p className="mt-2 flex-1 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* A.5.4 — ops + transformation */}
      <section>
        <SectionHeading eyebrow="A.5.4 · runs and improves" title="One structure for operations and transformation" />
        <div className="grid gap-4 md:grid-cols-2">
          {a5Dual.map((d) => (
            <div key={d.title} className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-bold text-[color:var(--color-ink)]">{d.title}</h4>
              <p className="mt-2 text-base leading-relaxed text-[color:var(--color-ink-soft)]">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl brand-gradient p-7 text-white">
        <div>
          <div className="text-xl font-black">How we govern the relationship</div>
          <div className="text-base text-white/85">Governance &amp; Relationship Management (A.6).</div>
        </div>
        <button
          onClick={() => onSelect("a6")}
          className="rounded-xl bg-white px-6 py-3 text-base font-bold text-[color:var(--color-pandora-deep)] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
        >
          Open A.6 →
        </button>
      </div>
    </div>
  );
}

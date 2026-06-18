"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { groups } from "@/lib/content";
import Sidebar from "./Sidebar";
import SectionView from "./SectionView";
import Cover from "./Cover";
import SolutionSection from "./solution/bodies";
import ObjectiveBlob from "./solution/ObjectiveBlob";
import ExecutiveSummary from "./exec/ExecutiveSummary";
import Understanding from "./exec/Understanding";
import Alignment from "./exec/Alignment";
import OperationalModel from "./exec/OperationalModel";
import GenericExecPage from "./exec/GenericExecPage";
import { a4Objective } from "@/lib/solution";
import { a1Objective, a2Objective, a3Objective, a5Objective } from "@/lib/exec";
import { execPages } from "@/lib/execPages";

// Built-out Module-A pages (custom-rendered with the collapsible objective on top).
const CUSTOM_PAGES: Record<
  string,
  {
    Comp: React.ComponentType<{ onSelect: (id: string) => void }>;
    code: string;
    items: { id: string; text: string; detail?: string }[];
  }
> = {
  a1: { Comp: ExecutiveSummary, code: "A.1", items: a1Objective },
  a2: { Comp: Understanding, code: "A.2", items: a2Objective },
  a3: { Comp: Alignment, code: "A.3", items: a3Objective },
  a5: { Comp: OperationalModel, code: "A.5", items: a5Objective },
};

interface FlatEntry {
  sectionId: string;
  groupId: string;
  groupLabel: string;
}

export default function Shell() {
  // Flatten all sections for prev/next + progress.
  const flat = useMemo<FlatEntry[]>(
    () =>
      groups.flatMap((g) =>
        g.sections.map((s) => ({
          sectionId: s.id,
          groupId: g.id,
          groupLabel: `Module ${g.letter} · ${g.label}`,
        }))
      ),
    []
  );

  const [activeId, setActiveId] = useState<string>("a1");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const select = useCallback((id: string) => {
    setActiveId(id);
    setMobileOpen(false);
    // Reset content scroll to top on view change.
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
    });
  }, []);

  const currentIndex = flat.findIndex((f) => f.sectionId === activeId);
  const isWelcome = activeId === "welcome";

  const goPrev = useCallback(() => {
    if (isWelcome) return;
    if (currentIndex <= 0) {
      select("welcome");
    } else {
      select(flat[currentIndex - 1].sectionId);
    }
  }, [currentIndex, flat, isWelcome, select]);

  const goNext = useCallback(() => {
    if (isWelcome) {
      select(flat[0].sectionId);
      return;
    }
    if (currentIndex < flat.length - 1) {
      select(flat[currentIndex + 1].sectionId);
    }
  }, [currentIndex, flat, isWelcome, select]);

  // Keyboard navigation for live presentation (← →).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const activeEntry = isWelcome ? null : flat[currentIndex];
  const activeGroup = activeEntry
    ? groups.find((g) => g.id === activeEntry.groupId) ?? null
    : null;
  const activeSection = activeGroup
    ? activeGroup.sections.find((s) => s.id === activeId) ?? null
    : null;

  const progress = isWelcome
    ? 0
    : Math.round(((currentIndex + 1) / flat.length) * 100);

  return (
    <div className="flex h-dvh overflow-hidden bg-[color:var(--color-bg)]">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          groups={groups}
          activeId={activeId}
          activeGroupId={activeGroup?.id ?? null}
          onSelect={select}
          collapsed={collapsed}
          onToggleCollapsed={() => setCollapsed((c) => !c)}
        />
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-[color:var(--color-ink)]/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar
              groups={groups}
              activeId={activeId}
              activeGroupId={activeGroup?.id ?? null}
              onSelect={select}
              collapsed={false}
              onToggleCollapsed={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="flex items-center gap-3 border-b border-[color:var(--color-border)] bg-white/70 px-4 py-3 backdrop-blur md:px-8">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--color-border)] text-[color:var(--color-ink)] lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <button
            onClick={() => select("welcome")}
            className="text-sm font-black tracking-tight text-[color:var(--color-ink)] hover:opacity-70"
          >
            Pandora <span className="text-[color:var(--color-muted)]">×</span>{" "}
            <span className="brand-gradient-text">Sapient</span>
          </button>

          <div className="ml-auto flex items-center gap-4">
            <div className="hidden items-center gap-2 sm:flex">
              <span className="text-xs font-semibold text-[color:var(--color-muted)]">
                {isWelcome ? "Start" : `${currentIndex + 1} / ${flat.length}`}
              </span>
              <div className="h-1.5 w-28 overflow-hidden rounded-full bg-[color:var(--color-bg-alt)]">
                <div
                  className="h-full brand-gradient transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <div ref={scrollRef} className="relative flex-1 overflow-y-auto">
          <div className="mx-auto max-w-[1600px] px-6 py-10 md:px-14 md:py-14 2xl:px-20">
            {isWelcome ? (
              <Cover groups={groups} onSelect={select} onStart={goNext} />
            ) : CUSTOM_PAGES[activeId] ? (
              (() => {
                const C = CUSTOM_PAGES[activeId];
                return (
                  <>
                    <ObjectiveBlob
                      code={C.code}
                      items={C.items}
                      footer="The page below delivers against this objective."
                    />
                    <C.Comp onSelect={select} />
                  </>
                );
              })()
            ) : execPages[activeId] ? (
              <>
                <ObjectiveBlob
                  code={execPages[activeId].code}
                  items={execPages[activeId].objective}
                  footer="The page below delivers against this objective."
                />
                <GenericExecPage id={activeId} onSelect={select} />
              </>
            ) : activeId.startsWith("sol-") ? (
              <>
                {!["sol-commerce", "sol-context-graph"].includes(activeId) && (
                  <ObjectiveBlob
                    code="A.4"
                    items={a4Objective}
                    footer="The subsections below (A.4.1–A.4.4) deliver against this objective."
                  />
                )}
                <SolutionSection id={activeId} onSelect={select} />
              </>
            ) : activeSection && activeEntry ? (
              <SectionView section={activeSection} groupLabel={activeEntry.groupLabel} />
            ) : null}
          </div>
        </div>

        {/* Footer: storyline navigation */}
        <footer className="flex items-center justify-between gap-3 border-t border-[color:var(--color-border)] bg-white/70 px-4 py-3 backdrop-blur md:px-8">
          <button
            onClick={goPrev}
            disabled={isWelcome}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[color:var(--color-ink-soft)] transition-colors hover:bg-[color:var(--color-bg-alt)] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <span className="hidden truncate text-xs font-medium text-[color:var(--color-muted)] sm:block">
            {activeEntry ? activeEntry.groupLabel : "Use ← → arrow keys to navigate"}
          </span>

          <button
            onClick={goNext}
            disabled={!isWelcome && currentIndex >= flat.length - 1}
            className="flex items-center gap-2 rounded-lg brand-gradient px-4 py-2 text-sm font-bold text-white shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            {isWelcome ? "Start" : "Next"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </footer>
      </div>
    </div>
  );
}

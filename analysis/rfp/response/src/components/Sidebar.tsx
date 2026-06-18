"use client";

import { useEffect, useState } from "react";
import type { Group, Section } from "@/lib/types";

// One level of nesting: a section is a child of an earlier section whose num is its prefix
// (e.g. A.4.1 nests under A.4). Used to make subsections collapsible.
type SecNode = { section: Section; children: Section[] };
function buildNodes(sections: Section[]): SecNode[] {
  const nodes: SecNode[] = [];
  for (const s of sections) {
    const parent = nodes.find((n) => s.num.startsWith(n.section.num + "."));
    if (parent) parent.children.push(s);
    else nodes.push({ section: s, children: [] });
  }
  return nodes;
}

export default function Sidebar({
  groups,
  activeId,
  activeGroupId,
  onSelect,
  collapsed,
  onToggleCollapsed,
}: {
  groups: Group[];
  activeId: string;
  activeGroupId: string | null;
  onSelect: (id: string) => void;
  collapsed: boolean;
  onToggleCollapsed: () => void;
}) {
  // Which groups are expanded in the tree. Active group auto-expands.
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(groups.map((g) => g.id))
  );

  useEffect(() => {
    if (activeGroupId) {
      setExpanded((prev) => {
        if (prev.has(activeGroupId)) return prev;
        const next = new Set(prev);
        next.add(activeGroupId);
        return next;
      });
    }
  }, [activeGroupId]);

  const toggleGroup = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  // Collapsed parents in the sub-tree (default: all expanded => empty set).
  const [collapsedSub, setCollapsedSub] = useState<Set<string>>(new Set());
  const toggleSub = (id: string) =>
    setCollapsedSub((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  // Auto-expand a parent when one of its children becomes active.
  useEffect(() => {
    for (const g of groups) {
      const active = g.sections.find((s) => s.id === activeId);
      if (!active) continue;
      const parent = g.sections.find(
        (p) => p.id !== active.id && active.num.startsWith(p.num + ".")
      );
      if (parent) {
        setCollapsedSub((prev) => {
          if (!prev.has(parent.id)) return prev;
          const n = new Set(prev);
          n.delete(parent.id);
          return n;
        });
      }
    }
  }, [activeId, groups]);

  return (
    <aside
      className={`flex h-full flex-col border-r border-[color:var(--color-border)] bg-white/80 backdrop-blur transition-all duration-300 ${
        collapsed ? "w-[68px]" : "w-[300px]"
      }`}
    >
      {/* Brand header */}
      <div className="flex items-center gap-3 border-b border-[color:var(--color-border)] px-4 py-4">
        <button
          onClick={onToggleCollapsed}
          aria-label={collapsed ? "Expand menu" : "Collapse menu"}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg brand-gradient text-white shadow-[var(--shadow-pop)]"
        >
          {collapsed ? (
            <ChevronsRight />
          ) : (
            <ChevronsLeft />
          )}
        </button>
        {!collapsed && (
          <div className="min-w-0">
            <div className="truncate text-sm font-black tracking-tight text-[color:var(--color-ink)]">
              Pandora × Sapient
            </div>
            <div className="truncate text-xs text-[color:var(--color-muted)]">
              RFP Response 2027
            </div>
          </div>
        )}
      </div>

      {/* Home / welcome */}
      <nav className="flex-1 overflow-y-auto px-2 py-3">
        <NavLeaf
          collapsed={collapsed}
          active={activeId === "welcome"}
          label="Welcome"
          glyph="◆"
          onClick={() => onSelect("welcome")}
        />

        <div className="mt-3 space-y-1.5">
          {groups.map((group) => {
            const isOpen = expanded.has(group.id);
            const groupActive = activeGroupId === group.id;
            return (
              <div key={group.id}>
                {/* Group header (collapsible) */}
                <button
                  onClick={() =>
                    collapsed ? onSelect(group.sections[0].id) : toggleGroup(group.id)
                  }
                  title={collapsed ? group.label : undefined}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors ${
                    groupActive
                      ? "bg-[color:var(--color-pandora-soft)]"
                      : "hover:bg-[color:var(--color-bg-alt)]"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-md text-sm font-black text-white ${
                      groupActive ? "brand-gradient" : "bg-[color:var(--color-berry)]"
                    }`}
                  >
                    {group.letter}
                  </span>
                  {!collapsed && (
                    <>
                      <span
                        className={`flex-1 truncate text-sm font-bold ${
                          groupActive
                            ? "text-[color:var(--color-pandora-deep)]"
                            : "text-[color:var(--color-ink)]"
                        }`}
                      >
                        {group.label}
                      </span>
                      <span
                        className={`shrink-0 text-[color:var(--color-muted)] transition-transform ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      >
                        <Caret />
                      </span>
                    </>
                  )}
                </button>

                {/* Sections (one level of collapsible nesting) */}
                {!collapsed && isOpen && (
                  <ul className="mt-0.5 space-y-0.5 border-l border-[color:var(--color-border)] pl-3 ml-4">
                    {buildNodes(group.sections).map((node) => {
                      const s = node.section;
                      const isActive = activeId === s.id;
                      const hasChildren = node.children.length > 0;
                      const subOpen = !collapsedSub.has(s.id);
                      return (
                        <li key={s.id}>
                          <div className="flex items-center gap-0.5">
                            <button
                              onClick={() => onSelect(s.id)}
                              className={`flex min-w-0 flex-1 items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-sm transition-colors ${
                                isActive
                                  ? "bg-[color:var(--color-pandora)]/12 font-semibold text-[color:var(--color-pandora-deep)]"
                                  : "text-[color:var(--color-ink-soft)] hover:bg-[color:var(--color-bg-alt)]"
                              }`}
                            >
                              <span
                                className={`shrink-0 text-xs font-mono ${
                                  isActive ? "text-[color:var(--color-pandora)]" : "text-[color:var(--color-muted)]"
                                }`}
                              >
                                {s.num}
                              </span>
                              <span className="truncate">{s.title}</span>
                            </button>
                            {hasChildren && (
                              <button
                                onClick={() => toggleSub(s.id)}
                                aria-label={subOpen ? "Collapse subsections" : "Expand subsections"}
                                className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-[color:var(--color-muted)] hover:bg-[color:var(--color-bg-alt)]"
                              >
                                <span className={`transition-transform ${subOpen ? "rotate-90" : ""}`}>
                                  <Caret />
                                </span>
                              </button>
                            )}
                          </div>

                          {hasChildren && subOpen && (
                            <ul className="mt-0.5 space-y-0.5 border-l border-[color:var(--color-border)] ml-3 pl-3">
                              {node.children.map((c) => {
                                const cActive = activeId === c.id;
                                return (
                                  <li key={c.id}>
                                    <button
                                      onClick={() => onSelect(c.id)}
                                      className={`flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-sm transition-colors ${
                                        cActive
                                          ? "bg-[color:var(--color-pandora)]/12 font-semibold text-[color:var(--color-pandora-deep)]"
                                          : "text-[color:var(--color-muted)] hover:bg-[color:var(--color-bg-alt)]"
                                      }`}
                                    >
                                      <span
                                        className={`shrink-0 text-xs font-mono ${
                                          cActive ? "text-[color:var(--color-pandora)]" : "text-[color:var(--color-border-strong)]"
                                        }`}
                                      >
                                        {c.num}
                                      </span>
                                      <span className="truncate">{c.title}</span>
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {!collapsed && (
        <div className="border-t border-[color:var(--color-border)] px-4 py-3 text-[11px] leading-relaxed text-[color:var(--color-muted)]">
          Pandora Internal · Commercial in Confidence
        </div>
      )}
    </aside>
  );
}

function NavLeaf({
  collapsed,
  active,
  label,
  glyph,
  onClick,
}: {
  collapsed: boolean;
  active: boolean;
  label: string;
  glyph: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors ${
        active ? "bg-[color:var(--color-pandora-soft)]" : "hover:bg-[color:var(--color-bg-alt)]"
      }`}
    >
      <span
        className={`grid h-7 w-7 shrink-0 place-items-center rounded-md text-sm font-black ${
          active ? "brand-gradient text-white" : "bg-[color:var(--color-bg-alt)] text-[color:var(--color-pandora)]"
        }`}
      >
        {glyph}
      </span>
      {!collapsed && (
        <span
          className={`text-sm font-bold ${
            active ? "text-[color:var(--color-pandora-deep)]" : "text-[color:var(--color-ink)]"
          }`}
        >
          {label}
        </span>
      )}
    </button>
  );
}

function Caret() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
function ChevronsLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
    </svg>
  );
}
function ChevronsRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 17l5-5-5-5M6 17l5-5-5-5" />
    </svg>
  );
}

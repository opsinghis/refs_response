# RFP Response Portal — Pandora × Sapient

Interactive presentation portal for the **Pandora TS&F Strategic Partner Selection 2027 —
Data, Integration, and DevOps Platforms** vertical. Built to run *live* during the response
session: large, projector-readable type, a collapsible navigation tree, and keyboard-driven
storyline flow.

Content is a faithful, structured encoding of [`../../RFP-RESPONSE-OUTLINE.md`](../../RFP-RESPONSE-OUTLINE.md)
— every Module (A–E) and the Process & Compliance section. Solution-design content is shown as
**"To author"** placeholders that can be filled in as the proposal matures.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production
```

## One app, one navigation tree

Everything lives in the single-page portal at `/`, driven by the collapsible tree. The full
[`RFP-RESPONSE-OUTLINE.md`](../../RFP-RESPONSE-OUTLINE.md) (Modules A–E + Process) **and** the
**Overall Solution Approach** are sibling groups in that tree:

```
Welcome
Module A — Overall Proposal
◆ Overall Solution Approach          ← the solution, as subsections
   S.0  Solution Overview
   S.1  Agentic Delivery Fabric      (interactive phase skeleton + three-planes diagram)
   S.2  Proactive Agentic Operations (circular ops loop + autonomy ladder)
   S.3  Agentic Commerce & Kong      (two-direction gateway flow)
   S.4  Enterprise Context Graph     (L0→L4 maturity stepper; deferred future component)
Module B / C / D / E / Process
```

Solution subsections (`sol-*`) are rendered with **interactive, click-through diagrams**
(select a node → live detail panel) instead of the generic block renderer. Content mirrors the
research notes in [`../solution/*.md`](../solution). Prev/Next and the ← → arrow keys flow
straight through the solution subsections like any other section.

## Video

A walkthrough video plays on **A.4 Overall Solution Architecture & Approach** ("Watch — our
approach to AI-native"). It is committed as a web-ready MP4 so it works on Vercel:

- `public/media/approach-to-ai-native.mp4` — H.264 MP4 with `+faststart` (progressive streaming),
  served as a static asset from Vercel's CDN (no config needed).
- `public/media/approach-poster.jpg` — poster frame.
- The original `approach_toagentic.mov` source is **git-ignored** (the MP4 is the committed,
  cross-browser playable version). To regenerate the MP4 from a new source:
  ```bash
  ffmpeg -i source.mov -c:v copy -c:a aac -movflags +faststart public/media/approach-to-ai-native.mp4
  ```
  (The current source has no audio track — the video is a silent visual walkthrough.)

When you commit, include `public/media/` so the video deploys with the app.

## Using it in a session

- **Collapsible menu** — the left rail collapses to icons (top-left toggle); each module
  group expands/collapses independently. On a laptop/tablet, a hamburger opens the menu as a drawer.
- **Storyline flow** — `Next` / `Previous` walk the whole narrative in order; a progress bar
  shows position. **← / → arrow keys** drive it hands-free for presenting.
- **Jump anywhere** — click any module card on the Welcome screen, or any section in the tree.

## Design system

- **Theme:** light base with **Pandora pink** (`#E0218A`) + **Publicis Sapient red** (`#E2231A`),
  applied as a brand gradient. Deep-plum/berry neutrals for depth.
- **Type:** large base size (17px) and oversized headings tuned for projector legibility.
- **Tags:** sections are labelled with `Response block`, `Evaluation focus area`,
  `Submission requirement`, `SLA / SLO`, and `Commercial` chips so reviewers see compliance at a glance.

## Structure

```
src/
  app/            layout, globals.css (theme), page  — single route, the whole portal
  lib/
    types.ts      content model (Group → Section → Block)
    content.ts    ALL content: RFP outline groups + the "Overall Solution Approach" group
                  (sol-* sections are rendered by the diagram bodies, not blocks)
    solution.ts   Solution copy + diagram data (mirrors ../solution/*.md)
  components/
    Shell.tsx       state, layout, prev/next, keyboard nav, mobile drawer
    Sidebar.tsx     collapsible tree menu
    SectionView.tsx block renderer for RFP outline sections
    Cover.tsx       welcome hero + module map
    solution/
      bodies.tsx           the S.0–S.4 bodies + dispatcher (rendered in Shell)
      ui.tsx               shared UI (hero, headings, callouts)
      PhaseFlow.tsx, PlanesDiagram.tsx        Fabric diagrams
      OpsLoop.tsx, AutonomyLadder.tsx         Operations diagrams
      CommerceFlow.tsx, MaturityStepper.tsx   Commerce & Context Graph diagrams
```

### Adding real content

Edit `src/lib/content.ts`. Replace a `placeholder` block with real blocks (`para`, `list`,
`table`, `stats`, `cards`, `callout`). The menu, progress, and navigation update automatically.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · TypeScript.

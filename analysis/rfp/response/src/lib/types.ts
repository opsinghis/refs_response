// Content model for the RFP response portal.
// Every point from RFP-RESPONSE-OUTLINE.md is encoded as structured data so
// nothing is missed, and presentational components render it consistently.

export type Tag =
  | "response" // mandated "[Response block]" — concrete what-level specifics required
  | "focus" // maps to one of the 11 Evaluation focus areas
  | "submission" // explicit submission-package requirement
  | "sla" // service-level commitment
  | "commercial";

export type ListItem = string | { text: string; sub?: string[] };

export type Block =
  | { type: "lead"; text: string }
  | { type: "para"; text: string }
  | { type: "subhead"; text: string }
  | { type: "list"; items: ListItem[]; variant?: "bullet" | "check" | "arrow" }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "cards"; items: { title: string; body: string }[] }
  | {
      type: "callout";
      variant: "note" | "info" | "warn" | "ok";
      title?: string;
      text: string;
    }
  | {
      type: "placeholder";
      title: string;
      text: string;
      items?: string[];
    };

export interface Section {
  id: string;
  num: string; // e.g. "A.1"
  title: string;
  tags?: Tag[];
  blocks: Block[];
}

export interface Group {
  id: string;
  letter: string; // "A", "B", ... or "▶" / "✓"
  label: string;
  subtitle: string;
  sections: Section[];
}

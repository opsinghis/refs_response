import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pandora × Sapient — Data, Integration & DevOps RFP Response",
  description:
    "Interactive RFP response portal for the Pandora TS&F Strategic Partner Selection 2027 — Data, Integration, and DevOps Platforms vertical.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

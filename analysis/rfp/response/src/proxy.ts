import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple HTTP Basic Auth (browser username/password prompt).
// Credentials come from Vercel env vars BASIC_AUTH_USER / BASIC_AUTH_PASSWORD.
// If either is unset (e.g. local development), the site is NOT protected.
// In Next.js 16 this is the `proxy` convention (formerly `middleware`); runs on Node.js.
export function proxy(request: NextRequest) {
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASSWORD;

  // No credentials configured → no protection (local dev).
  if (!user || !pass) return NextResponse.next();

  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
    const sep = decoded.indexOf(":");
    const u = decoded.slice(0, sep);
    const p = decoded.slice(sep + 1);
    if (u === user && p === pass) return NextResponse.next();
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Pandora RFP Response", charset="UTF-8"',
    },
  });
}

export const config = {
  // Protect everything (pages + the video in /media) except Next.js internal assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

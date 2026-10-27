import { demoFormSchema, fullMobile } from "@/libs/demo";
import { CONSOLE_URL } from "@/libs/plans";
import { siteSignatureHeaders } from "@/libs/site-signature";

/**
 * The "Book a demo" form posts here; this server checks it and forwards it to
 * the ResolveRite console (POST /api/public/demo-requests), signed with the
 * shared RR_SITE_API_SECRET. The browser never talks to the console.
 *
 * Only this site's own pages may post: a request from another origin, a
 * cross-site fetch or a non-JSON body is refused. A hidden "website" field
 * catches simple bots. The console rate-limits per visitor and refuses any
 * request this server didn't sign.
 */

const CONSOLE_PATH = "/api/public/demo-requests";
const json = (status: number, body: Record<string, unknown>) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

function sameSite(request: Request): boolean {
  if (request.headers.get("sec-fetch-site") && request.headers.get("sec-fetch-site") !== "same-origin") return false;
  const origin = request.headers.get("origin");
  if (!origin) return false;
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? new URL(request.url).protocol.replace(":", "");
  return Boolean(host) && origin === `${proto}://${host!.split(",")[0]!.trim()}`;
}

/** The visitor's address: Vercel sets x-vercel-forwarded-for itself; elsewhere only trusted in development. */
function visitorIp(request: Request): string | null {
  const header = process.env.VERCEL ? "x-vercel-forwarded-for" : process.env.NODE_ENV !== "production" ? "x-forwarded-for" : null;
  return (header && request.headers.get(header)?.split(",")[0]?.trim()) || null;
}

export async function POST(request: Request) {
  if (!sameSite(request)) return json(403, { error: "This form can only be sent from resolverite.com." });
  if (request.headers.get("content-type")?.split(";")[0]?.trim() !== "application/json") return json(415, { error: "Send the form as JSON." });
  const raw = await request.text();
  if (raw.length > 6_000) return json(413, { error: "That's too long." });

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return json(400, { error: "Send the form as JSON." });
  }
  // A field people never see: anything in it is a bot. Answer as if it worked.
  if (typeof body.website === "string" && body.website.trim()) return json(201, { ok: true });

  const parsed = demoFormSchema.safeParse(body);
  if (!parsed.success) {
    return json(400, { error: "Check the highlighted fields.", fields: Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message])) });
  }
  const f = parsed.data;
  const payload = JSON.stringify({
    institutionName: f.institutionName,
    contactMethod: f.contactMethod,
    workEmail: f.contactMethod === "email" ? f.workEmail : "",
    mobileNumber: f.contactMethod === "call" ? fullMobile(f.dialCode, f.mobileNumber) : "",
    preferredDate: f.preferredDate,
    notes: f.notes,
    clientIp: visitorIp(request),
    userAgent: request.headers.get("user-agent")?.slice(0, 400) ?? null,
  });

  try {
    const res = await fetch(`${CONSOLE_URL}${CONSOLE_PATH}`, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json", ...siteSignatureHeaders("POST", CONSOLE_PATH, payload) },
      body: payload,
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (res.ok) return json(201, { ok: true });
    const answer = (await res.json().catch(() => null)) as { error?: string; message?: string } | null;
    if (res.status === 429) return json(429, { error: answer?.error ?? answer?.message ?? "Too many requests. Try again later." });
    if (res.status === 400) return json(400, { error: "Check the details and try again." });
    console.error(`[demo] console answered ${res.status}${res.status === 401 ? " — is RR_SITE_API_SECRET set to the console's value?" : ""}`);
    return json(502, { error: "We couldn't send your request just now. Please try again, or email support@resolverite.app." });
  } catch {
    return json(502, { error: "We couldn't send your request just now. Please try again, or email support@resolverite.app." });
  }
}

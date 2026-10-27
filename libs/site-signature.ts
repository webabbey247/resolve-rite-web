import { createHash, createHmac, hkdfSync } from "node:crypto";

/**
 * Signs calls to the ResolveRite console's site API. Mirrors
 * resolve-rite-console/src/server/site-signature.ts — the version prefix and
 * HKDF label are the contract. `RR_SITE_API_SECRET` holds the same value in
 * both deployments; it is only used here, on the server, and never sent.
 */

const VERSION = "v1";
const LABEL = "resolverite/site-api/v1/sign";

/**
 * Headers proving this server holds the shared secret, for one `METHOD path`
 * — and, when the request has a body, for that exact body; empty when unset.
 */
export function siteSignatureHeaders(method: string, path: string, body?: string): Record<string, string> {
  const raw = process.env.RR_SITE_API_SECRET?.trim();
  if (!raw) return {};
  const timestamp = String(Math.floor(Date.now() / 1000));
  const key = Buffer.from(hkdfSync("sha256", Buffer.from(raw, "base64"), Buffer.alloc(0), LABEL, 32));
  const signature = createHmac("sha256", key)
    .update(`${VERSION}:${timestamp}:${method.toUpperCase()} ${path}${body === undefined ? "" : `:${createHash("sha256").update(body).digest("base64url")}`}`)
    .digest("base64url");
  return { "X-RR-Timestamp": timestamp, "X-RR-Signature": signature };
}

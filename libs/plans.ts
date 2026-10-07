import { siteSignatureHeaders } from "@/libs/site-signature";

/**
 * Subscription plans, read from the ResolveRite console's public catalogue
 * (GET /api/public/plans) — the same plans, prices and limits organizations
 * pick during onboarding and pay for in Stripe. Fetched on the server and
 * cached for five minutes, so a plan edited in the console reaches the site
 * without a redeploy.
 */

export const CONSOLE_URL = (process.env.CONSOLE_URL ?? "https://console.resolverite.app").replace(/\/+$/, "");

/** Where "Get started" / "Start trial" send visitors — the same sign-up as the header. */
export const SIGNUP_URL = process.env.SIGNUP_URL || "https://portal.resolverite.app/auth/register";

/** Where "Contact sales" goes (a mailto: or a booking page). */
const SALES_URL = process.env.SALES_URL || "mailto:support@resolverite.app";

const REVALIDATE_SECONDS = 300;

/** One row of the console's public catalogue. */
export type PublicPlan = {
  id: string;
  key: string;
  name: string;
  monthlyCents: number;
  annualCents: number;
  currency: string;
  seatLimits: {
    adminSeats: number;
    moderatorSeats: number;
    studentCapacity: number;
    auditRetentionYears: number;
  };
  sortOrder: number;
  trialDays: number;
  recommended: boolean;
  /** Priced by sales — no online checkout. */
  custom: boolean;
  tagline: string | null;
  features: string[];
};

/** What the pricing card renders. */
export type PricingPlan = {
  key: string;
  name: string;
  price: string;
  per: string;
  /** e.g. "or $990 billed yearly". */
  annualNote: string | null;
  sub: string;
  features: string[];
  cta: string;
  href: string;
  highlight: boolean;
};

function money(cents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    maximumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

export function toPricingPlan(plan: PublicPlan): PricingPlan {
  if (plan.custom) {
    return {
      key: plan.key,
      name: plan.name,
      price: "Custom",
      per: "",
      annualNote: null,
      sub: plan.tagline ?? "Tailored to your organization.",
      features: plan.features,
      cta: "Contact sales",
      href: SALES_URL,
      highlight: plan.recommended,
    };
  }
  // A plan may be sold on one cycle only; lead with monthly when it has one.
  const monthly = plan.monthlyCents > 0;
  return {
    key: plan.key,
    name: plan.name,
    price: money(monthly ? plan.monthlyCents : plan.annualCents, plan.currency),
    per: monthly ? "/ month" : "/ year",
    annualNote: monthly && plan.annualCents > 0 ? `or ${money(plan.annualCents, plan.currency)} billed yearly` : null,
    sub: plan.tagline ?? "",
    features: plan.trialDays > 0 ? [...plan.features, `${plan.trialDays}-day free trial`] : plan.features,
    cta: plan.trialDays > 0 ? "Start trial" : "Get started",
    href: SIGNUP_URL,
    highlight: plan.recommended,
  };
}

/** The plans for the pricing section, or null when the console can't be reached. */
export async function getPricingPlans(): Promise<PricingPlan[] | null> {
  try {
    const path = "/api/public/plans";
    const res = await fetch(`${CONSOLE_URL}${path}`, {
      // The console only answers requests signed with RR_SITE_API_SECRET.
      headers: { accept: "application/json", ...siteSignatureHeaders("GET", path) },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      console.error(`[plans] console answered ${res.status}${res.status === 401 ? " — is RR_SITE_API_SECRET set to the console's value?" : ""}`);
      return null;
    }
    const body = (await res.json()) as { plans?: PublicPlan[] };
    return Array.isArray(body.plans) ? body.plans.map(toPricingPlan) : null;
  } catch {
    return null;
  }
}

import React from "react";
import { Icons } from "@/components/Icons";

// ── Static content for the landing page.
//    All the array literals the page maps over live here so the markup in
//    `app/page.tsx` stays focused on layout. Data that carries an icon node
//    lives in this `.tsx` file; everything else is plain serialisable data.

// Hero — avatar strip initials
export const heroAvatars = ["AC", "KM", "RS", "OB"];

// Trusted-by logo row
export const trustedLogos = [
  "Northridge University",
  "Atlas NGO",
  "Meridian Group",
  "Cape Polytechnic",
  "Civic Council",
  "Eastlake Univ.",
];

// Who it's for — audience cards
export type Audience = { t: string; d: string; i: React.ReactNode };
export const audiences: Audience[] = [
  {
    t: "Universities",
    d: "Student grievances, faculty conduct, registrar disputes.",
    i: <Icons.Doc size={22} />,
  },
  {
    t: "NGOs",
    d: "Donor concerns, beneficiary safeguarding, field reports.",
    i: <Icons.Shield size={22} />,
  },
  {
    t: "HR teams",
    d: "Workplace complaints, harassment, internal investigations.",
    i: <Icons.User size={22} />,
  },
  {
    t: "Governance",
    d: "Citizen petitions, policy violations, oversight cases.",
    i: <Icons.Scale size={22} />,
  },
];

// How it works — three movements
export type HowStep = { n: string; t: string; d: string };
export const howItWorksSteps: HowStep[] = [
  {
    n: "01",
    t: "Intake",
    d: "Students or staff file via mobile or web. Branching questions route the case to the right team automatically.",
  },
  {
    n: "02",
    t: "Investigate",
    d: "Moderators triage, request documents, message anonymously, and update status — every action lands in the audit log.",
  },
  {
    n: "03",
    t: "Resolve",
    d: "Panels record outcomes, escalate if needed, and close cases with a written rationale visible to the reporter.",
  },
];

// Platform bento — custom branding card
export const brandSwatches = ["#1E3A5F", "#B5895B", "#3F7559", "#9C3B2E"];
export const brandTokens: [string, string][] = [
  ["Primary", "#1E3A5F"],
  ["Accent", "#B5895B"],
];

// Platform bento — immutable audit log card
export type AuditRow = { t: string; who: string; what: string; tgt: string; c: string };
export const auditLogRows: AuditRow[] = [
  { t: "09:41", who: "A. Chen", what: "updated status", tgt: "NRU-2847", c: "#9FD3B8" },
  { t: "09:38", who: "System", what: "auto-assigned", tgt: "NRU-2891", c: "#CDB68F" },
  { t: "09:37", who: "M. Okafor", what: "submitted", tgt: "NRU-2891", c: "#9DBBE0" },
];

// Platform bento — "two front doors" channel pills
export type PlatformChannel = { l: string; ic: React.ReactNode };
export const platformChannels: PlatformChannel[] = [
  { l: "iOS", ic: <Icons.Phone size={13} /> },
  { l: "Android", ic: <Icons.Phone size={13} /> },
  { l: "Web CRM", ic: <Icons.Globe size={13} /> },
];

// App download — store stats
export type MobileStat = { n: string; sub: string };
export const mobileStats: MobileStat[] = [
  { n: "4.8", sub: "App Store" },
  { n: "48 h", sub: "median response" },
  { n: "98%", sub: "closure rate" },
];

// Security — encryption spec rows
export const encryptionSpecs: [string, string][] = [
  ["In transit", "TLS 1.3"],
  ["At rest", "AES-256"],
  ["Key management", "HSM-backed"],
];

// Security — role-based access matrix.
//   perms: 1 = allowed, 0 = denied, 2 = own-records only
export const permissionRoles = ["", "Admin", "Mod", "Student"];
export type PermissionRow = [string, number[]];
export const permissionMatrix: PermissionRow[] = [
  ["View case", [1, 1, 2]],
  ["Assign", [1, 1, 0]],
  ["Close", [1, 1, 0]],
  ["Export log", [1, 0, 0]],
];

// Security — tenant isolation & residency
export type TenantRegion = { n: string; r: string };
export const tenantRegions: TenantRegion[] = [
  { n: "Northridge", r: "US-West" },
  { n: "Atlas NGO", r: "EU-Central" },
  { n: "Meridian", r: "APAC" },
];

// Security — compliance seals
export type ComplianceSeal = { t: string; s: string };
export const complianceSeals: ComplianceSeal[] = [
  { t: "SOC 2 Type II", s: "Renewed annually" },
  { t: "FERPA-aligned", s: "US education" },
  { t: "GDPR-ready", s: "EU residency" },
  { t: "ISO 27001", s: "Certified 2024" },
];

// Testimonials — featured quote metrics
export const featuredMetrics: [string, string][] = [
  ["88%", "backlog cleared"],
  ["2×", "faster panels"],
  ["1 sem", "to roll out"],
];

// Testimonials — supporting quotes
export type Testimonial = { q: string; n: string; r: string; sector: string };
export const supportingQuotes: Testimonial[] = [
  {
    q: "Our field officers finally have one safe channel for safeguarding reports. Anonymous intake changed everything.",
    n: "Imani Kamau",
    r: "Programs Director · Atlas NGO",
    sector: "NGO",
  },
  {
    q: "We replaced three spreadsheets and a shared inbox. HR investigations that took weeks now take days.",
    n: "Jordan Cole",
    r: "Head of People · Meridian Group",
    sector: "HR",
  },
];

// Testimonials — bottom rating strip
export const ratingAvatars = ["AC", "IK", "JC", "RS", "DW"];
export const ratingLogos = ["Northridge", "Atlas NGO", "Meridian", "Eastlake", "Civic Council"];

// Pricing — plans
export type PricingPlan = {
  name: string;
  price: string;
  per: string;
  sub: string;
  features: string[];
  cta: string;
  highlight: boolean;
};
export const pricingPlans: PricingPlan[] = [
  {
    name: "Foundation",
    price: "$1,200",
    per: "/ month",
    sub: "For small institutions starting out.",
    features: [
      "Up to 5,000 students",
      "5 moderator seats",
      "Mobile + standalone CRM",
      "Standard auth gateways",
      "Email support",
    ],
    cta: "Start trial",
    highlight: false,
  },
  {
    name: "Institution",
    price: "$3,400",
    per: "/ month",
    sub: "For mid-size universities & NGOs.",
    features: [
      "Up to 25,000 students",
      "20 moderator seats",
      "Custom branding (mobile + CRM)",
      "Custom redirect gateways",
      "Audit log retention 5 yr",
      "Priority support",
    ],
    cta: "Start trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "",
    sub: "Multi-tenant, governance, NGOs at scale.",
    features: [
      "Unlimited students",
      "Unlimited seats",
      "Dedicated tenant infra",
      "SSO + custom OIDC",
      "On-prem audit export",
      "Named CSM & SLA",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

import React from "react";
import { Icons } from "@/components/Icons";
import { FakeAvatar, Stars } from "@/components/shared";
import { Faq } from "@/components/Faq";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function PageLanding() {
  return (
    <div className="relative min-h-full w-full overflow-hidden bg-bg">
      <Header />

      {/* Hero */}
      <section className="px-6 pb-12 pt-22 nav:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 nav:grid-cols-[1.05fr_1fr] nav:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3 py-1.5 text-[12.5px] font-semibold text-ink-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              New · Anonymous reporting for HR teams
              <Icons.ChevronRight size={14} style={{ color: "var(--rr-muted)" }} />
            </div>
            <h1 className="w-display mt-5.5">
              Smarter dispute
              <br />
              resolution,{" "}
              <span className="italic text-brand-ink">end&nbsp;to&nbsp;end.</span>
            </h1>
            <p className="w-lead mt-5.5 max-w-130">
              ResolveRite replaces the spreadsheets, email chains and PDFs your institution relies
              on with a structured, transparent, auditable system — from intake to outcome.
            </p>
            <div className="mt-7.5 flex flex-wrap gap-3">
              <button className="w-btn w-btn-primary w-btn-lg">
                Start onboarding
                <Icons.ChevronRight size={16} />
              </button>
              <button className="w-btn w-btn-ghost w-btn-lg">
                <Icons.Chat size={16} /> Book a demo
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-[12.5px] text-muted">
              <div className="flex">
                {["AC", "KM", "RS", "OB"].map((n, i) => (
                  <div key={n} style={{ marginLeft: i === 0 ? 0 : -8 }}>
                    <FakeAvatar name={n} size={28} />
                  </div>
                ))}
              </div>
              Trusted by Anika, Karim, Rohan and 184&nbsp;institutions worldwide
            </div>
          </div>

          {/* Hero visual — product shot via app-window mock */}
          <HeroVisual />
        </div>
      </section>

      {/* Trusted-by logos */}
      <section className="px-6 pb-14 pt-6 nav:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="w-eyebrow text-center">Operating across 12 countries · 4 sectors</div>
          <div className="mt-5.5 grid grid-cols-3 items-center justify-items-center gap-6 opacity-70 nav:grid-cols-6">
            {[
              "Northridge University",
              "Atlas NGO",
              "Meridian Group",
              "Cape Polytechnic",
              "Civic Council",
              "Eastlake Univ.",
            ].map((n) => (
              <div key={n} className="flex items-center gap-2">
                <div className="h-5.5 w-5.5 rounded-[5px] bg-ink-2 opacity-85" />
                <div className="font-serif text-[13.5px] font-semibold text-ink-2">{n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-surface px-6 py-18 nav:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-180 text-center">
            <div className="w-eyebrow">Who it&apos;s for</div>
            <h2 className="w-h1 mt-3">Built for institutions that take fairness seriously.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4.5 sm:grid-cols-2 nav:grid-cols-4">
            {[
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
            ].map((c) => (
              <div key={c.t} className="w-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-brand-soft text-brand-ink">
                  {c.i}
                </div>
                <div className="w-h3 mt-4.5 text-[19px]">{c.t}</div>
                <div className="w-body mt-1.5 text-[14px]">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-22 nav:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 nav:grid-cols-[1fr_1.4fr] nav:gap-16">
          <div>
            <div className="w-eyebrow">How it works</div>
            <h2 className="w-h1 mt-3">
              From <span className="italic text-brand-ink">concern</span> to closure in three
              movements.
            </h2>
            <p className="w-body mt-3.5 max-w-90">
              No more lost emails or PDF attachments. Every case is tied to a ticket ID and a
              structured workflow your panels can actually audit.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            {[
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
            ].map((s) => (
              <div
                key={s.n}
                className="grid grid-cols-[64px_1fr] items-start gap-6 rounded-card border border-line bg-surface px-6.5 py-5.5"
              >
                <div className="font-serif text-[30px] font-semibold leading-none tracking-[-0.005em] text-gold">
                  {s.n}
                </div>
                <div>
                  <div className="w-h3">{s.t}</div>
                  <div className="w-body mt-1.5">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid — bento */}
      <section className="relative overflow-hidden bg-brand px-6 py-22 text-white nav:px-12">
        <div className="absolute -right-35 -top-35 text-white opacity-4">
          <Icons.Scale size={560} />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-140">
              <div className="w-eyebrow">The platform</div>
              <h2 className="w-h1 mt-3 text-white">
                Everything you need.
                <br />
                <span className="italic text-gold">Nothing you don&apos;t.</span>
              </h2>
            </div>
            <p className="max-w-95 text-[15.5px] leading-[1.55] text-white/72">
              Six modules cover the full lifecycle — themed per-tenant so every institution feels
              like it&apos;s their own platform.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 auto-rows-[minmax(0,auto)] nav:grid-cols-6">
            {/* Custom branding — large, with themed-app preview */}
            <FeatCard
              className="col-span-2 nav:col-span-3 nav:row-span-2 min-h-75"
              icon={<Icons.Edit size={18} />}
              eyebrow="Make it theirs"
              title="Custom branding, end to end"
              desc="Each tenant themes the mobile app and standalone CRM — logo, colors, splash and welcome image. Published in one click."
            >
              <div className="mt-auto flex items-end gap-3.5">
                {/* mini themed phone */}
                <div className="w-29 shrink-0 rounded-[18px] bg-[#0c1626] p-1.75 shadow-[0_16px_30px_rgba(0,0,0,0.3)]">
                  <div className="flex h-39 flex-col items-center gap-2 overflow-hidden rounded-[13px] bg-[linear-gradient(170deg,#1E3A5F,#16294A)] px-3 pb-3 pt-4.5">
                    <div className="rr-crest h-7.5 w-7.5 text-[14px]">N</div>
                    <div className="font-serif text-[12px] font-semibold text-white">Northridge</div>
                    <div className="mt-auto flex h-6.5 w-full items-center justify-center rounded-[7px] bg-white text-[9px] font-bold text-[#16294A]">
                      Sign in
                    </div>
                  </div>
                </div>
                {/* swatches + tokens */}
                <div className="flex-1">
                  <div className="mb-2.5 flex gap-1.75">
                    {["#1E3A5F", "#B5895B", "#3F7559", "#9C3B2E"].map((c) => (
                      <div
                        key={c}
                        className="h-7.5 w-7.5 rounded-lg border border-white/18"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                  {(
                    [
                      ["Primary", "#1E3A5F"],
                      ["Accent", "#B5895B"],
                    ] as [string, string][]
                  ).map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between border-t border-white/8 py-1.25 text-[11px]"
                    >
                      <span className="text-white/60">{k}</span>
                      <span className="font-mono text-white">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FeatCard>

            {/* Audit log — large, with live ledger */}
            <FeatCard
              className="col-span-2 nav:col-span-3 nav:row-span-2 min-h-75"
              icon={<Icons.Shield size={18} />}
              eyebrow="Defensible by design"
              title="Immutable audit log"
              desc="Every action — who, what, when, from where — captured as cryptographically-chained evidence your review panels can trust."
            >
              <div className="mt-auto overflow-hidden rounded-xl border border-white/8 bg-black/22">
                <div className="flex items-center justify-between border-b border-white/8 px-3 py-2.25">
                  <span className="text-[11px] font-semibold text-white/85">Audit log · live</span>
                  <span className="inline-flex items-center gap-1.25 text-[10px] font-semibold text-[#9FD3B8]">
                    <span className="h-1.25 w-1.25 rounded-full bg-[#9FD3B8]" /> Immutable
                  </span>
                </div>
                {[
                  { t: "09:41", who: "A. Chen", what: "updated status", tgt: "NRU-2847", c: "#9FD3B8" },
                  { t: "09:38", who: "System", what: "auto-assigned", tgt: "NRU-2891", c: "#CDB68F" },
                  { t: "09:37", who: "M. Okafor", what: "submitted", tgt: "NRU-2891", c: "#9DBBE0" },
                ].map((r, i) => (
                  <div
                    key={i}
                    className={
                      "grid grid-cols-[44px_1fr] items-center gap-2 px-3 py-2 " +
                      (i ? "border-t border-white/6" : "")
                    }
                  >
                    <span className="font-mono text-[10.5px] text-white/40">{r.t}</span>
                    <span className="text-[11.5px] text-white/82">
                      <span className="font-semibold text-white">{r.who}</span> {r.what}{" "}
                      <span className="font-mono font-semibold" style={{ color: r.c }}>
                        {r.tgt}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </FeatCard>

            {/* Authentication gateways */}
            <FeatCard
              className="col-span-2"
              icon={<Icons.Lock size={18} />}
              title="Authentication gateways"
              desc="Pluggable SSO per tenant — Microsoft, Google, or custom OIDC."
            >
              <div className="mt-3.5 flex items-center gap-2 rounded-[9px] border border-white/8 bg-black/20 px-2.75 py-2">
                <Icons.Lock size={13} style={{ color: "#9FD3B8" }} />
                <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[10.5px] text-white/75">
                  sso.northridge.edu/app-auth
                </span>
                <span className="text-[9.5px] font-bold text-[#9FD3B8]">VERIFIED</span>
              </div>
            </FeatCard>

            {/* Redirect gateways */}
            <FeatCard
              className="col-span-2"
              icon={<Icons.Globe size={18} />}
              title="Redirect gateways"
              desc="Return traffic to tenant-owned URLs without leaving the app shell."
            >
              <div className="mt-3.5 flex items-center gap-2 rounded-[9px] border border-white/8 bg-black/20 px-2.75 py-2">
                <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[10px] text-white/75">
                  resolverite://…/callback
                </span>
                <Icons.Refresh size={13} style={{ color: "var(--rr-gold)" }} />
              </div>
            </FeatCard>

            {/* Branching intake */}
            <FeatCard
              className="col-span-2"
              icon={<Icons.List size={18} />}
              title="Branching intake"
              desc="Categories, questions and follow-ups you configure. Routing is automatic."
            >
              <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                <span className="rounded-full bg-white/10 px-2.25 py-1 text-[10.5px] font-semibold text-white">
                  Academic
                </span>
                <Icons.ChevronRight size={12} style={{ color: "rgba(255,255,255,0.4)" }} />
                <span className="rounded-full bg-gold px-2.25 py-1 text-[10.5px] font-semibold text-[#1A1206]">
                  Dispute a grade
                </span>
                <Icons.ChevronRight size={12} style={{ color: "rgba(255,255,255,0.4)" }} />
                <span className="inline-flex gap-0.75">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  ))}
                </span>
              </div>
            </FeatCard>

            {/* Mobile + Web — full width */}
            <div className="col-span-2 flex flex-wrap items-center gap-6 rounded-card border border-white/9 bg-white/5 px-6 py-5 nav:col-span-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-white/8 text-gold">
                <Icons.Phone size={20} />
              </div>
              <div className="min-w-55 flex-1">
                <div className="w-h3 text-[18px] text-white">One platform, two front doors</div>
                <div className="mt-0.75 text-[14px] leading-normal text-white/70">
                  A native-feeling iOS &amp; Android app for students, and a full standalone CRM for
                  your moderators and review panels.
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                {[
                  { l: "iOS", ic: <Icons.Phone size={13} /> },
                  { l: "Android", ic: <Icons.Phone size={13} /> },
                  { l: "Web CRM", ic: <Icons.Globe size={13} /> },
                ].map((p) => (
                  <span
                    key={p.l}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/8 px-3 py-1.75 text-[12px] font-semibold text-white"
                  >
                    {p.ic}
                    {p.l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App download */}
      <section className="px-6 py-22 nav:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 nav:grid-cols-2 nav:gap-16">
          <div>
            <div className="w-eyebrow">Student mobile</div>
            <h2 className="w-h1 mt-3">
              A pocket-sized place
              <br />
              to be heard.
            </h2>
            <p className="w-body mt-3.5 max-w-115">
              File complaints, follow up on tickets, and reach moderators directly — themed with
              your university&apos;s identity end-to-end.
            </p>
            <div className="mt-6.5 flex flex-wrap gap-3">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>
            <div className="mt-6 flex gap-5.5 text-[13px] text-muted">
              <Stat n="4.8" sub="App Store" />
              <Stat n="48 h" sub="median response" />
              <Stat n="98%" sub="closure rate" />
            </div>
          </div>
          <div className="flex items-center justify-center py-5">
            <PhoneFan />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-surface px-6 py-22 nav:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-150">
              <div className="w-eyebrow">Security &amp; compliance</div>
              <h2 className="w-h1 mt-3">
                Built like the
                <br />
                institutions you serve.
              </h2>
              <p className="w-body mt-3.5 max-w-125">
                Encryption in transit and at rest, granular role-based access, and strict tenant
                isolation — vetted by the kind of IT and legal teams you answer to.
              </p>
            </div>
            <button className="w-btn w-btn-ghost">
              <Icons.Shield size={15} style={{ color: "var(--rr-brand-ink)" }} /> Read the security
              overview
            </button>
          </div>

          {/* Three pillars */}
          <div className="mt-11 grid grid-cols-1 gap-4 nav:grid-cols-3">
            {/* Encryption */}
            <div className="w-card flex flex-col">
              <div className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-brand-soft text-brand-ink">
                <Icons.Lock size={20} />
              </div>
              <div className="w-h3 mt-4 text-[18px]">Encryption everywhere</div>
              <div className="w-body mt-1.5 text-[14px]">
                Data is encrypted the moment it leaves a device and stays that way at rest.
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {(
                  [
                    ["In transit", "TLS 1.3"],
                    ["At rest", "AES-256"],
                    ["Key management", "HSM-backed"],
                  ] as [string, string][]
                ).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between rounded-[9px] border border-line bg-bg px-3 py-2.25"
                  >
                    <span className="text-[12.5px] font-medium text-ink-2">{k}</span>
                    <span className="font-mono text-[12px] font-semibold text-brand-ink">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Role-based access — permission matrix */}
            <div className="w-card flex flex-col">
              <div className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-gold-soft text-gold">
                <Icons.User size={20} />
              </div>
              <div className="w-h3 mt-4 text-[18px]">Role-based access</div>
              <div className="w-body mt-1.5 text-[14px]">
                Every person sees exactly what their role permits — nothing more.
              </div>
              <div className="mt-4 overflow-hidden rounded-[10px] border border-line">
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] bg-surface-2 px-3 py-2">
                  {["", "Admin", "Mod", "Student"].map((h) => (
                    <div
                      key={h}
                      className={
                        "text-[10px] font-bold uppercase tracking-[0.04em] text-muted " +
                        (h ? "text-center" : "text-left")
                      }
                    >
                      {h}
                    </div>
                  ))}
                </div>
                {(
                  [
                    ["View case", [1, 1, 2]],
                    ["Assign", [1, 1, 0]],
                    ["Close", [1, 1, 0]],
                    ["Export log", [1, 0, 0]],
                  ] as [string, number[]][]
                ).map(([action, perms]) => (
                  <div
                    key={action}
                    className="grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center border-t border-line px-3 py-2.25"
                  >
                    <span className="text-[12px] font-medium text-ink">{action}</span>
                    {perms.map((p, j) => (
                      <div key={j} className="flex justify-center">
                        {p === 1 ? (
                          <Icons.CheckBare size={13} style={{ color: "var(--rr-success)" }} />
                        ) : p === 2 ? (
                          <span className="text-[9.5px] font-bold text-gold">OWN</span>
                        ) : (
                          <span className="h-0.5 w-2.5 rounded-[1px] bg-line-strong" />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Tenant isolation & residency */}
            <div className="w-card flex flex-col">
              <div className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-success-soft text-success">
                <Icons.Globe size={20} />
              </div>
              <div className="w-h3 mt-4 text-[18px]">Isolation &amp; residency</div>
              <div className="w-body mt-1.5 text-[14px]">
                Each tenant&apos;s data is partitioned and pinned to the region you choose.
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {[
                  { n: "Northridge", r: "US-West" },
                  { n: "Atlas NGO", r: "EU-Central" },
                  { n: "Meridian", r: "APAC" },
                ].map((t) => (
                  <div
                    key={t.n}
                    className="flex items-center gap-2.5 rounded-[9px] border border-line bg-bg px-3 py-2.25"
                  >
                    <Icons.Lock size={13} style={{ color: "var(--rr-success)" }} />
                    <span className="flex-1 text-[12.5px] font-semibold text-ink">{t.n}</span>
                    <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[10.5px] font-semibold text-muted">
                      {t.r}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance seals */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-5 rounded-card border border-line bg-bg px-7 py-5.5">
            <div className="text-[13px] font-semibold text-ink-2">
              Independently audited &amp; certified
            </div>
            <div className="flex flex-wrap gap-7">
              {[
                { t: "SOC 2 Type II", s: "Renewed annually" },
                { t: "FERPA-aligned", s: "US education" },
                { t: "GDPR-ready", s: "EU residency" },
                { t: "ISO 27001", s: "Certified 2024" },
              ].map((b) => (
                <div key={b.t} className="flex items-center gap-2.75">
                  <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface text-brand-ink">
                    <Icons.Shield size={18} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-ink">{b.t}</div>
                    <div className="w-meta text-[11px]">{b.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface px-6 py-22 nav:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-160 text-center">
            <div className="w-eyebrow">Loved by the people who run it</div>
            <h2 className="w-h1 mt-3">
              Trusted across every
              <br />
              kind of institution.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 nav:grid-cols-[1.5fr_1fr]">
            {/* Featured quote with metrics */}
            <div className="relative overflow-hidden rounded-card-lg bg-[linear-gradient(160deg,var(--rr-brand)_0%,var(--rr-brand-strong)_100%)] px-11 py-10 text-white">
              <div className="absolute -right-10 -top-10 opacity-7">
                <Icons.Scale size={260} />
              </div>
              <div className="relative">
                <div className="h-7.5 font-serif text-[64px] leading-[0.6] text-gold">“</div>
                <div className="mt-2 font-serif text-[27px] font-medium leading-[1.34] tracking-[-0.005em]">
                  Within a semester our grievance backlog dropped from sixty open tickets to seven.
                  The audit log alone has made our review panels twice as fast.
                </div>
                <div className="mt-7 flex items-center gap-3">
                  <FakeAvatar name="Anika Chen" size={46} color="#B5895B" />
                  <div>
                    <div className="text-[14.5px] font-semibold">Anika Chen</div>
                    <div className="text-[12.5px] text-white/60">
                      Dean of Student Affairs · Northridge University
                    </div>
                  </div>
                </div>
                <div className="mt-7 flex flex-wrap gap-10 border-t border-white/12 pt-6">
                  {(
                    [
                      ["88%", "backlog cleared"],
                      ["2×", "faster panels"],
                      ["1 sem", "to roll out"],
                    ] as [string, string][]
                  ).map(([n, l]) => (
                    <div key={l}>
                      <div className="font-serif text-[28px] font-semibold leading-none tracking-[-0.01em] text-gold">
                        {n}
                      </div>
                      <div className="mt-1.25 text-[11.5px] text-white/60">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stacked supporting quotes */}
            <div className="flex flex-col gap-4">
              {[
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
              ].map((t) => (
                <div key={t.n} className="w-card flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <Stars />
                    <span className="w-chip w-chip-neutral text-[10.5px]">{t.sector}</span>
                  </div>
                  <div className="mt-3 flex-1 font-serif text-[16.5px] font-medium leading-[1.4] text-ink">
                    {t.q}
                  </div>
                  <div className="mt-4 flex items-center gap-2.5">
                    <FakeAvatar name={t.n} size={34} />
                    <div>
                      <div className="text-[13px] font-semibold text-ink">{t.n}</div>
                      <div className="w-meta text-[11.5px]">{t.r}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom strip: logos + rating */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-6 rounded-card border border-line bg-bg px-7 py-5">
            <div className="flex items-center gap-3.5">
              <div className="flex">
                {["AC", "IK", "JC", "RS", "DW"].map((n, i) => (
                  <div key={n} style={{ marginLeft: i === 0 ? 0 : -10 }}>
                    <FakeAvatar name={n} size={36} />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <Stars />
                  <span className="text-[14px] font-bold text-ink">4.8 / 5</span>
                </div>
                <div className="w-meta mt-0.5 text-[12px]">
                  from 184 institutions across 12 countries
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-7 opacity-75">
              {["Northridge", "Atlas NGO", "Meridian", "Eastlake", "Civic Council"].map((n) => (
                <div key={n} className="flex items-center gap-1.75">
                  <div className="h-4.5 w-4.5 rounded bg-ink-2" />
                  <span className="font-serif text-[13px] font-semibold text-ink-2">{n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 pb-22 pt-18 nav:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-160 text-center">
            <div className="w-eyebrow">Plans</div>
            <h2 className="w-h1 mt-3">Pay for the seats that need it. Not per&nbsp;case.</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-275 grid-cols-1 gap-4.5 sm:grid-cols-2 nav:grid-cols-3">
            {[
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
            ].map((p) => (
              <div
                key={p.name}
                className={
                  "w-card relative p-7 " +
                  (p.highlight
                    ? "border-[1.5px] border-brand-ink shadow-[0_22px_50px_rgba(30,58,95,0.12)]"
                    : "")
                }
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-6 rounded-full bg-brand px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                    Most popular
                  </div>
                )}
                <div className="w-h3">{p.name}</div>
                <div className="w-meta mt-1">{p.sub}</div>
                <div className="mt-4.5 flex items-baseline gap-1.5">
                  <div className="font-serif text-[38px] font-semibold leading-none tracking-[-0.01em] text-ink">
                    {p.price}
                  </div>
                  <div className="w-meta text-[13px]">{p.per}</div>
                </div>
                <button
                  className={`w-btn mt-5 w-full ${p.highlight ? "w-btn-primary" : "w-btn-ghost"}`}
                >
                  {p.cta}
                  <Icons.ChevronRight size={14} />
                </button>
                <div className="mt-5.5 flex flex-col gap-2.5">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Icons.CheckBare
                        size={16}
                        style={{ color: "var(--rr-success)", flexShrink: 0, marginTop: 2 }}
                      />
                      <span className="text-[13.5px] text-ink-2">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface px-6 py-18 nav:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 nav:grid-cols-[1fr_1.4fr] nav:gap-16">
          <div>
            <div className="w-eyebrow">FAQ</div>
            <h2 className="w-h1 mt-3">Frequently asked.</h2>
            <p className="w-body mt-3.5 max-w-80">
              Need something specific? Reach our team — we onboard new institutions every week.
            </p>
            <button className="w-btn w-btn-ghost mt-4.5">
              <Icons.Mail size={14} /> Talk to us
            </button>
          </div>
          <Faq />
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ── Hero visual: real product screenshots (browser window + floating phone)
function HeroVisual() {
  const crm = "/assets/hero-crm.png";
  const mobile = "/assets/hero-mobile.png";
  return (
    <div className="relative pb-7">
      {/* Browser window framing the real admin dashboard screenshot */}
      <div className="overflow-hidden rounded-[18px] bg-surface shadow-[0_50px_100px_-20px_rgba(15,27,45,0.28),0_0_0_1px_var(--rr-line)]">
        <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-3.5 py-2.75">
          <span className="h-2.75 w-2.75 rounded-full bg-[#E55C5C]" />
          <span className="h-2.75 w-2.75 rounded-full bg-[#E8B842]" />
          <span className="h-2.75 w-2.75 rounded-full bg-[#42B883]" />
          <div className="flex flex-1 justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-[7px] border border-line bg-surface px-3 py-0.75 font-mono text-[11px] text-muted">
              <Icons.Lock size={11} style={{ color: "var(--rr-success)" }} />
              northridge.resolverite.app/settings/branding
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={crm}
          alt="ResolveRite university admin dashboard — branding & theme"
          className="block w-full"
        />
      </div>

      {/* Floating phone framing the real student app screenshot */}
      <div className="absolute -bottom-2 -left-6.5">
        <div className="h-90 w-43 rounded-4xl bg-ink p-2.25 shadow-[0_30px_60px_rgba(15,27,45,0.4),0_0_0_1px_rgba(0,0,0,0.06)]">
          <div className="h-full w-full overflow-hidden rounded-3xl bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mobile}
              alt="ResolveRite student mobile app — home"
              className="block h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StoreBadge({ store }: { store: "apple" | "google" }) {
  return (
    <div className="inline-flex min-w-45 cursor-pointer items-center gap-3 rounded-xl bg-ink px-4.5 py-2.5 text-white">
      {store === "apple" ? (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
          <path d="M16.5 12.5c0-2.5 2-3.7 2.1-3.8-1.1-1.6-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.4-.8s2 .8 3.4.8c1.4 0 2.3-1.2 3.2-2.5.6-.9 1.1-1.8 1.4-2.7-3-1.1-3.3-3.3-3.3-3.3zM14.2 5c.7-.9 1.2-2.1 1.1-3.4-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.3-.6 3-1.4z" />
        </svg>
      ) : (
        <svg width="22" height="24" viewBox="0 0 24 24" fill="#fff">
          <path d="M3 2l12 10L3 22V2zM15 12l4-3 3 1.5L17.5 12 22 13.5 19 15l-4-3z" />
        </svg>
      )}
      <div>
        <div className="text-[10.5px] opacity-80">
          {store === "apple" ? "Download on the" : "Get it on"}
        </div>
        <div className="mt-px font-serif text-[17px] font-semibold">
          {store === "apple" ? "App Store" : "Google Play"}
        </div>
      </div>
    </div>
  );
}

function Stat({ n, sub }: { n: string; sub: string }) {
  return (
    <div>
      <div className="font-serif text-[22px] font-semibold leading-none tracking-[-0.005em] text-ink">
        {n}
      </div>
      <div className="w-meta mt-1 text-[11.5px]">{sub}</div>
    </div>
  );
}

function Phone({
  img,
  alt,
  w = 248,
  style,
}: {
  img: string;
  alt: string;
  w?: number;
  style?: React.CSSProperties;
}) {
  // Frames a full-screen iOS export (1206×2622) in a thin device bezel.
  // Bezel/radius are derived from `w`, so this stays inline-styled.
  const ratio = 2622 / 1206;
  const bezel = Math.round(w * 0.035);
  const innerW = w;
  const innerH = Math.round(w * ratio);
  const radius = Math.round(w * 0.155);
  return (
    <div
      className="relative bg-ink shadow-[0_40px_80px_-20px_rgba(15,27,45,0.45),0_0_0_1px_rgba(0,0,0,0.06)]"
      style={{
        width: innerW + bezel * 2,
        height: innerH + bezel * 2,
        borderRadius: radius + bezel,
        padding: bezel,
        ...style,
      }}
    >
      <div
        className="overflow-hidden bg-bg"
        style={{ width: innerW, height: innerH, borderRadius: radius }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={alt} className="block h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}

function PhoneFan() {
  const cat = "/assets/flow-category.png";
  const q = "/assets/flow-question.png";
  const sub = "/assets/flow-subquestions.png";
  return (
    <div className="relative flex h-150 w-140 max-w-full items-center justify-center">
      {/* soft glow behind */}
      <div className="absolute h-110 w-110 rounded-full bg-[radial-gradient(circle,var(--rr-brand-soft)_0%,transparent_70%)] blur-sm" />
      {/* left phone — pick a category, rotated back */}
      <div className="absolute left-1.5 top-19.5 z-1 -rotate-9">
        <Phone w={196} img={cat} alt="Student app — choose a complaint category" />
      </div>
      {/* right phone — sub-questions, rotated forward */}
      <div className="absolute right-1.5 top-19.5 z-1 rotate-9">
        <Phone w={196} img={sub} alt="Student app — branching follow-up questions" />
      </div>
      {/* center phone — pick a question, forward */}
      <div className="relative z-3 -translate-y-2.5">
        <Phone w={238} img={q} alt="Student app — pick a question" />
      </div>
    </div>
  );
}

function FeatCard({
  className = "",
  icon,
  eyebrow,
  title,
  desc,
  children,
}: {
  className?: string;
  icon: React.ReactNode;
  eyebrow?: string;
  title: string;
  desc: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={
        "flex flex-col rounded-card border border-white/9 bg-white/5 p-5.5 " +
        className
      }
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[10px] bg-white/8 text-gold">
          {icon}
        </div>
        {eyebrow && (
          <span className="text-[10.5px] font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </span>
        )}
      </div>
      <div className="w-h3 mt-4 text-[18px] text-white">{title}</div>
      <div className="mt-1.5 text-[13.5px] leading-normal text-white/70">{desc}</div>
      {children}
    </div>
  );
}

import { Icons } from "@/components/Icons";
import { FakeAvatar, Stars } from "@/components/shared";
import { Faq } from "@/components/Faq";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { HeroVisual, StoreBadge, Stat, PhoneFan, FeatCard } from "@/components/landing";
import {
  heroAvatars,
  trustedLogos,
  audiences,
  howItWorksSteps,
  brandSwatches,
  brandTokens,
  auditLogRows,
  platformChannels,
  mobileStats,
  encryptionSpecs,
  permissionRoles,
  permissionMatrix,
  tenantRegions,
  complianceSeals,
  featuredMetrics,
  supportingQuotes,
  ratingAvatars,
  ratingLogos,
  pricingPlans,
} from "@/libs/data";

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
            <h1 className="font-serif text-[clamp(40px,4.4vw,58px)] font-semibold leading-[1.04] tracking-[-0.022em] text-ink m-0">
              Smarter dispute
              <br />
              resolution,{" "}
              <span className="italic text-brand-ink">end&nbsp;to&nbsp;end.</span>
            </h1>
            <p className="text-[18px] leading-[1.55] text-ink-2 m-0 max-w-130">
              ResolveRite replaces the spreadsheets, email chains and PDFs your institution relies
              on with a structured, transparent, auditable system — from intake to outcome.
            </p>
            <div className="mt-7.5 flex flex-wrap gap-3">
              <button className="inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background,box-shadow,transform,opacity] duration-160 ease-[ease] active:translate-y-px h-12.5 px-6 rounded-xl text-[15px] bg-brand text-white shadow-[0_1px_2px_rgba(20,43,73,0.18)] hover:bg-brand-strong dark:hover:bg-[#2c5388]">
                Start onboarding
                <Icons.ChevronRight size={16} />
              </button>
              <button className="inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background,box-shadow,transform,opacity] duration-160 ease-[ease] active:translate-y-px h-12.5 px-6 rounded-xl text-[15px] bg-surface text-ink border border-line-strong hover:bg-surface-2">
                <Icons.Chat size={16} /> Book a demo
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-[12.5px] text-muted">
              <div className="flex">
                {heroAvatars.map((n, i) => (
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
          <div className="text-[11.5px] font-bold uppercase tracking-[0.13em] text-gold text-center">Operating across 12 countries · 4 sectors</div>
          <div className="mt-5.5 grid grid-cols-3 items-center justify-items-center gap-6 opacity-70 md:grid-cols-6">
            {trustedLogos.map((n) => (
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
            <div className="text-[11.5px] font-bold uppercase tracking-[0.13em] text-gold">Who it&apos;s for</div>
            <h2 className="font-serif text-[clamp(28px,3vw,38px)] font-semibold leading-[1.12] tracking-[-0.018em] text-ink m-0">Built for institutions that take fairness seriously.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4.5 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((c) => (
              <div key={c.t} className="rounded-card border border-line bg-surface p-5.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-brand-soft text-brand-ink">
                  {c.i}
                </div>
                <div className="font-serif text-[16px] font-semibold tracking-[-0.006em] text-ink leading-tight mt-4.5">{c.t}</div>
                <div className="text-[15px] leading-[1.6] text-ink-2 m-0">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-22 nav:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 nav:grid-cols-[1fr_1.4fr] nav:gap-16">
          <div>
            <div className="text-[11.5px] font-bold uppercase tracking-[0.13em] text-gold">How it works</div>
            <h2 className="font-serif text-[clamp(28px,3vw,38px)] font-semibold leading-[1.12] tracking-[-0.018em] text-ink m-0">
              From <span className="italic text-brand-ink">concern</span> to closure in three
              movements.
            </h2>
            <p className="text-[15px] leading-[1.6] text-ink-2 m-0 max-w-90">
              No more lost emails or PDF attachments. Every case is tied to a ticket ID and a
              structured workflow your panels can actually audit.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            {howItWorksSteps.map((s) => (
              <div
                key={s.n}
                className="grid grid-cols-[64px_1fr] items-start gap-6 rounded-card border border-line bg-surface px-6.5 py-5.5"
              >
                <div className="font-serif text-[30px] font-semibold leading-none tracking-[-0.005em] text-gold">
                  {s.n}
                </div>
                <div>
                  <div className="font-serif text-[16px] font-semibold tracking-[-0.006em] text-ink leading-tight">{s.t}</div>
                  <div className="text-[15px] leading-[1.6] text-ink-2 m-0">{s.d}</div>
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
              <div className="text-[11.5px] font-bold uppercase tracking-[0.13em] text-gold">The platform</div>
              <h2 className="font-serif text-[clamp(28px,3vw,38px)] font-semibold leading-[1.12] tracking-[-0.018em] text-ink m-0">
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

          <div className="mt-12 grid grid-cols-2 gap-4 auto-rows-[minmax(0,auto)] md:grid-cols-6">
            {/* Custom branding — large, with themed-app preview */}
            <FeatCard
              className="col-span-2 md:col-span-3 md:row-span-2 min-h-75"
              icon={<Icons.Edit size={18} />}
              eyebrow="Make it theirs"
              title="Custom branding, end to end"
              desc="Each tenant themes the mobile app and standalone CRM — logo, colors, splash and welcome image. Published in one click."
            >
              <div className="mt-auto flex items-end gap-3.5">
                {/* mini themed phone */}
                <div className="w-29 shrink-0 rounded-[18px] bg-[#0c1626] p-1.75 shadow-[0_16px_30px_rgba(0,0,0,0.3)]">
                  <div className="flex h-39 flex-col items-center gap-2 overflow-hidden rounded-[13px] bg-[linear-gradient(170deg,#1E3A5F,#16294A)] px-3 pb-3 pt-4.5">
                    <div className="flex items-center justify-center rounded-lg bg-gold text-brand-strong font-serif font-bold shrink-0 h-7.5 w-7.5 text-[14px]">N</div>
                    <div className="font-serif text-[12px] font-semibold text-white">Northridge</div>
                    <div className="mt-auto flex h-6.5 w-full items-center justify-center rounded-[7px] bg-white text-[9px] font-bold text-[#16294A]">
                      Sign in
                    </div>
                  </div>
                </div>
                {/* swatches + tokens */}
                <div className="flex-1">
                  <div className="mb-2.5 flex gap-1.75">
                    {brandSwatches.map((c) => (
                      <div
                        key={c}
                        className="h-7.5 w-7.5 rounded-lg border border-white/18"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                  {brandTokens.map(([k, v]) => (
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
              className="col-span-2 md:col-span-3 md:row-span-2 min-h-75"
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
                {auditLogRows.map((r, i) => (
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
            <div className="col-span-2 flex flex-wrap items-center gap-6 rounded-card border border-white/9 bg-white/5 px-6 py-5 md:col-span-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-white/8 text-gold">
                <Icons.Phone size={20} />
              </div>
              <div className="min-w-55 flex-1">
                <div className="font-serif text-[16px] font-semibold tracking-[-0.006em] text-ink leading-tight">One platform, two front doors</div>
                <div className="mt-0.75 text-[14px] leading-normal text-white/70">
                  A native-feeling iOS &amp; Android app for students, and a full standalone CRM for
                  your moderators and review panels.
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                {platformChannels.map((p) => (
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
            <div className="text-[11.5px] font-bold uppercase tracking-[0.13em] text-gold">Student mobile</div>
            <h2 className="font-serif text-[clamp(28px,3vw,38px)] font-semibold leading-[1.12] tracking-[-0.018em] text-ink m-0">
              A pocket-sized place
              <br />
              to be heard.
            </h2>
            <p className="text-[15px] leading-[1.6] text-ink-2 m-0 max-w-115">
              File complaints, follow up on tickets, and reach moderators directly — themed with
              your university&apos;s identity end-to-end.
            </p>
            <div className="mt-6.5 flex flex-wrap gap-3">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>
            <div className="mt-6 flex gap-5.5 text-[13px] text-muted">
              {mobileStats.map((s) => (
                <Stat key={s.sub} n={s.n} sub={s.sub} />
              ))}
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
              <div className="text-[11.5px] font-bold uppercase tracking-[0.13em] text-gold">Security &amp; compliance</div>
              <h2 className="font-serif text-[clamp(28px,3vw,38px)] font-semibold leading-[1.12] tracking-[-0.018em] text-ink m-0">
                Built like the
                <br />
                institutions you serve.
              </h2>
              <p className="text-[15px] leading-[1.6] text-ink-2 m-0 max-w-125">
                Encryption in transit and at rest, granular role-based access, and strict tenant
                isolation — vetted by the kind of IT and legal teams you answer to.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background,box-shadow,transform,opacity] duration-160 ease-[ease] active:translate-y-px h-10.5 px-4.5 rounded-[10px] text-[13.5px] bg-surface text-ink border border-line-strong hover:bg-surface-2">
              <Icons.Shield size={15} style={{ color: "var(--rr-brand-ink)" }} /> Read the security
              overview
            </button>
          </div>

          {/* Three pillars */}
          <div className="mt-11 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Encryption */}
            <div className="rounded-card border border-line bg-surface p-5.5 flex flex-col">
              <div className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-brand-soft text-brand-ink">
                <Icons.Lock size={20} />
              </div>
              <div className="font-serif text-[16px] font-semibold tracking-[-0.006em] text-ink leading-tight mt-4">Encryption everywhere</div>
              <div className="text-[15px] leading-[1.6] text-ink-2 m-0">
                Data is encrypted the moment it leaves a device and stays that way at rest.
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {encryptionSpecs.map(([k, v]) => (
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
            <div className="rounded-card border border-line bg-surface p-5.5 flex flex-col">
              <div className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-gold-soft text-gold">
                <Icons.User size={20} />
              </div>
              <div className="font-serif text-[16px] font-semibold tracking-[-0.006em] text-ink leading-tight mt-4">Role-based access</div>
              <div className="text-[15px] leading-[1.6] text-ink-2 m-0">
                Every person sees exactly what their role permits — nothing more.
              </div>
              <div className="mt-4 overflow-hidden rounded-[10px] border border-line">
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] bg-surface-2 px-3 py-2">
                  {permissionRoles.map((h) => (
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
                {permissionMatrix.map(([action, perms]) => (
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
            <div className="rounded-card border border-line bg-surface p-5.5 flex flex-col">
              <div className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-success-soft text-success">
                <Icons.Globe size={20} />
              </div>
              <div className="font-serif text-[16px] font-semibold tracking-[-0.006em] text-ink leading-tight mt-4">Isolation &amp; residency</div>
              <div className="text-[15px] leading-[1.6] text-ink-2 m-0">
                Each tenant&apos;s data is partitioned and pinned to the region you choose.
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {tenantRegions.map((t) => (
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
              {complianceSeals.map((b) => (
                <div key={b.t} className="flex items-center gap-2.75">
                  <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface text-brand-ink">
                    <Icons.Shield size={18} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-ink">{b.t}</div>
                    <div className="text-[12.5px] leading-[1.45] text-muted">{b.s}</div>
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
            <div className="text-[11.5px] font-bold uppercase tracking-[0.13em] text-gold">Loved by the people who run it</div>
            <h2 className="font-serif text-[clamp(28px,3vw,38px)] font-semibold leading-[1.12] tracking-[-0.018em] text-ink m-0">
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
                  {featuredMetrics.map(([n, l]) => (
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
              {supportingQuotes.map((t) => (
                <div key={t.n} className="rounded-card border border-line bg-surface p-5.5 flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <Stars />
                    <span className="inline-flex items-center gap-1.25 rounded-full px-2.25 py-0.75 text-[11.5px] font-semibold leading-none bg-surface-2 text-ink-2">{t.sector}</span>
                  </div>
                  <div className="mt-3 flex-1 font-serif text-[16.5px] font-medium leading-[1.4] text-ink">
                    {t.q}
                  </div>
                  <div className="mt-4 flex items-center gap-2.5">
                    <FakeAvatar name={t.n} size={34} />
                    <div>
                      <div className="text-[13px] font-semibold text-ink">{t.n}</div>
                      <div className="text-[12.5px] leading-[1.45] text-muted">{t.r}</div>
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
                {ratingAvatars.map((n, i) => (
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
                <div className="text-[12.5px] leading-[1.45] text-muted mt-0.5">
                  from 184 institutions across 12 countries
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-7 opacity-75">
              {ratingLogos.map((n) => (
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
            <div className="text-[11.5px] font-bold uppercase tracking-[0.13em] text-gold">Plans</div>
            <h2 className="font-serif text-[clamp(28px,3vw,38px)] font-semibold leading-[1.12] tracking-[-0.018em] text-ink m-0">Pay for the seats that need it. Not per&nbsp;case.</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-275 grid-cols-1 gap-4.5 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((p) => (
              <div
                key={p.name}
                className={
                  "rounded-card border border-line bg-surface p-5.5 relative " +
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
                <div className="font-serif text-[16px] font-semibold tracking-[-0.006em] text-ink leading-tight">{p.name}</div>
                <div className="text-[12.5px] leading-[1.45] text-muted mt-1">{p.sub}</div>
                <div className="mt-4.5 flex items-baseline gap-1.5">
                  <div className="font-serif text-[38px] font-semibold leading-none tracking-[-0.01em] text-ink">
                    {p.price}
                  </div>
                  <div className="text-[12.5px] leading-[1.45] text-muted">{p.per}</div>
                </div>
                <button
                  className={`inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background,box-shadow,transform,opacity] duration-160 ease-[ease] active:translate-y-px h-10.5 px-4.5 rounded-[10px] text-[13.5px] mt-5 w-full ${p.highlight ? "bg-brand text-white shadow-[0_1px_2px_rgba(20,43,73,0.18)] hover:bg-brand-strong dark:hover:bg-[#2c5388]" : "bg-surface text-ink border border-line-strong hover:bg-surface-2"}`}
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
            <div className="text-[11.5px] font-bold uppercase tracking-[0.13em] text-gold">FAQ</div>
            <h2 className="font-serif text-[clamp(28px,3vw,38px)] font-semibold leading-[1.12] tracking-[-0.018em] text-ink m-0">Frequently asked.</h2>
            <p className="text-[15px] leading-[1.6] text-ink-2 m-0 max-w-80">
              Need something specific? Reach our team — we onboard new institutions every week.
            </p>
            <button className="inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background,box-shadow,transform,opacity] duration-160 ease-[ease] active:translate-y-px h-10.5 px-4.5 rounded-[10px] text-[13.5px] bg-surface text-ink border border-line-strong hover:bg-surface-2 mt-4.5">
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

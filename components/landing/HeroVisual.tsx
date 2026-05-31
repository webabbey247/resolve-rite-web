import { Icons } from "@/components/Icons";

// ── Hero visual: real product screenshots (browser window + floating phone)
export function HeroVisual() {
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

export default HeroVisual;

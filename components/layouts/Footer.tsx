import Icons from "../Icons";
import { RRWordmark } from "../shared";

const Footer = () => {
  const groups = [
    { t: "Product", items: ["Features", "Pricing", "Security", "Mobile app", "Changelog"] },
    { t: "Use cases", items: ["Universities", "NGOs", "HR departments", "Governance bodies"] },
    { t: "Resources", items: ["Docs", "API reference", "Implementation guide", "Status"] },
    { t: "Company", items: ["About", "Customers", "Careers", "Contact"] },
  ];
  return (
    <div className="bg-brand-strong px-6 pb-8 pt-16 text-white nav:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 nav:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <RRWordmark inverted />
          <div className="mt-4 max-w-70 text-[13.5px] leading-normal text-white/65">
            Smarter dispute resolution, end to end — for institutions that take fairness seriously.
          </div>
          <div className="mt-5 flex gap-2">
            <button className="w-btn w-btn-sm border border-white/20 bg-white/10 text-white">
              <Icons.Mail size={14} /> Contact sales
            </button>
          </div>
        </div>
        {groups.map((g) => (
          <div key={g.t}>
            <div className="mb-3.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-gold">
              {g.t}
            </div>
            <div className="flex flex-col gap-2.5">
              {g.items.map((i) => (
                <div key={i} className="text-[13.5px] text-white/78">
                  {i}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12.5px] text-white/55">
        <div>© 2026 ResolveRite, Inc. · Trusted by 184 institutions across 12 countries.</div>
        <div className="flex gap-4.5">
          <span>SOC 2 Type II</span>
          <span>FERPA</span>
          <span>GDPR</span>
          <span>ISO 27001</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;


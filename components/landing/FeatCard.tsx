import React from "react";

// ── Bento feature card used in the navy platform grid (icon + eyebrow +
//    title + desc, with optional illustrative children).
export function FeatCard({
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
    <div className={"flex flex-col rounded-card border border-white/9 bg-white/5 p-5.5 " + className}>
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

export default FeatCard;

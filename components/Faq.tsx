"use client";

import React, { useState } from "react";

const FAQS = [
  {
    q: "How long does onboarding take?",
    a: "Most universities complete the 7-step onboarding in under 30 minutes. Approval is typically within 2 business days.",
  },
  {
    q: "Can students report anonymously?",
    a: "Yes — anonymity is configured per-category by your moderators.",
  },
  {
    q: "How do you handle FERPA / data protection?",
    a: "Data is tenant-isolated and regional. We support US, EU and APAC residency.",
  },
  {
    q: "Does ResolveRite integrate with our SSO?",
    a: "Configure Microsoft, Google, or any custom OIDC endpoint from your tenant dashboard.",
  },
  {
    q: "What if our institution has its own intake forms?",
    a: "Branching intake is fully customisable — categories, questions and follow-ups.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={
              "flex items-start justify-between gap-6 py-5 " +
              (i === FAQS.length - 1 ? "" : "border-b border-line")
            }
          >
            <div className="flex-1">
              <div className="font-serif text-[19px] font-semibold tracking-[-0.005em] text-ink">
                {f.q}
              </div>
              {isOpen && (
                <div className="text-[15px] leading-[1.6] text-ink-2 m-0 max-w-140">{f.a}</div>
              )}
            </div>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Collapse" : "Expand"}
              className={
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[18px] font-semibold leading-none transition-colors " +
                (isOpen ? "bg-brand text-white" : "bg-surface-2 text-ink-2")
              }
            >
              {isOpen ? "–" : "+"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Faq;

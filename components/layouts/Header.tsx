"use client";

import React, { useEffect, useState } from "react";
import Icons from "../Icons";
import { RRWordmark } from "../shared";
import ThemeToggle from "../ThemeToggle";

// ── Marketing top nav — sticky, blurs + tints on scroll, collapses to a
//    hamburger menu below the `nav` (920px) breakpoint.
export function Header() {
  const items = ["Product", "Who it's for", "Pricing", "Security", "Resources"];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu once the layout reaches the desktop breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 920px)");
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      className={
        "sticky top-0 z-10 border-b border-line transition-colors " +
        (scrolled
          ? "bg-[color-mix(in_oklab,var(--rr-bg)_88%,transparent)] backdrop-blur-[20px]"
          : "bg-bg")
      }
    >
      <div className="flex items-center gap-8 px-6 py-3.5 nav:px-12">
        <RRWordmark />
        <div className="ml-6 hidden gap-1 nav:flex">
          {items.map((i) => (
            <button
              key={i}
              className="rounded-lg px-3 py-2 text-[13.5px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {i}
            </button>
          ))}
        </div>
        <div className="flex-1" />
        <ThemeToggle />
        {/* Desktop actions — wrapped so the `hidden` utility isn't overridden
            by the `.w-btn` component class's own `display`. */}
        <div className="hidden items-center gap-3 nav:flex">
          <button className="w-btn w-btn-text font-semibold text-ink-2">Sign in</button>
          <button className="h-9.5 w-btn w-btn-primary w-btn-sm">
            Get started
            <Icons.ChevronRight size={14} />
          </button>
        </div>
        {/* Hamburger — mobile only */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
          className="inline-flex h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-line-strong bg-surface text-ink-2 transition-colors hover:bg-surface-2 nav:hidden"
        >
          {menuOpen ? <Icons.X size={18} /> : <Icons.Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-line px-6 py-4 nav:hidden"
        >
          {items.map((i) => (
            <button
              key={i}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-left text-[15px] font-medium text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {i}
            </button>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
            <button className="w-btn w-btn-ghost w-full justify-center">Sign in</button>
            <button className="w-btn w-btn-primary w-full justify-center">
              Get started
              <Icons.ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

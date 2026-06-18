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
            by the button's own `inline-flex` display. */}
        <div className="hidden items-center gap-3 nav:flex">
          <a href="https://portal.resolverite.app/auth/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background,box-shadow,transform,opacity] duration-160 ease-[ease] active:translate-y-px h-auto px-2.5 py-2 rounded-[10px] text-[13.5px] bg-transparent hover:text-ink">Sign in</a>
          <a href="https://portal.resolverite.app/auth/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background,box-shadow,transform,opacity] duration-160 ease-[ease] active:translate-y-px h-9 px-3.5 rounded-[10px] text-[13px] bg-brand text-white shadow-[0_1px_2px_rgba(20,43,73,0.18)] hover:bg-brand-strong dark:hover:bg-[#2c5388]">
            Get started
            <Icons.ChevronRight size={14} />
          </a>
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
            <a href="https://portal.resolverite.app/auth/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background,box-shadow,transform,opacity] duration-160 ease-[ease] active:translate-y-px h-10.5 px-4.5 rounded-[10px] text-[13.5px] bg-surface text-ink border border-line-strong hover:bg-surface-2 w-full">Sign in</a>
            <a href="https://portal.resolverite.app/auth/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background,box-shadow,transform,opacity] duration-160 ease-[ease] active:translate-y-px h-10.5 px-4.5 rounded-[10px] text-[13.5px] bg-brand text-white shadow-[0_1px_2px_rgba(20,43,73,0.18)] hover:bg-brand-strong dark:hover:bg-[#2c5388] w-full">
              Get started
              <Icons.ChevronRight size={14} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

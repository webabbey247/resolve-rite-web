"use client";

import React, { useEffect, useState } from "react";
import { Icons } from "./Icons";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("rr-theme", theme);
  } catch {
    /* ignore storage failures (private mode, etc.) */
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  // Start undefined to avoid a hydration mismatch — the inline boot script in
  // <head> has already set the real theme; we read it back after mount.
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => {
        const next: Theme = isDark ? "light" : "dark";
        setTheme(next);
        applyTheme(next);
      }}
      className={
        "inline-flex h-9.5 w-9.5 items-center justify-center rounded-[10px] " +
        "border border-line-strong bg-surface text-ink-2 transition-colors " +
        "hover:bg-surface-2 " +
        (className ?? "")
      }
    >
      {/* Render a stable icon until mounted to keep SSR/CSR markup identical. */}
      {theme === undefined ? (
        <Icons.Moon size={16} />
      ) : isDark ? (
        <Icons.Sun size={16} />
      ) : (
        <Icons.Moon size={16} />
      )}
    </button>
  );
}

export default ThemeToggle;

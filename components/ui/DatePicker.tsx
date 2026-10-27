"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Icons from "../Icons";

/**
 * A calendar date picker in the site's design (instead of the browser's own),
 * for working days: future days only (from `min` on; earlier days are left
 * out), Monday to Friday — Saturday and Sunday show, greyed out, but can't be
 * picked. The value is a plain day, "YYYY-MM-DD". The calendar
 * renders into document.body, so a scrolling modal can't clip it. Keyboard:
 * arrows move by working day/week, PageUp/PageDown by month, Home/End to
 * Monday/Friday, Enter picks, Esc closes.
 */

const MARGIN = 8;
const GAP = 6;
const PANEL_W = 304;
const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const pad = (n: number) => String(n).padStart(2, "0");
const toKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromKey = (k: string) => {
  const [y, m, d] = k.split("-").map(Number);
  return new Date(y!, m! - 1, d!);
};
const addDays = (k: string, n: number) => {
  const d = fromKey(k);
  d.setDate(d.getDate() + n);
  return toKey(d);
};
const addMonths = (k: string, n: number) => {
  const d = fromKey(k);
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + n);
  d.setDate(Math.min(day, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()));
  return toKey(d);
};
/** Monday–Friday. */
export const isWorkday = (k: string) => {
  const day = fromKey(k).getDay();
  return day >= 1 && day <= 5;
};
/** The nearest working day from `k`, stepping in `dir` (weekends are skipped). */
const toWorkday = (k: string, dir: 1 | -1 = 1) => {
  let d = k;
  while (!isWorkday(d)) d = addDays(d, dir);
  return d;
};
const longLabel = (k: string) => fromKey(k).toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short", year: "numeric" });

function CalendarGlyph() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0 text-muted"
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function DatePicker({
  id,
  value,
  onChange,
  onBlur,
  min,
  invalid,
  describedBy,
  className,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  min: string;
  invalid?: boolean;
  describedBy?: string;
  className: string;
}) {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(value || min);
  const [box, setBox] = useState<{ top: number; left: number } | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  const place = useCallback(() => {
    const a = trigger.current?.getBoundingClientRect();
    if (!a) return;
    const height = panel.current?.offsetHeight ?? 340;
    const roomBelow = window.innerHeight - a.bottom - GAP - MARGIN;
    const top = height <= roomBelow || roomBelow >= a.top - GAP - MARGIN ? a.bottom + GAP : Math.max(MARGIN, a.top - GAP - height);
    const width = Math.min(PANEL_W, window.innerWidth - MARGIN * 2);
    setBox({ top, left: Math.max(MARGIN, Math.min(a.right - width, window.innerWidth - width - MARGIN)) });
  }, []);

  useLayoutEffect(() => {
    if (open) place();
  }, [open, place, focus]);

  // The focused day follows the arrow keys.
  useEffect(() => {
    if (open) panel.current?.querySelector<HTMLButtonElement>(`[data-day="${focus}"]`)?.focus();
  }, [open, focus]);

  const close = useCallback(
    (refocus = true) => {
      setOpen(false);
      onBlur?.();
      if (refocus) trigger.current?.focus();
    },
    [onBlur],
  );

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!trigger.current?.contains(t) && !panel.current?.contains(t)) close(false);
    };
    // Escape closes the calendar, not the modal it sits in.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.stopPropagation();
      close();
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey, true);
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey, true);
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open, close, place]);

  const pick = (k: string) => {
    if (k < min || !isWorkday(k)) return;
    onChange(k);
    close();
  };

  const onGridKey = (e: React.KeyboardEvent) => {
    const moves: Record<string, () => string> = {
      ArrowLeft: () => toWorkday(addDays(focus, -1), -1),
      ArrowRight: () => toWorkday(addDays(focus, 1), 1),
      ArrowUp: () => addDays(focus, -7),
      ArrowDown: () => addDays(focus, 7),
      PageUp: () => toWorkday(addMonths(focus, -1)),
      PageDown: () => toWorkday(addMonths(focus, 1)),
      Home: () => addDays(focus, 1 - fromKey(focus).getDay()),
      End: () => addDays(focus, 5 - fromKey(focus).getDay()),
    };
    const move = moves[e.key];
    if (move) {
      e.preventDefault();
      const next = move();
      setFocus(next < min ? min : next);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      pick(focus);
    }
  };

  // The month on show is the focused day's.
  const shown = fromKey(focus);
  const year = shown.getFullYear();
  const month = shown.getMonth();
  const days = new Date(year, month + 1, 0).getDate();
  const monthStart = `${year}-${pad(month + 1)}-01`;
  const monthEnd = `${year}-${pad(month + 1)}-${pad(days)}`;
  // Each week Monday to Sunday. Past days and days outside this month are left blank; a future
  // weekend shows, disabled. A week with nothing to pick isn't shown.
  const today = toKey(new Date());
  type Cell = { k: string; open: boolean } | null;
  const weeks: Cell[][] = [];
  for (let monday = addDays(monthStart, 1 - (fromKey(monthStart).getDay() || 7)); monday <= monthEnd; monday = addDays(monday, 7)) {
    const week: Cell[] = Array.from({ length: 7 }, (_, i) => {
      const k = addDays(monday, i);
      if (k < monthStart || k > monthEnd) return null;
      if (isWorkday(k)) return k >= min ? { k, open: true } : null;
      return k > today ? { k, open: false } : null;
    });
    if (week.some((c) => c?.open)) weeks.push(week);
  }
  const minMonth = min.slice(0, 7);
  const atMinMonth = `${year}-${pad(month + 1)}` <= minMonth;

  return (
    <>
      <button
        ref={trigger}
        id={id}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-describedby={describedBy}
        onClick={() => {
          setFocus(value || min);
          setOpen((o) => !o);
        }}
        className={`${className} flex items-center gap-2.5 text-left ${invalid ? "border-danger" : ""}`}
      >
        <CalendarGlyph />
        <span className={`min-w-0 flex-1 truncate ${value ? "text-ink" : "text-faint"}`}>{value ? longLabel(value) : "Choose a date"}</span>
        <Icons.ChevronDown size={14} className="shrink-0 text-muted" />
      </button>
      {open
        ? createPortal(
            <div
              ref={panel}
              role="dialog"
              aria-label="Choose a date"
              style={box ? { top: box.top, left: box.left, width: Math.min(PANEL_W, window.innerWidth - MARGIN * 2) } : { top: -9999, left: -9999 }}
              className="fixed z-[70] rounded-2xl border border-line-strong bg-surface p-3.5 shadow-[0_18px_40px_-12px_rgba(12,22,38,0.35)]"
            >
              <div className="mb-2.5 flex items-center justify-between">
                <button
                  type="button"
                  aria-label="Previous month"
                  disabled={atMinMonth}
                  onClick={() => setFocus((f) => (toWorkday(addMonths(f, -1)) < min ? min : toWorkday(addMonths(f, -1))))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border-0 bg-transparent text-ink-2 hover:bg-surface-2 disabled:pointer-events-none disabled:opacity-30"
                >
                  <Icons.ChevronRight size={16} className="rotate-180" />
                </button>
                <span className="font-serif text-[16px] font-semibold text-ink" aria-live="polite">
                  {shown.toLocaleDateString(undefined, { month: "long", year: "numeric" })}
                </span>
                <button
                  type="button"
                  aria-label="Next month"
                  onClick={() => setFocus((f) => toWorkday(addMonths(f, 1)))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border-0 bg-transparent text-ink-2 hover:bg-surface-2"
                >
                  <Icons.ChevronRight size={16} />
                </button>
              </div>
              <div role="grid" aria-label={shown.toLocaleDateString(undefined, { month: "long", year: "numeric" })} onKeyDown={onGridKey}>
                <div role="row" className="grid grid-cols-7 gap-1">
                  {WEEKDAYS.map((w) => (
                    <span
                      key={w}
                      role="columnheader"
                      className={`py-1 text-center text-[11px] font-semibold uppercase tracking-[0.06em] ${w === "Sa" || w === "Su" ? "text-faint/50" : "text-faint"}`}
                    >
                      {w}
                    </span>
                  ))}
                </div>
                {weeks.map((week) => (
                  <div key={week.find((c) => c?.open)!.k} role="row" className="mt-1 grid grid-cols-7 gap-1">
                    {week.map((cell, i) =>
                      !cell ? (
                        <span key={`blank-${i}`} aria-hidden className="h-9" />
                      ) : cell.open ? (
                        <button
                          key={cell.k}
                          type="button"
                          role="gridcell"
                          data-day={cell.k}
                          tabIndex={cell.k === focus ? 0 : -1}
                          aria-selected={cell.k === value}
                          aria-label={longLabel(cell.k)}
                          onClick={() => pick(cell.k)}
                          className={`flex h-9 items-center justify-center rounded-lg border-0 text-[13.5px] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand/40 ${
                            cell.k === value ? "bg-brand font-semibold text-white" : "bg-transparent text-ink hover:bg-surface-2"
                          }`}
                        >
                          {fromKey(cell.k).getDate()}
                        </button>
                      ) : (
                        // Weekends: shown, greyed out, never picked.
                        <span
                          key={cell.k}
                          role="gridcell"
                          aria-disabled="true"
                          aria-label={`${longLabel(cell.k)}, unavailable — demos run Monday to Friday`}
                          title="Demos run Monday to Friday"
                          className="flex h-9 cursor-not-allowed items-center justify-center rounded-lg bg-surface-2/70 text-[13.5px] text-faint/70"
                        >
                          {fromKey(cell.k).getDate()}
                        </span>
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

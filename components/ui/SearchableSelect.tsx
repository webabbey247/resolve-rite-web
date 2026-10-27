"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Icons from "../Icons";

/**
 * A select with a search box — ported from resolve-rite-console's
 * components/ui/searchable-select.tsx (the onboarding dial-code picker), in this
 * site's design tokens. The panel renders into document.body (so a scrolling
 * modal can't clip it) and flips above the trigger when there's no room below.
 * Keyboard: type to filter, ↑/↓ to move, Enter to pick, Esc to close.
 */

const MARGIN = 8;
const GAP = 4;
const LIST_MAX_HEIGHT = 248;
const MIN_PANEL_HEIGHT = 120;

export type SelectOption = {
  value: string;
  label: string;
  /** Shown before the label — a flag, in practice. */
  leading?: string;
  /** Shown right-aligned and dimmed — a dialling code, in practice. */
  trailing?: string;
  /** Extra text matched by the search box but not displayed. */
  keywords?: string;
};

export function SearchableSelect({
  options,
  value,
  onChange,
  label,
  searchPlaceholder = "Search",
  triggerClassName,
  renderValue,
}: {
  options: readonly SelectOption[];
  value: string;
  onChange: (value: string) => void;
  /** Announced to screen readers — the visible label sits outside. */
  label: string;
  searchPlaceholder?: string;
  triggerClassName: string;
  renderValue: (selected: SelectOption | undefined) => React.ReactNode;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [box, setBox] = useState<{ top: number; left: number; width: number; maxHeight: number } | null>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const listBox = useRef<HTMLUListElement>(null);

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return options;
    return options.filter((o) => [o.label, o.trailing ?? "", o.keywords ?? ""].some((t) => t.toLowerCase().includes(needle)));
  }, [options, query]);

  const place = useCallback(() => {
    const anchor = trigger.current?.getBoundingClientRect();
    if (!anchor) return;
    const height =
      panel.current && listBox.current
        ? panel.current.offsetHeight - listBox.current.clientHeight + Math.min(listBox.current.scrollHeight, LIST_MAX_HEIGHT)
        : 300;
    const below = anchor.bottom + GAP;
    const roomBelow = window.innerHeight - below - MARGIN;
    const roomAbove = anchor.top - GAP - MARGIN;
    const downward = height <= roomBelow || roomBelow >= roomAbove;
    const maxHeight = Math.max(MIN_PANEL_HEIGHT, downward ? roomBelow : roomAbove);
    const width = Math.min(Math.max(anchor.width, 260), window.innerWidth - MARGIN * 2);
    setBox({
      top: downward ? below : Math.max(MARGIN, anchor.top - GAP - Math.min(height, maxHeight)),
      left: Math.max(MARGIN, Math.min(anchor.left, window.innerWidth - width - MARGIN)),
      width,
      maxHeight,
    });
  }, []);

  useLayoutEffect(() => {
    if (open) place();
  }, [open, place, matches.length]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!wrapper.current?.contains(t) && !panel.current?.contains(t)) setOpen(false);
    };
    // Escape closes the list, not the modal it sits in.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.stopPropagation();
      setOpen(false);
      trigger.current?.focus();
    };
    const onMove = (e: Event) => {
      if (e.type === "scroll" && panel.current?.contains(e.target as Node)) return;
      place();
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey, true);
    window.addEventListener("scroll", onMove, true);
    window.addEventListener("resize", onMove);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey, true);
      window.removeEventListener("scroll", onMove, true);
      window.removeEventListener("resize", onMove);
    };
  }, [open, place]);

  useEffect(() => {
    if (open) listBox.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const choose = (o: SelectOption) => {
    onChange(o.value);
    setOpen(false);
    setQuery("");
    trigger.current?.focus();
  };

  const onSearchKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, matches.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = matches[active];
      if (pick) choose(pick);
    }
  };

  return (
    <div ref={wrapper} className="relative h-full">
      <button
        ref={trigger}
        type="button"
        onClick={() => {
          setOpen((was) => !was);
          setQuery("");
          setActive(
            Math.max(
              0,
              options.findIndex((o) => o.value === value),
            ),
          );
        }}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-label={label}
        className={triggerClassName}
      >
        {renderValue(options.find((o) => o.value === value))}
        <Icons.ChevronDown size={14} className="shrink-0 text-muted" />
      </button>
      {open
        ? createPortal(
            <div
              ref={panel}
              style={box ? { top: box.top, left: box.left, width: box.width, maxHeight: box.maxHeight } : { top: -9999, left: -9999 }}
              className="fixed z-[70] flex flex-col overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_18px_40px_-12px_rgba(12,22,38,0.35)]"
            >
              <div className="flex shrink-0 items-center gap-2 border-b border-line px-3 py-2.5">
                <Icons.Search size={15} className="shrink-0 text-muted" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  onKeyDown={onSearchKey}
                  placeholder={searchPlaceholder}
                  aria-label={searchPlaceholder}
                  aria-controls={`${id}-list`}
                  className="w-full border-0 bg-transparent text-[14px] text-ink outline-none placeholder:text-faint max-md:text-[16px]"
                />
              </div>
              <ul
                ref={listBox}
                id={`${id}-list`}
                role="listbox"
                aria-label={label}
                className="m-0 min-h-0 max-h-62 list-none overflow-y-auto overscroll-contain p-0 py-1"
              >
                {matches.map((o, i) => (
                  <li key={o.value} data-index={i}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={o.value === value}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => choose(o)}
                      className={`flex w-full cursor-pointer items-center gap-2.5 border-0 px-3 py-2 text-left text-[13.5px] ${i === active ? "bg-surface-2" : "bg-transparent"}`}
                    >
                      {o.leading ? (
                        <span aria-hidden className="text-[16px] leading-none">
                          {o.leading}
                        </span>
                      ) : null}
                      <span className="min-w-0 flex-1 truncate text-ink">{o.label}</span>
                      {o.trailing ? <span className="shrink-0 text-[12.5px] text-muted">{o.trailing}</span> : null}
                      {o.value === value ? <Icons.CheckBare size={14} className="shrink-0 text-brand-ink" /> : null}
                    </button>
                  </li>
                ))}
                {matches.length === 0 ? <li className="px-3 py-6 text-center text-[13px] text-muted">Nothing matches “{query}”.</li> : null}
              </ul>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}

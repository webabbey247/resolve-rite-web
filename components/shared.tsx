import React from "react";
// ── ResolveRite brand mark (scale-of-justice cup + serif R)
// Sizes are computed from the `size` prop, so this stays inline-styled.
export function RRMark({
  size = 36,
  color,
  bg,
}: {
  size?: number;
  color?: string;
  bg?: string;
}) {
  const c = color || "var(--rr-gold)";
  const b = bg || "var(--rr-brand)";
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.24,
        background: b,
        color: c,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none">
        <path d="M12 3v18" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6 7h12" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6 7l-3 6h6L6 7z" fill={c} fillOpacity=".5" />
        <path d="M18 7l-3 6h6l-3-6z" fill={c} />
        <rect x="9" y="20" width="6" height="1.6" rx=".8" fill={c} />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 2,
          borderRadius: size * 0.2,
          border: `1px solid ${
            typeof c === "string" && c.startsWith("var") ? "rgba(181,137,91,0.35)" : c + "55"
          }`,
        }}
      />
    </div>
  );
}

export function RRWordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <RRMark size={32} />
      <div
        className={`font-serif text-[19px] font-semibold tracking-[-0.012em] ${
          inverted ? "text-white" : "text-ink"
        }`}
      >
        Resolve<span className="text-gold">Rite</span>
      </div>
    </div>
  );
}

// ── Fake avatar with initials
// Background colour is derived at runtime from the name, so this stays inline-styled.
export function FakeAvatar({
  name = "M O",
  size = 32,
  color,
}: {
  name?: string;
  size?: number;
  color?: string;
}) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
  const palette = ["var(--rr-brand)", "var(--rr-gold)", "#3F7559", "#9C3B2E", "#2A5C8C"];
  const bg = color || palette[name.length % palette.length];
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full font-serif font-semibold"
      style={{
        width: size,
        height: size,
        background: bg + "22",
        color: bg,
        fontSize: size * 0.4,
      }}
    >
      {initials}
    </div>
  );
}

export function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="var(--rr-gold)">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.4l1.4-6.8L2.2 9.9l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}



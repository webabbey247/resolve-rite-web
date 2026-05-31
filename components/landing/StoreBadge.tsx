// ── App-store download badge (Apple / Google), styled as a dark pill.
export function StoreBadge({ store }: { store: "apple" | "google" }) {
  return (
    <div className="inline-flex min-w-45 cursor-pointer items-center gap-3 rounded-xl bg-ink px-4.5 py-2.5 text-white">
      {store === "apple" ? (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
          <path d="M16.5 12.5c0-2.5 2-3.7 2.1-3.8-1.1-1.6-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.4-.8s2 .8 3.4.8c1.4 0 2.3-1.2 3.2-2.5.6-.9 1.1-1.8 1.4-2.7-3-1.1-3.3-3.3-3.3-3.3zM14.2 5c.7-.9 1.2-2.1 1.1-3.4-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.3-.6 3-1.4z" />
        </svg>
      ) : (
        <svg width="22" height="24" viewBox="0 0 24 24" fill="#fff">
          <path d="M3 2l12 10L3 22V2zM15 12l4-3 3 1.5L17.5 12 22 13.5 19 15l-4-3z" />
        </svg>
      )}
      <div>
        <div className="text-[10.5px] opacity-80">
          {store === "apple" ? "Download on the" : "Get it on"}
        </div>
        <div className="mt-px font-serif text-[17px] font-semibold">
          {store === "apple" ? "App Store" : "Google Play"}
        </div>
      </div>
    </div>
  );
}

export default StoreBadge;

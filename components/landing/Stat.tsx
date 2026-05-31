// ── Small stat block: serif number above a muted label.
export function Stat({ n, sub }: { n: string; sub: string }) {
  return (
    <div>
      <div className="font-serif text-[22px] font-semibold leading-none tracking-[-0.005em] text-ink">
        {n}
      </div>
      <div className="w-meta mt-1 text-[11.5px]">{sub}</div>
    </div>
  );
}

export default Stat;

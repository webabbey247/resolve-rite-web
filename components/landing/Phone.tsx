import React from "react";

// ── Frames a full-screen iOS export (1206×2622) in a thin device bezel.
//    Bezel/radius are derived from `w`, so this stays inline-styled.
export function Phone({
  img,
  alt,
  w = 248,
  style,
}: {
  img: string;
  alt: string;
  w?: number;
  style?: React.CSSProperties;
}) {
  const ratio = 2622 / 1206;
  const bezel = Math.round(w * 0.035);
  const innerW = w;
  const innerH = Math.round(w * ratio);
  const radius = Math.round(w * 0.155);
  return (
    <div
      className="relative bg-ink shadow-[0_40px_80px_-20px_rgba(15,27,45,0.45),0_0_0_1px_rgba(0,0,0,0.06)]"
      style={{
        width: innerW + bezel * 2,
        height: innerH + bezel * 2,
        borderRadius: radius + bezel,
        padding: bezel,
        ...style,
      }}
    >
      <div
        className="overflow-hidden bg-bg"
        style={{ width: innerW, height: innerH, borderRadius: radius }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={alt} className="block h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}

export default Phone;

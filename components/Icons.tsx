import React from "react";

type IconProps = {
  size?: number;
  style?: React.CSSProperties;
  className?: string;
};

const base = (size: number): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

function ChevronRight({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function ChevronDown({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Chat({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" />
    </svg>
  );
}

function Doc({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

function Shield({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z" />
    </svg>
  );
}

function User({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function Scale({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M7 21h10" />
      <path d="M5 7l-3 6h6l-3-6z" />
      <path d="M19 7l-3 6h6l-3-6z" />
    </svg>
  );
}

function Edit({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function Lock({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function Globe({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </svg>
  );
}

function List({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M8 6h13M8 12h13M8 18h13" />
      <path d="M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
  );
}

function Phone({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 18h2" />
    </svg>
  );
}

function Refresh({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}

function CheckBare({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Mail({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function Search({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function Bell({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9z" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  );
}

function Sun({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function Moon({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function Menu({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function X({ size = 16, style, className }: IconProps) {
  return (
    <svg {...base(size)} style={style} className={className}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export const Icons = {
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Chat,
  Doc,
  Shield,
  User,
  Scale,
  Edit,
  Lock,
  Globe,
  List,
  Phone,
  Refresh,
  CheckBare,
  Mail,
  Search,
  Bell,
};

export default Icons;

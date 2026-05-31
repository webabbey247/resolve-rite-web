import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ResolveRite — Smarter dispute resolution, end to end",
  description:
    "ResolveRite replaces the spreadsheets, email chains and PDFs your institution relies on with a structured, transparent, auditable system — from intake to outcome.",
};

// Runs before first paint to set the theme class — prevents a light/dark flash.
const themeBootScript = `
(function(){try{var t=localStorage.getItem('rr-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body
        style={
          {
            // wire the loaded fonts into the design tokens
            "--rr-sans": `var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
            "--rr-serif": `var(--font-source-serif), Georgia, "Times New Roman", serif`,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}

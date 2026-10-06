import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description =
  "Senior Backend Engineer with 8+ years architecting Node.js, TypeScript, and AWS systems — cutting API latency from seconds to milliseconds and serving 100K+ concurrent users.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title,
  description,
  authors: [{ name: profile.name, url: profile.site }],
  openGraph: {
    type: "website",
    url: profile.site,
    title,
    description,
    images: [{ url: profile.avatar, width: 256, height: 256, alt: profile.name }],
  },
  twitter: { card: "summary", title, description, images: [profile.avatar] },
  icons: { icon: profile.avatar, apple: profile.avatar },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
  ],
};

// Runs before first paint so the stored/system theme is applied without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain min-h-dvh">{children}</body>
    </html>
  );
}

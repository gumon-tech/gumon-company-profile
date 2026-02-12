import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ModeSync from "@/components/ModeSync";
import ModeBadge from "@/components/ModeBadge";
import NavLink from "@/components/NavLink";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://web.gumon.dev"),
  title: {
    default: "Gumon Technology — Open Infrastructure Platform",
    template: "%s — Gumon Technology",
  },
  description:
    "Open software infrastructure for modular systems — platform standards, reusable foundations, and partner-led ecosystems.",
  openGraph: {
    type: "website",
    title: "Gumon Technology — Open Infrastructure Platform",
    description:
      "Open software infrastructure for modular systems — platform standards, reusable foundations, and partner-led ecosystems.",
    url: "/",
  },
};

const nav = [
  { href: "/", label: "Platform" },
  { href: "/architecture", label: "Architecture" },
  { href: "/governance", label: "Governance" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/research", label: "Research" },
  { href: "/docs", label: "Docs" },
  { href: "/partners", label: "Partners" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-mode="institutional">
        <ModeSync />
        <div className="bg-veil" />
        <div className="grid-overlay" />

        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg0/55 border-b border-line/20">
          <div className="ui-container h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="logo-swap" aria-label="Gumon mark">
                <img src="/assets/logo/gumon-white.png" alt="Gumon" className="logo-inst" />
                <img src="/assets/logo/gumon-slate.png" alt="Gumon" className="logo-field" />
                <img src="/assets/logo/gumon-olive.png" alt="Gumon" className="logo-lab" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Gumon Technology</div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-mist">
                  Open Infrastructure Platform
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm text-mist">
              <ModeBadge />
              {nav.map((n) => (
                <NavLink key={n.href} href={n.href} label={n.label} />
              ))}
            </nav>

            <Link
              href="/manifesto"
              className="glass rounded-full px-4 py-2 text-sm shadow-soft hover:shadow-none transition"
            >
              Read Manifesto
            </Link>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-line/20">
          <div className="ui-container py-10 text-sm text-mist flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Gumon Technology.</div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link className="hover:text-ink transition" href="/manifesto">Manifesto</Link>
              <Link className="hover:text-ink transition" href="/architecture">Architecture</Link>
              <Link className="hover:text-ink transition" href="/governance">Governance</Link>
              <Link className="hover:text-ink transition" href="/deployments">Deployments</Link>
              <Link className="hover:text-ink transition" href="/brand">Brand</Link>
              <Link className="hover:text-ink transition" href="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

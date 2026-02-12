import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://web.gumon.dev"),
  title: {
    default: "Gumon Technology — Secure Digital Infrastructure",
    template: "%s — Gumon Technology",
  },
  description:
    "Engineering secure event-driven microservices systems for institutional environments across healthcare, government, and enterprise.",
  openGraph: {
    type: "website",
    title: "Gumon Technology — Secure Digital Infrastructure",
    description:
      "Engineering secure event-driven microservices systems for institutional environments across healthcare, government, and enterprise.",
    url: "/",
  },
};

const nav = [
  { href: "/", label: "Overview" },
  { href: "/deployments", label: "Deployments" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-veil" />
        <div className="grid-overlay" />

        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg0/55 border-b border-line">
          <div className="ui-container h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/assets/logo/gumon-mark.png"
                alt="Gumon"
                className="h-9 w-9"
              />
              <div className="leading-tight">
                <div className="text-sm font-semibold">Gumon Technology</div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-mist">
                  Secure Infrastructure
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm text-mist">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="hover:text-ink transition-colors"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="glass rounded-full px-4 py-2 text-sm shadow-glow hover:shadow-none transition"
            >
              Institutional Inquiry
            </Link>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-line">
          <div className="ui-container py-10 text-sm text-mist flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Gumon Technology.</div>
            <div className="flex items-center gap-3">
  <img src="/assets/logo/gumon-mark.png" alt="Gumon mark" className="h-6 w-6 opacity-80" />
  <div className="text-[11px] tracking-[0.22em] uppercase">
    Research → Prove → Deploy → Share
  </div>
</div>
          </div>
        </footer>
      </body>
    </html>
  );
}

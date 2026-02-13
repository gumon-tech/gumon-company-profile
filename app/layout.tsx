import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sarabun, Space_Grotesk } from "next/font/google";
import NavLink from "@/components/NavLink";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import TrackedLink from "@/components/TrackedLink";
import MobileStickyCta from "@/components/MobileStickyCta";

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://gumon.io"),
  title: {
    default: "Gumon Technology | Open Platform for Delivery Teams",
    template: "%s | Gumon Technology",
  },
  description:
    "แพลตฟอร์มเทคโนโลยีแบบเปิดสำหรับองค์กรที่ต้องการส่งมอบซอฟต์แวร์ได้เร็วขึ้น มาตรฐานชัดเจน และขยายระบบได้อย่างยั่งยืน",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Gumon Technology",
    "Open Platform",
    "Platform Engineering",
    "Software Delivery",
    "Developer Platform",
    "Technology Ecosystem",
  ],
  openGraph: {
    type: "website",
    siteName: "Gumon Technology",
    title: "Gumon Technology",
    description:
      "Open Platform ที่ออกแบบเพื่อการส่งมอบจริง เชื่อมทีมเทคโนโลยี พาร์ตเนอร์ และการเติบโตเชิงธุรกิจเข้าด้วยกัน",
    url: "/",
    images: [
      {
        url: "/assets/from-gumon/gumon_arc.png",
        alt: "Gumon Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gumon Technology",
    description:
      "Open Platform ที่ออกแบบเพื่อการส่งมอบจริง เชื่อมทีมเทคโนโลยี พาร์ตเนอร์ และการเติบโตเชิงธุรกิจเข้าด้วยกัน",
    images: ["/assets/from-gumon/gumon_arc.png"],
  },
};

const navItems = [
  { href: "/platform", label: "Platform" },
  { href: "/developers", label: "Developers" },
  { href: "/partners", label: "Partners" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
  { href: "/team", label: "Team" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gumon.io";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Gumon Technology",
        url: siteUrl,
        logo: `${siteUrl}/assets/logo/gumon-white.png`,
        sameAs: [
          "https://www.linkedin.com/company/gumon",
          "https://facebook.com/gumon.tech",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "contact@gumon.io",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Gumon Technology",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "th-TH",
      },
    ],
  };

  return (
    <html lang="th" className={`${sarabun.variable} ${spaceGrotesk.variable}`}>
      <body data-mode="institutional">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <div className="bg-veil" />
        <div className="grid-overlay" />

        <header className="sticky top-0 z-[90] border-b border-line/60 bg-bg0/92 shadow-[0_10px_24px_rgba(3,6,12,0.45)] supports-[backdrop-filter]:bg-bg0/84 supports-[backdrop-filter]:backdrop-blur-xl">
          <div className="ui-container h-16 lg:h-[72px] flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-3">
              <span className="logo-swap" aria-label="Gumon mark">
                <Image src="/assets/logo/gumon-white.png" alt="Gumon" width={36} height={36} className="logo-inst" />
                <Image src="/assets/logo/gumon-slate.png" alt="Gumon" width={36} height={36} className="logo-field" />
                <Image src="/assets/logo/gumon-olive.png" alt="Gumon" width={36} height={36} className="logo-lab" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Gumon Technology</div>
                <div className="hidden lg:block text-[10px] tracking-[0.24em] uppercase text-mist">
                  Open Source Platform Systems
                </div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-4 text-sm text-ink/90">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </nav>

            <details className="mobile-menu xl:hidden">
              <summary className="btn-ghost px-3 py-1.5 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                เมนู
              </summary>
              <div className="mobile-menu-panel">
                <div className="grid gap-3 text-sm">
                  {navItems.map((item) => (
                    <TrackedLink
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-mist hover:text-ink hover:bg-bg1/60 transition"
                    >
                      {item.label}
                    </TrackedLink>
                  ))}
                  <div className="hr" />
                  <TrackedLink
                    href="https://docs.gumon.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg px-3 py-2 text-mist hover:text-ink hover:bg-bg1/60 transition"
                  >
                    Docs
                  </TrackedLink>
                  <TrackedLink
                    href="https://wiki.gumon.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg px-3 py-2 text-mist hover:text-ink hover:bg-bg1/60 transition"
                  >
                    Knowledge Base
                  </TrackedLink>
                  <TrackedLink href="/contact" className="btn-primary w-full">
                    ติดต่อทีมงาน
                  </TrackedLink>
                </div>
              </div>
            </details>

            <div className="hidden xl:flex items-center gap-2">
              <TrackedLink href="https://docs.gumon.io/" target="_blank" rel="noreferrer" className="btn-ghost">
                Docs
              </TrackedLink>
              <TrackedLink href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="btn-ghost">
                Knowledge Base
              </TrackedLink>
              <TrackedLink href="/contact" className="btn-primary">
                Contact
              </TrackedLink>
            </div>
          </div>
        </header>

        <main>{children}</main>
        <MobileStickyCta />

        <footer className="border-t border-line/20">
          <div className="ui-container py-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="text-sm font-semibold">Gumon Technology</div>
              <p className="mt-3 text-sm text-mist leading-relaxed max-w-sm">
                Open Platform สำหรับองค์กรที่ต้องการส่งมอบงานเทคโนโลยีได้เร็วขึ้น พร้อมมาตรฐานที่ขยายได้ในระยะยาว.
              </p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Platform</div>
                <div className="mt-3 grid gap-2">
                  {navItems.slice(0, 2).map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Audience</div>
                <div className="mt-3 grid gap-2">
                  {navItems.slice(2, 4).map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Company</div>
                <div className="mt-3 grid gap-2">
                  {navItems.slice(4).map((item) => (
                    <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                      {item.label}
                    </TrackedLink>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-mist">Support</div>
                <div className="mt-3 grid gap-2">
                  <TrackedLink href="/faq" className="text-mist hover:text-ink transition">
                    FAQ
                  </TrackedLink>
                  <TrackedLink href="/contact" className="text-mist hover:text-ink transition">
                    Contact
                  </TrackedLink>
                </div>
              </div>
            </div>

            <div className="lg:col-span-12 hr" />

            <div className="lg:col-span-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-mist">
              <div>© {new Date().getFullYear()} Gumon Technology. All rights reserved.</div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <TrackedLink href="/faq" className="hover:text-ink transition">FAQ</TrackedLink>
                {legalLinks.map((item) => (
                  <TrackedLink key={item.href} href={item.href} className="hover:text-ink transition">
                    {item.label}
                  </TrackedLink>
                ))}
                <TrackedLink href="mailto:contact@gumon.io" className="hover:text-ink transition">contact@gumon.io</TrackedLink>
              </div>
            </div>
          </div>
        </footer>

        <CookieConsentBanner />
      </body>
    </html>
  );
}

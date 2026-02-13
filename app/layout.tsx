import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import CookieConsentBanner from "@/components/CookieConsentBanner";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://web.gumon.dev"),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Gumon Technology",
    description:
      "Open Platform ที่ออกแบบเพื่อการส่งมอบจริง เชื่อมทีมเทคโนโลยี พาร์ตเนอร์ และการเติบโตเชิงธุรกิจเข้าด้วยกัน",
  },
};

const navGroups = [
  {
    label: "Solutions",
    items: [
      { href: "/platform", label: "Platform" },
      { href: "/ecosystem", label: "Ecosystem" },
      { href: "/learning", label: "Learning" },
    ],
  },
  {
    label: "Audience",
    items: [
      { href: "/developers", label: "Developers" },
      { href: "/partners", label: "Partners" },
      { href: "/investors", label: "Investors" },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/company", label: "Company" },
      { href: "/team", label: "Team" },
      { href: "/resources", label: "Resources" },
    ],
  },
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://web.gumon.dev";
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
    <html lang="th">
      <body data-mode="institutional">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <div className="bg-veil" />
        <div className="grid-overlay" />

        <header className="sticky top-0 z-50 border-b border-line/20 backdrop-blur supports-[backdrop-filter]:bg-bg0/70">
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
                  Open Platform For Delivery Teams
                </div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-7 text-sm text-mist">
              {navGroups.map((group) => (
                <div key={group.label} className="flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-mist/80">{group.label}</span>
                  <div className="flex items-center gap-3">
                    {group.items.map((item) => (
                      <NavLink key={item.href} href={item.href} label={item.label} />
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            <details className="xl:hidden relative z-[70]">
              <summary className="btn-ghost px-3 py-1.5 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                เมนู
              </summary>
              <div className="absolute right-0 top-[calc(100%+10px)] w-[290px] rounded-xl2 border border-line/25 bg-bg0/95 p-3 shadow-soft backdrop-blur-md">
                <div className="grid gap-3 text-sm">
                  {navGroups.map((group) => (
                    <div key={group.label}>
                      <div className="px-2 text-[10px] tracking-[0.2em] uppercase text-mist">{group.label}</div>
                      <div className="mt-1 grid gap-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-lg px-3 py-2 text-mist hover:text-ink hover:bg-bg1/60 transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="hr" />
                  <Link href="/contact" className="btn-primary w-full">
                    ติดต่อทีมงาน
                  </Link>
                </div>
              </div>
            </details>

            <div className="hidden xl:flex items-center gap-2">
              <a href="https://docs.gumon.io/" target="_blank" rel="noreferrer" className="btn-ghost">
                Docs
              </a>
              <a href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="btn-ghost">
                Knowledge Base
              </a>
              <Link href="/contact" className="btn-primary">
                Contact
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-line/20">
          <div className="ui-container py-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="text-sm font-semibold">Gumon Technology</div>
              <p className="mt-3 text-sm text-mist leading-relaxed max-w-sm">
                Open Platform สำหรับองค์กรที่ต้องการส่งมอบงานเทคโนโลยีได้เร็วขึ้น พร้อมมาตรฐานที่ขยายได้ในระยะยาว.
              </p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6 text-sm">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{group.label}</div>
                  <div className="mt-3 grid gap-2">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} className="text-mist hover:text-ink transition">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-12 hr" />

            <div className="lg:col-span-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-mist">
              <div>© {new Date().getFullYear()} Gumon Technology. All rights reserved.</div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link href="/faq" className="hover:text-ink transition">FAQ</Link>
                {legalLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-ink transition">
                    {item.label}
                  </Link>
                ))}
                <a href="mailto:contact@gumon.io" className="hover:text-ink transition">contact@gumon.io</a>
              </div>
            </div>
          </div>
        </footer>

        <CookieConsentBanner />
      </body>
    </html>
  );
}

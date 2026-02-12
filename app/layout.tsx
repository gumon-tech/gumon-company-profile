import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import NavLink from "@/components/NavLink";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://web.gumon.dev"),
  title: {
    default: "Gumon Technology — แพลตฟอร์มเทคโนโลยีแบบเปิดและประยุกต์ใช้จริง",
    template: "%s — Gumon Technology",
  },
  description:
    "แพลตฟอร์มเทคโนโลยีที่ช่วยให้ทีมพัฒนาเริ่มไว ทำงานเป็นระบบ และขยายโครงการได้อย่างมั่นคง",
  openGraph: {
    type: "website",
    title: "Gumon Technology — แพลตฟอร์มเทคโนโลยีแบบเปิดและประยุกต์ใช้จริง",
    description:
      "แพลตฟอร์มเทคโนโลยีที่ช่วยให้ทีมพัฒนาเริ่มไว ทำงานเป็นระบบ และขยายโครงการได้อย่างมั่นคง",
    url: "/",
  },
};

const nav = [
  { href: "/platform", label: "แพลตฟอร์ม" },
  { href: "/partners", label: "พาร์ตเนอร์" },
  { href: "/developers", label: "นักพัฒนา" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/learning", label: "การเรียนรู้" },
  { href: "/resources", label: "ทรัพยากร" },
  { href: "/company", label: "บริษัท" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body data-mode="institutional">
        <div className="bg-veil" />
        <div className="grid-overlay" />

        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg0/55 border-b border-line/20">
          <div className="ui-container relative h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="logo-swap" aria-label="Gumon mark">
                <img src="/assets/logo/gumon-white.png" alt="Gumon" className="logo-inst" />
                <img src="/assets/logo/gumon-slate.png" alt="Gumon" className="logo-field" />
                <img src="/assets/logo/gumon-olive.png" alt="Gumon" className="logo-lab" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Gumon Technology</div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-mist">
                  Open Platform For Real-World Delivery
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm text-mist">
              {nav.map((n) => (
                <NavLink key={n.href} href={n.href} label={n.label} />
              ))}
            </nav>

            <details className="md:hidden relative">
              <summary className="btn-ghost px-3 py-1.5 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                เมนู
              </summary>
              <div className="absolute right-0 top-[calc(100%+10px)] w-[260px] card p-3 shadow-soft">
                <div className="grid gap-1 text-sm">
                  {nav.map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      className="rounded-lg px-3 py-2 text-mist hover:text-ink hover:bg-bg1/60 transition"
                    >
                      {n.label}
                    </Link>
                  ))}
                  <Link
                    href="/investors"
                    className="rounded-lg px-3 py-2 text-mist hover:text-ink hover:bg-bg1/60 transition"
                  >
                    นักลงทุน
                  </Link>
                  <div className="hr my-2" />
                  <Link href="/contact" className="btn-primary w-full">ร่วมเป็นพาร์ตเนอร์</Link>
                </div>
              </div>
            </details>

            <div className="hidden md:flex items-center gap-2">
              <Link href="/investors" className="btn-ghost">นักลงทุน</Link>
              <Link href="/contact" className="btn-primary">ร่วมเป็นพาร์ตเนอร์</Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-line/20">
          <div className="ui-container py-10 text-sm text-mist flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Gumon Technology.</div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] leading-7 md:leading-6">
              <Link className="hover:text-ink transition" href="/platform">แพลตฟอร์ม</Link>
              <Link className="hover:text-ink transition" href="/developers">นักพัฒนา</Link>
              <Link className="hover:text-ink transition" href="/partners">พาร์ตเนอร์</Link>
              <Link className="hover:text-ink transition" href="/ecosystem">Ecosystem</Link>
              <Link className="hover:text-ink transition" href="/learning">การเรียนรู้</Link>
              <Link className="hover:text-ink transition" href="/resources">ทรัพยากร</Link>
              <Link className="hover:text-ink transition" href="/investors">นักลงทุน</Link>
              <Link className="hover:text-ink transition" href="/contact">ติดต่อ</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";
import {
  readCookieConsent,
  saveCookieConsent,
} from "@/lib/cookieConsent";
import { detectLocaleFromPathname, getUiCopy } from "@/lib/i18n";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const copy = getUiCopy(locale);

  useEffect(() => {
    let timer: number | undefined;
    try {
      const saved = readCookieConsent();
      if (!saved) {
        // Delay a bit so the banner does not compete with above-the-fold content during initial paint.
        timer = window.setTimeout(() => setVisible(true), 1200);
      }
    } catch {
      timer = window.setTimeout(() => setVisible(true), 1200);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  const acceptEssentialOnly = () => {
    saveCookieConsent("essential");
    setVisible(false);
  };

  const acceptAllCookies = () => {
    saveCookieConsent("all");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[80] w-[min(760px,calc(100%-24px))] -translate-x-1/2 rounded-xl2 border border-line/30 bg-bg0/95 px-3 py-2.5 sm:px-4 sm:py-3 shadow-soft backdrop-blur-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] sm:text-xs text-mist leading-snug">
            {copy.cookieShort}{" "}
            <TrackedLink href="/cookies" className="text-ink underline underline-offset-4 decoration-accent hover:decoration-ink transition">
              {copy.cookieNotice}
            </TrackedLink>
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={acceptEssentialOnly}
            className="inline-flex items-center justify-center rounded-full border border-line/50 px-3.5 py-1.5 text-xs font-semibold text-ink/90 hover:border-line/70 transition"
          >
            {copy.cookieEssential}
          </button>
          <button
            type="button"
            onClick={acceptAllCookies}
            className="inline-flex items-center justify-center rounded-full border border-transparent px-3.5 py-1.5 text-xs font-semibold text-bg0"
            style={{
              background: "linear-gradient(120deg, rgb(var(--accent)) 0%, rgb(var(--accent2)) 100%)",
              boxShadow: "0 6px 16px rgb(var(--accent) / 0.26)",
            }}
          >
            {copy.cookieAcceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}

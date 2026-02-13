"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "gumon_cookie_consent_v1";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      setVisible(saved !== "accepted");
    } catch {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // Ignore storage failures and just hide the banner.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[80] w-[min(980px,calc(100%-24px))] -translate-x-1/2 rounded-xl2 border border-line/30 bg-bg0/95 p-4 shadow-soft backdrop-blur-md">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="text-sm text-mist leading-relaxed">
          เว็บไซต์นี้ใช้คุกกี้เพื่อให้ระบบทำงานได้เหมาะสมและปรับปรุงประสบการณ์การใช้งาน
          ดูรายละเอียดได้ที่{" "}
          <Link href="/cookies" className="text-ink underline underline-offset-4 decoration-accent hover:decoration-ink transition">
            Cookie Notice
          </Link>
        </div>
        <button type="button" onClick={acceptCookies} className="btn-primary w-full md:w-auto">
          ยอมรับคุกกี้
        </button>
      </div>
    </div>
  );
}

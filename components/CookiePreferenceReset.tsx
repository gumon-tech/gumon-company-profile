"use client";

import { usePathname } from "next/navigation";
import { COOKIE_CONSENT_KEY } from "@/lib/cookieConsent";
import { detectLocaleFromPathname, getUiCopy } from "@/lib/i18n";

export default function CookiePreferenceReset() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const copy = getUiCopy(locale);

  const resetConsent = () => {
    try {
      window.localStorage.removeItem(COOKIE_CONSENT_KEY);
      window.localStorage.removeItem(`${COOKIE_CONSENT_KEY}_updated_at`);
    } catch {
      // Ignore storage failures and continue.
    }
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={resetConsent}
      className="inline-flex items-center justify-center rounded-full border border-line/50 px-3.5 py-1.5 text-xs font-semibold text-ink/90 hover:border-line/70 transition"
    >
      {copy.resetCookie}
    </button>
  );
}

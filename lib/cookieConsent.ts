export const COOKIE_CONSENT_KEY = "gumon_cookie_consent_v2";
export const CONSENT_CHANGED_EVENT = "gumon:consent-changed";

export type CookieConsentLevel = "essential" | "all";

export function readCookieConsent(): CookieConsentLevel | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === "essential" || value === "all") return value;
  } catch {
    // Ignore storage failures.
  }
  return null;
}

export function saveCookieConsent(level: CookieConsentLevel) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, level);
    window.localStorage.setItem(`${COOKIE_CONSENT_KEY}_updated_at`, new Date().toISOString());
  } catch {
    // Ignore storage failures.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: { level } }));
}


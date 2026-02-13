"use client";

import { useEffect, useRef } from "react";
import {
  CONSENT_CHANGED_EVENT,
  readCookieConsent,
  type CookieConsentLevel,
} from "@/lib/cookieConsent";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function injectScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function initGoogleAnalytics(measurementId: string) {
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`, "gumon-ga-script");
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args as unknown as Record<string, unknown>);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true });
}

function initGoogleTagManager(gtmId: string) {
  if (document.getElementById("gumon-gtm-script")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${gtmId}`, "gumon-gtm-script");
}

export default function AnalyticsBootstrap() {
  const initialized = useRef(false);

  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

    if (!gaId && !gtmId) return;

    const bootstrap = (level: CookieConsentLevel | null) => {
      if (initialized.current) return;
      if (level !== "all") return;

      if (gaId) initGoogleAnalytics(gaId);
      if (gtmId) initGoogleTagManager(gtmId);
      initialized.current = true;
    };

    bootstrap(readCookieConsent());

    const onConsentChanged = (event: Event) => {
      const customEvent = event as CustomEvent<{ level?: CookieConsentLevel }>;
      bootstrap(customEvent.detail?.level ?? null);
    };

    window.addEventListener(CONSENT_CHANGED_EVENT, onConsentChanged);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onConsentChanged);
  }, []);

  return null;
}


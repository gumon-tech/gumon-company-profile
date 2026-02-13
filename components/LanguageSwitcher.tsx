"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  detectLocaleFromPathname,
  localizePath,
  stripLocalePrefix,
  supportedLocales,
  type Locale,
  getUiCopy,
} from "@/lib/i18n";

const localeLabels: Record<Locale, string> = {
  th: "ไทย",
  en: "English",
  "zh-CN": "中文 (简体)",
  "zh-TW": "中文 (繁體)",
  ja: "日本語",
  ko: "한국어",
  vi: "Tiếng Việt",
  id: "Bahasa Indonesia",
  ms: "Bahasa Melayu",
  hi: "हिन्दी",
  ar: "العربية",
  he: "עברית",
  es: "Español",
  "pt-BR": "Português (Brasil)",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  nl: "Nederlands",
  pl: "Polski",
  tr: "Türkçe",
  ru: "Русский",
  uk: "Українська",
  sv: "Svenska",
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const locale = detectLocaleFromPathname(pathname);
  const copy = getUiCopy(locale);
  const basePath = useMemo(() => stripLocalePrefix(pathname || "/"), [pathname]);

  const onChange = (nextLocale: Locale) => {
    router.push(localizePath(basePath, nextLocale));
  };

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-line/50 bg-bg1/60 px-2.5 py-1.5 text-xs text-mist">
      <span className="hidden 2xl:inline">{copy.language}</span>
      <select
        aria-label={copy.language}
        value={locale}
        onChange={(event) => onChange(event.target.value as Locale)}
        className="bg-transparent text-ink text-xs focus:outline-none"
      >
        {supportedLocales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}

import { defaultLocale, fallbackLocale, type Locale } from "@/lib/i18n";

export function pickLocalizedContent<T>(locale: Locale, content: Partial<Record<Locale, T>>): T {
  const resolved = content[locale] ?? content[defaultLocale] ?? content[fallbackLocale];
  if (!resolved) {
    throw new Error("Missing localized content for default and fallback locales");
  }
  return resolved;
}

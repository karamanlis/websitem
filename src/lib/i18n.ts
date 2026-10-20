/**
 * i18n çekirdeği.
 *
 * Site iki dilli: Türkçe kökte (/), İngilizce /en/ altında
 * (astro.config.mjs → i18n.routing.prefixDefaultLocale: false).
 *
 * Çeviri metinleri `translations/` altında dil başına tek nesnede durur;
 * bileşenler URL'den dili çözüp kendi bölüm metnine erişir:
 *
 *   import { getDict } from "../lib/i18n";
 *   const { hero } = getDict(Astro.url.pathname);
 *
 * URL dili belirlemenin tek kaynağıdır — statik derlemede sayfa yapısı
 * zaten /en/ önekine göre ayrıştığı için ek durum gerekmez.
 */
import type { Dictionary } from "./translations/tr";
import { tr } from "./translations/tr";
import { en } from "./translations/en";

export type Locale = "tr" | "en";

/** hreflang listesi ve og:locale için BCP 47 etiketleri. */
export const localeTags: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-US",
};

/** Bir sayfa yolundan dili çözer. Sondaki eğik çizgiye toleranslıdır. */
export function getLocale(pathname: string): Locale {
  return pathname.replace(/\/+$/, "").startsWith("/en") ? "en" : "tr";
}

/** Sayfa yoluna göre doğru sözlüğü döndürür. */
export function getDict(pathname: string): Dictionary {
  return getLocale(pathname) === "en" ? en : tr;
}

export { tr, en };
export type { Dictionary };

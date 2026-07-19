/**
 * Site genelinde tekrar eden, kullanıcı tarafından doldurulacak/güncellenecek
 * değerler tek yerden yönetilir. Yeni bilgi geldikçe (Calendly linki, hero
 * görseli, iletişim bilgileri) yalnızca bu dosya güncellenir — bileşenlere
 * dokunulmaz.
 */
export const siteConfig = {
  name: "CNKR Dijital",
  domain: "cnkrdijital.com",
  tagline: "İşletmeler için dijital büyüme sistemleri kuruyoruz.",
  ctaLabel: "Ücretsiz Strateji Görüşmesi Al",

  /** TODO: Kullanıcıdan gelecek gerçek Calendly (veya benzeri) randevu linki. */
  calendlyUrl: "",

  /** TODO: Kullanıcıdan gelecek hero görseli linki. */
  heroImageUrl: "",

  /** TODO: İletişim bilgileri sağlandığında doldurulacak. */
  contactEmail: "",
  contactPhone: "",

  nav: [
    { label: "Sistem", href: "/#sistem" },
    { label: "Süreç", href: "/#surec" },
    { label: "Sonuçlar", href: "/#sonuclar" },
    { label: "Vaka Analizleri", href: "/vaka-analizleri" },
    { label: "Blog", href: "/blog" },
    { label: "SSS", href: "/#sss" },
  ],
} as const;

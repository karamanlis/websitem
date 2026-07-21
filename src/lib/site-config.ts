/**
 * Site genelinde tekrar eden, kullanıcı tarafından doldurulacak/güncellenecek
 * değerler tek yerden yönetilir. Yeni bilgi geldikçe (randevu linki, hero
 * görseli, iletişim bilgileri, müşteri görüşleri) yalnızca bu dosya
 * güncellenir — bileşenlere dokunulmaz.
 */

export type Testimonial = {
  /** Görüşün kendisi. Tırnak işareti eklemeyin, tasarım kendisi ekliyor. */
  quote: string;
  /**
   * İşletmenin elde ettiği somut sonuç: "Satışlarda 2x büyüme".
   * Görüşün üstünde vurgulu biçimde gösterilir — ziyaretçi metni okumadan
   * önce sonucu görür. Sonuç paylaşılmadıysa boş bırakılabilir.
   */
  result?: string;
  /** İşletme adı + varsa şehir: "Ege Butik Otel, Ayvalık" */
  company: string;
  /** Sektör: "E-Ticaret Markası", "Eğitim", "Perakende" … */
  sector: string;
  /**
   * public/ altındaki logo yolu: "/logolar/ifdukkan.svg".
   * Boş bırakılırsa işletme adının baş harfleri monogram olarak gösterilir.
   */
  logo?: string;
};

export const siteConfig = {
  name: "CNKR Dijital",

  /**
   * Başlıktaki logonun yanında görünen ad. `name` marka adı olarak
   * meta etiketlerde, footer'da ve şema verisinde kullanılmaya devam
   * ederken burası kişisel imzayı taşır.
   */
  logoText: "Emre Cenk",
  domain: "cnkrdijital.com",
  tagline: "İşletmeler için dijital büyüme sistemleri kuruyoruz.",
  ctaLabel: "Ücretsiz Strateji Görüşmesi Al",

  /**
   * Google Calendar randevu sayfasının paylaşılabilir linki.
   * Calendar → Randevu programı → "Paylaşılabilir bağlantıyı kopyala".
   * CTA butonları bu adrese yeni sekmede yönlendirir. Boş bırakılırsa
   * butonlar iletişim sayfasına/e-postaya düşer, sayfa kırılmaz.
   */
  bookingUrl: "https://calendar.app.google/iXkAbZPYW9Jese148",

  /**
   * Hero görseli. Dosyayı public/ içine koyup buraya kök-göreli yolu yazın:
   * örn. "/hero.webp" → public/hero.webp
   */
  heroImageUrl: "/hero.webp",
  /** Hero görselinin ekran okuyucular için açıklaması (WCAG AA). */
  heroImageAlt: "CNKR Dijital kurucusu, portre fotoğraf",

  /**
   * Portrenin altında yan yana duran kanıt rakamları. Üç öğe için
   * tasarlandı; daha fazlası satırı sıkıştırır, boş dizi bölümü gizler.
   */
  heroStats: [
    { value: "+5 Yıl", label: "Deneyim" },
    { value: "10+", label: "Marka" },
    { value: "12.4x", label: "ROAS" },
  ],

  contactEmail: "cenkaragency70@gmail.com",
  contactPhone: "0542 259 86 60",
  /** Uluslararası formatta, boşluksuz: "905321234567" */
  whatsappNumber: "905422598660",

  /**
   * Müşteri görüşleri. Dizi boşken sosyal kanıt bölümü sayfada hiç
   * görünmez — uydurma yorumla site yayına çıkmaz.
   */
  testimonials: [
    {
      quote:
        "CNKR ile çalışmaya başladıktan sonra reklam maliyetlerimiz düştü, satışlarımız 2 katına çıktı. Stratejik yaklaşımları gerçekten fark yaratıyor.",
      result: "Satışlarda 2x büyüme",
      company: "Ifdukkan",
      sector: "E-Ticaret Markası",
    },
    {
      quote:
        "Yeni kayıtlarımız %50 arttı, velilerimizden gelen geri dönüşler harika. Funnel sistemi sayesinde artık her lead'i değerlendirebiliyoruz.",
      result: "%50 yeni kayıt artışı",
      company: "Lavinya Çocuk Kulübü",
      sector: "Eğitim",
    },
    {
      quote:
        "Instagram hesabımızda etkileşim patladı. Sadece takipçi değil, gerçek müşteriler kazandık. Profesyonel ve sonuç odaklı bir ekip.",
      result: "%150 etkileşim artışı",
      company: "Aybüş Aksesuar",
      sector: "Perakende",
    },
  ] as Testimonial[],

  nav: [
    { label: "Sistem", href: "/#sistem" },
    { label: "Süreç", href: "/#surec" },
    { label: "Sonuçlar", href: "/#sonuclar" },
    { label: "Hakkımda", href: "/#ben-kimim" },
    { label: "Hizmetler", href: "/#hizmetler" },
    // Gerçek vaka analizi eklendiğinde geri açılır:
    // { label: "Vaka Analizleri", href: "/vaka-analizleri" },
    { label: "Blog", href: "/blog" },
    { label: "SSS", href: "/#sss" },
    { label: "İletişim", href: "/iletisim" },
  ],
};

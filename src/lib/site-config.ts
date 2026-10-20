/**
 * Site genelinde tekrar eden, kullanıcı tarafından doldurulacak/güncellenecek
 * DEĞERLER tek yerden yönetilir (bağlantılar, iletişim bilgileri, müşteri
 * görüşleri). Dil-bağlı metinler (menü etiketleri, CTA, slogan, bölüm
 * içerikleri) ise src/lib/translations/ altındaki tr.ts / en.ts
 * sözlüklerinde durur — iki dil aynı yapıyı paylaşır.
 */

export type Testimonial = {
  /** Görüşün kendisi. Tırnak işareti eklemeyin, tasarım kendisi ekliyor. */
  quote: string;
  /** Görüşün İngilizce çevirisi — boşsa İngilizce sayfada quote gösterilir. */
  quoteEn?: string;
  /**
   * İşletmenin elde ettiği somut sonuç: "Satışlarda 2x büyüme".
   * Görüşün üstünde vurgulu biçimde gösterilir — ziyaretçi metni okumadan
   * önce sonucu görür. Sonuç paylaşılmadıysa boş bırakılabilir.
   */
  result?: string;
  resultEn?: string;
  /** İşletme adı + varsa şehir: "Ege Butik Otel, Ayvalık" */
  company: string;
  /** Sektör: "E-Ticaret Markası", "Eğitim", "Perakende" … */
  sector: string;
  /** Sektörün İngilizce karşılığı — boşsa İngilizce sayfada sector gösterilir. */
  sectorEn?: string;
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

  contactEmail: "cenkaragency70@gmail.com",
  contactPhone: "0542 259 86 60",
  /** Uluslararası formatta, boşluksuz: "905321234567" */
  whatsappNumber: "905422598660",

  /**
   * Müşteri görüşleri. Dizi boşken sosyal kanıt bölümü sayfada hiç
   * görünmez — uydurma yorumla site yayına çıkmaz.
   *
   * İngilizce sayfa için `*En` alanları doldurulur; boş bırakılırsa
   * İngilizce sayfada Türkçe özgün metin gösterilir (gerçek görüş,
   * uydurmayla değil).
   */
  testimonials: [
    {
      quote:
        "CNKR ile çalışmaya başladıktan sonra reklam maliyetlerimiz düştü, satışlarımız 2 katına çıktı. Stratejik yaklaşımları gerçekten fark yaratıyor.",
      quoteEn:
        "After we started working with CNKR, our ad costs dropped and our sales doubled. Their strategic approach truly makes a difference.",
      result: "Satışlarda 2x büyüme",
      resultEn: "2x sales growth",
      company: "Ifdukkan",
      sector: "E-Ticaret Markası",
      sectorEn: "E-commerce Brand",
    },
    {
      quote:
        "CNKR dijitalin uzman bakışı ile yönetilen meta reklamları ile birlikte kısa zamanda kayıt sayımızda % 50 artış sağladık.",
      quoteEn:
        "With CNKR Dijital's expert eye on our meta ads, we achieved a 50% increase in our enrollment numbers in a short time.",
      result: "%50 yeni kayıt artışı",
      resultEn: "50% increase in new enrollments",
      company: "Lavinya Çocuk Kulübü",
      sector: "Eğitim",
      sectorEn: "Education",
    },
    {
      quote:
        "Instagram hesabımızda etkileşim patladı. Sadece takipçi değil, gerçek müşteriler kazandık. Profesyonel ve sonuç odaklı bir ekip.",
      quoteEn:
        "Engagement exploded on our Instagram account. We gained not just followers but real customers. A professional, results-driven team.",
      result: "%150 etkileşim artışı",
      resultEn: "150% increase in engagement",
      company: "Aybüş Aksesuar",
      sector: "Perakende",
      sectorEn: "Retail",
    },
    {
      quote:
        "CNKR Dijital sadece satışlarımızın değil, markamızın bilinirliğinin de bölgemizde artmasına sebep oldu. Profesyonel ve samimi ilişkileri nedeniyle CNKR Dijital'e teşekkür ederiz.",
      quoteEn:
        "CNKR Dijital increased not only our sales but also our brand's recognition in our region. We thank CNKR Dijital for their professional and sincere relationship.",
      company: "Burak Bey",
      sector: "Kurumsal Mobilya Mağaza Sahibi",
      sectorEn: "Corporate Furniture Store Owner",
    },
    {
      quote:
        "Bölgemizde yeni açılan bir mağaza olmamıza rağmen Emre beyin hem instagram tarafında hem de reklam tarafındaki stratejik yaklaşımları etkileşimimizi ve ciromuzu artırırken marka bilinirliğimizin artışına da katkı sağladı.",
      quoteEn:
        "Although we are a newly opened store in our region, Emre's strategic approach on both Instagram and advertising sides increased our engagement and turnover while also contributing to our brand awareness.",
      result: "Etkileşim ve ciro artışı",
      resultEn: "Increased engagement and revenue",
      company: "3As Masa",
      sector: "Perakende",
      sectorEn: "Retail",
    },
  ] as Testimonial[],
};

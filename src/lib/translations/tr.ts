/**
 * Türkçe sözlük — sitenin varsayılan dili.
 *
 * Yapı dil-bağımsızdır: `en.ts` aynı şekli taşımak zorundadır
 * (`Dictionary` tipi buradan türetilir, alan eksikse derleme hata verir).
 *
 * Ortak bileşen metinleri (header, footer, bölüm başlıkları, kart içerikleri)
 * buradan okunur. Sayfa başlıkları/açıklamaları ve tekil sayfaların
 * (iletişim, teşekkürler, gizlilik) metinleri ilgili sayfa dosyasında kalır.
 *
 * Hero başlığı içinde `text-gold` span'i taşır — `set:html` ile basılır,
 * İngilizce'de aynı kalıp korunur.
 */

export const tr = {
  /** BaseLayout'taki erişilebilirlik atlama bağlantısı. */
  skipToContent: "İçeriğe geç",

  header: {
    /** Hamburger butonunun ekran okuyucu metni. */
    menuToggle: "Menüyü aç/kapat",
    /** Dil seçicide aktif dilin etiketi. */
    langLabel: "TR",
    langSwitchLabel: "EN",
    langSwitchSr: "Siteyi İngilizce görüntüle",
  },

  /** Üst menü + footer site listesi. Blog İngilizce'ye çevrilmediği için EN'de yer almaz. */
  nav: [
    { label: "Sistem", href: "/#sistem" },
    { label: "Süreç", href: "/#surec" },
    { label: "Sonuçlar", href: "/#sonuclar" },
    { label: "Hakkımda", href: "/#ben-kimim" },
    { label: "Hizmetler", href: "/#hizmetler" },
    { label: "Blog", href: "/blog" },
    { label: "SSS", href: "/#sss" },
    { label: "İletişim", href: "/iletisim" },
  ],

  /** Tüm CTA butonlarının ortak metni. */
  ctaLabel: "Ücretsiz Strateji Görüşmesi Planlayın",

  /** Footer'daki marka cümlesi + Organization şeması description alanı. */
  tagline: "İşletmeler için dijital büyüme sistemleri kuruyoruz.",

  /** Organization JSON-LD şemasındaki kurucu ünvanı. */
  founderJobTitle: "Dijital Pazarlama Danışmanı",

  hero: {
    titleHtml:
      'İşletmeler için <span class="text-gold">dijital pazarlama ve büyüme sistemleri</span> kuruyoruz.',
    paragraph:
      "Web sitenizi, reklamlarınızı ve otomasyonlarınızı birbirinden kopuk araçlar olarak değil, tek bir büyüme sistemi olarak tasarlıyoruz — 2 yıllık bilgi ve deneyimimiz ile mobilya işletmelerinden, eğitim kurumlarına, e-ticaret ve hizmet işletmelerine kadar maliyet etkin yöntemlerle işletmeler için daha karlı bir pazarlama operasyonu kurduk.",
    stats: [
      { value: "+2 Yıl", label: "Deneyim" },
      { value: "10+", label: "Marka" },
      { value: "12.4x", label: "ROAS" },
    ],
    imageAlt: "CNKR Dijital kurucusu, portre fotoğraf",
  },

  problem: {
    eyebrow: "Neden buradasınız",
    title: "Çoğu işletmenin dijital sorunu görünürlük değil, sistemsizliktir.",
    items: [
      "Web siteniz var ama müşteri üretmiyor.",
      "Reklamlarınıza harcıyorsunuz ama karlı sonuç göremiyorsunuz.",
      "Google'da rakipleriniz kadar görünür değilsiniz.",
      "Elinizde bir büyüme stratejisi yok, dağınık taktikler var.",
      "Dönüşüm oranlarınız potansiyelinizin oldukça altında.",
    ],
  },

  process: {
    eyebrow: "Süreç",
    title: "Dijital büyüme sistemini nasıl kuruyorum?",
    steps: [
      {
        number: "01",
        name: "Analiz",
        note: "Mevcut sitenizi, reklamlarınızı ve verinizi inceliyoruz.",
      },
      {
        number: "02",
        name: "Strateji",
        note: "İşletmenize özel bir büyüme yol haritası kuruyoruz.",
      },
      {
        number: "03",
        name: "Sistem Kurulumu",
        note: "Web sitesi, reklam ve otomasyon altyapısını devreye alıyoruz.",
      },
      {
        number: "04",
        name: "Optimizasyon",
        note: "Verilere göre sistemi sürekli iyileştiriyoruz.",
      },
      {
        number: "05",
        name: "Büyüme",
        note: "Sistem, öngörülebilir sonuçlar üretmeye başlıyor.",
      },
    ],
  },

  results: {
    eyebrow: "Sonuçlar",
    title: "Dijital büyüme sisteminin işletmenize kazandırdığı sonuçlar.",
    items: [
      "Daha fazla nitelikli potansiyel müşteri",
      "Daha fazla satış",
      "Daha yüksek dönüşüm oranları",
      "Daha düşük müşteri kazanım maliyeti",
      "Daha güçlü müşteri deneyimi",
      "Daha verimli pazarlama operasyonları",
    ],
  },

  testimonials: {
    eyebrow: "Müşteri Görüşleri",
    title: "Biz Değil Rakamlar Konuşuyor",
    proofAlts: [
      "3As Masa için yönetilen Meta reklam kampanyası sonuçları",
      "Mondi için yönetilen Meta reklam kampanyası sonuçları",
    ],
  },

  about: {
    eyebrow: "Hakkımda",
    title: "Emre Cenk kimdir ve farkım ne?",
    paragraphs: [
      "2 yıldır dijital pazarlama alanında e-ticaret, eğitim ve perakende sektörü gibi birçok farklı sektördeki işletmelerle düzenli ve uzun soluklu iş birlikleri yaptım. Geldiğim noktada sonuç odaklı ve değer katan çalışmalarımla işletmelerin büyümesine katkı sağlamaya devam ediyorum.",
      "Her işletmenin kendine özgü ihtiyaçlarını keşfederek kişiselleştirilmiş bir çözüm haritası çıkarıyorum. Bilinen ajanslardan farklı olarak satış ve kâr odaklı, verilere dayalı, sistemli, şeffaf ve sınırlı sayıda marka ile çalışırım.",
      "Yaptığım her çalışmayı işletme çözüm ortağı sıfatıyla en verimli şekilde gerçekleştirmeye çalışırım.",
    ],
    closing:
      "Verimli ve etkili olmayan bir çalışmanın içerisine girmeyeceğimi en baştan beyan ederim.",
  },

  why: {
    eyebrow: "Neden CNKR?",
    title: "Taktik değil, dijital büyüme metodolojisi satarız.",
    traits: [
      {
        name: "Stratejik düşünce",
        note: "Taktik önermeden önce işletmenizin büyüme mantığını çözeriz.",
      },
      {
        name: "Dijital uzmanlık",
        note: "Web, reklam ve içerik disiplinlerini tek çatı altında yönetiriz.",
      },
      {
        name: "AI sistemleri uzmanlığı",
        note: "Otomasyonu bir eklenti değil, sistemin omurgası olarak kurarız.",
      },
      {
        name: "Dönüşüm odağı",
        note: "Trafik değil, ölçülebilir iş sonuçları için tasarlarız.",
      },
      {
        name: "Uzun vadeli büyüme anlayışı",
        note: "Tek seferlik kampanya değil, sürdürülebilir sistem kurarız.",
      },
    ],
  },

  services: {
    eyebrow: "Hizmetler",
    title: "Dijital pazarlama hizmetlerimizle işletmenizi büyütün.",
    items: [
      {
        name: "Google Ads Hizmeti",
        note: "Arama niyeti yüksek trafiği, tıklama başına maliyeti değil kâr edilen müşteriyi hedefleyerek yönetiyoruz.",
      },
      {
        name: "Meta Reklam Yönetimi",
        note: "Instagram ve Facebook'ta doğru kitleye ulaşan, kreatifi düzenli test edilen kampanyalar kuruyoruz.",
      },
      {
        name: "E-posta Pazarlama",
        note: "Bir kez topladığınız listeyi, her ay kendi kendine satış üreten otomatik akışlara dönüştürüyoruz.",
      },
      {
        name: "İçerik Pazarlama",
        note: "Müşterinizin satın almadan önce sorduğu soruları yanıtlayan, güven inşa eden içerikler üretiyoruz.",
      },
      {
        name: "Yapay Zeka Otomasyon Hizmetleri",
        note: "Tekrar eden işleri, randevu ve takip süreçlerini otomatikleştirip ekibinizin zamanını geri kazandırıyoruz.",
      },
      {
        name: "B2B Lead Generation",
        note: "B2B lead generation sistemleri ve Linkedin yönetim hizmetleri ile gıda üreticileri için düzenli ve doğru müşteri kitlesi çekiyorum.",
      },
      {
        name: "SEO Hizmeti",
        note: "Reklam bütçesi durduğunda kaybolmayan, aramada kalıcı görünürlük sağlayan teknik ve içerik altyapısı.",
      },
    ],
  },

  faq: {
    eyebrow: "SSS",
    title: "Sıkça sorulan sorular",
    faqs: [
      {
        q: "Ne kadar reklam bütçesine ihtiyacım var?",
        a: "Bütçe, sektörünüze ve hedeflerinize göre değişir. Strateji görüşmesinde işletmenize uygun gerçekçi bir bütçe aralığını birlikte belirleriz.",
      },
      {
        q: "Bir web sitesi projesi ne kadar sürer?",
        a: "Kapsam ve içerik hazırlığına bağlı olarak değişir; strateji görüşmesinde projenize özel bir zaman çizelgesi paylaşırız.",
      },
      {
        q: "Sonuçları ne zaman görmeye başlarım?",
        a: "Sistem kurulumu ve optimizasyon aşamalarına bağlı olarak değişir; bu, sabit bir vaat değil, işletmenize özel bir süreçtir.",
      },
      {
        q: "Hangi işletmelerle çalışıyorsunuz?",
        a: "Butik oteller, klinikler, fitness merkezleri, koçlar, yerel işletmeler ve hizmet sektöründeki KOBİ'lerle çalışıyoruz.",
      },
      {
        q: "Strateji görüşmesi nasıl işliyor?",
        a: "Görüşmede işletmenizi, mevcut dijital varlığınızı ve hedeflerinizi konuşuyoruz; uygunsa size özel bir sistem önerisi paylaşıyoruz.",
      },
    ],
  },

  /** Koleksiyon dolunca geri gelecek vaka bölümü — EN'de de hazır durur. */
  caseStudies: {
    eyebrow: "Vaka Analizleri",
    title: "Sistemin pratikte nasıl çalıştığı.",
    problem: "Problem",
    solution: "Çözüm",
    result: "Sonuç",
    placeholderBadge: "Örnek vaka — gerçek verilerle güncellenecek",
  },

  finalCta: {
    title: "Doğru dijital büyüme sistemiyle işlerinizi ölçeklendirin.",
    paragraph:
      "Her ay sistemsiz geçen süre, rakiplerinizin sistemli ilerlediği bir süredir. Ücretsiz strateji görüşmesinde işletmeniz için somut bir büyüme yol haritası çıkaralım.",
    note: "30 dakika · Ücretsiz · Satış sunumu değil",
  },

  footer: {
    site: "Site",
    contact: "İletişim",
    contactForm: "İletişim Formu",
    contactFormHref: "/iletisim",
    privacy: "Gizlilik Politikası",
    privacyHref: "/gizlilik-politikasi",
    whatsapp: "WhatsApp",
    rights: "Tüm hakları saklıdır.",
  },
};

export type Dictionary = typeof tr;

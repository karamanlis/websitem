# CNKR Dijital — Tasarım ve Dönüşüm Gerekçelendirmesi

Bu doküman, `wb.md.txt` briefinin zorunlu kıldığı "her kararı gerekçelendir" çıktısıdır. Her madde, kod tabanındaki gerçek dosyalara referansla açıklanmıştır — hiçbiri soyut bir tercih değil, `src/styles/tokens.css` içinde tanımlı ve bileşenlerde kullanılan somut değerlerdir.

## 1. Seçilen Renk Paleti

Kaynak: `src/styles/tokens.css`

Site, görsel yenileme turunda **koyu-dominant** bir yüzeye taşındı (referans: Furkan RSD / Linear / premium AI landing sayfaları). Marka renkleri — çam yeşili ve antik altın — korundu; değişen şey bu renklerin üzerinde durduğu zemin.

| Rol | Değer | Kullanım |
|---|---|---|
| Yüzey (surface) | `#050C09` → `#1E402F` (koyu çam-kömür skalası) | Sayfa zemini, cam kart dolguları, koyu paneller |
| Birincil (primary) | `#256B4C` (koyu çam yeşili), 50→950 skalası | CTA butonları, aurora ışık lekeleri, bağlantı çizgileri |
| Nötr (neutral) | `#F8F6F2` → `#1C1A16` (sıcak taş skalası) | Koyu zeminde metin skalası; açık "nefes" bölümünde zemin |
| Vurgu (accent) | `#C99A3B` (antik altın), 100→600 | Etiketler (eyebrow), hover kenarlıkları, odak halkası, başlık vurgusu |

**Neden koyu:** Mor/mavi kombinasyonu brief tarafından yasaklıydı ve "jenerik SaaS/AI şablonu" hissi yaratıyor. Koyu çam-kömür zemin, yeşil/altın paletini soğutmadan taşır; ışık lekeleri (aurora), cam yüzeyler ve gren dokusu ancak koyu bir zeminde okunur. Sıcak taş nötr skala (saf gri değil) klinik değil, editoryal bir his verir.

**Ritim:** Sayfa baştan sona koyu değildir — `ResultsSection` bilinçli olarak tek bir açık "nefes" bölümüdür: koyu akışın ortasında yüzen yuvarlatılmış fildişi bir panel. Bu, hem monotonluğu kırar hem de sayfanın en somut vaadini (elde edilecek sonuçlar) görsel olarak öne çıkarır.

**Erişilebilirlik doğrulaması (WCAG, hesaplanmış kontrast oranları):**
- `neutral-50` metin + `surface-950` zemin (başlıklar): **17.4:1** — AAA.
- `neutral-300` metin + `surface-950` zemin (gövde metni): **10.6:1** — AAA.
- `neutral-400` metin + `surface-950` zemin: **6.9:1** — AA; yalnızca ikincil/destek metni için.
- `accent-300` metin + `surface-950` zemin (etiketler): **8.4:1** — AA.
- `primary-600` zemin + beyaz metin (CTA butonları): **6.38:1** — AA.
- `neutral-900` metin + `neutral-50` zemin (açık nefes bölümü): **15.8:1** — AAA.

**Kural:** `accent-500/600` tonları AÇIK zeminde küçük gövde metni olarak kullanılmaz (~3.5:1). Koyu zeminde bu rol `accent-300/400`'e devredildi — koyu zemin, altını güvenli bir metin rengi haline getirir.

## 2. Seçilen Tipografi Çifti

Kaynak: `src/styles/tokens.css`, `src/styles/global.css`

- **Başlık fontu:** Fraunces (değişken/variable serif) — `@fontsource-variable/fraunces` ile self-host edildi.
- **Gövde fontu:** Manrope (değişken/variable grotesk) — `@fontsource-variable/manrope` ile self-host edildi.

**Neden bu çift:** Fraunces'ın yüksek kontrastlı, editoryal karakteri "otorite/premium" hissini taşırken, Inter gibi aşırı yaygın bir sans-serif yerine seçildi (Inter, "jenerik AI şablonu" izlenimini güçlendirir). Manrope, geometrik ama sıcak bir gövde fontu olarak yüksek okunabilirlik sağlıyor ve serif başlıkla kontrast oluşturuyor. Fontlar Google Fonts CDN yerine npm paketleri üzerinden self-host edildi (`font-display: swap` ile) — üçüncü taraf render-blocking isteğini ortadan kaldırarak performans hedefini destekliyor.

## 3. Spacing Sistemi Uygulaması

Kaynak: `src/styles/tokens.css`

Yalnızca 7 adım tanımlı: `8 / 16 / 24 / 32 / 48 / 64 / 96` piksel — her biri Tailwind'in `--spacing-*` tema anahtarları olarak literal piksel değeriyle adlandırıldı (soyut bir index değil). Bu, her `p-24`, `gap-32`, `mt-48` gibi utility class'ın gerçekten onaylı 7 değerden birine karşılık geldiğini, derlenmiş CSS çıktısında doğrudan denetlenebilir kılıyor (`padding-inline: var(--spacing-24)` gibi). Build çıktısı bu eşlemenin doğru çalıştığını doğrulamak için manuel olarak incelendi.

## 4. Bölüm Mimarisi Açıklaması

Kaynak: `src/components/sections/*.astro`, `src/pages/index.astro`

Brief'teki 10 bölüm, birebir aynı sırayla ve her biri kendi bileşen dosyasında izole şekilde inşa edildi (Hero → ProblemSection → GrowthSystem → ProcessFlow → ResultsSection → WhyCnkr → CaseStudies → BlogPreview → FaqSection → FinalCta). Bu, brief'in "her bölüm tek bir mesaj iletir" kuralını kod seviyesinde de yansıtıyor: bir bölümü değiştirmek diğerini etkilemiyor, ve her dosya tek bir sorumluluğa sahip.

- **Section 3 (CNKR Büyüme Sistemi)** bilinçli olarak jenerik servis kartları olarak değil, merkezi bir düğüm + 4 sütun düğümünün SVG-benzeri ince çizgilerle bağlandığı, asimetrik dikey ofsetli (mt-8/16/32/48) bir sistem diyagramı olarak kuruldu — brief'in "servis kartlarından kaçının" ve "simetrik grid'lerden kaçının" kurallarına doğrudan yanıt.
- **Section 4 (Süreç)**, ikon baloncukları yerine 01–05 numaralandırmasıyla "stratejik/profesyonel" bir his taşıyor; masaüstünde yatay bağlantı çizgili stepper, mobilde dikey timeline'a dönüşüyor.
- **Section 7 (Vaka Analizleri)** yayına çıkmadan önce tamamen kaldırıldı: uydurma vaka örnekleriyle (rozetli de olsa) canlıya çıkmamak tercih edildi. `CaseStudies.astro` koleksiyon boşken hiçbir şey render etmiyor; `src/content/case-studies/` altına gerçek bir `.md` eklendiğinde bölüm kendiliğinden geri geliyor. Liste/detay rotaları ve navigasyon bağlantısı da bu nedenle kapatıldı (`site-config.ts` içinde yorum satırı olarak duruyor). Sosyal kanıtın tamamını Section 9'daki gerçek müşteri görüşleri taşıyor.

## 5. Dönüşüm Stratejisi Açıklaması

Sitenin tamamı tek bir hedefe (ücretsiz strateji görüşmesi rezervasyonu) hizmet edecek şekilde kurgulandı:

- Hero, Header ve Final CTA'da aynı CTA metni (`ctaLabel`) tekrarlanıyor — mesaj tutarlılığı için `src/lib/site-config.ts` üzerinden tek noktadan yönetiliyor.
- Problem bölümü, ziyaretçinin ilk 10 saniyede kendini tanımasını sağlayacak 5 somut problem cümlesiyle hemen ardından geliyor — brief'in gerekliliği.
- Sistem/Süreç/Sonuçlar bölümleri sırasıyla "ne yapıyoruz → nasıl yapıyoruz → ne elde edersiniz" mantığıyla ilerleyerek güven inşa ediyor, CTA'ya gelene kadar itirazları önceden karşılıyor.
- FAQ bölümü, bütçe/süre/sonuç zaman çizelgesi gibi rezervasyon öncesi son tereddütleri gideriyor.
- Final CTA, aciliyet ("sistemsiz geçen her ay") ve netlik (doğrudan randevu widget alanı) ile kapatıyor.

## 6. UX Kararları Açıklaması

- Header, kalıcı (sticky) bir CTA butonu taşıyor — ziyaretçi sayfanın neresinde olursa olsun ana eylem bir tık uzakta.
- FAQ, native `<details>/<summary>` ile inşa edildi — JS'siz de tamamen çalışan, klavyeyle erişilebilir bir akordeon.
- Mikro-etkileşimler (`ScrollReveal.astro`) aşamalı geliştirme (progressive enhancement) prensibiyle kuruldu: JS çalışmazsa veya `prefers-reduced-motion` açıksa içerik doğrudan ve tam görünür kalıyor; yalnızca JS + hareket izni varsa scroll-reveal animasyonu devreye giriyor.
- Odak halkası (`:focus-visible`) tüm etkileşimli öğelerde tanımlı, klavye kullanıcıları için görünür.

## 7. Mobil Optimizasyon Kararları

- Tüm bölümler mobile-first yazıldı; masaüstüne özgü karmaşık düzenler (Growth System'in düğüm diyagramı, Process'in yatay stepper'ı) `lg:` breakpoint'inde devreye giriyor, mobilde ise aynı bilgiyi dikey bir zaman çizelgesi/liste olarak sunuyor — bilgi kaybı olmadan.
- Header'daki mobil menü, `aria-expanded` durumu yönetilen erişilebilir bir hamburger buton ile açılıp kapanıyor.
- Hero görseli `aspect-[4/5]` ile sabitlendi — görsel gelmeden önce de geldikten sonra da düzen kayması (CLS) oluşmuyor.

## 8. CTA Stratejisi Açıklaması

- Tek bir CTA metni (`"Ücretsiz Strateji Görüşmesi Al"`) site genelinde tekrarlanıyor — farklı CTA metinleri ziyaretçiyi bilişsel olarak yorar, tek ve net bir eylem çağrısı dönüşüm oranını güçlendirir.
- CTA, Header (her zaman erişilebilir), Hero (ilk izlenim), ve Final CTA (kapanış) olmak üzere üç stratejik noktada tekrarlanıyor.
- Randevu adımı gömülü takvim (iframe) yerine **tek bir butonla** kurgulandı. Google Calendar'ın gömülü görünümü kendi tipografisini, kendi buton stilini ve kendi çerçevesini sayfaya taşıyor; sitenin serif/grotesk tipografisi ve yeşil paletiyle çakışarak bölümü amatör gösteriyordu — ayrıca üçüncü taraf iframe'i sayfa ağırlığını ve gizlilik yükünü artırıyor. Bunun yerine CTA butonu randevu sayfasını yeni sekmede açıyor (`rel="noopener noreferrer"`), sitenin kendi tasarım dili bozulmadan kalıyor. Buton koyu zeminde `onDark` varyantıyla beyaz zemin + `primary-900` metin kullanıyor (14.2:1 kontrast). `bookingUrl` boşaltılırsa buton iletişim sayfasına/e-postaya düşer, sayfa kırılmaz.

## 9. Sosyal Kanıt (Müşteri Görüşleri)

Kaynak: `src/components/sections/Testimonials.astro`, `src/lib/site-config.ts`

Üç gerçek müşteri görüşü, işletme sahibinin sağladığı somut sonuç metrikleriyle birlikte yerleştirildi (Ifdukkan — satışlarda 2x, Lavinya Çocuk Kulübü — %50 yeni kayıt, Aybüş Aksesuar — %150 etkileşim). Her görüşte **önce sonuç, sonra alıntı** gösteriliyor: ziyaretçi metni okumadan önce çıktıyı görüyor. Görüşler kişi adı değil işletme adı + sektör ile imzalanıyor — hedef kitle (KOBİ sahibi) kendi sektörünü gördüğünde daha hızlı özdeşleşiyor. Düzen asimetrik: ilk görüş büyük tipografiyle öne çıkarken diğer ikisi yan sütunda daha küçük bloklar halinde — brief'in "her yerde simetrik grid kullanma" kuralına uygun. Dizi boşaltılırsa bölüm sayfada hiç render edilmiyor; uydurma yorumla site yayına çıkamaz.

## 10. Katmanlı Zemin, Cam Yüzeyler ve Render Maliyeti

Kaynak: `src/styles/global.css`, `src/styles/tokens.css`

Brief'in "düz beyaz zemini kaldır, katmanlı derinlik kur" talebi üç katmanla karşılandı:

1. **Atmosfer:** `body::before` — sabit konumlu, üç geniş radial gradyandan oluşan ışık katmanı.
2. **Gren:** `body::after` — SVG `feTurbulence` dokusu, düşük opaklıkta.
3. **Bölüm kimliği:** her bölüm kendi düz zeminini boyamak yerine büyük ölçüde saydam kalır ve içine `aria-hidden` dekoratif katmanlar (`.aurora`, `.grid-mask`, `.dot-mask`, `.noise-layer`) yerleştirilir. Bölümler böylece **sert kenarlık olmadan** ayrışır; ayrımı ışık farkı ve kenarlara doğru sönümlenen `.hairline` gradyanı taşır.

Bu görünümün naif uygulaması ölçülebilir biçimde render sürecini kilitliyordu. Üç karar bilinçli olarak alındı ve kodda gerekçesiyle birlikte yorumlandı:

- **`background-attachment: fixed` kullanılmadı.** Sabit arka plan eki her kaydırma karesinde yeniden boyama tetikler ve iOS Safari'de güvenilir çalışmaz; yerine sabit konumlu bir sözde-öğe kullanıldı.
- **Ekran boyutunda `mix-blend-mode` kullanılmadı.** Sabit, viewport boyutunda bir harmanlama katmanı altındaki tüm içeriği tek bir kompozisyon grubuna zorlar; uzun sayfada render süreci yanıt vermez hale geliyordu. Düşük opaklıkta düz doku aynı görsel etkiyi bedelsiz verir.
- **Cam yüzeylerde `backdrop-filter` kullanılmadı.** 26 cam kartın her biri ayrı bir kompozisyon katmanı demekti. Zemin sabit ve büyük ölçüde düz olduğu için bulanıklaştırılacak içerik zaten yok; cam etkisi gradyan + ince kenarlık + üst iç parlaklıkla kuruluyor. `backdrop-filter` yalnızca gerçekten içerik üzerinde yüzen tek öğede — sticky header'da — korundu.
- **`will-change` kaldırıldı.** Aurora lekelerinde ve kartlarda kalıcı GPU katmanı terfisi, büyük blur yarıçaplarıyla birlikte yüksek doku belleği tüketiyordu.

Ayrıca `html, body { overflow-x: clip }` kalıcı bir güvenlik ağı olarak eklendi: dekoratif lekeler sabit piksel genişliğinde ve bölüm kutusunun dışına taşacak şekilde konumlandığı için, ileride kırpılmayan bir kapsayıcıya eklenecek bir leke dar ekranlarda yatay kaydırma çubuğu oluşturamaz.

## 11. Hareket ve Aşamalı Geliştirme

Kaynak: `src/components/ScrollReveal.astro`, `src/components/sections/Hero.astro`

Eklenen tüm hareket katmanları isteğe bağlıdır, hiçbiri içeriğin görünmesi için gerekli değildir:

- `data-reveal` öğeleri varsayılan olarak tam görünürdür; yalnızca JS çalışıyorsa ve `prefers-reduced-motion` kapalıysa gizlenip IntersectionObserver ile kademeli gecikmeyle ortaya çıkar.
- `.card-spotlight` kartlarındaki imleç ışığı, `--mx`/`--my` CSS değişkenleri yazılmazsa hiç görünmez.
- Hero portresindeki fare parallax'ı yalnızca `(pointer: fine)` cihazlarda devreye girer; dokunmatik cihazlarda hiç bağlanmaz.
- Butonun üzerinden geçen ışık huzmesi `motion-reduce:hidden` ile kapatılır.
- `prefers-reduced-motion: reduce` tüm animasyon ve geçiş sürelerini global olarak sıfırlar.

---

**Not:** Sitede uydurma hiçbir müşteri verisi yok. Tüm sosyal kanıt, işletme sahibinin doğruladığı üç gerçek müşteri görüşünden ibaret; yer tutucu vaka analizleri yayına çıkmadan kaldırıldı. Randevu linki, hero görseli, iletişim bilgileri ve görüşler gerçek verilerle dolduruldu ve `src/lib/site-config.ts` üzerinden güncellenebilir. Açık kalan tek kalem: gizlilik politikası metni hukuki gözden geçirme bekliyor.

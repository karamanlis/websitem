# Performans Notları (Mobil PageSpeed: 87 → 94)

Ölçüm: PageSpeed Insights / Lighthouse mobil (simüle yavaş 4G, 4x CPU).
Yerel başlangıç ölçümü 77 (LCP 4,1 sn, TBT 350 ms); son PageSpeed sonucu **94**.
Yerel ölçümler gürültülüdür (aynı sayfa 84–98 arası verebiliyor).

## Asıl bulgu
Dosyalar hızlı iniyordu; sorun ilk boyamanın GPU yükü yüzünden ~2 sn gecikmesiydi
(LCP "element render delay"). Dekoratif katmanlar tek tek kapatılarak ölçüldü:

| Katman kapalı | Skor |
|---|---|
| hiçbiri | 84 |
| `body::after` gürültü (feTurbulence) | 93 |
| `.grid-mask` (maskeli ızgara) | 98 |

## Yapılan değişiklikler

### Hero (`src/components/sections/Hero.astro`)
- LCP öğesi önceden `<video>` idi. Artık `astro:assets` `<Image>` ile poster
  (`src/assets/hero-poster.jpg`): webp, `widths [640, 960, 1280]`, `priority`
  (`fetchpriority=high`, eager). Mobil indirme 95 KB → 22 KB.
- `<video>` HTML'de `preload="none"`, `src` yok. Sayfa `load` + `requestIdleCallback`
  sonrası script `src` atar; yalnızca `min-width: 768px`, `prefers-reduced-motion`
  kapalı ve `saveData` kapalıyken. `playing` olunca poster üzerine fade-in.
  Mobilde 559 KB video hiç inmez.
- 3 hero `.aurora` lekesi `hidden md:block`.

### CSS (`src/styles/global.css`)
- Mobilde (`<768px`) kapalı: `.grid-mask`, `body::after` gürültü dokusu, tüm `.aurora`
  blur lekeleri. Masaüstünde değişmedi.
- Fontsource import'ları yerine elle `@font-face`: yalnızca **latin + latin-ext**
  (Türkçe ğ ş İ latin-ext'te; Kiril/Yunanca/Vietnamca çıkarıldı).

### Layout (`src/layouts/BaseLayout.astro`)
- Latin ve latin-ext woff2 dosyaları `preload` (Manrope + Fraunces).
- Meta Pixel: `fbq` kuyruğu hemen tanımlı, `fbevents.js` `load` + idle sonrası
  yüklenir (PageView kaybolmaz).

### Header (`src/components/layout/Header.astro`)
- Mobil menü butonundaki `backdrop-blur-md` kaldırıldı.

### Build / deploy
- `astro.config.mjs`: `build.inlineStylesheets: 'always'` (render engelleyen CSS isteği yok).
- `netlify.toml`: `/_astro/*` için `max-age=31536000, immutable`; favicon ve
  `logo-mark.jpg` için 1 ay cache.

## Bilinen / açık konular
- Masaüstünde aralıklı CLS ≈ 0,3 (tüm hero bölümü kayıyor); kaynağı bulunmadı,
  masaüstü kapsam dışı bırakıldı.
- `public/hero.webp` artık kullanılmıyor (hero portresi videolu tasarımla değişti).
- Build uyarısı "case-studies collection is empty" performansla ilgisiz.

## Yeni dekoratif katman eklerken
Tam ekran/büyük `filter: blur()`, `backdrop-filter`, `mask-image` ve `feTurbulence`
mobilde GPU rasterını ağırlaştırır ve LCP'yi geciktirir. Eklenirse mobilde kapatın
ve PageSpeed ile doğrulayın.

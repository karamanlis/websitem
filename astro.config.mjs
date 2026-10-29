// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cnkrdijital.com',

  // Çok dillilik: Türkçe kökte (/), İngilizce /en/ altında.
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  // 70 KB'lık CSS'i HTML'e gömer: render engelleyen ayrı CSS isteği kalkar.
  build: { inlineStylesheets: 'always' },

  vite: {
    plugins: [tailwindcss()],
  },

  // Teşekkür sayfaları (tr + en) noindex olduğu için sitemap'ten de çıkarılıyor —
  // aksi halde Search Console "noindex sayfa sitemap'te" uyarısı verir.
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/tesekkurler') && !page.includes('/thank-you'),
    }),
  ],
});
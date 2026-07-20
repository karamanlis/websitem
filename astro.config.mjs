// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cnkrdijital.com',

  vite: {
    plugins: [tailwindcss()],
  },

  // Teşekkür sayfası noindex olduğu için sitemap'ten de çıkarılıyor —
  // aksi halde Search Console "noindex sayfa sitemap'te" uyarısı verir.
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/tesekkurler'),
    }),
  ],
});
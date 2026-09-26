// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dnacpr.hk',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  redirects: {
    '/': '/zh/',
  },
  image: {
    // local image only
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: {
          zh: 'zh-HK',
          en: 'en',
        },
      },
      lastmod: new Date(),
    }),
  ],
});

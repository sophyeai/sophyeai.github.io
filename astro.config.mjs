// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  ...(process.env.NODE_ENV === 'production' ? {
    site: 'https://sophyeai.github.io',
    base: '',
    trailingSlash: 'never',
  } : {
    site: 'https://example.com',
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react({ experimentalReactChildren: true }),
    tailwind(),
    starlight({
      title: 'Sophye',
      // favicon: '/favicon.png',
      // customCss: [
      //   './src/shared/styles/guide.css',
      // ],
      // components: {
      //   SiteTitle: './src/entry/layouts/default/BrandLogo.astro',
      //   SocialIcons: './src/entry/layouts/default/NavMenu.astro',
      // },
      sidebar: [
        {
          label: 'Getting Started',
          translations: { zh: '开始' },
          items: [
            'guides',
          ],
        },
      ],
      lastUpdated: true,
    }),
  ],
});
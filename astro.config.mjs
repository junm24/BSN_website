// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://junm24.github.io',
  base: '/BSN_website',
  server: {
    port: 3000,
    host: '127.0.0.1'
  }
});

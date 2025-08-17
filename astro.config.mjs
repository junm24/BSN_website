// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://bsn-website-tau.vercel.app',
  // Remove base for Vercel deployment
  server: {
    port: 3000,
    host: '127.0.0.1'
  }
});

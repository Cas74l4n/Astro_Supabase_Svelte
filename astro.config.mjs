import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: "https://gabrielcastelan.com",
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  integrations: [svelte(), tailwind()]
});

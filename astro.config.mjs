import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: vercel(),  // Cambia a vercel()
  integrations: [svelte(), tailwind()],
});

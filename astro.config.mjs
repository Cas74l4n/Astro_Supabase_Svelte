import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-supabase-svelte.vercel.app",
  output: 'server',
  adapter: vercel(),
  integrations: [svelte(), tailwind()],
});

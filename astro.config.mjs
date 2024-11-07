import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [svelte(), tailwind()],
  vite: {
    resolve: {
      alias: {
        // Configuración para manejar módulos de Node en Vite
        fs: 'memfs',
        path: 'path-browserify',
      },
    },
    define: {
      'process.env.NODE_NO_WARNINGS': JSON.stringify('1'),
    },
  },
});

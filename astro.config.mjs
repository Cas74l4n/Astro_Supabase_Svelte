import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  integrations: [svelte(), tailwind()],
  output: 'server',
  adapter: netlify()/* ,
  vite: {
    resolve: {
      alias: {
        // Configuración para manejar módulos de Node en Vite
        fs: 'memfs',
        path: 'path-browserify',
      },
    },
  }, */
});

import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  integrations: [svelte(), tailwind()],
  middleware: {
    '/profile': '/src/middleware/auth.ts', // Aplica el middleware solo a rutas protegidas
    '/chatboot': '/src/middleware/auth.ts',
    '/corrector': '/src/middleware/auth.ts',
  },
});

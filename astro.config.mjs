import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import amplify from 'astro-aws-amplify';


export default defineConfig({
  integrations: [svelte(), tailwind()],
  output: 'server',
  adapter: amplify()
});

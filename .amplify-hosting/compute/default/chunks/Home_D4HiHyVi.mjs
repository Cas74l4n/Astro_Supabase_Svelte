import { c as createComponent, r as renderTemplate, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_CXq0PP1b.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  const { title } = Astro2.props;
  return renderTemplate`<!-- Inicio --><html lang="en" class="h-full w-full"> <head><title>${title}</title><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">${renderHead()}</head> <body class="flex flex-col h-full w-full dark:bg-zinc-900 bg-zinc-50 dark:text-zinc-100 overflow-clip"> <nav class="border-b dark:bg-zinc-800 dark:border-zinc-700"> <div class="flex items-baseline justify-end sm:justify-between p-4 max-w-screen-xl mx-auto"> <a href="/" class="hidden sm:block font-semibold dark:text-white">Inicio</a> <div> <ul class="font-medium flex items-baseline gap-8"> <li> <a href="/signin" class="block text-zinc-900 dark:text-gray-200">Inicio de Sesión</a> </li> <li> <!-- <a href="/register" class="block text-zinc-900 dark:text-gray-200">Registrarse</a> --> <a href="/error503" class="block text-zinc-900 dark:text-gray-200">Registrarse</a> </li> </ul> </div> </div> </nav> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "E:/Astro_Supabase_Svelte/src/layouts/Home.astro", void 0);

export { $$Home as $ };

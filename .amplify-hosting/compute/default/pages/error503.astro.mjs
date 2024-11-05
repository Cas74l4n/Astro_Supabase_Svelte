/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CXq0PP1b.mjs';
import 'kleur/colors';
import { $ as $$Home } from '../chunks/Home_D4HiHyVi.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CDnEk0ZN.mjs';

const $$Error503 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Home, { "title": "Registrarse" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container flex items-center justify-center m-auto p-4"> <div class="flex items-center justify-center min-h-screen"> <div class="text-center"> <h1 class="text-9xl font-bold text-blue-500">503</h1> <p class="text-2xl mt-4 text-gray-800">Página No Encontrada</p> <p class="mt-2 text-gray-600">¡Ups! La página que buscas no existe o ha sido movida.</p> <div class="mt-8"> <a href="/signin" class="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
Regresar al Inicio
</a> </div> <div class="mt-10 flex justify-center"> <div class="text-gray-400 text-sm">😔 Lo siento, estamos experimentando problemas.</div> </div> </div> </div> </div> ` })}`;
}, "E:/Astro_Supabase_Svelte/src/pages/error503.astro", void 0);

const $$file = "E:/Astro_Supabase_Svelte/src/pages/error503.astro";
const $$url = "/error503";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Error503,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

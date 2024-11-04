/* empty css                                    */
import { a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D3q4JsZc.mjs';
import 'kleur/colors';
import { $ as $$Home } from '../chunks/Home_BH2PO5cr.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CDnEk0ZN.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "Layout", $$Home, { "title": "Registrarse" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container flex items-center justify-center m-auto p-4"> <div class="w-full max-w-sm bg-zinc-800 text-gray-200 p-8 rounded-lg shadow-md"> <h1 class="text-2xl font-bold mb-4">Registrarse</h1> <p class="mb-6">¿Ya tienes una cuenta? <a href="/signin" class="text-blue-400 hover:underline">Iniciar sesión</a> </p> <form action="/api/auth/register" method="post"> <div class="relative mb-4"> <label class="block mb-2" for="email">Correo electrónico</label> <input class="w-full p-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400" type="email" name="email" id="email" required> </div> <div class="relative mb-6"> <label class="block mb-2" for="password">Contraseña</label> <input class="w-full p-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400" type="password" name="password" id="password" required> <!-- Ícono para mostrar/ocultar la contraseña --> <span id="toggle-password" class="absolute right-3 top-10 cursor-pointer text-gray-400" aria-label="Mostrar/ocultar contraseña"> <i class="fas fa-eye"></i> </span> </div> <button type="submit" class="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Registrarse</button> </form> </div> </div> ` })}`;
}, "E:/Astro_Supabase_Svelte/src/pages/register.astro", void 0);

const $$file = "E:/Astro_Supabase_Svelte/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

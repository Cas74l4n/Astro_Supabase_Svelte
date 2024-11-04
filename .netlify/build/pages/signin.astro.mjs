/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_C27lGTmz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Home } from '../chunks/Home_4hgmZxE4.mjs';
/* empty css                                  */
export { r as renderers } from '../chunks/_@astro-renderers_CDnEk0ZN.mjs';

const $$Astro = createAstro();
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/corrector");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Home, { "title": "Iniciar sesi\xF3n", "data-astro-cid-cj4bt2fj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container m-auto " data-astro-cid-cj4bt2fj> <div class="login-box bg-zinc-800 text-gray-200" data-astro-cid-cj4bt2fj> <h1 class="text-gray-200" data-astro-cid-cj4bt2fj>Iniciar sesión</h1> <p class="text-gray-200" data-astro-cid-cj4bt2fj>¿Nuevo aquí? <a href="/error503" data-astro-cid-cj4bt2fj>Crea una cuenta</a></p> <form action="/api/auth/signin" method="post" data-astro-cid-cj4bt2fj> <div class="form-group" data-astro-cid-cj4bt2fj> <label class="text-gray-200" for="email" data-astro-cid-cj4bt2fj>Correo electrónico</label> <input class="text-gray-600" type="email" name="email" id="email" data-astro-cid-cj4bt2fj> </div> <div class="form-group relative" data-astro-cid-cj4bt2fj> <label class="text-gray-200" for="password" data-astro-cid-cj4bt2fj>Contraseña</label> <input class="text-gray-600" type="password" name="password" id="password" data-astro-cid-cj4bt2fj> <!-- Ícono para mostrar/ocultar la contraseña --> <span id="toggle-password" class="absolute right-3 top-10 cursor-pointer text-gray-600" data-astro-cid-cj4bt2fj> <i class="fas fa-eye" data-astro-cid-cj4bt2fj></i> </span> </div> <button type="submit" data-astro-cid-cj4bt2fj>Iniciar sesión</button> </form> <!-- Provedores --> <hr class="h-0 border-t mt-8 dark:border-zinc-600 border-zinc-300" data-astro-cid-cj4bt2fj> <p class="-mt-2.5 text-xs text-center dark:text-zinc-400 text-zinc-500" data-astro-cid-cj4bt2fj> <span class="bg-zinc-800 px-3" data-astro-cid-cj4bt2fj>Or with</span> </p> <form action="/api/auth/signin" method="post" class="w-full max-w-md mt-6 flex flex-col gap-2" data-astro-cid-cj4bt2fj> <button value="github" name="provider" type="submit" class="w-full dark:bg-zinc-100 p-1.5 border border-zinc-300 dark:border-zinc-100 flex justify-center items-center gap-2 rounded-md mt-2 dark:text-zinc-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-cj4bt2fj> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-auto" viewBox="0 0 98 96" data-astro-cid-cj4bt2fj> <path fill="#24292f" fill-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" clip-rule="evenodd" data-astro-cid-cj4bt2fj></path> </svg>
Sign in with GitHub</button> <button value="google" name="provider" class="w-full dark:bg-zinc-100 p-1.5 border border-zinc-300 dark:border-zinc-100 flex justify-center items-center gap-2 rounded-md mt-2 dark:text-zinc-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed" type="submit" data-astro-cid-cj4bt2fj> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-auto" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" data-astro-cid-cj4bt2fj> <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" data-astro-cid-cj4bt2fj></path> <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" data-astro-cid-cj4bt2fj></path> <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" data-astro-cid-cj4bt2fj></path> <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" data-astro-cid-cj4bt2fj></path> </svg>
Sign in with Google
</button> </form> </div> </div> ` })}  `;
}, "E:/Astro_Supabase_Svelte/src/pages/signin.astro", void 0);

const $$file = "E:/Astro_Supabase_Svelte/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as addAttribute, e as renderSlot } from './astro/server_D3q4JsZc.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from './supabase_BgLu1d6J.mjs';
import { g as getUserIdFromCookies } from './authHelpers_bNnOQLPJ.mjs';
/* empty css                            */

const $$Astro = createAstro("https://astro-supabase-svelte.vercel.app");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { title } = Astro2.props;
  const { locals } = Astro2;
  const email = locals.email;
  const { cookies } = Astro2;
  const userId = await getUserIdFromCookies(cookies);
  const { data: profileData } = await supabase.from("profiles").select("display_name").eq("id", userId).single();
  const display_name = profileData.display_name;
  return renderTemplate`<!-- ya con el inicio de seccion --><html lang="en" class="h-full w-full"> <head><title>${title}</title><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">${renderHead()}</head> <body class="flex flex-col h-full w-full dark:bg-zinc-900 bg-zinc-50 dark:text-zinc-100 overflow-hidden"> <nav class="border-b dark:bg-zinc-800 dark:border-zinc-700 z-10"> <div class="flex items-center justify-end sm:justify-between p-4 max-w-screen-xl mx-auto"> <a href="/" class="flex flex-auto sm:block font-semibold dark:text-white">Inicio</a> <div> <ul class="font-medium flex gap-8"> <li> <div class="flex flex-row-reverse"> <!-- 
                    class="w-9 h-9 rounded-full cursor-pointer" 
                     --> <img id="avatarButton" class="w-[3.8rem] h-9 rounded-full cursor-pointer"${addAttribute("https://kakoqccxypiyimjgkmyp.supabase.co/storage/v1/object/public/Avatar/Using.png", "src")} alt="User Avatar"> </div> <!-- src={avatarUrl || 'https://kakoqccxypiyimjgkmyp.supabase.co/storage/v1/object/public/Avatar/Using.png'} alt="User Avatar" --> <!-- Modal --> <div id="userDropdown" class="fixed inset-0 invisible bg-black bg-opacity-50 flex items-normal justify-end z-50"> <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-96 divide-y divide-gray-100 dark:divide-gray-600 relative"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <!-- Nombre del Perfil --> <div>${display_name}</div> <div class="font-medium truncate">${email}</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"> <li> <a href="/corrector" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> <i class="fa fa-book mr-2"></i> Corrector</a> </li> <li> <a href="/chatboot" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fa fa-comments mr-2"></i>Chat Boot</a> </li> <!-- <li>
                          <a
                            href="/profile"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          ><i class="fas fa-user mr-2"></i>Profile</a>
                        </li> --> </ul> <div class="py-1"> <a href="/api/auth/signout" class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i class="fas fa-sign-out-alt mr-2"></i>Sign Out</a> </div> <button id="closeModal" class="absolute top-2 right-2 text-gray-600 dark:text-gray-400">
✖
</button> </div> </div> </li> </ul> </div> </div> </nav> ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "E:/Astro_Supabase_Svelte/src/layouts/Navbar.astro", void 0);

export { $$Navbar as $ };

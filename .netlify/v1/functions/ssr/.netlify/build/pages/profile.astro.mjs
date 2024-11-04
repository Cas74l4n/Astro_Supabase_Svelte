/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_C27lGTmz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Navbar } from '../chunks/Navbar_BhztgDgQ.mjs';
import { p as push, b as attr, c as bind_props, d as pop } from '../chunks/_@astro-renderers_CDnEk0ZN.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CDnEk0ZN.mjs';
import 'esm-env';
/* empty css                                   */
import { f as fallback } from '../chunks/utils_DmF-9_lv.mjs';
import { s as supabase } from '../chunks/supabase_BgLu1d6J.mjs';
import { g as getUserIdFromCookies } from '../chunks/authHelpers_GAPXQbA2.mjs';

function Camera($$payload) {
	$$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"></path><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"></path></svg>`;
}

function Profile($$payload, $$props) {
	push();

	let dataProfile = fallback($$props["dataProfile"], () => [], true);
	// Inicializamos las variables con los valores del perfil si existen
	let display_name = dataProfile[0]?.display_name || "";
	let bio = dataProfile[0]?.bio || "";

	let passwordType = "password";

	$$payload.out += `<form class="w-[1200px] mx-auto bg-gray-800 border-gray-100 rounded-3xl"><div class="p-6"><h2 class="text-3xl">Profile Settings</h2> <p>Update your profile information here.</p></div> <div class="p-6 space-y-6"><div class="flex space-x-8"><div class="w-1/3"><div class="flex flex-col items-center space-y-4"><div class="w-48 h-48 rounded-full bg-gray-200 text-gray-800"><img src="" alt="Profile_picture" class="rounded-full"></div> <label for="avatar-upload" class="cursor-pointer"><div class="flex items-center space-x-2 text-primary-foreground px-4 py-2 rounded-md bg-gray-600">`;
	Camera($$payload);
	$$payload.out += `<!----> <span>Change Avatar</span></div></label> <input id="avatar-upload" type="file" accept="image/*" class="hidden"></div></div> <div class="w-2/3 space-y-6"><div class="grid grid-cols-2 gap-6"><div class="space-y-2"><label for="display_name">Name</label> <input id="display_name" placeholder="John Doe" class="w-full border border-gray-300 rounded-md p-2 text-gray-800"${attr("value", display_name)}></div> <div class="space-y-2"><label for="email">Email</label> <input id="email" type="email" placeholder="john@example.com" class="w-full border border-gray-300 rounded-md p-2 text-gray-800"></div></div> <div class="space-y-2"><label for="bio">Bio</label> <input id="bio" type="text" placeholder="Tell us about yourself" class="w-full border border-gray-300 rounded-md p-2 text-black"${attr("value", bio)}></div> <div class="grid grid-cols-2 gap-6"><div class="space-y-2"><label for="current-password">Current Password</label> <input id="current-password"${attr("type", passwordType)} class="w-full border border-gray-300 rounded-md p-2 text-black password-masked svelte-yp7473"></div> <div class="space-y-2"><label for="new_password">New Password</label> <input id="new_password" type="password" class="w-full border border-gray-300 rounded-md p-2 text-black"></div></div> <div class="space-y-2"><label for="confirm_password">Confirm New Password</label> <input id="confirm_password" type="password" class="w-full border border-gray-300 rounded-md p-2 text-black"></div></div></div></div> <div class="p-6"><button type="submit" class="w-full bg-primary text-white py-2 rounded-md bg-slate-600">Save Changes</button></div></form>`;
	bind_props($$props, { dataProfile });
	pop();
}

const $$Astro = createAstro();
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  const { cookies } = Astro2;
  const userId = await getUserIdFromCookies(cookies);
  const { data: dProfiles, error } = await supabase.from("profiles").select("id, display_name, bio").eq("id", userId);
  if (error) {
    throw new Error("Error al obtener las conversaciones");
  }
  return renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "title": "Perfil" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="p-6 w-full flex flex-col items-center gap-2 overflow-auto	"> ${renderComponent($$result2, "Profil", Profile, { "dataProfile": dProfiles, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Astro_Supabase_Svelte/src/components/profile.svelte", "client:component-export": "default" })} </section> ` })}`;
}, "E:/Astro_Supabase_Svelte/src/pages/profile.astro", void 0);

const $$file = "E:/Astro_Supabase_Svelte/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                    */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DodBriqs.mjs';
import 'kleur/colors';
import { $ as $$Navbar } from '../chunks/Navbar_CKjzAlxk.mjs';
import { p as push, e as ensure_array_like, a as escape_html, b as attr, c as bind_props, d as pop } from '../chunks/_@astro-renderers_CDnEk0ZN.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CDnEk0ZN.mjs';
import { f as fallback } from '../chunks/utils_DmF-9_lv.mjs';
import { s as supabase } from '../chunks/supabase_BgLu1d6J.mjs';
import { g as getUserIdFromCookies } from '../chunks/authHelpers_bNnOQLPJ.mjs';

function Chatboot($$payload, $$props) {
	push();

	let conversation = fallback($$props["conversation"], () => [], true);
	/* let text = "Hello! How can I help you, today?";
	  let displayText = "";
	  let index = 0;
	  const typingSpeed = 50; */
	let inputText = ""; // Valor actual del input

	const each_array = ensure_array_like(conversation);

	$$payload.out += `<div class="relative"><!--[-->`;

	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let entry = each_array[$$index];

		if (entry.userId !== "") {
			$$payload.out += "<!--[-->";
			$$payload.out += `<div class="flex items-end justify-end"><div class="bg-blue-500 text-white p-3 rounded-lg max-w-[35rem] my-2"><p>${escape_html(entry.message)}</p></div></div>`;
		} else {
			$$payload.out += "<!--[!-->";
		}

		$$payload.out += `<!--]--> `;

		if (entry.userId !== "") {
			$$payload.out += "<!--[-->";
			$$payload.out += `<div class="flex items-start"><div class="bg-pink-100 text-pink-900 p-3 rounded-lg max-w-[35rem] my-2"><p>${escape_html(entry.response)}</p></div></div>`;
		} else {
			$$payload.out += "<!--[!-->";
		}

		$$payload.out += `<!--]-->`;
	}

	$$payload.out += `<!--]--> <div></div></div> <div class="border-t p-3 bg-gray-800 fixed bottom-0 left-0 right-0 max-w-5xl mx-auto"><div class="flex space-x-2"><input id="result" type="text"${attr("value", inputText)} placeholder="Type a message..." class="flex-1 border rounded-lg p-2 mr-2 text-zinc-700"> <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded-lg"${attr("disabled", !inputText.trim(), true)}>Send</button></div></div>`;
	bind_props($$props, { conversation });
	pop();
}

const $$Astro = createAstro();
const $$Chatboot = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Chatboot;
  const { cookies } = Astro2;
  const userId = await getUserIdFromCookies(cookies);
  const { data: conversations, error } = await supabase.from("StoreConversation").select("userId, message, response, created_at").eq("userId", userId).order("created_at", { ascending: true });
  if (error) {
    throw new Error("Error al obtener las conversaciones");
  }
  return renderTemplate`<!-- Chat Boot -->${renderComponent($$result, "Navbar", $$Navbar, { "title": "Chat Boot" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex justify-center items-center h-screen "> <div class="bg-gray-900 w-full max-w-5xl shadow-lg rounded-lg py-4 pl-4 pr-1 flex flex-col h-[90vh] relative"> <!-- Chat Messages --> <div class="flex-1 overflow-y-auto space-y-4 pr-1 mb-10"> ${renderComponent($$result2, "Chat", Chatboot, { "conversation": conversations, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Astro_Supabase_Svelte/src/components/Chatboot.svelte", "client:component-export": "default" })} </div> </div></section> ` })}`;
}, "E:/Astro_Supabase_Svelte/src/pages/chatboot.astro", void 0);

const $$file = "E:/Astro_Supabase_Svelte/src/pages/chatboot.astro";
const $$url = "/chatboot";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Chatboot,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C27lGTmz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { p as push, d as pop } from '../chunks/_@astro-renderers_CDnEk0ZN.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CDnEk0ZN.mjs';
import 'esm-env';
import { $ as $$Navbar } from '../chunks/Navbar_BhztgDgQ.mjs';

function Updoad($$payload) {
	$$payload.out += `<svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path></svg>`;
}

function React($$payload, $$props) {
	push();

	$$payload.out += `<div class="max-w-3xl w-full mx-auto my-5"><textarea id="result" class="max-w-3xl w-full m-auto text-base pl-2.5 text-gray-100 placeholder-gray-400 bg-gray-700 border border-gray-900 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Put your english to fix" name="comment" rows="5" cols="40"></textarea> <span class="my-2.5">`;

	{
		$$payload.out += "<!--[-->";
		$$payload.out += `<button type="button" class="py-2 my-2.5 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">`;
		Updoad($$payload);
		$$payload.out += `<!----> Fix My English!</button>`;
	}

	$$payload.out += `<!--]--></span> <div>`;

	{
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--></div></div>`;
	pop();
}

const $$Corrector = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "title": "Fix My English" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold text-center">Fix my english! 🇬🇧</h1> ${renderComponent($$result2, "React", React, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/Astro_Supabase_Svelte/src/components/React.svelte", "client:component-export": "default" })} ` })}`;
}, "E:/Astro_Supabase_Svelte/src/pages/corrector.astro", void 0);

const $$file = "E:/Astro_Supabase_Svelte/src/pages/corrector.astro";
const $$url = "/corrector";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Corrector,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

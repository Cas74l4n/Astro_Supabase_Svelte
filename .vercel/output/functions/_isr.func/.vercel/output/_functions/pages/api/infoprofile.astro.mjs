import { s as supabase } from '../../chunks/supabase_BgLu1d6J.mjs';
import { g as getUserIdFromCookies } from '../../chunks/authHelpers_bNnOQLPJ.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CDnEk0ZN.mjs';

const GET = async ({ cookies }) => {
  const userId = await getUserIdFromCookies(cookies);
  const { data: dataProfile, error } = await supabase.from("profiles").select("*").eq("id", userId);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify(dataProfile), { headers: { "Content-Type": "application/json" } });
};
const PUT = async ({ request, cookies }) => {
  const userId = await getUserIdFromCookies(cookies);
  const { display_name, bio } = await request.json();
  if (!display_name || !bio) {
    return new Response("Faltan campos obligatorios", { status: 400 });
  }
  const { data, error } = await supabase.from("profiles").update({ display_name, bio }).eq("id", userId);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(
    JSON.stringify({ success: true, message: "Perfil actualizado correctamente", data }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

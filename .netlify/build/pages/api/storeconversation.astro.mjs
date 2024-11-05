import { s as supabase } from '../../chunks/supabase_BgLu1d6J.mjs';
import { g as getUserIdFromCookies } from '../../chunks/authHelpers_GAPXQbA2.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CDnEk0ZN.mjs';

const GET = async ({ cookies }) => {
  const userId = await getUserIdFromCookies(cookies);
  const { data: conversations, error } = await supabase.from("StoreConversation").select("*").eq("userId", userId).order("created_at", { ascending: true });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify(conversations), { headers: { "Content-Type": "application/json" } });
};
const POST = async ({ request, cookies }) => {
  const userId = await getUserIdFromCookies(cookies);
  const { message, response } = await request.json();
  if (!message || !response) {
    return new Response("Faltan campos obligatorios", { status: 400 });
  }
  const { data, error } = await supabase.from("StoreConversation").insert({ userId, message, response }).select();
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify(data), { status: 201, headers: { "Content-Type": "application/json" } });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { s as supabase } from '../../chunks/supabase_BgLu1d6J.mjs';
import { g as getUserIdFromCookies } from '../../chunks/authHelpers_GAPXQbA2.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CDnEk0ZN.mjs';

const GET = async ({ cookies }) => {
  const userId = await getUserIdFromCookies(cookies);
  const { data: userData, error: userError } = await supabase.from("auth.users").select("raw_user_meta_data->>avatar_url").eq("id", userId).single();
  if (userError) {
    return new Response(JSON.stringify({ error: userError.message }), { status: 500 });
  }
  const avatarUrl = userData.avatar_url;
  return new Response(
    JSON.stringify({ avatarUrl }),
    { headers: { "Content-Type": "application/json" } }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

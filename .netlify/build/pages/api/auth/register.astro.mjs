import { s as supabase } from '../../../chunks/supabase_BgLu1d6J.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_CDnEk0ZN.mjs';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return new Response("Correo electrónico y contraseña obligatorios", { status: 400 });
  }
  const { error } = await supabase.auth.signUp({
    email,
    password
  });
  if (error) {
    if (error.message.includes("already registered")) {
      return new Response("Este correo ya está registrado", { status: 400 });
    }
    return new Response(error.message, { status: 500 });
  }
  return redirect("/signin");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

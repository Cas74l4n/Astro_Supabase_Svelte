import { s as supabase } from '../../../chunks/supabase_BgLu1d6J.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_CDnEk0ZN.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();
  const validProviders = ["google", "github"];
  if (provider && validProviders.includes(provider)) {
    const { data: data2, error: error2 } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "https://astro-supabase-svelte.vercel.app/api/auth/callback"
      }
    });
    if (error2) {
      console.error("Error en OAuth:", error2.message);
      return new Response("Error en la autenticación OAuth", { status: 500 });
    }
    return redirect(data2.url);
  }
  if (!email || !password) {
    return new Response("Correo electrónico y contraseña son obligatorios", { status: 400 });
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    console.error("Error en autenticación con correo y contraseña:", error.message);
    return new Response("Correo electrónico o contraseña incorrectos", { status: 401 });
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    sameSite: "strict",
    path: "/",
    secure: true,
    httpOnly: true
  });
  cookies.set("sb-refresh-token", refresh_token, {
    sameSite: "strict",
    path: "/",
    secure: true,
    httpOnly: true
  });
  return redirect("/corrector");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

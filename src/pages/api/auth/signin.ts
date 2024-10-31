import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import type { Provider } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();

  // Autenticación con Proveedor OAuth (Google o GitHub)
  const validProviders = ['github' , 'google'];

  if (provider && validProviders.includes(provider)) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: import.meta.env.DEV
          ? "http://localhost:4321/api/auth/callback"
          : "https://astro-supabase-svelte.vercel.app/api/auth/callback",
      },
    });

    if (error) {
      console.error("Error en OAuth:", error.message);
      return new Response("Error en la autenticación OAuth", { status: 500 });
    }

    // Redirige a la URL proporcionada por Supabase
    return redirect(data.url);
  }

  // Autenticación con Correo y Contraseña
  if (!email || !password) {
    return new Response("Correo electrónico y contraseña son obligatorios", { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error en autenticación con correo y contraseña:", error.message);
    return new Response("Correo electrónico o contraseña incorrectos", { status: 401 });
  }

  const { access_token, refresh_token } = data.session;
  
  // Configuración de cookies para los tokens de sesión
  cookies.set("sb-access-token", access_token, {
    sameSite: "strict",
    path: "/",
    secure: true,
    httpOnly: true,
  });
  cookies.set("sb-refresh-token", refresh_token, {
    sameSite: "strict",
    path: "/",
    secure: true,
    httpOnly: true,
  });

  // Redirige al usuario a la página de corrección
  return redirect("/corrector");
};

import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  // Verifica si el código de autenticación está presente en la URL
  if (!authCode) {
    return new Response("No se proporcionó ningún código", { status: 400 });
  }

  // Intercambia el código por una sesión
  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  // Manejo de errores en el intercambio de código
  if (error) {
    console.error("Error en el intercambio de código:", error.message);
    return new Response(error.message, { status: 500 });
  }

  // Almacena los tokens en cookies seguras
  const { access_token, refresh_token } = data.session;

  cookies.set("sb-access-token", access_token, {
    path: "/",
    secure: true,
    httpOnly: true,
    sameSite: "strict",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
    secure: true,
    httpOnly: true,
    sameSite: "strict",
  });

  // Redirige al usuario a la página deseada
  return redirect("/signin");
};

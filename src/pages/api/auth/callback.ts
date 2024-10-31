import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  // Obtener el código de autenticación de la URL
  const authCode = url.searchParams.get("code");

  // Verifica si el código de autenticación está presente en la URL
  if (!authCode) {
    return new Response("No se proporcionó el código del proveedor", { status: 400 });
  }

  try {
    // Intercambia el código por una sesión en Supabase
    const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

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
    return redirect('/corrector');

  } catch (error) {
    console.error("Error inesperado en el intercambio de código:", error);
    return new Response("Error en el proceso de autenticación", { status: 500 });
  }
};

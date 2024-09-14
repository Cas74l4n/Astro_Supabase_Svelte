import { defineMiddleware } from "astro:middleware";
import { supabase } from "../lib/supabase";
import micromatch from "micromatch";
import type { AstroCookies } from "astro";

// Definir rutas protegidas y de redirección
const protectedRoutes = ["/corrector(|/)", "/profile(|/)", "/chatboot(|/)"]; // Le pongo el cooreo a las diferentes secciones
const redirectRoutes = ["/signin(|/)", "/register(|/)"];
const protectedAPIRoutes = ["/api/StoreConversation(|/)"];

// Función para verificar la sesión del usuario
async function verifySession(cookies: AstroCookies) {
  const accessToken = cookies.get("sb-access-token")?.value;
  const refreshToken = cookies.get("sb-refresh-token")?.value;

  if (!accessToken || !refreshToken) {
    return { error: "Missing tokens" };
  }

  const { data, error } = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (error) {
    return { error };
  }

  return { data };
}

// Middleware principal
export const onRequest = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {

    const pathname = url.pathname; // Asegúrate de definir la variable pathname

    // Verificar rutas protegidas para la aplicación
    if (micromatch.isMatch(url.pathname, protectedRoutes)) {
      const { data, error } = await verifySession(cookies);

    if (error) {
      // Limpiar cookies y redirigir si hay un error
      cookies.delete("sb-access-token", { path: "/" });
      cookies.delete("sb-refresh-token", { path: "/" });
      return redirect("/signin");
    }

    // Guardar el email del usuario en locals para acceso global
    locals.email = data?.user?.email;

    // Actualizar cookies con nuevos tokens
    cookies.set("sb-access-token", data?.session?.access_token ?? "", {
      sameSite: "strict",
      path: "/",
      secure: true,
    });
    cookies.set("sb-refresh-token", data?.session?.refresh_token ?? "", {
      sameSite: "strict",
      path: "/",
      secure: true,
    });
  }

  // Manejar redirección si el usuario ya está autenticado
  if (micromatch.isMatch(pathname, redirectRoutes)) {
    const { data } = await verifySession(cookies);
    if (data) {
      return redirect("/profile");
    }
  }

  // Proteger rutas de la API
  if (micromatch.isMatch(pathname, protectedAPIRoutes)) {
    const { error } = await verifySession(cookies);

    if (error) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401 }
      );
    }
  }

  // Continuar con la solicitud
  return next();
});

import { s as supabase } from './supabase_BgLu1d6J.mjs';

const getUserIdFromCookies = async (cookies) => {
  const access_token = cookies.get("sb-access-token")?.value;
  if (!access_token) {
    throw new Error("No autenticado");
  }
  const { data: authData, error: authError } = await supabase.auth.getUser(access_token);
  if (authError) {
    const errorMessage = authError?.message || "Error desconocido de autenticación";
    if (errorMessage.includes("Token expired")) {
      console.error("Token expirado. Redirigiendo al inicio de sesión.");
      window.location.href = "/login";
    } else {
      console.error(`Error en supabase.auth.getUser: ${errorMessage}`);
      throw new Error(`Error de autenticación: ${errorMessage}`);
    }
  }
  if (!authData?.user) {
    console.error("No se encontró el usuario autenticado.");
    throw new Error("Error de autenticación: No se encontró el usuario.");
  }
  return authData.user.id;
};

export { getUserIdFromCookies as g };

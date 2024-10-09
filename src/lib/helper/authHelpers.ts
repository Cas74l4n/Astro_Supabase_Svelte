// Funcion para Recuperar Id del Usuario
import { supabase } from "../supabase";

export const getUserIdFromCookies = async (cookies: any) => {
  const access_token = cookies.get("sb-access-token")?.value;

  if (!access_token) {
    throw new Error("No autenticado");
  }

  const { data: authData, error: authError } = await supabase.auth.getUser(access_token);

  /* if (authError || !authData?.user) {
    const errorMessage = authError?.message || "Error desconocido de autenticación";
    console.error(`Error en supabase.auth.getUser: ${errorMessage}`);
    return new Response(`Error de autenticación: ${errorMessage}`, { status: 401 });
  } */
    if (authError) {
        const errorMessage = authError?.message || "Error desconocido de autenticación";
        
        // Verificar si el mensaje del error es debido a un token expirado
        if (errorMessage.includes('Token expired')) {
          console.error('Token expirado. Redirigiendo al inicio de sesión.');
          // Aquí puedes implementar la lógica para redirigir al login o refrescar el token
          // Por ejemplo, redirigir al login:
          window.location.href = '/login';
        } else {
          console.error(`Error en supabase.auth.getUser: ${errorMessage}`);
          throw new Error(`Error de autenticación: ${errorMessage}`);
        }
      }

      if (!authData?.user) {
        console.error("No se encontró el usuario autenticado.");
        throw new Error("Error de autenticación: No se encontró el usuario.");
      }

  return authData.user.id; // Devuelve el userId
};

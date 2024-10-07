/*     Este es la inforacion del Perfil para futura actualizacion     */

import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase.ts";

export const GET: APIRoute = async ({ cookies }) => {
  const access_token = cookies.get("sb-access-token")?.value;

  if (!access_token) {
    return new Response("No autenticado", { status: 401 });
  }

  const { data: authData, error: authError } = await supabase.auth.getUser(access_token);

  if (authError || !authData?.user) {
    return new Response("Error de autenticación", { status: 401 });
  };

  const userId = authData.user.id; // Ahora accedemos al ID del usuario autenticado

  // Cambié el nombre de "data" a "conversations"
  const { data: dataProfile, error } = await supabase
    .from("Profiles")
    .select("*")
    .eq("id", userId) // Filtrar por userId

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500});
  }

  return new Response(JSON.stringify(dataProfile), { headers: { "Content-Type": "application/json" } });
};


/************************* PUT ***************************/

export const PUT: APIRoute = async ({ request, cookies }) => {
  const access_token = cookies.get("sb-access-token")?.value;

  if (!access_token) {
    return new Response("No autenticado", { status: 401 });
  }

  // Obtener el usuario autenticado
  const { data: authData, error: authError } = await supabase.auth.getUser(access_token);

  if (authError || !authData?.user) {
    const errorMessage = authError?.message || "Error desconocido de autenticación";
    console.error(`Error en supabase.auth.getUser: ${errorMessage}`);
    return new Response(`Error de autenticación: ${errorMessage}`, { status: 401 });
  }

  // Obtener datos del cuerpo de la solicitud
  const { display_name, bio } = await request.json();

  if (!display_name || !bio) {
    return new Response("Faltan campos obligatorios", { status: 400 });
  }

  const userId = authData.user.id; // Ahora accedemos al ID del usuario autenticado

  // Actualizar los datos en la tabla 'profiles'
  const { data, error } = await supabase
    .from("profiles")
    .update({ display_name, bio }) // Usamos update en lugar de insert
    .eq('id', userId)  // Asegurarse de que se actualice solo el registro del usuario autenticado
// Para asegurarse de obtener los datos actualizados


  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  // Devuelve un mensaje personalizado junto con los datos actualizados (si es necesario)
return new Response(
  JSON.stringify({ success: true, message: "Perfil actualizado correctamente", data }),
  { status: 200, headers: { "Content-Type": "application/json" } });
};

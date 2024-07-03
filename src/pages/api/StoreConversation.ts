import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const GET: APIRoute = async ({ url }) => {
  // Obtener el userId de los parámetros de la URL, si es necesario
  const userId = url.searchParams.get("userId");

  // Construir la consulta
  let query = supabase
    .from("StoreConversation")
    .select("*")
    .order("id", { ascending: false });

  // Agregar un filtro por userId si se proporciona
  if (userId) {
    query = query.eq("userId", userId);
  }

  // Ejecutar la consulta
  const { data, error } = await query;

  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};

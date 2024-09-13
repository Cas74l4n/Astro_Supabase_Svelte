import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase.ts";

export const GET: APIRoute = async ({ cookies }) => {
  const access_token = cookies.get("sb-access-token")?.value;

  if (!access_token) {
    return new Response("No autenticado", { status: 401 });
  }

  // Cambié el nombre de "data" a "authData" para evitar conflicto
  const { data: authData, error: authError } = await supabase.auth.getUser(access_token);

  if (authError || !authData?.user) {
    return new Response("Error de autenticación", { status: 401 });
  };

  const userId = authData.user.id; // Ahora accedemos al ID del usuario autenticado

  // Cambié el nombre de "data" a "conversations"
  const { data: conversations, error } = await supabase
    .from("StoreConversation")
    .select("*")
    .eq("userId", userId) // Filtrar por userId
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(conversations), { headers: { "Content-Type": "application/json" } });
};

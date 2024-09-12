import type { APIRoute } from "astro";
import  { supabase } from "../../lib/supabase.ts";

export const GET: APIRoute = async ({cookies}) => {
  const access_token = cookies.get("sb-access-token").value;

  if (!access_token) {
    return new Response("No autenticado", { status: 401 });
  }

  const { data: user, error: authError } = await supabase.auth.getUser(access_token);

  if (authError || !user) {
    return new Response("Error de autenticación", { status: 401 });
  }

  const { data, error } = await supabase
    .from("StoreConversation")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
};
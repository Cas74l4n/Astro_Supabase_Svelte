import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase.ts";
//import { authenticateUser, getConversations } from "../../utils/supabaseHelpers.ts";


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
    .order("created_at", { ascending: true });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(conversations), { headers: { "Content-Type": "application/json" } });
};

/********************     Metodo POST    ************************/
export const POST: APIRoute = async ({ request, cookies }) => {
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

  const userId = authData.user.id;

  // Obtener datos del cuerpo de la solicitud
  const { message, response } = await request.json();

  if (!message || !response) {
    return new Response("Faltan campos obligatorios", { status: 400 });
  }

  // Insertar los datos en la tabla StoreConversation
  const { data, error } = await supabase
    .from("StoreConversation")
    .insert({ userId, message, response })
    .select();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 201, headers: { "Content-Type": "application/json" } });
};
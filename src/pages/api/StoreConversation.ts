import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase.ts";
import {getUserIdFromCookies} from "../../lib/helper/authHelpers.ts"

/********************     Metodo GET    ************************/

export const GET: APIRoute = async ({ cookies }) => {

  const userId = await getUserIdFromCookies(cookies);  // Ahora accedemos al ID del usuario autenticado

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
  const userId = await getUserIdFromCookies(cookies);  // Ahora accedemos al ID del usuario autenticado


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
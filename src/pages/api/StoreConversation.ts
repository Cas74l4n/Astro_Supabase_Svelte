import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const GET: APIRoute = async ({url}) => {
  const userId = url.searchParams.get("userId");

  let query = supabase
    .from("StoreConversation")
    .select("*")
    .order("id", { ascending: false });

  if (userId) {
    query = query.eq("userId", userId);
  }

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

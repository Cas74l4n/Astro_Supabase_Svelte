import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase.ts";
import {getUserIdFromCookies} from "../../lib/helper/authHelpers.ts"

export const GET: APIRoute = async ({ cookies }) => {
  const userId = await getUserIdFromCookies(cookies); // ID del usuario autenticado

  // Obtiene el avatar_url desde `auth.users`
  const { data: userData, error: userError } = await supabase
    .from("auth.users")
    .select("raw_user_meta_data->>avatar_url")
    .eq("id", userId)
    .single();

  if (userError) {
    return new Response(JSON.stringify({ error: userError.message }), { status: 500 });
  }

/*   const avatarUrl = userData?.raw_user_meta_data?.avatar_url;*/
    const avatarUrl = userData.avatar_url; // Se accede directamente al campo `avatar_url`

    // Retorna tanto las conversaciones como el avatar_url en un solo JSON
  return new Response(
    JSON.stringify({ avatarUrl }),
    { headers: { "Content-Type": "application/json" } }
  );
};

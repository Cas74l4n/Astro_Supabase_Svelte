import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";


export const GET: APIRoute = async ({ cookies, redirect }) => {
  const { error } = await supabase.auth.signOut({scope:'global',})
 /*  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" }); */
  return redirect("/signin");
};
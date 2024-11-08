import { d as defineMiddleware, s as sequence } from './chunks/index_BKMIt10x.mjs';
import { s as supabase } from './chunks/supabase_BgLu1d6J.mjs';
import micromatch from 'micromatch';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_C8V8Y9GM.mjs';
import 'cookie';

const protectedRoutes = ["/corrector(|/)", "/profile(|/)", "/chatboot(|/)", "/layouts/Metadata(|/)"];
const redirectRoutes = ["/signin(|/)", "/register(|/)"];
const protectedAPIRoutes = ["/api/StoreConversation(|/)", "/api/Infoprofile(|/)", "/api/Metadata(|/)"];
async function verifySession(cookies) {
  const accessToken = cookies.get("sb-access-token")?.value;
  const refreshToken = cookies.get("sb-refresh-token")?.value;
  if (!accessToken || !refreshToken) {
    return { error: "Missing tokens" };
  }
  const { data, error } = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken
  });
  if (error) {
    return { error };
  }
  return { data };
}
const onRequest$1 = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {
    const pathname = url.pathname;
    if (micromatch.isMatch(url.pathname, protectedRoutes)) {
      const { data, error } = await verifySession(cookies);
      if (error) {
        cookies.delete("sb-access-token", { path: "/" });
        cookies.delete("sb-refresh-token", { path: "/" });
        return redirect("/signin");
      }
      locals.email = data?.user?.email;
      cookies.set("sb-access-token", data?.session?.access_token ?? "", {
        sameSite: "strict",
        path: "/",
        secure: true
      });
      cookies.set("sb-refresh-token", data?.session?.refresh_token ?? "", {
        sameSite: "strict",
        path: "/",
        secure: true
      });
    }
    if (micromatch.isMatch(pathname, redirectRoutes)) {
      const { data } = await verifySession(cookies);
      if (data) {
        return redirect("/corrector");
      }
    }
    if (micromatch.isMatch(pathname, protectedAPIRoutes)) {
      const { error } = await verifySession(cookies);
      if (error) {
        return new Response(
          JSON.stringify({ error: "Unauthorized" }),
          { status: 401 }
        );
      }
    }
    return next();
  }
);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };

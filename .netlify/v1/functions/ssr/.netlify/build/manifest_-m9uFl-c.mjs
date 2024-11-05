import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/shared_BTASe_bZ.mjs';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { g as decodeKey } from './chunks/astro/server_C27lGTmz.mjs';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/Astro_Supabase_Svelte/","adapterName":"@astrojs/netlify","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/callback","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/callback\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/callback.ts","pathname":"/api/auth/callback","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/infoprofile","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/Infoprofile\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"Infoprofile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/Infoprofile.ts","pathname":"/api/Infoprofile","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/metadata","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/Metadata\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"Metadata","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/Metadata.ts","pathname":"/api/Metadata","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/storeconversation","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/StoreConversation\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"StoreConversation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/StoreConversation.ts","pathname":"/api/StoreConversation","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=document.getElementById(\"avatarButton\"),e=document.getElementById(\"userDropdown\"),s=document.getElementById(\"closeModal\");n.addEventListener(\"click\",()=>{e.classList.remove(\"invisible\")});s.addEventListener(\"click\",()=>{e.classList.add(\"invisible\")});window.addEventListener(\"click\",t=>{t.target===e&&e.classList.add(\"invisible\")});\n"}],"styles":[{"type":"external","src":"/_astro/chatboot.CSGWHpF0.css"},{"type":"inline","content":"html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{margin:auto}\n"}],"routeData":{"route":"/chatboot","isIndex":false,"type":"page","pattern":"^\\/chatboot\\/?$","segments":[[{"content":"chatboot","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chatboot.astro","pathname":"/chatboot","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=document.getElementById(\"avatarButton\"),e=document.getElementById(\"userDropdown\"),s=document.getElementById(\"closeModal\");n.addEventListener(\"click\",()=>{e.classList.remove(\"invisible\")});s.addEventListener(\"click\",()=>{e.classList.add(\"invisible\")});window.addEventListener(\"click\",t=>{t.target===e&&e.classList.add(\"invisible\")});\n"}],"styles":[{"type":"external","src":"/_astro/chatboot.CSGWHpF0.css"},{"type":"inline","content":"html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{margin:auto}\n"}],"routeData":{"route":"/corrector","isIndex":false,"type":"page","pattern":"^\\/corrector\\/?$","segments":[[{"content":"corrector","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/corrector.astro","pathname":"/corrector","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chatboot.CSGWHpF0.css"},{"type":"inline","content":"html{font-family:system-ui,sans-serif;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{margin:auto}\n"}],"routeData":{"route":"/error503","isIndex":false,"type":"page","pattern":"^\\/error503\\/?$","segments":[[{"content":"error503","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/error503.astro","pathname":"/error503","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=document.getElementById(\"avatarButton\"),e=document.getElementById(\"userDropdown\"),s=document.getElementById(\"closeModal\");n.addEventListener(\"click\",()=>{e.classList.remove(\"invisible\")});s.addEventListener(\"click\",()=>{e.classList.add(\"invisible\")});window.addEventListener(\"click\",t=>{t.target===e&&e.classList.add(\"invisible\")});\n"}],"styles":[{"type":"external","src":"/_astro/chatboot.CSGWHpF0.css"},{"type":"inline","content":"html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{margin:auto}\n.password-masked.svelte-yp7473{-webkit-text-security:disc;-webkit-user-select:none;-moz-user-select:none;user-select:none}\n"}],"routeData":{"route":"/profile","isIndex":false,"type":"page","pattern":"^\\/profile\\/?$","segments":[[{"content":"profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/profile.astro","pathname":"/profile","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{document.getElementById(\"toggle-password\").addEventListener(\"click\",function(){const s=document.getElementById(\"password\"),e=this.querySelector(\"i\");s.type===\"password\"?(s.type=\"text\",e.classList.remove(\"fa-eye\"),e.classList.add(\"fa-eye-slash\")):(s.type=\"password\",e.classList.remove(\"fa-eye-slash\"),e.classList.add(\"fa-eye\"))})});\n"}],"styles":[{"type":"external","src":"/_astro/chatboot.CSGWHpF0.css"},{"type":"inline","content":"html{font-family:system-ui,sans-serif;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{margin:auto}\n"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.getElementById(\"toggle-password\").addEventListener(\"click\",function(){const s=document.getElementById(\"password\"),e=this.querySelector(\"i\");s.type===\"password\"?(s.type=\"text\",e.classList.remove(\"fa-eye\"),e.classList.add(\"fa-eye-slash\")):(s.type=\"password\",e.classList.remove(\"fa-eye-slash\"),e.classList.add(\"fa-eye\"))});\n"}],"styles":[{"type":"external","src":"/_astro/chatboot.CSGWHpF0.css"},{"type":"inline","content":"html{font-family:system-ui,sans-serif;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{margin:auto}\n.container[data-astro-cid-cj4bt2fj]{display:flex;align-items:center;justify-content:center;padding:1rem}.login-box[data-astro-cid-cj4bt2fj]{width:100%;max-width:400px;background-color:rgb(39 39 42 / var(--tw-bg-opacity));padding:2rem;border-radius:8px;box-shadow:0 0 10px #0000001a;text-align:center}.login-box[data-astro-cid-cj4bt2fj] h1[data-astro-cid-cj4bt2fj]{font-size:2rem;margin-bottom:1rem;font-weight:700}.login-box[data-astro-cid-cj4bt2fj] p[data-astro-cid-cj4bt2fj]{margin-bottom:1.5rem}.login-box[data-astro-cid-cj4bt2fj] a[data-astro-cid-cj4bt2fj]{color:#3b82f6;text-decoration:none}.login-box[data-astro-cid-cj4bt2fj] a[data-astro-cid-cj4bt2fj]:hover{text-decoration:underline}.form-group[data-astro-cid-cj4bt2fj]{margin-bottom:1rem;text-align:left}.form-group[data-astro-cid-cj4bt2fj] label[data-astro-cid-cj4bt2fj]{display:block;margin-bottom:.5rem;font-weight:500}.form-group[data-astro-cid-cj4bt2fj] input[data-astro-cid-cj4bt2fj]{width:100%;padding:.5rem;border:1px solid #d1d5db;border-radius:4px;box-shadow:inset 0 1px 2px #0000001a}.form-group[data-astro-cid-cj4bt2fj] input[data-astro-cid-cj4bt2fj]:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f633}button[data-astro-cid-cj4bt2fj]{width:100%;padding:.75rem;border:none;border-radius:4px;background-color:#3b82f6;color:#fff;font-size:1rem;font-weight:500;cursor:pointer}button[data-astro-cid-cj4bt2fj]:hover{background-color:#2563eb}button[data-astro-cid-cj4bt2fj]:focus{outline:none;box-shadow:0 0 0 3px #3b82f680}\n"}],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/Astro_Supabase_Svelte/src/pages/chatboot.astro",{"propagation":"none","containsHead":true}],["E:/Astro_Supabase_Svelte/src/pages/corrector.astro",{"propagation":"none","containsHead":true}],["E:/Astro_Supabase_Svelte/src/pages/profile.astro",{"propagation":"none","containsHead":true}],["E:/Astro_Supabase_Svelte/src/pages/error503.astro",{"propagation":"none","containsHead":true}],["E:/Astro_Supabase_Svelte/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/Astro_Supabase_Svelte/src/pages/register.astro",{"propagation":"none","containsHead":true}],["E:/Astro_Supabase_Svelte/src/pages/signin.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/auth/callback@_@ts":"pages/api/auth/callback.astro.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"pages/api/auth/register.astro.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"pages/api/auth/signin.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/api/Infoprofile@_@ts":"pages/api/infoprofile.astro.mjs","\u0000@astro-page:src/pages/api/Metadata@_@ts":"pages/api/metadata.astro.mjs","\u0000@astro-page:src/pages/api/StoreConversation@_@ts":"pages/api/storeconversation.astro.mjs","\u0000@astro-page:src/pages/chatboot@_@astro":"pages/chatboot.astro.mjs","\u0000@astro-page:src/pages/corrector@_@astro":"pages/corrector.astro.mjs","\u0000@astro-page:src/pages/error503@_@astro":"pages/error503.astro.mjs","\u0000@astro-page:src/pages/profile@_@astro":"pages/profile.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_-m9uFl-c.mjs","E:/Astro_Supabase_Svelte/src/components/Chatboot.svelte":"_astro/Chatboot.AWw2bhfZ.js","E:/Astro_Supabase_Svelte/src/components/React.svelte":"_astro/React.uhqnt3PX.js","E:/Astro_Supabase_Svelte/src/components/profile.svelte":"_astro/profile.BxILzYJY.js","@astrojs/svelte/client-v5.js":"_astro/client-v5.B7_ePHfp.js","/astro/hoisted.js?q=0":"_astro/hoisted.BQcOkBMw.js","/astro/hoisted.js?q=1":"_astro/hoisted.Dch0VGzA.js","/astro/hoisted.js?q=2":"_astro/hoisted.LHfsAZPe.js","/astro/hoisted.js?q=3":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/chatboot.CSGWHpF0.css","/favicon.svg","/icon.svg","/_astro/AI.BCPfHGep.js","/_astro/Chatboot.AWw2bhfZ.js","/_astro/client-v5.B7_ePHfp.js","/_astro/hoisted.2daoxv0f.js","/_astro/lifecycle.BaDe3AZO.js","/_astro/profile.BxILzYJY.js","/_astro/profile.DJ7Z5aKk.css","/_astro/props.BaMGnEml.js","/_astro/React.uhqnt3PX.js","/_astro/render.C5STh99y.js","/_astro/template.CsZ0BI7v.js","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"ZU25pLNy7gglJ0j9rB2hHACSOe2g8IToGtQnXvIpCD8=","experimentalEnvGetSecretEnabled":false});

export { manifest };

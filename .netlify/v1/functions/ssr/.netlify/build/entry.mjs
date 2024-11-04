import { r as renderers } from './chunks/_@astro-renderers_CDnEk0ZN.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DGrfuIsL.mjs';
import './_astro-internal_middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/callback.astro.mjs');
const _page2 = () => import('./pages/api/auth/register.astro.mjs');
const _page3 = () => import('./pages/api/auth/signin.astro.mjs');
const _page4 = () => import('./pages/api/auth/signout.astro.mjs');
const _page5 = () => import('./pages/api/infoprofile.astro.mjs');
const _page6 = () => import('./pages/api/metadata.astro.mjs');
const _page7 = () => import('./pages/api/storeconversation.astro.mjs');
const _page8 = () => import('./pages/chatboot.astro.mjs');
const _page9 = () => import('./pages/corrector.astro.mjs');
const _page10 = () => import('./pages/error503.astro.mjs');
const _page11 = () => import('./pages/profile.astro.mjs');
const _page12 = () => import('./pages/register.astro.mjs');
const _page13 = () => import('./pages/signin.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/callback.ts", _page1],
    ["src/pages/api/auth/register.ts", _page2],
    ["src/pages/api/auth/signin.ts", _page3],
    ["src/pages/api/auth/signout.ts", _page4],
    ["src/pages/api/Infoprofile.ts", _page5],
    ["src/pages/api/Metadata.ts", _page6],
    ["src/pages/api/StoreConversation.ts", _page7],
    ["src/pages/chatboot.astro", _page8],
    ["src/pages/corrector.astro", _page9],
    ["src/pages/error503.astro", _page10],
    ["src/pages/profile.astro", _page11],
    ["src/pages/register.astro", _page12],
    ["src/pages/signin.astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "5ad4e405-8235-4c39-874f-83224cba7ba0"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

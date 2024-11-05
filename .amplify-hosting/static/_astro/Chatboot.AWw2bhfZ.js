import{i as se,r as ie}from"./lifecycle.BaDe3AZO.js";import{b as le,h as M,a as oe,i as fe,c as j,H as ue,r as Y,s as q,d as V,e as D,I as B,f as $,g as ee,p as ve,j as J,k as ce,E as de,l as pe,m as _e,n as F,o as he,q as xe,t as ge,u as me,v as be,w as ye,x as Ee,y as we,z as Te,A as ke,B as ae,C as Ie,S as Ce,D as N,F as Se,G as Ae,J as Me,K as G,L as z,M as Ne,N as H,O as Re,P as L,Q as P,R as w,T as k,U as I,V as O,W as K}from"./template.CsZ0BI7v.js";import{s as Q}from"./render.C5STh99y.js";import{i as W,f as De}from"./AI.BCPfHGep.js";import{p as He,b as Oe}from"./props.BaMGnEml.js";function re(a){throw new Error("lifecycle_outside_component")}let U=null;function Be(a,e){return e}function Le(a,e,t,l){for(var f=[],s=e.length,u=0;u<s;u++)xe(e[u].e,f,!0);var _=s>0&&f.length===0&&t!==null;if(_){var d=t.parentNode;ge(d),d.append(t),l.clear(),C(a,e[0].prev,e[s-1].next)}me(f,()=>{for(var h=0;h<s;h++){var r=e[h];_||(l.delete(r.k),C(a,r.prev,r.next)),be(r.e,!_)}})}function Ve(a,e,t,l,f,s=null){var u=a,_={flags:e,items:new Map,first:null};M&&oe();var d=null,h=!1;le(()=>{var r=t(),p=fe(r)?r:r==null?[]:j(r),i=p.length;if(h&&i===0)return;h=i===0;let v=!1;if(M){var o=u.data===ue;o!==(i===0)&&(u=Y(),q(u),V(!1),v=!0)}if(M){for(var m=null,x,n=0;n<i;n++){if(D.nodeType===8&&D.data===ye){u=D,v=!0,V(!1);break}var c=p[n],y=l(c,n);x=te(D,_,m,null,c,y,n,f,e),_.items.set(y,x),m=x}i>0&&q(Y())}if(!M){var g=Ee;ze(p,_,u,f,e,(g.f&B)!==0,l)}s!==null&&(i===0?d?$(d):d=ee(()=>s(u)):d!==null&&ve(d,()=>{d=null})),v&&V(!0),t()}),M&&(u=D)}function ze(a,e,t,l,f,s,u){var _=a.length,d=e.items,h=e.first,r=h,p,i=null,v=[],o=[],m,x,n,c;for(c=0;c<_;c+=1){if(m=a[c],x=u(m,c),n=d.get(x),n===void 0){var y=r?r.e.nodes_start:t;i=te(y,e,i,i===null?e.first:i.next,m,x,c,l,f),d.set(x,i),v=[],o=[],r=i.next;continue}if(Pe(n,m,c),n.e.f&B&&$(n.e),n!==r){if(p!==void 0&&p.has(n)){if(v.length<o.length){var g=o[0],E;i=g.prev;var A=v[0],b=v[v.length-1];for(E=0;E<v.length;E+=1)X(v[E],g,t);for(E=0;E<o.length;E+=1)p.delete(o[E]);C(e,A.prev,b.next),C(e,i,A),C(e,b,g),r=g,i=b,c-=1,v=[],o=[]}else p.delete(n),X(n,r,t),C(e,n.prev,n.next),C(e,n,i===null?e.first:i.next),C(e,i,n),i=n;continue}for(v=[],o=[];r!==null&&r.k!==x;)(s||!(r.e.f&B))&&(p??=new Set).add(r),o.push(r),r=r.next;if(r===null)continue;n=r}v.push(n),i=n,r=n.next}if(r!==null||p!==void 0){for(var T=p===void 0?[]:j(p);r!==null;)(s||!(r.e.f&B))&&T.push(r),r=r.next;var S=T.length;if(S>0){var R=null;Le(e,T,R,d)}}J.first=e.first&&e.first.e,J.last=i&&i.e}function Pe(a,e,t,l){ce(a.v,e),a.i=t}function te(a,e,t,l,f,s,u,_,d){var h=U;try{var r=(d&de)!==0,p=(d&pe)===0,i=r?p?_e(f):F(f):f,v=d&he?F(u):u,o={i:v,v:i,k:s,a:null,e:null,prev:t,next:l};return U=o,o.e=ee(()=>_(a,i,v),M),o.e.prev=t&&t.e,o.e.next=l&&l.e,t===null?e.first=o:(t.next=o,t.e.next=o.e),l!==null&&(l.prev=o,l.e.prev=o.e),o}finally{U=h}}function X(a,e,t){for(var l=a.next?a.next.e.nodes_start:t,f=e?e.e.nodes_start:t,s=a.e.nodes_start;s!==l;){var u=we(s);f.before(s),s=u}}function C(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Z(a,e){return a===e||a?.[Ce]===e}function Ue(a={},e,t,l){return Te(()=>{var f,s;return ke(()=>{f=s,s=[],ae(()=>{a!==t(...s)&&(e(a,...s),f&&Z(t(...f),a)&&e(null,...f))})}),()=>{Ie(()=>{s&&Z(t(...s),a)&&e(null,...s)})}}),a}function Ye(a){N===null&&re(),N.l!==null?ne(N).m.push(a):Se(()=>{const e=ae(a);if(typeof e=="function")return e})}function qe(a){N===null&&re(),N.l===null&&Ae(),ne(N).a.push(a)}function ne(a){var e=a.l;return e.u??={a:[],b:[],m:[]}}var Je=L('<div class="flex items-end justify-end"><div class="bg-blue-500 text-white p-3 rounded-lg max-w-[35rem] my-2"><p> </p></div></div>'),Fe=L('<div class="flex items-start"><div class="bg-pink-100 text-pink-900 p-3 rounded-lg max-w-[35rem] my-2"><p> </p></div></div>'),Ge=L("<!> <!>",1),Ke=L('<div class="relative"><!> <div></div></div> <div class="border-t p-3 bg-gray-800 fixed bottom-0 left-0 right-0 max-w-5xl mx-auto"><div class="flex space-x-2"><input id="result" type="text" placeholder="Type a message..." class="flex-1 border rounded-lg p-2 mr-2 text-zinc-700"> <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button></div></div>',1);function $e(a,e){Me(e,!1);let t=He(e,"conversation",28,()=>[]),l=K(""),f="",s="",u=K();const _=()=>{w(u).scrollIntoView({behavior:"smooth"})};Ye(()=>{_()}),qe(()=>{_()});const d=async()=>{if(w(l).trim()){f=w(l),s=await De(f);try{const n=await fetch("/api/StoreConversation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:f,response:s})});if(n.ok){console.log("Conversación almacenada exitosamente");const c=await n.json();console.log("Respuesta del servidor:",c),console.log("Perfil actualizado exitosamente");const y=await fetch("/api/StoreConversation"),g=await y.json();y.ok?t(g):console.error("Error al obtener las conversaciones:",g)}else{const c=await n.json();console.error("Error al almacenar la conversación:",c)}}catch(n){console.error("Error al enviar los datos a Supabase:",n)}P(l,"")}};se();var h=Ke(),r=G(h),p=k(r);Ve(p,1,t,Be,(n,c)=>{var y=Ge(),g=G(y);W(g,()=>w(c).userId!=="",A=>{var b=Je(),T=k(b),S=k(T),R=k(S,!0);I(S),I(T),I(b),z(()=>Q(R,w(c).message)),H(A,b)});var E=O(g,2);W(E,()=>w(c).userId!=="",A=>{var b=Fe(),T=k(b),S=k(T),R=k(S,!0);I(S),I(T),I(b),z(()=>Q(R,w(c).response)),H(A,b)}),H(n,y)});var i=O(p,2);Ue(i,n=>P(u,n),()=>w(u)),I(r);var v=O(r,2),o=k(v),m=k(o);ie(m);var x=O(m,2);z(()=>x.disabled=!w(l).trim()),I(o),I(v),Oe(m,()=>w(l),n=>P(l,n)),Ne("click",x,d),H(a,h),Re()}export{$e as default};

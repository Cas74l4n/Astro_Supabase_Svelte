import{i as L,r as J,s as Q}from"./lifecycle.BaDe3AZO.js";import{N as U,a1 as W,J as q,W as h,L as F,M as _,O as G,P as K,Q as t,R as r,V as l,T as a,a3 as d,U as e}from"./template.CsZ0BI7v.js";import{p as X,b as S}from"./props.BaMGnEml.js";/* empty css                         */var Y=W('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"></path><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"></path></svg>');function Z(u){var c=Y();U(u,c)}var $=K('<form class="w-[1200px] mx-auto bg-gray-800 border-gray-100 rounded-3xl"><div class="p-6"><h2 class="text-3xl">Profile Settings</h2> <p>Update your profile information here.</p></div> <div class="p-6 space-y-6"><div class="flex space-x-8"><div class="w-1/3"><div class="flex flex-col items-center space-y-4"><div class="w-48 h-48 rounded-full bg-gray-200 text-gray-800"><img src="" alt="Profile_picture" class="rounded-full"></div> <label for="avatar-upload" class="cursor-pointer"><div class="flex items-center space-x-2 text-primary-foreground px-4 py-2 rounded-md bg-gray-600"><!> <span>Change Avatar</span></div></label> <input id="avatar-upload" type="file" accept="image/*" class="hidden"></div></div> <div class="w-2/3 space-y-6"><div class="grid grid-cols-2 gap-6"><div class="space-y-2"><label for="display_name">Name</label> <input id="display_name" placeholder="John Doe" class="w-full border border-gray-300 rounded-md p-2 text-gray-800"></div> <div class="space-y-2"><label for="email">Email</label> <input id="email" type="email" placeholder="john@example.com" class="w-full border border-gray-300 rounded-md p-2 text-gray-800"></div></div> <div class="space-y-2"><label for="bio">Bio</label> <input id="bio" type="text" placeholder="Tell us about yourself" class="w-full border border-gray-300 rounded-md p-2 text-black"></div> <div class="grid grid-cols-2 gap-6"><div class="space-y-2"><label for="current-password">Current Password</label> <input id="current-password" class="w-full border border-gray-300 rounded-md p-2 text-black password-masked svelte-yp7473"></div> <div class="space-y-2"><label for="new_password">New Password</label> <input id="new_password" type="password" class="w-full border border-gray-300 rounded-md p-2 text-black"></div></div> <div class="space-y-2"><label for="confirm_password">Confirm New Password</label> <input id="confirm_password" type="password" class="w-full border border-gray-300 rounded-md p-2 text-black"></div></div></div></div> <div class="p-6"><button type="submit" class="w-full bg-primary text-white py-2 rounded-md bg-slate-600">Save Changes</button></div></form>');function la(u,c){q(c,!1);let p=X(c,"dataProfile",28,()=>[]),o=h(p()[0]?.display_name||""),i=h(p()[0]?.bio||"");const V=async n=>{n.preventDefault();try{console.log({display_name:r(o),bio:r(i)});const s=await fetch("/api/infoprofile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({display_name:r(o),bio:r(i)})});if(s.ok){const g=await s.json();console.log("Respuesta del servidor:",g),console.log("Perfil actualizado exitosamente:",await s.json());const D=await fetch("/api/Infoprofile"),H=await D.json();D.ok?p(H):console.error("Error al obtener las conversaciones:",H);const I={display_name:r(o),bio:r(i)};p([I,...p()]),t(o,""),t(i,"")}else{const g=await s.json();console.error("Error al actualizar el perfil:",g),console.error(`Error al actualizar el perfil: ${s.status}`,await s.text())}}catch(s){console.error("Error al enviar la peticion:",s)}};let f=h("password");function B(){t(f,"text")}function O(){t(f,"password")}L();var v=$(),x=l(a(v),2),P=a(x),b=a(P),k=a(b),C=l(a(k),2),T=a(C),R=a(T);Z(R),d(2),e(T),e(C),d(2),e(k),e(b);var j=l(b,2),m=a(j),z=a(m),A=l(a(z),2);J(A),e(z),d(2),e(m);var y=l(m,2),E=l(a(y),2);J(E),e(y);var M=l(y,2),N=a(M),w=l(a(N),2);e(N),d(2),e(M),d(2),e(j),e(P),e(x),d(2),e(v),F(()=>Q(w,"type",r(f))),_("submit",v,V),S(A,()=>r(o),n=>t(o,n)),S(E,()=>r(i),n=>t(i,n)),_("focus",w,B),_("blur",w,O),U(u,v),G()}export{la as default};

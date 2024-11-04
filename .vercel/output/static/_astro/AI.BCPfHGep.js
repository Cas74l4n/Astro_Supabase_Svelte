import{b as E,f as p,g as h,p as d,h as i,a as y,a4 as I,H as g,r as R,s as k,d as m,e as A}from"./template.CsZ0BI7v.js";function N(n,o,l,t=null,c=!1){i&&y();var e=n,a=null,s=null,r=null,_=c?I:0;E(()=>{if(r===(r=!!o()))return;let f=!1;if(i){const u=e.data===g;r===u&&(e=R(),k(e),m(!1),f=!0)}r?(a?p(a):a=h(()=>l(e)),s&&d(s,()=>{s=null})):(s?p(s):t&&(s=h(()=>t(e))),a&&d(a,()=>{a=null})),f&&m(!0)},_),i&&(e=A)}const T="ZqM0LxwBS878tGN5ZQRksfp9BDhnShz1GFXwkheF",C="https://api.cohere.ai/v1/generate";async function S(n){const o={model:"command-r-plus-08-2024",prompt:`This is a spell checker generator.
--
Incorrect sample: "I are good!"
Correct sample: "I am good!"
--
Incorrect sample: "I have 22 years old."
Correct sample: "I am 22 years old."
--
Incorrect sample: "I don't can know"
Correct sample: "I don't know"
--
Incorrect sample: "${n}"
Correct sample:`,max_tokens:150,temperature:.2,k:0,p:1,frequency_penalty:0,presence_penalty:0,stop_sequences:["--"],return_likelihoods:"NONE"},l=await fetch(C,{method:"POST",headers:{Authorization:`BEARER ${T}`,"Content-Type":"application/json","Cohere-Version":"2023-05-14"},body:JSON.stringify(o)}).then(c=>c.json()),{text:t}=l.generations[0];return t.replace("--","").replaceAll('"',"").trim()}export{S as f,N as i};

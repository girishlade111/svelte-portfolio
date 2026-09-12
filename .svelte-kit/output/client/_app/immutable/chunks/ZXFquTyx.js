import{c,b as g,a as m,H as h,h as r,C as f,A as s,B as o,D as i,f as v,F as b}from"./BUrMyzUd.js";function S(l,d){let a=null,p=r;var t;if(r){a=v;for(var e=b(document.head);e!==null&&(e.nodeType!==f||e.data!==l);)e=s(e);if(e===null)o(!1);else{var u=s(e);e.remove(),i(u)}}r||(t=document.head.appendChild(c()));try{g(()=>{var n=m(()=>d(t));n.f|=h,r||(n.nodes===null?n.nodes={start:t,end:t,a:null,t:null}:n.nodes.end=t)})}finally{p&&(o(!0),i(a))}}const k=[{id:"gb-coder",title:"GB Coder",tagline:"Free AI code generator & explainer — no login.",tags:["Svelte","AI","ladestack.in"],url:"https://ladestack.in",featured:!0},{id:"ls-auth",title:"LS Auth",tagline:"Drop-in auth UI + session helpers for side projects.",tags:["Auth","SvelteKit"],url:"https://ladestack.in"},{id:"dev-toolbox",title:"Dev Toolbox",tagline:"JSON formatter, regex tester, converters — 20+ mini tools.",tags:["Tools","DX"],url:"https://ladestack.in",featured:!0},{id:"vibe-crm",title:"Vibe CRM",tagline:"Lead tracker built by directing AI — shipped in a weekend.",tags:["CRUD","Svelte 5"],url:"https://ladestack.in"}],I=[{name:"Svelte 5 / SvelteKit",level:85,group:"Frontend"},{name:"TypeScript",level:78,group:"Frontend"},{name:"CSS / Responsive UI",level:82,group:"Frontend"},{name:"Node / APIs",level:70,group:"Backend"},{name:"AI-assisted shipping",level:95,group:"AI Workflow"},{name:"Manufacturing / QC",level:90,group:"Mechanical"}],A=[{slug:"svelte-5-runes-mental-model",title:"My Svelte 5 runes mental model",date:"2026-08-20",excerpt:"$state for memory, $derived for math, $effect for side-effects — how I actually remember it.",body:`## The model

**$state** = memory. **$derived** = spreadsheet formula. **$effect** = "when this changes, do that".

I keep components small: state at top, derived below, one effect per concern. Effects never write the state they read in a loop — that is the only rule I needed.

## Why it clicks

Coming from manufacturing: state is inventory, derived is the dashboard, effects are the andon alerts.`},{slug:"vibe-coding-manufacturing",title:"What manufacturing taught me about vibe coding",date:"2026-07-11",excerpt:"SOPs, QC gates and andon cords map 1:1 to prompting AI engineers.",body:`## SOPs = prompts

A good SOP leaves no ambiguity. So does a good prompt.

## QC gates = code review

I never merged AI output without running it. Same as never shipping a part without inspection.

## Andon = error boundaries

Stop the line on defect. Catch it in +error.svelte, fix root cause.`},{slug:"ssr-vs-prerender",title:"SSR vs prerender: when I use each",date:"2026-06-02",excerpt:"Timeline = SSR load(). Blog = prerendered markdown. Both in one app, on purpose.",body:"## Rule of thumb\n\nDynamic or personalized → SSR `load()` in `+page.server.ts`.\n\nStatic content → `export const prerender = true` + dynamic `[slug]` routes.\n\n## This site\n\nExperience timeline streams from a server load. Blog posts are prerendered at build. The capability checklist demanded both, and honestly both earned their place."}];export{k as a,S as h,A as p,I as s};

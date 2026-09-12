import { b as attr, e as escape_html, c as ensure_array_like, a as attr_class, d as bind_props, f as derived, h as attr_style, s as stringify, i as store_get, u as unsubscribe_stores, j as await_block, k as head } from "../../chunks/index.js";
import "clsx";
import { p as projects, s as skills } from "../../chunks/data.js";
import { u as useTheme, c as contactToast } from "../../chunks/stores.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section id="hero" class="spotlight" style="border-top:0"><div class="wrap" style="position:relative;z-index:1"><span class="kicker">Girish Lade · Founder, LadeStack</span> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="terminal-grid"><div class="tpane glow-pulse"><div class="tbar"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span></div><span class="ln-g">$</span> <span class="ln-w">npx ladestack ship</span><br/><span class="ln-g">✓</span> GB Coder … live<br/><span class="ln-g">✓</span> Dev Toolbox (20+ tools) … live<br/><span class="ln-g">✓</span> LS Auth … live</div> <div class="tpane glow-pulse"><div class="tbar"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span></div><span class="ln-b">const</span> <span class="ln-w">stack</span> = {<br/>  ui: <span class="ln-v">'svelte5:runes'</span>,<br/>  ssr: <span class="ln-v">'streaming'</span>,<br/>  ship: <span class="ln-b">daily</span><br/>}<span class="cursor"></span></div> <div class="tpane glow-pulse"><div class="tbar"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span></div><span class="ln-g">● online</span> ladestack.in — 200 OK · 41ms<br/><span class="ln-g">● active</span> targeting VMware / SAP / Cisco<br/><span class="ln-b">↗</span> open to SDE roles · Pune / remote</div> <div class="tpane glow-pulse"><div class="tbar"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span></div><span class="ln-g">$</span> git log --proof<br/><span class="ln-v">2026</span> vibe-crm shipped in a weekend<br/><span class="ln-v">2024</span> factory QC → systems thinking<br/><span class="ln-b">→</span> proof, not promises_<span class="cursor"></span></div></div> <p class="cap">Capability: <code>$state</code> index + <code>$derived</code> role text, typed via <code>$effect</code> · View Transitions on nav</p></div></section> <hr class="divider-line"/>`);
  });
}
function About($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { open = false } = $$props;
    let qa = [
      {
        q: "Mechanical → software?",
        a: "Factory floor taught me systems thinking. I automate, then I code the automation."
      },
      {
        q: "What is vibe coding?",
        a: "Directing AI agents with tight specs, reviewing every diff, shipping daily."
      },
      {
        q: "Why hire me?",
        a: "I ship. LadeStack is live, free, no-login — proof, not promises."
      }
    ];
    let shown = 0;
    $$renderer2.push(`<section id="about"><div class="wrap"><span class="kicker">$props + $bindable · snippets</span> <h2>From the factory floor to shipping software</h2> <p class="sub">Small-town roots, mechanical discipline, AI leverage. Flip the switch for the full story.</p> <div class="bento"><div class="card bento-manifesto"><div style="display:flex;gap:14px;align-items:center"><button class="toggle-switch"${attr("aria-checked", open)} role="switch" aria-label="Toggle manifesto"></button> <b style="color:#fff">${escape_html(open ? "Manifesto — open" : "Manifesto — flip it")}</b></div> `);
    if (open) {
      $$renderer2.push(`<!--[0--><div><p style="margin-top:14px">I grew up in <b>Pandharpur, Maharashtra</b> — no CS degree, no bootcamp. I became a mechanical engineer and worked the production floor in Pune/PCMC: planning, QC, process improvement. That's where I learned systems thinking.</p> <p class="muted">Then I taught myself to code by directing AI. I'm a <b>vibe coder</b>: I write the spec, the agent drafts, I review every diff and ship. As <b>LadeStack founder</b> I build free, no-login AI dev tools — GB Coder, LS Auth, Dev Toolbox (20+ tools) — because dev tooling shouldn't have gatekeeping.</p> <p class="muted">Now I'm making the structured jump into SDE roles — targeting <b>VMware, SAP, Cisco</b> (MAANG stretch). I ship weekly, in public.</p></div>`);
    } else {
      $$renderer2.push(`<!--[-1--><p class="muted" style="margin-top:14px">Pandharpur → Pune. Mechanical engineer turned vibe coder. Founder, LadeStack. Free AI dev tools, no login walls. Now targeting SDE @ VMware / SAP / Cisco.</p>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="card bento-s1"><h3>20+ tools</h3><p class="muted">live on ladestack.in, free, no login</p></div> <div class="card bento-s2"><h3>Weekend ships</h3><p class="muted">Vibe CRM designed + shipped in days</p></div> <div class="card bento-qa"><div style="margin-top:2px"><!--[-->`);
    const each_array = ensure_array_like(qa);
    for (let n = 0, $$length = each_array.length; n < $$length; n++) {
      let item = each_array[n];
      $$renderer2.push(`<button${attr_class(`pill ${n === shown ? "hot" : ""}`)}>${escape_html(item.q)}</button>`);
    }
    $$renderer2.push(`<!--]--> <p class="muted">${escape_html(qa[shown].a)}</p></div></div></div> <p class="cap">Capability: <code>$props</code> + <code>$bindable(open)</code>, tactile switch trigger.</p></div></section> <hr class="divider-line"/>`);
    bind_props($$props, { open });
  });
}
function Projects($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let items = projects;
    let q = "";
    let filtered = derived(() => items.filter((p) => (p.title + p.tagline + p.tags.join(" ")).toLowerCase().includes(q.toLowerCase())));
    $$renderer2.push(`<section id="projects"><div class="wrap"><span class="kicker">Toolkit · LadeStack suite</span> <h2>Toolkits — proof, not promises</h2> <p class="sub">Filter, shuffle, edit, delete — client state with <code>$state</code> + <code>$derived</code>, animated with <code>fly/fade/flip</code>.</p> <div class="card" style="margin:16px 0"><div style="display:flex;gap:12px;flex-wrap:wrap;align-items:end"><div style="flex:1;min-width:220px"><label>Search / filter</label><input${attr("value", q)} placeholder="try 'ai' or 'auth'"/></div> <p style="display:flex;gap:8px;margin:0 0 2px"><button class="btn small ghost">⤨ Shuffle (flip demo)</button></p></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="grid c2">`);
    const each_array = ensure_array_like(filtered());
    if (each_array.length !== 0) {
      $$renderer2.push("<!--[-->");
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let p = each_array[$$index_1];
        $$renderer2.push(`<div class="card"><h3>${escape_html(p.title)} `);
        if (p.featured) {
          $$renderer2.push(`<!--[0--><span class="pill hot">★ featured</span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></h3> <p class="muted">${escape_html(p.tagline)}</p> <p><!--[-->`);
        const each_array_1 = ensure_array_like(p.tags);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let t = each_array_1[$$index];
          $$renderer2.push(`<span class="pill">${escape_html(t)}</span>`);
        }
        $$renderer2.push(`<!--]--></p> <p style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap"><a class="btn small ghost"${attr("href", p.url)} target="_blank" rel="noreferrer">Open ↗</a> <button class="btn small ghost">Edit</button> <button class="btn small ghost">Delete</button></p></div>`);
      }
    } else {
      $$renderer2.push(`<!--[!--><div class="card">No projects match “${escape_html(q)}”. <button class="btn small ghost">Clear</button></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function Skills($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const theme = useTheme();
    let selected = "AI-assisted shipping";
    let detail = derived(() => skills.find((s) => s.name === selected) ?? skills[0]);
    const notes = {
      "Svelte 5 / SvelteKit": "Runes, SSR + streaming — this whole site.",
      TypeScript: "Strict types on every component and load().",
      "CSS / Responsive UI": "Dark dev-tool aesthetic, 8px CTA dialect.",
      "Node / APIs": "Form actions, zod validation, endpoints.",
      "AI-assisted shipping": "Spec → agent → review → ship daily.",
      "Manufacturing / QC": "SOPs, QC gates, systems thinking from the floor."
    };
    const ringOf = (idx) => idx % 3;
    const angleOf = (idx) => idx * 137.5 % 360;
    const pos = (idx) => {
      const a = angleOf(idx) * Math.PI / 180;
      const r = ringOf(idx) === 0 ? 46 : ringOf(idx) === 1 ? 33 : 20;
      return `left:${50 + r * Math.cos(a)}%;top:${50 + r * Math.sin(a)}%;`;
    };
    const size = (level) => Math.round(56 + level * 0.45);
    $$renderer2.push(`<section id="skills"><div class="wrap"><span class="kicker">$state · $effect · context API</span> <h2>Skills — orbit map</h2> <p class="sub">Hover or tap a node — <code>$effect</code> updates the detail panel. Theme comes from root context. Nodes use <code>animate:flip</code>.</p> <div class="orbit-wrap" style="margin-top:16px"><div class="orbit-stage" role="list" aria-label="Skill orbit"><div class="orbit-ring"></div><div class="orbit-ring r2"></div><div class="orbit-ring r3"></div> <div class="orbit-center">Girish</div> <!--[-->`);
    const each_array = ensure_array_like(skills);
    for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
      let s = each_array[idx];
      $$renderer2.push(`<button role="listitem"${attr_class("orbit-node", void 0, { "active": selected === s.name })}${attr_style(`${stringify(pos(idx))}width:${stringify(size(s.level))}px;height:${stringify(size(s.level))}px;margin:-${stringify(Math.round(size(s.level) / 2))}px 0 0 -${stringify(Math.round(size(s.level) / 2))}px;${selected === s.name ? "border-color:var(--primary-glow);" : ""}`)}${attr("title", `${stringify(s.name)} ${stringify(s.level)}%`)}>${escape_html(s.name.split(" ")[0])}<br/>${escape_html(s.level)}%</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="card"><!---->`);
    {
      $$renderer2.push(`<div><span class="kicker">${escape_html(detail().group)}</span> <h3 style="margin-top:10px">${escape_html(detail().name)}</h3> <p class="muted">${escape_html(notes[detail().name] ?? "")}</p> <p style="margin-top:10px"><span class="pill hot">${escape_html(detail().level)}% proficiency</span></p> <p class="cap">Theme now: <code>${escape_html(store_get($$store_subs ??= {}, "$theme", theme))}</code> · selected: <code>${escape_html(selected)}</code></p></div>`);
    }
    $$renderer2.push(`<!----></div></div></div></section> <hr class="divider-line"/>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Experience($$renderer, $$props) {
  let { items, streamed } = $$props;
  const stats = {
    "Founder, LadeStack": "20+ free tools live · 0 login walls",
    "Mechanical Engineer (Production)": "QC + process gains on a live floor",
    "Vibe Coder → Software Engineer": "Svelte 5 · weekly public ships",
    "Pandharpur → Pune": "Small-town roots → production-grade output"
  };
  $$renderer.push(`<section id="experience"><div class="wrap"><span class="kicker">SSR load() · streaming</span> <h2>Experience — server-loaded</h2> <p class="sub">Timeline below was fetched in <code>+page.server.ts load()</code> (SSR). The highlight box streams in late via an <code>{#await} block</code> — page stays interactive meanwhile.</p> <div class="card" style="margin:16px 0">`);
  await_block(
    $$renderer,
    streamed,
    () => {
      $$renderer.push(`<p class="muted">⏳ streaming extra SSR payload…</p>`);
    },
    (note) => {
      $$renderer.push(`<p class="ok">● ${escape_html(note)}</p>`);
    }
  );
  $$renderer.push(`<!--]--></div> <div class="xp-track"><div class="xp-line"></div> <!--[-->`);
  const each_array = ensure_array_like(items);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let t = each_array[$$index];
    $$renderer.push(`<div class="xp-row"><span class="xp-dot"></span><div class="card xp-card"><b>${escape_html(t.role)}</b><br/><span class="muted">${escape_html(t.org)} · ${escape_html(t.period)}</span><p class="muted">${escape_html(t.detail)}</p><span class="xp-stat">${escape_html(stats[t.role] ?? t.period)}</span></div></div>`);
  }
  $$renderer.push(`<!--]--></div> <p class="cap">Also see client <code>load</code>: <a href="/blog">/blog</a> loads post index in <code>+page.ts</code>.</p></div></section> <hr class="divider-line"/>`);
}
function Contact($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { form = null } = $$props;
    let sending = false;
    let failed = derived(() => form && "ok" in form && form.ok === false ? form : null);
    let succeeded = derived(() => form && "ok" in form && form.ok === true ? form : null);
    $$renderer2.push(`<section id="contact"><div class="wrap"><span class="kicker">form actions · zod · optimistic UI</span> <h2>Contact — works even without JS</h2> <p class="sub">Native SvelteKit <code>form action</code> with <code>use:enhance</code>: progressive enhancement + server-side zod validation + optimistic <code>$state</code> greeting.</p> <div class="grid c2" style="margin-top:16px"><form method="POST" action="?/contact" class="card"><label for="cname">Name</label> <input id="cname" name="name"${attr("value", failed() ? String(failed().values?.name ?? "") : "")} required="" minlength="2"/> `);
    if (failed()?.errors?.name) {
      $$renderer2.push(`<!--[0--><p class="err">${escape_html(failed().errors.name[0])}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <label for="cemail">Email</label> <input id="cemail" name="email" type="email"${attr("value", failed() ? String(failed().values?.email ?? "") : "")} required=""/> `);
    if (failed()?.errors?.email) {
      $$renderer2.push(`<!--[0--><p class="err">${escape_html(failed().errors.email[0])}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <label for="cmsg">Message</label> <textarea id="cmsg" name="message" rows="4" required="" minlength="10">`);
    const $$body = escape_html(failed() ? String(failed().values?.message ?? "") : "");
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea> `);
    if (failed()?.errors?.message) {
      $$renderer2.push(`<!--[0--><p class="err">${escape_html(failed().errors.message[0])}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <p style="margin-top:12px"><button class="btn"${attr("disabled", sending, true)}>${escape_html("Send message")}</button></p> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (succeeded()) {
      $$renderer2.push(`<!--[0--><p class="ok">✓ Thanks ${escape_html(succeeded().name)}! I reply within 48h. (No-JS safe — this rendered on the server.)</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (store_get($$store_subs ??= {}, "$contactToast", contactToast)) {
      $$renderer2.push(`<!--[0--><p class="ok">${escape_html(store_get($$store_subs ??= {}, "$contactToast", contactToast))} — via store toast</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></form> <div class="card"><h3>Elsewhere</h3> <p class="muted">ladestack.in · GitHub @girishlade111 · Pune / PCMC, Maharashtra</p> <p style="margin-top:10px"><span class="pill hot">Open to: SDE · VMware / SAP / Cisco</span></p> <p class="cap">Stores: <code>visits</code> + <code>contactToast</code> sync across tabs via <code>localStorage</code> events.</p></div></div></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Girish Lade — Ship software at machine speed</title>`);
      });
    });
    Hero($$renderer2);
    $$renderer2.push(`<!----> `);
    About($$renderer2, {});
    $$renderer2.push(`<!----> `);
    Projects($$renderer2);
    $$renderer2.push(`<!----> `);
    Skills($$renderer2);
    $$renderer2.push(`<!----> `);
    Experience($$renderer2, { items: data.timeline, streamed: data.streamed });
    $$renderer2.push(`<!----> <div class="cta-band"><div class="wrap" style="position:relative;z-index:1"><span class="kicker">Open to work</span> <h2 style="margin-top:16px">Have a role that needs<br/>someone who ships?</h2> <p class="sub" style="margin:12px auto 0">SDE · VMware / SAP / Cisco · Pune / remote. Reply within 48h.</p> <p style="margin-top:24px"><a class="btn" href="#contact">Get started →</a></p></div></div> `);
    Contact($$renderer2, { form });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};

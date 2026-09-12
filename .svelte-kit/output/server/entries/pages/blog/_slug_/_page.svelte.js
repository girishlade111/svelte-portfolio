import { k as head, e as escape_html } from "../../../../chunks/index.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1teoznn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.post.title)} — Girish Lade</title>`);
      });
    });
    $$renderer2.push(`<section><div class="wrap"><span class="kicker">prerendered · dynamic [slug]</span> <h1>${escape_html(data.post.title)}</h1> <p class="muted">${escape_html(data.post.date)}</p> <article class="card" style="margin-top:16px">${html(data.post.html)}</article> <p style="margin-top:14px;display:flex;gap:8px"><a class="btn ghost" href="/blog">← All notes</a> <a class="btn ghost" href="/">Home</a></p> <p class="cap">Capability: dynamic route <code>blog/[slug]</code> + <code>export const prerender = true</code> — this HTML was baked at build time.</p></div></section>`);
  });
}
export {
  _page as default
};

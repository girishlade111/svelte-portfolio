import { k as head, c as ensure_array_like, b as attr, s as stringify, e as escape_html } from "../../../chunks/index.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("u4k2t", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Notes — Girish Lade</title>`);
      });
    });
    $$renderer2.push(`<section><div class="wrap"><span class="kicker">prerendered index · client load()</span> <h1>Notes</h1> <p class="sub">Blog index loaded via client <code>+page.ts load</code>. Each post is a prerendered <code>[slug]</code> route — static HTML at build, SSR timeline on home. Both paradigms, one app.</p> <div class="grid" style="margin-top:16px"><!--[-->`);
    const each_array = ensure_array_like(data.posts);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let p = each_array[$$index];
      $$renderer2.push(`<a class="card"${attr("href", `/blog/${stringify(p.slug)}`)} style="text-decoration:none;color:inherit"><h3>${escape_html(p.title)}</h3> <p class="muted">${escape_html(p.date)} — ${escape_html(p.excerpt)}</p></a>`);
    }
    $$renderer2.push(`<!--]--></div> <p><a class="btn ghost" href="/">← Back home</a></p></div></section>`);
  });
}
export {
  _page as default
};

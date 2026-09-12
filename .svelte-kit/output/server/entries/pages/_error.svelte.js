import { g as getContext, e as escape_html } from "../../chunks/index.js";
import "clsx";
import "../../chunks/state.svelte.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section><div class="wrap"><span class="kicker">error boundary · +error.svelte</span> <h1>${escape_html(
      // +error.svelte receives status/message via $app/state — no props needed
      page.status
    )} — caught by the error boundary</h1> <p class="sub">${escape_html(page.error?.message ?? "Something broke, but the app survived.")}</p> <p style="margin-top:14px;display:flex;gap:8px"><a class="btn" href="/">Back home</a> <a class="btn ghost" href="/blog">Read notes</a></p> <p class="cap">Try <a href="/boom">/boom</a> (throws on purpose) or <a href="/blog/nope">/blog/nope</a> (404).</p></div></section>`);
  });
}
export {
  _error as default
};

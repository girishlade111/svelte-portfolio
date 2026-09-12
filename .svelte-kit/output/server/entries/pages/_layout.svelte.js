import { a as attr_class } from "../../chunks/index.js";
import { i as initTheme } from "../../chunks/stores.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    initTheme();
    let scrolled = false;
    let menuOpen = false;
    $$renderer2.push(`<nav${attr_class("top", void 0, { "scrolled": scrolled })}><div class="wrap"><a class="brand" href="/"><span class="brand-mark">G</span>Girish<b>Lade</b></a> <div${attr_class("nav-links", void 0, { "menu-open": menuOpen })}><a href="/#about">About</a> <a href="/#projects">Projects</a> <a href="/#skills">Skills</a> <a href="/#experience">Experience</a> <a href="/blog">Blog</a> <a href="/#contact">Contact</a></div> <div class="nav-cta"><a class="btn small" href="/#contact">Get started</a> <button class="btn small ghost" aria-label="Menu" style="display:none">☰</button></div></div></nav> <main>`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> <footer class="modern"><div class="footer-cta">Let's build something<br/>that ships. <a class="btn" href="/#contact" style="vertical-align:middle;margin-left:12px">Get started →</a></div> <div class="footer-clusters"><div><b>Work</b><a href="/#projects">Projects</a><a href="/#skills">Skills</a><a href="/#experience">Experience</a></div> <div><b>Content</b><a href="/blog">Blog</a><a href="/boom">Error demo</a></div> <div><b>Elsewhere</b><a href="https://ladestack.in">ladestack.in</a><a href="https://github.com/girishlade111">GitHub</a></div> <div><b>Contact</b><a href="/#contact">Hire me</a><a href="/#about">About</a></div> <div style="margin-left:auto;align-self:end"><span class="muted" style="font-size:12px">Mechanical engineer turned vibe coder · Founder, LadeStack · Pandharpur → Pune</span></div></div></footer>`);
  });
}
export {
  _layout as default
};

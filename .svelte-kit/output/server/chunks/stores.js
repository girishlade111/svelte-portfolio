import { l as setContext, g as getContext } from "./index.js";
import "clsx";
import { w as writable } from "./index2.js";
const THEME_KEY = Symbol("theme");
function initTheme() {
  const stored = typeof window !== "undefined" ? localStorage.getItem("gl-theme") : null;
  const theme = writable(stored === "light" ? "light" : "dark");
  theme.subscribe((v) => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("light", v === "light");
      localStorage.setItem("gl-theme", v);
    }
  });
  setContext(THEME_KEY, theme);
  return theme;
}
function useTheme() {
  return getContext(THEME_KEY);
}
function createVisits() {
  const { subscribe, set, update } = writable(0);
  let started = false;
  function start() {
    if (started || typeof window === "undefined") return;
    started = true;
    try {
      const raw = Number(localStorage.getItem("gl-visits") ?? 0) + 1;
      localStorage.setItem("gl-visits", String(raw));
      set(raw);
    } catch {
      set(1);
    }
    window.addEventListener("storage", (e) => {
      if (e.key === "gl-visits" && e.newValue) set(Number(e.newValue));
    });
  }
  if (typeof window !== "undefined") start();
  return { subscribe, start, bump: () => update((n) => {
    const v = n + 1;
    try {
      localStorage.setItem("gl-visits", String(v));
    } catch {
    }
    return v;
  }) };
}
createVisits();
const contactToast = writable(null);
export {
  contactToast as c,
  initTheme as i,
  useTheme as u
};

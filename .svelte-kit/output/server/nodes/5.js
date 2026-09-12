import * as universal from '../entries/pages/blog/_slug_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.ts";
export const imports = ["entries/pages/blog/_slug_/_page.svelte.js","chunks/index.js","entries/pages/blog/_slug_/_page.ts.js","chunks/data.js"];
export const stylesheets = [];
export const fonts = [];

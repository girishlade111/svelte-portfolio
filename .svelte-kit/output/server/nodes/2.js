import * as universal from '../entries/pages/blog/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+layout.ts";
export const imports = ["entries/fallbacks/layout.svelte.js","entries/pages/blog/_layout.ts.js","chunks/data.js"];
export const stylesheets = [];
export const fonts = [];

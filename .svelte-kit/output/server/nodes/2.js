import * as universal from '../entries/pages/blog/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+layout.ts";
export const imports = ["_app/immutable/nodes/2.BGHH3Hfm.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BUrMyzUd.js","_app/immutable/chunks/Btw_2tyt.js","_app/immutable/chunks/CkpfvOYL.js","_app/immutable/chunks/V48cXzeQ.js"];
export const stylesheets = [];
export const fonts = [];

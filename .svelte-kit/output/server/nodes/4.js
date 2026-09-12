import * as universal from '../entries/pages/blog/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.ts";
export const imports = ["_app/immutable/nodes/4.D76DXa1c.js","_app/immutable/chunks/ZXFquTyx.js","_app/immutable/chunks/BUrMyzUd.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BaD3JGYJ.js","_app/immutable/chunks/Btw_2tyt.js","_app/immutable/chunks/CKrLFnPa.js"];
export const stylesheets = [];
export const fonts = [];

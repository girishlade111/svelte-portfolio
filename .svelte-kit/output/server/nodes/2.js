import * as universal from '../entries/pages/blog/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+layout.ts";
export const imports = ["_app/immutable/nodes/2.kETwN2BG.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BFiqLFIm.js","_app/immutable/chunks/N_VnwbSC.js","_app/immutable/chunks/D5xzY-uq.js","_app/immutable/chunks/yF9dDDku.js"];
export const stylesheets = [];
export const fonts = [];

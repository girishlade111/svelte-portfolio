import * as universal from '../entries/pages/blog/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.ts";
export const imports = ["_app/immutable/nodes/4.BT7X4FSv.js","_app/immutable/chunks/COxVpTpF.js","_app/immutable/chunks/BFiqLFIm.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BxWhnRug.js","_app/immutable/chunks/N_VnwbSC.js","_app/immutable/chunks/BMdBQDCv.js"];
export const stylesheets = [];
export const fonts = [];

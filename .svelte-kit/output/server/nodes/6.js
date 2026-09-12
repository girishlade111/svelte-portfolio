import * as universal from '../entries/pages/boom/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/boom/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/boom/+page.ts";
export const imports = ["_app/immutable/nodes/6.fKI2GcGA.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/P7VOppKi.js","_app/immutable/chunks/BUrMyzUd.js"];
export const stylesheets = [];
export const fonts = [];

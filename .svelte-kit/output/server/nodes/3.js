import * as server from '../entries/pages/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BDuJByCy.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BUrMyzUd.js","_app/immutable/chunks/Btw_2tyt.js","_app/immutable/chunks/ZXFquTyx.js","_app/immutable/chunks/BaD3JGYJ.js","_app/immutable/chunks/T2IVu11u.js","_app/immutable/chunks/V48cXzeQ.js","_app/immutable/chunks/BjmXEqE4.js","_app/immutable/chunks/CKrLFnPa.js","_app/immutable/chunks/dZ-9W-ly.js","_app/immutable/chunks/CDwbv8ox.js","_app/immutable/chunks/B0XwC4Ot.js","_app/immutable/chunks/BZ4Ex10X.js","_app/immutable/chunks/-UyI9lYi.js"];
export const stylesheets = [];
export const fonts = [];

import * as universal from '../entries/pages/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/3.c5Efh5vc.js","_app/immutable/chunks/COxVpTpF.js","_app/immutable/chunks/BFiqLFIm.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/N_VnwbSC.js","_app/immutable/chunks/BxWhnRug.js","_app/immutable/chunks/DjRq2em6.js","_app/immutable/chunks/yF9dDDku.js","_app/immutable/chunks/CYEhwGbC.js","_app/immutable/chunks/BMdBQDCv.js","_app/immutable/chunks/CtIrvV9t.js","_app/immutable/chunks/B9BgbTy3.js","_app/immutable/chunks/B0XwC4Ot.js","_app/immutable/chunks/1MQ9txke.js","_app/immutable/chunks/-UyI9lYi.js"];
export const stylesheets = [];
export const fonts = [];

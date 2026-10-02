import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DoMHTBtn.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BFiqLFIm.js","_app/immutable/chunks/BxWhnRug.js","_app/immutable/chunks/N_VnwbSC.js","_app/immutable/chunks/D5xzY-uq.js","_app/immutable/chunks/yF9dDDku.js","_app/immutable/chunks/CtIrvV9t.js","_app/immutable/chunks/CYEhwGbC.js","_app/immutable/chunks/1MQ9txke.js","_app/immutable/chunks/-UyI9lYi.js","_app/immutable/chunks/B9BgbTy3.js","_app/immutable/chunks/B0XwC4Ot.js"];
export const stylesheets = ["_app/immutable/assets/0.DZNQebx9.css"];
export const fonts = [];

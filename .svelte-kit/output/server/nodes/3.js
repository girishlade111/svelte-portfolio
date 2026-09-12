import * as server from '../entries/pages/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["entries/pages/_page.svelte.js","chunks/index.js","chunks/data.js","chunks/stores.js","chunks/index2.js","chunks/exports.js","chunks/utils2.js","chunks/root.js","chunks/state.svelte.js"];
export const stylesheets = [];
export const fonts = [];



export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["entries/pages/_layout.svelte.js","chunks/index.js","chunks/stores.js","chunks/index2.js","chunks/exports.js","chunks/utils2.js","chunks/root.js","chunks/state.svelte.js"];
export const stylesheets = ["_app/immutable/assets/_layout.G7l1O6DS.css"];
export const fonts = [];

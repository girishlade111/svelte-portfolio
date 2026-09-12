

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["entries/pages/_error.svelte.js","chunks/index.js","chunks/state.svelte.js","chunks/exports.js","chunks/root.js","chunks/utils2.js"];
export const stylesheets = [];
export const fonts = [];

export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CixZrkO2.js",app:"_app/immutable/entry/app.C5wwalAG.js",imports:["_app/immutable/entry/start.CixZrkO2.js","_app/immutable/chunks/1MQ9txke.js","_app/immutable/chunks/CYEhwGbC.js","_app/immutable/chunks/BFiqLFIm.js","_app/immutable/chunks/BxWhnRug.js","_app/immutable/chunks/N_VnwbSC.js","_app/immutable/chunks/-UyI9lYi.js","_app/immutable/chunks/B9BgbTy3.js","_app/immutable/chunks/B0XwC4Ot.js","_app/immutable/entry/app.C5wwalAG.js","_app/immutable/chunks/BFiqLFIm.js","_app/immutable/chunks/BxWhnRug.js","_app/immutable/chunks/N_VnwbSC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/CYEhwGbC.js","_app/immutable/chunks/DjRq2em6.js","_app/immutable/chunks/yF9dDDku.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/boom",
				pattern: /^\/boom\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/blog","/blog/svelte-5-runes-mental-model","/blog/vibe-coding-manufacturing","/blog/ssr-vs-prerender"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

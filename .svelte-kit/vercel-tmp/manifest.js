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
		client: {start:"_app/immutable/entry/start.BFH4g-Ye.js",app:"_app/immutable/entry/app.zMG_iMv-.js",imports:["_app/immutable/entry/start.BFH4g-Ye.js","_app/immutable/chunks/jFGJxCnk.js","_app/immutable/chunks/BjmXEqE4.js","_app/immutable/chunks/BUrMyzUd.js","_app/immutable/chunks/BaD3JGYJ.js","_app/immutable/chunks/Btw_2tyt.js","_app/immutable/chunks/-UyI9lYi.js","_app/immutable/chunks/D8zS-StC.js","_app/immutable/chunks/B0XwC4Ot.js","_app/immutable/entry/app.zMG_iMv-.js","_app/immutable/chunks/BUrMyzUd.js","_app/immutable/chunks/BaD3JGYJ.js","_app/immutable/chunks/Btw_2tyt.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BjmXEqE4.js","_app/immutable/chunks/T2IVu11u.js","_app/immutable/chunks/V48cXzeQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/boom",
				pattern: /^\/boom\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/blog","/blog/svelte-5-runes-mental-model","/blog/vibe-coding-manufacturing","/blog/ssr-vs-prerender"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

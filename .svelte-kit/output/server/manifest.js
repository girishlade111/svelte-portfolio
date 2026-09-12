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
		client: {start:"_app/immutable/entry/start.aYMQTt02.js",app:"_app/immutable/entry/app.BNhNmKMh.js",imports:["_app/immutable/entry/start.aYMQTt02.js","_app/immutable/chunks/zK9XdeOR.js","_app/immutable/chunks/BjmXEqE4.js","_app/immutable/chunks/BUrMyzUd.js","_app/immutable/chunks/BaD3JGYJ.js","_app/immutable/chunks/Btw_2tyt.js","_app/immutable/chunks/-UyI9lYi.js","_app/immutable/chunks/Db5kt1Bu.js","_app/immutable/chunks/B0XwC4Ot.js","_app/immutable/entry/app.BNhNmKMh.js","_app/immutable/chunks/BUrMyzUd.js","_app/immutable/chunks/BaD3JGYJ.js","_app/immutable/chunks/Btw_2tyt.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BjmXEqE4.js","_app/immutable/chunks/T2IVu11u.js","_app/immutable/chunks/V48cXzeQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/6.js'))
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

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
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/boom",
				pattern: /^\/boom\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

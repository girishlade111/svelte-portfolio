
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const EDITOR: string;
	export const INIT_CWD: string;
	export const JARVIS_TELEMETRY_PROXY_SOCK: string;
	export const HATCH_API_SOCKET: string;
	export const npm_command: string;
	export const npm_config_global_prefix: string;
	export const npm_execpath: string;
	export const JARVIS_INFERENCE_PROXY_SOCK: string;
	export const JARVIS_STEFI_PROXY_SOCK: string;
	export const JARVIS_SESSION_ID: string;
	export const npm_package_version: string;
	export const npm_config_userconfig: string;
	export const WGETRC: string;
	export const npm_config_local_prefix: string;
	export const SSL_CERT_FILE: string;
	export const REQUESTS_CA_BUNDLE: string;
	export const JARVIS_EGRESS_APPROVAL_EVENTS_SOCK: string;
	export const NODE_ENV: string;
	export const GIT_SSL_CAINFO: string;
	export const no_proxy: string;
	export const npm_package_json: string;
	export const NO_PROXY: string;
	export const PATH: string;
	export const SVELTEKIT_FORK: string;
	export const JARVIS_USER_TIMEZONE: string;
	export const JARVIS_DAEMON_EGRESS_APPROVAL_SOCK: string;
	export const npm_config_noproxy: string;
	export const JARVIS_AUTHD_SOCK: string;
	export const CURL_CA_BUNDLE: string;
	export const HTTP_PROXY: string;
	export const OLDPWD: string;
	export const npm_config_globalconfig: string;
	export const JARVIS_HOME: string;
	export const JARVIS_AUTHD_INGRESS_ALLOWED_USERS: string;
	export const AWS_CA_BUNDLE: string;
	export const ALL_PROXY: string;
	export const HTTPS_PROXY: string;
	export const _: string;
	export const JARVIS_MEMORY_SOCK: string;
	export const NODE_EXTRA_CA_CERTS: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const JARVIS_TRACE_CONTEXT: string;
	export const JARVIS_PRESENTATION_LOCALE: string;
	export const JARVIS_SENTINEL_HTTP_API_SOCKET: string;
	export const JARVIS_BIN_DIR: string;
	export const npm_config_prefix: string;
	export const HOME: string;
	export const JARVIS_VM_COMPUTE_REGION: string;
	export const npm_config_user_agent: string;
	export const all_proxy: string;
	export const JARVIS_SECURITY_SOCK: string;
	export const npm_config_npm_version: string;
	export const JARVIS_IS_ASSIGNED: string;
	export const NODE: string;
	export const npm_lifecycle_event: string;
	export const JARVIS_TIER: string;
	export const COLOR: string;
	export const https_proxy: string;
	export const npm_config_init_module: string;
	export const JARVIS_CD_PINNED: string;
	export const JARVIS_TOOL_CALL_ID: string;
	export const http_proxy: string;
	export const JARVIS_RESCUE_SIGNAL_SOCK: string;
	export const PWD: string;
	export const JARVIS_EGRESS_APPROVAL_ADMIN_SOCK: string;
	export const JARVIS_SANDBOX_API_SOCK: string;
	export const npm_package_name: string;
	export const JARVIS_FQDN: string;
	export const JARVIS_INFERENCE_HOSTNAME: string;
	export const npm_lifecycle_script: string;
	export const npm_config_cache: string;
	export const JARVIS_VM_DATA_REGION: string;
	export const JARVIS_CD_CHANNEL: string;
	export const npm_config_node_gyp: string;
	export const JARVIS_RUNTIME_CONTEXT_TOKEN: string;
	export const JARVIS_REQUEST_MODE: string;
	export const JARVIS_HATCHLING_ID: string;
	export const NODE_USE_ENV_PROXY: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		EDITOR: string;
		INIT_CWD: string;
		JARVIS_TELEMETRY_PROXY_SOCK: string;
		HATCH_API_SOCKET: string;
		npm_command: string;
		npm_config_global_prefix: string;
		npm_execpath: string;
		JARVIS_INFERENCE_PROXY_SOCK: string;
		JARVIS_STEFI_PROXY_SOCK: string;
		JARVIS_SESSION_ID: string;
		npm_package_version: string;
		npm_config_userconfig: string;
		WGETRC: string;
		npm_config_local_prefix: string;
		SSL_CERT_FILE: string;
		REQUESTS_CA_BUNDLE: string;
		JARVIS_EGRESS_APPROVAL_EVENTS_SOCK: string;
		NODE_ENV: string;
		GIT_SSL_CAINFO: string;
		no_proxy: string;
		npm_package_json: string;
		NO_PROXY: string;
		PATH: string;
		SVELTEKIT_FORK: string;
		JARVIS_USER_TIMEZONE: string;
		JARVIS_DAEMON_EGRESS_APPROVAL_SOCK: string;
		npm_config_noproxy: string;
		JARVIS_AUTHD_SOCK: string;
		CURL_CA_BUNDLE: string;
		HTTP_PROXY: string;
		OLDPWD: string;
		npm_config_globalconfig: string;
		JARVIS_HOME: string;
		JARVIS_AUTHD_INGRESS_ALLOWED_USERS: string;
		AWS_CA_BUNDLE: string;
		ALL_PROXY: string;
		HTTPS_PROXY: string;
		_: string;
		JARVIS_MEMORY_SOCK: string;
		NODE_EXTRA_CA_CERTS: string;
		npm_node_execpath: string;
		SHLVL: string;
		JARVIS_TRACE_CONTEXT: string;
		JARVIS_PRESENTATION_LOCALE: string;
		JARVIS_SENTINEL_HTTP_API_SOCKET: string;
		JARVIS_BIN_DIR: string;
		npm_config_prefix: string;
		HOME: string;
		JARVIS_VM_COMPUTE_REGION: string;
		npm_config_user_agent: string;
		all_proxy: string;
		JARVIS_SECURITY_SOCK: string;
		npm_config_npm_version: string;
		JARVIS_IS_ASSIGNED: string;
		NODE: string;
		npm_lifecycle_event: string;
		JARVIS_TIER: string;
		COLOR: string;
		https_proxy: string;
		npm_config_init_module: string;
		JARVIS_CD_PINNED: string;
		JARVIS_TOOL_CALL_ID: string;
		http_proxy: string;
		JARVIS_RESCUE_SIGNAL_SOCK: string;
		PWD: string;
		JARVIS_EGRESS_APPROVAL_ADMIN_SOCK: string;
		JARVIS_SANDBOX_API_SOCK: string;
		npm_package_name: string;
		JARVIS_FQDN: string;
		JARVIS_INFERENCE_HOSTNAME: string;
		npm_lifecycle_script: string;
		npm_config_cache: string;
		JARVIS_VM_DATA_REGION: string;
		JARVIS_CD_CHANNEL: string;
		npm_config_node_gyp: string;
		JARVIS_RUNTIME_CONTEXT_TOKEN: string;
		JARVIS_REQUEST_MODE: string;
		JARVIS_HATCHLING_ID: string;
		NODE_USE_ENV_PROXY: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}

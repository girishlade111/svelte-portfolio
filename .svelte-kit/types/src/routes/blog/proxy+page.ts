// @ts-nocheck
import type { PageLoad } from './$types';
import { posts } from '$lib/data';

// Client load() — runs in browser for nav, and at build when prerendering
export const prerender = true;

export const load = async () => {
	return { posts: posts.map(({ slug, title, date, excerpt }) => ({ slug, title, date, excerpt })) };
};
;null as any as PageLoad;
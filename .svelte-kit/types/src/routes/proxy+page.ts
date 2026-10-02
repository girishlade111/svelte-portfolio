// @ts-nocheck
import type { PageLoad } from './$types';
import { timeline } from '$lib/data';

export const load = async () => {
	// Static site: timeline + streamed note resolve at build time.
	const streamed: Promise<string> = new Promise<string>((res) =>
		setTimeout(() => res('SSR payload hydrated · streamed note arrived late, page stayed interactive'), 1200)
	);
	return { timeline, streamed };
};
;null as any as PageLoad;
import type { PageLoad } from './$types';
import { posts } from '$lib/data';

// Client load() — runs in browser, proves client-load capability
export const load: PageLoad = async () => {
	return { posts: posts.map(({ slug, title, date, excerpt }) => ({ slug, title, date, excerpt })) };
};

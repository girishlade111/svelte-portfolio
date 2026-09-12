export const prerender = true;

// Prerender every slug at build so the dynamic route is real static HTML
import { posts as allPosts } from '$lib/data';
export async function entries() {
	return allPosts.map((p) => ({ slug: p.slug }));
}
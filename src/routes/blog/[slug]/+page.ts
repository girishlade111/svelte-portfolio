import type { PageLoad } from './$types';
import { posts } from '$lib/data';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	const post = posts.find((p) => p.slug === params.slug);
	if (!post) error(404, 'Note not found');
	// minimal markdown render (headings, bold, paragraphs) — no dep needed
	const html = post!.body
		.split('\n\n')
		.map((block) => block.startsWith('## ')
			? `<h2>${block.slice(3)}</h2>`
			: `<p>${block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')}</p>`)
		.join('');
	return { post: { ...post!, html } };
};

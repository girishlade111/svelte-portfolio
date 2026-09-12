// @ts-nocheck
import type { PageLoad } from './$types';
import { posts } from '$lib/data';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
	const post = posts.find((p) => p.slug === params.slug);
	if (!post) error(404, 'Note not found');
	// minimal markdown render (headings, bold, paragraphs) — no dep needed.
	// `post` is narrowed by error(404) above; keep a local const for TS strictness.
	const current = post as (typeof posts)[number];
	const html = current.body
		.split('\n\n')
		.map((block) => block.startsWith('## ')
			? `<h2>${block.slice(3)}</h2>`
			: `<p>${block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')}</p>`)
		.join('');
	return { post: { ...current, html } };
};

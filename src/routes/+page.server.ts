import type { PageServerLoad } from './$types';
import { timeline } from '$lib/data';

export const load: PageServerLoad = async () => {
	// SSR: timeline served from server; streamed demo keeps page interactive.
	// NOTE: top-level await would block streaming — keep the promise unresolved here.
	const streamed: Promise<string> = new Promise<string>((res) =>
		setTimeout(() => res('SSR payload hydrated · streamed note arrived late, page stayed interactive'), 1200)
	);
	return { timeline, streamed };
};

export const actions = {
	contact: async ({ request }) => {
		const { z } = await import('zod');
		const { fail } = await import('@sveltejs/kit');
		const schema = z.object({
			name: z.string().min(2, 'Name needs 2+ chars'),
			email: z.string().email('Valid email required'),
			message: z.string().min(10, 'Tell me a bit more (10+ chars)')
		});
		const fd = await request.formData();
		const raw = Object.fromEntries(fd) as Record<string, unknown>;
		const parsed = schema.safeParse(raw);
		if (!parsed.success) {
			return fail(400, { ok: false as const, errors: parsed.error.flatten().fieldErrors, values: raw });
		}
		// no DB — pretend to store, return success (progressive enhancement: works w/o JS)
		return { ok: true as const, name: parsed.data.name };
	}
};

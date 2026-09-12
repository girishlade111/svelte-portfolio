<script lang="ts">
	import '../theme.css';
	import { initTheme, useTheme } from '$lib/theme';
	import { visits } from '$lib/stores';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
	initTheme();
	const theme = useTheme();

	// Start the cross-tab visits counter client-side only (SSR-safe)
	$effect(() => {
		visits.start();
	});
	// View Transitions API on route nav
	onNavigate((navigation) => {
		const d = document as Document & { startViewTransition?: (cb: () => void) => { finished: Promise<void> } };
		if (!d.startViewTransition) return;
		return new Promise<void>((resolve) => {
			d.startViewTransition(() => resolve());
			navigation.complete.then(() => {}).catch(() => {});
		});
	});
</script>

<nav class="top">
	<div class="wrap">
		<a class="brand" href="/">Girish<b>Lade</b> · LadeStack</a>
		<div class="links">
			<a href="/#about">About</a>
			<a href="/#projects">Projects</a>
			<a href="/#skills">Skills</a>
			<a href="/#experience">Experience</a>
			<a href="/blog">Blog</a>
			<a href="/#contact">Contact</a>
			<button class="btn small ghost" onclick={() => theme.update((t) => (t === 'dark' ? 'light' : 'dark'))}>
				{$theme === 'dark' ? '☀ Light' : '◐ Dark'} · visits {$visits}
			</button>
		</div>
	</div>
</nav>

<main>{@render children()}</main>

<footer>
	<div class="wrap">
		Girish Lade · Pandharpur → Pune/PCMC · Founder, LadeStack (ladestack.in) · Targeting VMware / SAP / Cisco ·
		Svelte 5 runes · SSR + prerender · form actions · view transitions. Open <a href="/blog">blog</a> or trigger <a href="/boom">error boundary demo</a>.
	</div>
</footer>

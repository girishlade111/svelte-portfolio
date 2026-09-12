<script lang="ts">
	import '../theme.css';
	import { initTheme, useTheme } from '$lib/theme';
	import { visits } from '$lib/stores';
	import { onNavigate } from '$app/navigation';
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
		<a class="brand" href="/"><span class="brand-mark">G</span>Girish<b>Lade</b></a>
		<div class="links">
			<a href="/#about">About</a>
			<a href="/#projects">Projects</a>
			<a href="/#skills">Skills</a>
			<a href="/#experience">Experience</a>
			<a href="/blog">Blog</a>
			<a href="/#contact">Contact</a>
			<a class="btn small" href="/#contact" style="margin-left:8px">Get started</a>
			<button class="btn small ghost" onclick={() => theme.update((t) => (t === 'dark' ? 'light' : 'dark'))} style="display:none">
				{$theme === 'dark' ? '☀ Light' : '◐ Dark'} · visits {$visits}
			</button>
		</div>
	</div>
</nav>

<main>{@render children()}</main>

<footer>
	<div class="fgrid">
		<div><a class="brand" href="/"><span class="brand-mark">G</span>Girish<b>Lade</b></a><p class="muted" style="font-size:13px;margin-top:12px">Mechanical engineer turned vibe coder.<br />Founder, LadeStack · Pandharpur → Pune.</p></div>
		<div><b style="color:#fff;font-size:13px">Work</b><a href="/#projects">Projects</a><a href="/#skills">Skills</a><a href="/#experience">Experience</a></div>
		<div><b style="color:#fff;font-size:13px">Content</b><a href="/blog">Blog</a><a href="/boom">Error demo</a></div>
		<div><b style="color:#fff;font-size:13px">Elsewhere</b><a href="https://ladestack.in">ladestack.in</a><a href="https://github.com/girishlade111">GitHub</a></div>
		<div><b style="color:#fff;font-size:13px">Contact</b><a href="/#contact">Hire me</a><a href="/#about">About</a></div>
	</div>
</footer>

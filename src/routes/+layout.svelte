<script lang="ts">
	import '../theme.css';
	import { initTheme } from '$lib/theme';
	import { visits } from '$lib/stores';
	import { onNavigate } from '$app/navigation';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
	initTheme();
	let scrolled = $state(false);
	let menuOpen = $state(false);

	$effect(() => {
		visits.start();
		const onScroll = () => (scrolled = window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
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

<nav class="top" class:scrolled>
	<div class="wrap">
		<a class="brand" href="/"><span class="brand-mark">G</span>Girish<b>Lade</b></a>
		<div class="nav-links" class:menu-open={menuOpen}>
			<a class="nav-link" href="/#about">About</a>
			<a class="nav-link" href="/#projects">Projects</a>
			<a class="nav-link" href="/#skills">Skills</a>
			<a class="nav-link" href="/#experience">Experience</a>
			<a class="nav-link" href="/blog">Blog</a>
			<a class="nav-link" href="/#contact">Contact</a>
		</div>
		<div class="nav-cta">
			<a class="btn small" href="/#contact">Get started</a>
			<button class="btn small ghost menu-btn" onclick={() => (menuOpen = !menuOpen)} aria-label="Menu">☰</button>
		</div>
	</div>
</nav>

<main>{@render children()}</main>

<footer class="modern">
	<div class="footer-cta">Let's build something<br />that ships. <a class="btn" href="/#contact" style="vertical-align:middle;margin-left:12px">Get started →</a></div>
	<div class="footer-clusters">
		<div><b>Work</b><a href="/#projects">Projects</a><a href="/#skills">Skills</a><a href="/#experience">Experience</a></div>
		<div><b>Content</b><a href="/blog">Blog</a><a href="/boom">Error demo</a></div>
		<div><b>Elsewhere</b><a href="https://ladestack.in">ladestack.in</a><a href="https://github.com/girishlade111">GitHub</a></div>
		<div><b>Contact</b><a href="/#contact">Hire me</a><a href="/#about">About</a></div>
		<div style="margin-left:auto;align-self:end"><span class="muted" style="font-size:12px">Mechanical engineer turned vibe coder · Founder, LadeStack · Pandharpur → Pune</span></div>
	</div>
</footer>

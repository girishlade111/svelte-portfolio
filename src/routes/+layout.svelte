import './theme.css';
import { initTheme } from '$lib/theme';
import { onNavigate } from '$app/navigation';
import { visits } from '$lib/stores';
import type { Snippet } from 'svelte';

let { children }: { children: Snippet } = $props();
initTheme();

// View Transitions API on route nav (Svelte 5 native pattern)
onNavigate((nav) => {
	if (!document.startViewTransition) return;
	return new Promise((res) => {
		document.startViewTransition(async () => { res(); await nav.complete; });
	});
});

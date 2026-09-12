import { writable } from 'svelte/store';

// Cross-component + cross-tab proof: visits counter synced via localStorage events.
// SSR-safe: module init must not touch window/localStorage; hydration in layout bumps it.
function createVisits() {
	const { subscribe, set, update } = writable(0);
	let started = false;
	function start() {
		if (started || typeof window === 'undefined') return;
		started = true;
		try {
			const raw = Number(localStorage.getItem('gl-visits') ?? 0) + 1;
			localStorage.setItem('gl-visits', String(raw));
			set(raw);
		} catch { set(1); }
		window.addEventListener('storage', (e) => {
			if (e.key === 'gl-visits' && e.newValue) set(Number(e.newValue));
		});
	}
	if (typeof window !== 'undefined') start();
	return { subscribe, start, bump: () => update((n) => { const v = n + 1; try { localStorage.setItem('gl-visits', String(v)); } catch {} return v; }) };
}
export const visits = createVisits();
export const contactToast = writable<string | null>(null);

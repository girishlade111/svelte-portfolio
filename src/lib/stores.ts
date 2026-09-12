import { writable } from 'svelte/store';

// Cross-component + cross-tab proof: visits counter synced via localStorage events.
function createVisits() {
	const { subscribe, set, update } = writable(1);
	if (typeof window !== 'undefined') {
		const raw = Number(localStorage.getItem('gl-visits') ?? 0) + 1;
		localStorage.setItem('gl-visits', String(raw));
		set(raw);
		window.addEventListener('storage', (e) => {
			if (e.key === 'gl-visits' && e.newValue) set(Number(e.newValue));
		});
	}
	return { subscribe, bump: () => update((n) => { const v = n + 1; try { localStorage.setItem('gl-visits', String(v)); } catch {} return v; }) };
}
export const visits = createVisits();
export const contactToast = writable<string | null>(null);

import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export const THEME_KEY = Symbol('theme');
export type Theme = 'dark' | 'light';

export function initTheme(): Writable<Theme> {
	const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('gl-theme') : null;
	const theme: Writable<Theme> = writable(stored === 'light' ? 'light' : 'dark');
	theme.subscribe((v) => {
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('light', v === 'light');
			localStorage.setItem('gl-theme', v);
		}
	});
	setContext(THEME_KEY, theme);
	return theme;
}

export function useTheme(): Writable<Theme> {
	return getContext<Writable<Theme>>(THEME_KEY);
}

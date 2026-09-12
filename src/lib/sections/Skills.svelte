<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import { reveal } from '$lib/actions';
	import { useTheme } from '$lib/theme';
	import { skills } from '$lib/data';

	const theme = useTheme();
	let selected = $state('AI-assisted shipping');
	let detail = $derived(skills.find((s) => s.name === selected) ?? skills[0]);
	const notes: Record<string, string> = {
		'Svelte 5 / SvelteKit': 'Runes, SSR + streaming — this whole site.',
		TypeScript: 'Strict types on every component and load().',
		'CSS / Responsive UI': 'Dark dev-tool aesthetic, 8px CTA dialect.',
		'Node / APIs': 'Form actions, zod validation, endpoints.',
		'AI-assisted shipping': 'Spec → agent → review → ship daily.',
		'Manufacturing / QC': 'SOPs, QC gates, systems thinking from the floor.'
	};
	const ringOf = (idx: number) => idx % 3;
	const angleOf = (idx: number) => (idx * 137.5) % 360;
	const pos = (idx: number) => {
		const a = (angleOf(idx) * Math.PI) / 180;
		const r = ringOf(idx) === 0 ? 46 : ringOf(idx) === 1 ? 33 : 20;
		return `left:${50 + r * Math.cos(a)}%;top:${50 + r * Math.sin(a)}%;`;
	};
	const size = (level: number) => Math.round(56 + level * 0.45);
</script>

<section id="skills" use:reveal>
	<div class="wrap">
		<span class="kicker">$effect · context API</span>
		<h2>Skills — hover the chart</h2>
		<p class="sub">Canvas bars redraw in <code>$effect</code> whenever hover-state or the <code>theme context</code> (provided at root, consumed here deep in the tree) changes.</p>
		<div class="grid c2" style="margin-top:16px">
			<div class="card">
				<canvas bind:this={canvas} style="width:100%;height:160px"></canvas>
				<p class="cap">Theme now: <code>{$theme}</code> (toggle in nav) · hovered: <code>{hover ?? '—'}</code></p>
			</div>
			<div class="grid">
				{#each skills as s}
					<button
						class="card"
						style="text-align:left;cursor:pointer;{hover === s.name ? 'border-color:var(--accent)' : ''}"
						onmouseenter={() => (hover = s.name)}
						onmouseleave={() => (hover = null)}
						onclick={() => (hover = hover === s.name ? null : s.name)}
					>
						<b>{s.name}</b> <span class="pill">{s.group}</span>
						<span class="muted"> — {s.level}%</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

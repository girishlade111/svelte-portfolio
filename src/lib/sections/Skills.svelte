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
		<span class="kicker">$state · $effect · context API</span>
		<h2>Skills — orbit map</h2>
		<p class="sub">Hover or tap a node — <code>$effect</code> updates the detail panel. Theme comes from root context. Nodes use <code>animate:flip</code>.</p>
		<div class="orbit-wrap" style="margin-top:16px">
			<div class="orbit-stage" role="list" aria-label="Skill orbit">
				<div class="orbit-ring"></div><div class="orbit-ring r2"></div><div class="orbit-ring r3"></div>
				<div class="orbit-center">Girish</div>
				{#each skills as s, idx (s.name)}
					<button class="orbit-node" class:active={selected === s.name} style="{pos(idx)}width:{size(s.level)}px;height:{size(s.level)}px;margin:-{Math.round(size(s.level) / 2)}px 0 0 -{Math.round(size(s.level) / 2)}px;{selected === s.name ? 'border-color:var(--primary-glow);' : ''}"
						onmouseenter={() => (selected = s.name)} onfocus={() => (selected = s.name)} onclick={() => (selected = s.name)}
						in:fly={{ y: 14, delay: idx * 70 }} animate:flip={{ duration: 300 }} title="{s.name} {s.level}%">{s.name.split(' ')[0]}<br />{s.level}%</button>
				{/each}
			</div>
			<div class="card">
				{#key detail.name}<div in:fly={{ y: 10, duration: 250 }}>
					<span class="kicker">{detail.group}</span>
					<h3 style="margin-top:10px">{detail.name}</h3>
					<p class="muted">{notes[detail.name] ?? ''}</p>
					<p style="margin-top:10px"><span class="pill hot">{detail.level}% proficiency</span></p>
					<p class="cap">Theme now: <code>{$theme}</code> · selected: <code>{selected}</code></p>
				</div>{/key}
			</div>
		</div>
	</div>
</section>
<hr class="divider-line" />

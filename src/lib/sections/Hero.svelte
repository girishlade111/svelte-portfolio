<script lang="ts">
	import { reveal } from '$lib/actions';
	let roles = ['Mechanical Engineer', 'Vibe Coder', 'Founder · LadeStack', 'Future @ VMware / SAP / Cisco'];
	let i = $state(0);
	let typed = $state('');
	let full = $derived(roles[i]);
	// typewriter driven by $effect (cleanup clears both timer + pending advance)
	$effect(() => {
		let c = 0;
		let advance: ReturnType<typeof setTimeout> | undefined;
		const t = setInterval(() => {
			c++;
			typed = full.slice(0, c);
			if (c >= full.length) {
				clearInterval(t);
				advance = setTimeout(() => (i = (i + 1) % roles.length), 1600);
			}
		}, 55);
		return () => {
			clearInterval(t);
			if (advance) clearTimeout(advance);
		};
	});
</script>

<section id="hero" use:reveal>
	<div class="wrap">
		<span class="kicker">$state + $derived · Hero</span>
		<h1>Girish Lade<br /><span class="hero-rot">{typed || '…'}</span></h1>
		<p class="sub">Mechanical engineer from Pandharpur, now building in Pune/PCMC. I direct AI tools to ship fast — founder of <b>LadeStack</b> (ladestack.in), free no-login AI dev tools. This page is my resume <i>and</i> a live Svelte 5 + SvelteKit capability test.</p>
		<p style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">
			<a class="btn" href="#projects">See LadeStack work</a>
			<a class="btn ghost" href="#contact">Hire / collaborate →</a>
		</p>
		<p class="cap">Capability: <code>$state</code> index + <code>$derived</code> role text, typed via <code>$effect</code> interval. Route changes use the <code>View Transitions API</code> (see +layout).</p>
	</div>
</section>

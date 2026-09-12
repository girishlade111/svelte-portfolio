<script lang="ts">
	import { fly } from 'svelte/transition';
	import { reveal } from '$lib/actions';
	let roles = ['Mechanical Engineer', 'Vibe Coder', 'Founder · LadeStack', 'Future @ VMware / SAP / Cisco'];
	let i = $state(0);
	let typed = $state('');
	let full = $derived(roles[i]);
	let mounted = $state(false);
	$effect(() => {
		const raf = requestAnimationFrame(() => (mounted = true));
		return () => cancelAnimationFrame(raf);
	});
	$effect(() => {
		const target = full;
		typed = '';
		let c = 0;
		let advance: ReturnType<typeof setTimeout> | undefined;
		const t = setInterval(() => {
			c++;
			typed = target.slice(0, c);
			if (c >= target.length) {
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

<section id="hero" use:reveal class="spotlight" style="border-top:0">
	<div class="wrap" style="position:relative;z-index:1">
		<span class="kicker">Girish Lade · Founder, LadeStack</span>
		{#if mounted}
			<h1 transition:fly={{ y: 28, duration: 700 }}>Ship software<br />at machine speed.</h1>
			<p class="sub" style="margin:0 auto;max-width:60ch" transition:fly={{ y: 18, duration: 700, delay: 150 }}>Mechanical engineer from Pandharpur, now building in Pune. I direct AI tools to ship fast — <span class="ln-w">{typed || '…'}</span></p>
			<p style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center" transition:fly={{ y: 14, duration: 600, delay: 300 }}>
				<a class="btn" href="#projects">See LadeStack work</a>
				<a class="btn ghost" href="#contact">Hire / collaborate →</a>
			</p>
		{/if}
		<div class="terminal-grid">
			<div class="tpane glow-pulse"><div class="tbar"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span></div><span class="ln-g">$</span> <span class="ln-w">npx ladestack ship</span><br /><span class="ln-g">✓</span> GB Coder … live<br /><span class="ln-g">✓</span> Dev Toolbox (20+ tools) … live<br /><span class="ln-g">✓</span> LS Auth … live</div>
			<div class="tpane glow-pulse"><div class="tbar"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span></div><span class="ln-b">const</span> <span class="ln-w">stack</span> = &#123;<br />&nbsp;&nbsp;ui: <span class="ln-v">'svelte5:runes'</span>,<br />&nbsp;&nbsp;ssr: <span class="ln-v">'streaming'</span>,<br />&nbsp;&nbsp;ship: <span class="ln-b">daily</span><br />&#125;<span class="cursor"></span></div>
			<div class="tpane glow-pulse"><div class="tbar"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span></div><span class="ln-g">● online</span> ladestack.in — 200 OK · 41ms<br /><span class="ln-g">● active</span> targeting VMware / SAP / Cisco<br /><span class="ln-b">↗</span> open to SDE roles · Pune / remote</div>
			<div class="tpane glow-pulse"><div class="tbar"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span></div><span class="ln-g">$</span> git log --proof<br /><span class="ln-v">2026</span> vibe-crm shipped in a weekend<br /><span class="ln-v">2024</span> factory QC → systems thinking<br /><span class="ln-b">→</span> proof, not promises_<span class="cursor"></span></div>
		</div>
		<p class="cap">Capability: <code>$state</code> index + <code>$derived</code> role text, typed via <code>$effect</code> · View Transitions on nav</p>
	</div>
</section>
<hr class="divider-line" />

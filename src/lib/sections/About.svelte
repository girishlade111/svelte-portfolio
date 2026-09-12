<script lang="ts">
	import { fly } from 'svelte/transition';
	import { reveal } from '$lib/actions';
	// $props + $bindable demo: parent owns `open`, child can toggle it too
	let { open = $bindable(false) }: { open?: boolean } = $props();
	let qa = $state([
		{ q: 'Mechanical → software?', a: 'Factory floor taught me systems thinking. I automate, then I code the automation.' },
		{ q: 'What is vibe coding?', a: 'Directing AI agents with tight specs, reviewing every diff, shipping daily.' },
		{ q: 'Why hire me?', a: 'I ship. LadeStack is live, free, no-login — proof, not promises.' }
	]);
	let shown = $state(0);
</script>

<section id="about" use:reveal>
	<div class="wrap">
		<span class="kicker">$props + $bindable · snippets</span>
		<h2>From the factory floor to shipping software</h2>
		<p class="sub">Small-town roots, mechanical discipline, AI leverage. Flip the switch for the full story.</p>
		<div class="bento">
			<div class="card bento-manifesto">
				<div style="display:flex;gap:14px;align-items:center">
					<button class="toggle-switch" aria-checked={open} role="switch" aria-label="Toggle manifesto" onclick={() => (open = !open)}></button>
					<b style="color:#fff">{open ? 'Manifesto — open' : 'Manifesto — flip it'}</b>
				</div>
				{#if open}
					<div transition:fly={{ y: 12, duration: 300 }}>
						<p style="margin-top:14px">I grew up in <b>Pandharpur, Maharashtra</b> — no CS degree, no bootcamp. I became a mechanical engineer and worked the production floor in Pune/PCMC: planning, QC, process improvement. That's where I learned systems thinking.</p>
						<p class="muted">Then I taught myself to code by directing AI. I'm a <b>vibe coder</b>: I write the spec, the agent drafts, I review every diff and ship. As <b>LadeStack founder</b> I build free, no-login AI dev tools — GB Coder, LS Auth, Dev Toolbox (20+ tools) — because dev tooling shouldn't have gatekeeping.</p>
						<p class="muted">Now I'm making the structured jump into SDE roles — targeting <b>VMware, SAP, Cisco</b> (MAANG stretch). I ship weekly, in public.</p>
					</div>
				{:else}
					<p class="muted" style="margin-top:14px">Pandharpur → Pune. Mechanical engineer turned vibe coder. Founder, LadeStack. Free AI dev tools, no login walls. Now targeting SDE @ VMware / SAP / Cisco.</p>
				{/if}
			</div>
			<div class="card bento-s1"><h3>20+ tools</h3><p class="muted">live on ladestack.in, free, no login</p></div>
			<div class="card bento-s2"><h3>Weekend ships</h3><p class="muted">Vibe CRM designed + shipped in days</p></div>
			<div class="card bento-qa">
				<div style="margin-top:2px">
					{#each qa as item, n}
						<button class="pill {n === shown ? 'hot' : ''}" onclick={() => (shown = n)}>{item.q}</button>
					{/each}
					<p class="muted">{qa[shown].a}</p>
				</div>
			</div>
		</div>
		<p class="cap">Capability: <code>$props</code> + <code>$bindable(open)</code>, tactile switch trigger.</p>
	</div>
</section>
<hr class="divider-line" />

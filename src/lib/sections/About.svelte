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
		<h2>About — ask me anything</h2>
		<p class="sub">Toggle the bio card. The open-state lives in the parent and is <code>$bindable</code> — the button below and the card share it.</p>
		<div class="grid c3" style="margin-top:16px">
			{@render card('Origin', 'Pandharpur, Maharashtra. Factory discipline + startup ambition.')}
			{@render card('Now', 'Pune / PCMC. Manufacturing by day, Svelte 5 by night.')}
			{@render card('Aim', 'VMware · SAP · Cisco (MAANG stretch). Software engineer who ships.')}
		</div>
		<div class="card" style="margin-top:16px">
			<button class="btn small ghost" onclick={() => (open = !open)}>{open ? 'Hide bio −' : 'Show bio +'}</button>
			{#if open}
				<p style="margin-top:10px">I'm Girish Lade — mech engineer turned <b>vibe coder</b>. I write the spec, AI writes the draft, I review, test, and ship. LadeStack is my proof of work: real tools, real users, zero login walls.</p>
				<div style="margin-top:10px">
					{#each qa as item, n}
						<button class="pill {n === shown ? 'hot' : ''}" onclick={() => (shown = n)}>{item.q}</button>
					{/each}
					<p class="muted">{qa[shown].a}</p>
				</div>
			{/if}
		</div>
		<p class="cap">Capability: <code>$props</code> + <code>$bindable(open)</code>, reusable layout via <code>{'#snippet'} / {'@render'}</code>.</p>
	</div>
</section>

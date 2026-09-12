<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import type { PageData, ActionData } from './$types';
	// `form` is populated by the `contact` action: undefined on first load,
	// ActionData (fail(400) data or success) after submit.
	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<svelte:head><title>Girish Lade — Ship software at machine speed</title></svelte:head>

<Hero />
<About />
<Projects />
<Skills />
<Experience items={data.timeline} streamed={data.streamed} />

<div class="cta-band">
	<div class="wrap" style="position:relative;z-index:1">
		<span class="kicker">Open to work</span>
		<h2 style="margin-top:16px">Have a role that needs<br />someone who ships?</h2>
		<p class="sub" style="margin:12px auto 0">SDE · VMware / SAP / Cisco · Pune / remote. Reply within 48h.</p>
		<p style="margin-top:24px"><a class="btn" href="#contact">Get started →</a></p>
	</div>
</div>

<Contact {form} />

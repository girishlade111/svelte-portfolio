<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import type { TimelineItem } from '$lib/data';
	let {
		data,
		form
	}: {
		data: { timeline: TimelineItem[]; streamed: Promise<string> };
		form: { ok: boolean; name?: string; errors?: Record<string, string[]>; values?: Record<string, unknown> } | null;
	} = $props();
</script>

<svelte:head><title>Girish Lade — Vibe Coder · Founder, LadeStack</title></svelte:head>

<Hero />
<About />
<Projects />
<Skills />
<Experience items={data.timeline} streamed={data.streamed} />
<Contact {form} />

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

<svelte:head><title>Girish Lade — Vibe Coder · Founder, LadeStack</title></svelte:head>

<Hero />
<About />
<Projects />
<Skills />
<Experience items={data.timeline} streamed={data.streamed} />
<Contact {form} />

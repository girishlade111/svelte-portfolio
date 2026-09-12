<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	let { data }: { data: { timeline: import('$lib/data').TimelineItem[] } } = $props();
</script>

<svelte:head><title>Girish Lade — Vibe Coder · Founder, LadeStack</title></svelte:head>

<Hero />
<About />
<Projects />
<Skills />
<Experience items={data.timeline} streamed={data.streamed} />
<Contact form={data.contactForm} />

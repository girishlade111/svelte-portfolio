<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { reveal } from '$lib/actions';
	import { projects as seed, type Project } from '$lib/data';

	let items = $state<Project[]>(seed);
	let q = $state('');
	let title = $state(''), tagline = $state(''), tags = $state('');
	let editing: string | null = $state(null);
	let filtered = $derived(items.filter((p) => (p.title + p.tagline + p.tags.join(' ')).toLowerCase().includes(q.toLowerCase())));
	function saveEdit() {
		if (!editing || !title.trim() || !tagline.trim()) return;
		const tagList = tags.split(',').map((t) => t.trim()).filter(Boolean);
		items = items.map((p) => (p.id === editing ? { ...p, title, tagline, tags: tagList.length ? tagList : p.tags } : p));
		editing = null; title = tagline = tags = '';
	}
	function edit(p: Project) { editing = p.id; title = p.title; tagline = p.tagline; tags = p.tags.join(', '); }
	function del(id: string) { items = items.filter((p) => p.id !== id); }
	function shuffle() { items = [...items].sort(() => Math.random() - 0.5); }
</script>

<section id="projects" use:reveal>
	<div class="wrap">
		<span class="kicker">Toolkit · LadeStack suite</span>
		<h2>Toolkits — proof, not promises</h2>
		<p class="sub">Filter, shuffle, edit, delete — client state with <code>$state</code> + <code>$derived</code>, animated with <code>fly/fade/flip</code>.</p>
		<div class="card" style="margin:16px 0">
			<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:end">
				<div style="flex:1;min-width:220px"><label for="pq">Search / filter</label><input id="pq" bind:value={q} placeholder="try 'ai' or 'auth'" /></div>
				<p style="display:flex;gap:8px;margin:0 0 2px"><button class="btn small ghost" onclick={shuffle}>⤨ Shuffle (flip demo)</button></p>
			</div>
			{#if editing}
				<div style="margin-top:12px;border-top:1px solid var(--hairline);padding-top:12px">
					<div class="grid c2"><div><label for="pt">Title</label><input id="pt" bind:value={title} /></div><div><label for="ptags">Tags (comma separated)</label><input id="ptags" bind:value={tags} /></div></div>
					<label for="ptag">Tagline</label><input id="ptag" bind:value={tagline} />
					<p style="margin-top:12px;display:flex;gap:8px"><button class="btn small" onclick={saveEdit}>Save edit</button><button class="btn small ghost" onclick={() => { editing = null; title = tagline = tags = ''; }}>Cancel</button></p>
				</div>
			{/if}
		</div>
		<div class="grid c2">
			{#each filtered as p (p.id)}
				<div class="card" in:fly={{ y: 16 }} out:fade animate:flip={{ duration: 350 }} use:reveal>
					<h3>{p.title} {#if p.featured}<span class="pill hot">★ featured</span>{/if}</h3>
					<p class="muted">{p.tagline}</p>
					<p>{#each p.tags as t}<span class="pill">{t}</span>{/each}</p>
					<p style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
						<a class="btn small ghost" href={p.url} target="_blank" rel="noreferrer">Open ↗</a>
						<button class="btn small ghost" onclick={() => edit(p)}>Edit</button>
						<button class="btn small ghost" onclick={() => del(p.id)}>Delete</button>
					</p>
				</div>
			{:else}
				<div class="card" transition:fade>No projects match “{q}”. <button class="btn small ghost" onclick={() => (q = '')}>Clear</button></div>
			{/each}
		</div>
	</div>
</section>

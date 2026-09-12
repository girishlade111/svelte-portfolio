<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { reveal } from '$lib/actions';
	import { projects as seed, type Project } from '$lib/data';

	let items = $state<Project[]>(seed);
	let q = $state('');
	let title = $state(''), tagline = $state(''), tags = $state('');
	let editing: string | null = $state(null);
</script>

<section id="projects" use:reveal>
	<div class="wrap">
		<span class="kicker">Toolkit · LadeStack suite</span>
		<h2>Toolkits — proof, not promises</h2>
		<p class="sub">Add, edit, delete, filter, shuffle — client state with <code>$state</code> + <code>$derived</code>, animated with <code>fly/fade/flip</code>.</p>
		<div class="card" style="margin:16px 0">
			<div class="grid c2">
				<div><label>Search / filter</label><input bind:value={q} placeholder="try 'ai' or 'auth'" /></div>
				<div><label>{editing ? 'Editing project' : 'New project'} — title</label><input bind:value={title} placeholder="e.g. LS Deploy" /></div>
			</div>
			<label>Tagline</label><input bind:value={tagline} placeholder="One-line pitch" />
			<label>Tags (comma separated)</label><input bind:value={tags} placeholder="Svelte, AI" />
			<p style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
				<button class="btn small" onclick={save}>{editing ? 'Save edit' : '+ Add project'}</button>
				{#if editing}<button class="btn small ghost" onclick={() => { editing = null; title = tagline = tags = ''; }}>Cancel</button>{/if}
				<button class="btn small ghost" onclick={shuffle}>⤨ Shuffle (flip demo)</button>
			</p>
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

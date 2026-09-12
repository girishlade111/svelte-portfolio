<script lang="ts">
	import { reveal } from '$lib/actions';
	let { data } = $props();
</script>

<svelte:head><title>Notes — Girish Lade</title></svelte:head>

<section use:reveal>
	<div class="wrap">
		<span class="kicker">prerendered index · client load()</span>
		<h1>Notes</h1>
		<p class="sub">Blog index loaded via client <code>+page.ts load</code>. Each post is a prerendered <code>[slug]</code> route — static HTML at build, SSR timeline on home. Both paradigms, one app.</p>
		<div class="grid" style="margin-top:16px">
			{#each data.posts as p}
				<a class="card" href="/blog/{p.slug}" style="text-decoration:none;color:inherit" use:reveal>
					<h3>{p.title}</h3>
					<p class="muted">{p.date} — {p.excerpt}</p>
				</a>
			{/each}
		</div>
		<p><a class="btn ghost" href="/">← Back home</a></p>
	</div>
</section>

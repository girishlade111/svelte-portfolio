<script lang="ts">
	let { data } = $props();
</script>

<svelte:head><title>{data.post.title} — Girish Lade</title></svelte:head>

<section>
	<div class="wrap">
		<span class="kicker">prerendered · dynamic [slug]</span>
		<h1>{data.post.title}</h1>
		<p class="muted">{data.post.date}</p>
		<article class="card" style="margin-top:16px">{@html data.post.html}</article>
		<p style="margin-top:14px;display:flex;gap:8px">
			<a class="btn ghost" href="/blog">← All notes</a>
			<a class="btn ghost" href="/">Home</a>
		</p>
		<p class="cap">Capability: dynamic route <code>blog/[slug]</code> + <code>export const prerender = true</code> — this HTML was baked at build time.</p>
	</div>
</section>

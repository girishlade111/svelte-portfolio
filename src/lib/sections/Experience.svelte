<script lang="ts">
	import { reveal } from '$lib/actions';
	import type { TimelineItem } from '$lib/data';
	let { items, streamed }: { items: TimelineItem[]; streamed: Promise<string> } = $props();
</script>

<section id="experience" use:reveal>
	<div class="wrap">
		<span class="kicker">SSR load() · streaming</span>
		<h2>Experience — server-loaded</h2>
		<p class="sub">Timeline below was fetched in <code>+page.server.ts load()</code> (SSR). The highlight box streams in late via an <code>{'{#await}'} block</code> — page stays interactive meanwhile.</p>
		<div class="card" style="margin:16px 0">
			{#await streamed}
				<p class="muted">⏳ streaming extra SSR payload…</p>
			{:then note}
				<p class="ok">● {note}</p>
			{:catch}
				<p class="err">stream failed</p>
			{/await}
		</div>
		<div class="timeline">
			{#each items as t}
				<div use:reveal><span class="dot"></span><b>{t.role}</b><br /><span class="muted">{t.org} · {t.period}</span><p class="muted">{t.detail}</p></div>
			{/each}
		</div>
		<p class="cap">Also see client <code>load</code>: <a href="/blog">/blog</a> loads post index in <code>+page.ts</code>.</p>
	</div>
</section>

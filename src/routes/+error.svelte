<script lang="ts">
	import { page } from '$app/state';
</script>

<section>
	<div class="wrap">
		<span class="kicker">error boundary · +error.svelte</span>
		<h1>{page.status} — caught by the error boundary</h1>
		<p class="sub">{page.error?.message ?? 'Something broke, but the app survived.'}</p>
		<p style="margin-top:14px;display:flex;gap:8px">
			<a class="btn" href="/">Back home</a>
			<a class="btn ghost" href="/blog">Read notes</a>
		</p>
		<p class="cap">Try <a href="/boom">/boom</a> (throws on purpose) or <a href="/blog/nope">/blog/nope</a> (404).</p>
	</div>
</section>

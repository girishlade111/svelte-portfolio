<script lang="ts">
	import { enhance } from '$app/forms';
	import { reveal } from '$lib/actions';
	import { contactToast } from '$lib/stores';
	let { form }: { form: { ok: boolean; name?: string; errors?: Record<string, string[]>; values?: Record<string, unknown> } | null } = $props();
	let sending = $state(false);
	let optimistic = $state<string | null>(null);
</script>

<section id="contact" use:reveal>
	<div class="wrap">
		<span class="kicker">form actions · zod · optimistic UI</span>
		<h2>Contact — works even without JS</h2>
		<p class="sub">Native SvelteKit <code>form action</code> with <code>use:enhance</code>: progressive enhancement + server-side zod validation + optimistic <code>$state</code> greeting.</p>
		<div class="grid c2" style="margin-top:16px">
			<form method="POST" action="?/contact" use:enhance={() => {
				sending = true;
				const name = (document.getElementById('cname') as HTMLInputElement)?.value;
				optimistic = name ? `Sending as ${name}…` : 'Sending…';
				return async ({ update, result }) => {
					await update();
					sending = false;
					if (result.type === 'success') { optimistic = null; contactToast.set('Message received ✓'); setTimeout(() => contactToast.set(null), 4000); }
					else optimistic = null;
				};
			}} class="card">
				<label for="cname">Name</label>
				<input id="cname" name="name" value={form && !form.ok ? String(form.values?.name ?? '') : ''} required minlength="2" />
				{#if form && !form.ok && form.errors?.name}<p class="err">{form.errors.name[0]}</p>{/if}
				<label for="cemail">Email</label>
				<input id="cemail" name="email" type="email" value={form && !form.ok ? String(form.values?.email ?? '') : ''} required />
				{#if form && !form.ok && form.errors?.email}<p class="err">{form.errors.email[0]}</p>{/if}
				<label for="cmsg">Message</label>
				<textarea id="cmsg" name="message" rows="4" required minlength="10">{form && !form.ok ? String(form.values?.message ?? '') : ''}</textarea>
				{#if form && !form.ok && form.errors?.message}<p class="err">{form.errors.message[0]}</p>{/if}
				<p style="margin-top:12px"><button class="btn" disabled={sending}>{sending ? 'Sending…' : 'Send message'}</button></p>
				{#if optimistic}<p class="muted">{optimistic} (optimistic UI)</p>{/if}
				{#if form?.ok}<p class="ok">✓ Thanks {form.name}! I reply within 48h. (No-JS safe — this rendered on the server.)</p>{/if}
				{#if $contactToast}<p class="ok">{$contactToast} — via store toast</p>{/if}
			</form>
			<div class="card">
				<h3>Elsewhere</h3>
				<p class="muted">ladestack.in · GitHub @girishlade111 · Pune / PCMC, Maharashtra</p>
				<p style="margin-top:10px"><span class="pill hot">Open to: SDE · VMware / SAP / Cisco</span></p>
				<p class="cap">Stores: <code>visits</code> + <code>contactToast</code> sync across tabs via <code>localStorage</code> events.</p>
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import { reveal } from '$lib/actions';
	import { useTheme } from '$lib/theme';
	import { skills } from '$lib/data';

	const theme = useTheme();
	let hover = $state<string | null>(null);
	let canvas: HTMLCanvasElement;
	// $effect: redraw bars whenever hover or theme changes.
	// $theme is read for tracking only (void) — class detection reads the DOM.
	$effect(() => {
		void $theme;
		const h = hover; void h;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		const W = (canvas.width = canvas.offsetWidth * 2);
		const H = (canvas.height = 320);
		ctx.clearRect(0, 0, W, H);
		const dark = document.documentElement.classList.contains('light') === false;
		skills.forEach((s, idx) => {
			const y = 30 + idx * 48;
			const w = (W - 320) * (s.level / 100);
			const active = hover === s.name;
			ctx.fillStyle = dark ? '#9aa7c2' : '#55617a';
			ctx.font = '24px system-ui';
			ctx.fillText(s.name, 8, y + 8);
			ctx.fillStyle = dark ? '#1d2637' : '#e3e8f2';
			ctx.beginPath(); ctx.roundRect(280, y - 14, W - 300, 26, 13); ctx.fill();
			const grad = ctx.createLinearGradient(280, 0, W - 20, 0);
			grad.addColorStop(0, '#0007cd'); grad.addColorStop(1, '#00d4ff');
			ctx.fillStyle = active ? '#34d399' : grad;
			ctx.beginPath(); ctx.roundRect(280, y - 14, Math.max(26, w), 26, 13); ctx.fill();
			ctx.fillStyle = dark ? '#e8edf7' : '#101828';
			ctx.fillText(s.level + '%', W - 90, y + 8);
		});
	});
</script>

<section id="skills" use:reveal>
	<div class="wrap">
		<span class="kicker">$effect · context API</span>
		<h2>Skills — hover the chart</h2>
		<p class="sub">Canvas bars redraw in <code>$effect</code> whenever hover-state or the <code>theme context</code> (provided at root, consumed here deep in the tree) changes.</p>
		<div class="grid c2" style="margin-top:16px">
			<div class="card">
				<canvas bind:this={canvas} style="width:100%;height:160px"></canvas>
				<p class="cap">Theme now: <code>{$theme}</code> (toggle in nav) · hovered: <code>{hover ?? '—'}</code></p>
			</div>
			<div class="grid">
				{#each skills as s}
					<button
						class="card"
						style="text-align:left;cursor:pointer;{hover === s.name ? 'border-color:var(--accent)' : ''}"
						onmouseenter={() => (hover = s.name)}
						onmouseleave={() => (hover = null)}
						onclick={() => (hover = hover === s.name ? null : s.name)}
					>
						<b>{s.name}</b> <span class="pill">{s.group}</span>
						<span class="muted"> — {s.level}%</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

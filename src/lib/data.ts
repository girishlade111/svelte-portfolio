export interface Project { id: string; title: string; tagline: string; tags: string[]; url: string; featured?: boolean; }
export interface Skill { name: string; level: number; group: 'Frontend' | 'Backend' | 'AI Workflow' | 'Mechanical'; }
export interface TimelineItem { period: string; role: string; org: string; detail: string; }
export interface Post { slug: string; title: string; date: string; excerpt: string; body: string; }

export const projects: Project[] = [
	{ id: 'gb-coder', title: 'GB Coder', tagline: 'Free AI code generator & explainer — no login.', tags: ['Svelte', 'AI', 'ladestack.in'], url: 'https://ladestack.in', featured: true },
	{ id: 'ls-auth', title: 'LS Auth', tagline: 'Drop-in auth UI + session helpers for side projects.', tags: ['Auth', 'SvelteKit'], url: 'https://ladestack.in' },
	{ id: 'dev-toolbox', title: 'Dev Toolbox', tagline: 'JSON formatter, regex tester, converters — 20+ mini tools.', tags: ['Tools', 'DX'], url: 'https://ladestack.in', featured: true },
	{ id: 'vibe-crm', title: 'Vibe CRM', tagline: 'Lead tracker built by directing AI — shipped in a weekend.', tags: ['CRUD', 'Svelte 5'], url: 'https://ladestack.in' }
];

export const skills: Skill[] = [
	{ name: 'Svelte 5 / SvelteKit', level: 85, group: 'Frontend' },
	{ name: 'TypeScript', level: 78, group: 'Frontend' },
	{ name: 'CSS / Responsive UI', level: 82, group: 'Frontend' },
	{ name: 'Node / APIs', level: 70, group: 'Backend' },
	{ name: 'AI-assisted shipping', level: 95, group: 'AI Workflow' },
	{ name: 'Manufacturing / QC', level: 90, group: 'Mechanical' }
];

export const timeline: TimelineItem[] = [
	{ period: '2024 — now', role: 'Founder, LadeStack', org: 'ladestack.in · Pune', detail: 'Free, no-login AI dev tools. Directing AI agents to design, code, ship. GB Coder, Dev Toolbox, LS Auth live.' },
	{ period: '2022 — 2024', role: 'Mechanical Engineer (Production)', org: 'PCMC / Pune manufacturing', detail: 'Production planning, QC, process improvement. Learned systems thinking I now apply to software.' },
	{ period: '2023 — now', role: 'Vibe Coder → Software Engineer', org: 'Self-directed', detail: 'Svelte 5 runes, SvelteKit SSR, TypeScript. Targeting VMware / SAP / Cisco. Shipping public projects weekly.' },
	{ period: 'Origin', role: 'Pandharpur → Pune', org: 'Maharashtra', detail: 'Small-town roots, factory floor discipline, startup ambition.' }
];

export const posts: Post[] = [
	{ slug: 'svelte-5-runes-mental-model', title: 'My Svelte 5 runes mental model', date: '2026-08-20', excerpt: '$state for memory, $derived for math, $effect for side-effects — how I actually remember it.', body: '## The model\n\n**$state** = memory. **$derived** = spreadsheet formula. **$effect** = "when this changes, do that".\n\nI keep components small: state at top, derived below, one effect per concern. Effects never write the state they read in a loop — that is the only rule I needed.\n\n## Why it clicks\n\nComing from manufacturing: state is inventory, derived is the dashboard, effects are the andon alerts.' },
	{ slug: 'vibe-coding-manufacturing', title: 'What manufacturing taught me about vibe coding', date: '2026-07-11', excerpt: 'SOPs, QC gates and andon cords map 1:1 to prompting AI engineers.', body: '## SOPs = prompts\n\nA good SOP leaves no ambiguity. So does a good prompt.\n\n## QC gates = code review\n\nI never merged AI output without running it. Same as never shipping a part without inspection.\n\n## Andon = error boundaries\n\nStop the line on defect. Catch it in +error.svelte, fix root cause.' },
	{ slug: 'ssr-vs-prerender', title: 'SSR vs prerender: when I use each', date: '2026-06-02', excerpt: 'Timeline = SSR load(). Blog = prerendered markdown. Both in one app, on purpose.', body: '## Rule of thumb\n\nDynamic or personalized → SSR `load()` in `+page.server.ts`.\n\nStatic content → `export const prerender = true` + dynamic `[slug]` routes.\n\n## This site\n\nExperience timeline streams from a server load. Blog posts are prerendered at build. The capability checklist demanded both, and honestly both earned their place.' }
];

# Girish Lade — Portfolio

Personal portfolio website of **Girish Lade**, solo founder of LadeStack. Dark, technical, developer-tools aesthetic (Composio design system) with a terminal-style 2×2 code-panel hero, near-black canvas, and a single deep-electric-blue voltage (`#0007cd`). Built with **SvelteKit + Svelte 5** (runes), deployed as a fully static site.

Live site: see the repo's Website link (set on the repo homepage field).

## Features

- **Hero section** — terminal-style 2×2 mockup with a central blue spotlight glow, headline + CTAs
- **Projects** — featured LadeStack projects (GB Coder, LS Auth, Dev Toolbox, Vibe CRM) with tags and links
- **Skills** — animated skill bars grouped by Frontend / Backend / AI Workflow / Mechanical
- **Experience** — career timeline (LadeStack founder → Mechanical Engineer → Vibe Coder)
- **Blog** — prerendered markdown-style posts with dynamic `[slug]` routes and `entries()` generation
- **Contact form** — form action with `use:enhance` progressive enhancement + server-side zod validation
- **Error boundary** — custom `+error.svelte`; `/boom` route deliberately crashes to demo it
- **Theme toggle** — dark/light theme with `$effect`-based init
- **Visits counter** — cross-tab synced via `localStorage` events (SSR-safe store)
- **View Transitions API** — smooth route transitions via `onNavigate`

## Tech Stack

- **SvelteKit 2** + **Svelte 5** (runes: `$state`, `$derived`, `$effect`, snippets)
- **TypeScript** (strict) + `svelte-check`
- **Vite 6** build, `vitePreprocess`
- **zod** — contact form validation
- **@sveltejs/adapter-static** — full static export (prerendered, SPA fallback for dynamic routes)
- Design spec: `DESIGN.md` (Composio design analysis, alpha)

## Quick Start

```bash
npm install
npm run dev        # vite dev server
npm run check      # svelte-kit sync + svelte-check
npm run build      # static export -> build/
npm run preview    # preview the static build
```

Requires **Node 20+**.

## Project Structure

```
src/
  app.html                  # HTML shell
  theme.css                 # design tokens + global styles
  lib/
    data.ts                 # projects, skills, timeline, blog posts (single source of truth)
    stores.ts               # visits counter (localStorage-synced)
    theme.ts                # theme init
    actions.ts              # reveal-on-scroll action
    Counter.svelte           # demo counter component
    Nav.svelte               # navigation
    sections/               # Hero, About, Experience, Projects, Skills, Contact
  routes/
    +layout.svelte           # shell, theme init, view transitions
    +layout.ts               # export const prerender = true
    +page.ts                 # universal load: timeline + streamed note
    +page.svelte             # homepage
    blog/
      +page.svelte           # post index
      [slug]/+page.ts        # prerender=true, entries() from $lib/data
      [slug]/+page.svelte    # post renderer
    boom/+page.svelte        # deliberate crash demo (caught by +error.svelte)
    +error.svelte
svelte.config.js             # adapter-static, fallback index.html
static/                      # favicon.svg and other static assets
DESIGN.md                    # design system spec
```

## Env Vars

None — the app is fully static with no backend, no database, no API keys.

## Deploy Notes

- `npm run build` emits a static `build/` directory (SvelteKit `adapter-static`).
- Deploy `build/` to any static host: **Cloudflare Pages**, GitHub Pages, Netlify, Vercel.
- SPA fallback is `index.html`; non-prerendered routes (e.g. `/boom`) render client-side.
- Note: the contact form's server-side action is a static-site limitation — on a static host the form validation runs client-side only (progressive enhancement path).

## Credits

Built by **Girish Lade** — https://ladestack.in

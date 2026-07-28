# Astro Landing Page Template

A production-ready landing page template built with Astro and Tailwind CSS v4.

## Features

- **Blazing Fast** — Static HTML, zero JS by default. 100 Lighthouse score out of the box
- **Tailwind v4** — CSS-first configuration with design tokens, no JS config file
- **Dark Mode** — System-aware theme toggle with localStorage persistence, no flash
- **TypeScript** — Strict mode throughout
- **SEO Ready** — Meta tags, semantic HTML, accessible markup
- **Deploy Ready** — Works on Cloudflare Workers or any static host

## Stack

- [Astro 7](https://astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)
- [Vite](https://vitejs.dev)

## Get Started

Use a supported Node.js release (22.22.3+, 24.16.0+, or 26.3.0+) and pnpm
11.17.0.

```bash
git clone https://github.com/loke-dev/astro-landing-page-template
cd astro-landing-page-template
pnpm install
pnpm dev
```

## Verify

Run the complete local quality gate before shipping:

```bash
pnpm check
pnpm deploy:dry
pnpm audit --audit-level moderate
```

TypeScript 6 is intentional: it is the newest release supported by both
`@astrojs/check` and `typescript-eslint`.

## Customise

1. Edit section content in `src/components/sections/`
2. Update colors in `src/styles/global.css` (`:root` and `.dark` blocks)
3. Replace logo/favicon in `public/` and `NavBar.astro`
4. Update site URL in `astro.config.ts`

## Deploy

[Live demo](https://astro-landing-page.loke.dev)

After authenticating Wrangler, deploy with:

```bash
pnpm deploy
```

## License

MIT

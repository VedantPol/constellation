# Constellation

A single launchpad that links to every live project and deployment by **Vedant Pol** —
portfolios, business sites, web apps and AI/ML tools. Dark, space-themed, animated.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build && npm start
```

## Adding / editing projects

All content lives in [`lib/projects.ts`](lib/projects.ts) — no component edits needed.

- **`projects`** — one entry per project. Set `category` (`client` | `ai` | `web`),
  `image` (preview under `/public/previews`), and `tags`. For deployed projects add
  `url`, `status` (`live` | `offline`) and `host`; omit them for repo-only entries.
- **`categories`** — the section headings / sticky tabs.
- **`profile`** / **`social`** — name, role, tagline and links shown in the hero, nav and footer.

### Preview images (sneak peeks)

Previews live in `public/previews/*.webp`. To regenerate one:

- **Live site** — screenshot via thum.io, e.g.
  `https://image.thum.io/get/width/1200/crop/750/noanimate/<url>`
- **Offline / repo-only** — GitHub social card:
  `https://opengraph.githubassets.com/1/VedantPol/<repo>`

Then downscale to WebP (~1000px wide) with `sharp` and drop it in `public/previews`.

### Self-hosted sites

Sites on your own server have no GitHub `homepageUrl`, so add them manually with their
public `url` and `host: "Self-hosted"` (e.g. the live AI apps on `vedant-home-server.in`).

## Deploy

Optimised for Vercel — push to GitHub and import the repo, or run `vercel`.

## Notes

Live status in `lib/projects.ts` reflects an HTTP probe taken on 2026-06-25.
Re-check periodically; free-tier hosts (e.g. Render) sleep when idle.

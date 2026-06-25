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

- **`projects`** — live (or recently-live) deployments shown in the main grid.
  Set `status: "live" | "offline"`, `featured: true` to render a card larger,
  and `host` to label where it runs.
- **`notableRepos`** — repositories without a public deployment.

### Self-hosted sites

Sites running on your own server won't have a GitHub `homepageUrl`, so they can't be
auto-detected. Add them to the `projects` array manually with their public URL and
`host: "Self-hosted"`.

## Deploy

Optimised for Vercel — push to GitHub and import the repo, or run `vercel`.

## Notes

Live status in `lib/projects.ts` reflects an HTTP probe taken on 2026-06-25.
Re-check periodically; free-tier hosts (e.g. Render) sleep when idle.

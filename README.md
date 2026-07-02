# Blue Team Village CTF — DEF CON 34

The official site for Blue Team Village's Project Obsidian CTF at DEF CON 34
(August 6–9, 2026, Las Vegas): the central hub for the forensic analysis of
malware in containerized environments. Built to be extremely lightweight and
mobile-first — it has to keep working on DEF CON's unreliable internet.

The previous year's site is preserved unchanged under
[`/archive/dc33`](https://ctf.blueteamvillage.org/archive/dc33).

## Stack

- **Next.js 16** (App Router, all routes fully static) + **React 19** + TypeScript
- **Tailwind CSS v4** — DEF CON 34 "Agency" theme tokens in `app/globals.css`
  (official palette: navy `#0d294a`, teal `#017FA4`, mint `#6CCDB8`, gold
  `#f1b435`, magenta `#E0004E`; Lato + Geist Mono)
- **Contentful** (build-time fetch only, no client-side API calls)
- **Vercel** + `@vercel/analytics`
- **pnpm**

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build — must stay all-static (○)
pnpm lint     # eslint 9 flat config
```

## Content management (Contentful)

Layout lives in code; changeable content lives in Contentful
(space `mgfsp0s6h7v2`, environment `master`). Content models:

| Model | Drives | Notes |
|---|---|---|
| `siteSettings` | announcement banner, MetaCTF name/URL, Discord, downloads link | singleton — keep exactly one entry |
| `eventInfo` | dates, venue, countdown target, status, tagline | singleton |
| `challengeTrack` | `/challenges` tracks | body is Markdown |
| `scenario` | `/challenges/converged-frontier` list | **titles + one-liners only** (see guardrail) |
| `setupSection` | `/setup` numbered steps | `tier: advanced` renders the live-malware warning |
| `sponsor` | home-page sponsor grid | `active: false` hides without deleting |
| `faqItem` | `/faq` | answer is Markdown |

How it flows:

1. Pages are static server components. At **build time** they fetch published
   entries via the Contentful Delivery API (`lib/contentful/`).
2. If `CONTENTFUL_SPACE_ID` / `CONTENTFUL_DELIVERY_TOKEN` are unset or the API
   is unreachable, every query falls back to the checked-in defaults in
   `lib/content/fallback.ts` — the site always builds. Keep `fallback.ts`
   roughly in sync with Contentful when you make significant content changes.
3. **Publishing a change does not redeploy by itself.** Wire the webhook once:
   - Vercel → Project → Settings → Git → **Deploy Hooks** → create a hook for
     the production branch; copy its URL.
   - Contentful → Settings → **Webhooks** → Add webhook → paste the Vercel
     deploy-hook URL → trigger on **Entry publish / unpublish** events only.
   After that, editors publish in Contentful and Vercel rebuilds the site.

Credentials: env vars only (see `.env.example`), set in Vercel project
settings. Never commit tokens.

## Content guardrail

Publish **participant-safe framing only**: scenario titles and theme-level
one-liners, tracks, tiers, tool stack, setup steps. Never publish — in code,
Contentful, or fallbacks:

- flag values, flag formats/anchors, or answer keys
- IOC tables, scenario seeds, or `scenario.yaml` internals
- solved reports / walkthroughs, or anything from `Organizers_Only/`
- verbatim content from the private `dc34-obsidian-seceng` repo

## Layout in code

```
app/
├── (dc34)/            # current site — shared chrome in (dc34)/layout.tsx
│   ├── page.tsx       # home: hero, focus grid, tracks, sponsors
│   ├── challenges/    # tracks + converged-frontier scenarios
│   ├── setup/         # environment setup guide
│   ├── rules/ faq/ about/ past-winners/ …
├── archive/dc33/      # frozen DEF CON 33 site (own chrome, own ui copies)
├── layout.tsx         # fonts (Lato/Geist Mono), metadata, analytics
└── not-found.tsx      # terminal-flavored 404
components/
├── dc34/              # DC34 components (header, hero, terminal-prompt, …)
├── archive/dc33/      # frozen DC33 components — do not restyle
└── ui/                # shared primitives styled with DC34 tokens
lib/
├── contentful/        # delivery client + typed queries with fallback
└── content/           # fallback.ts — checked-in content defaults
```

The archive is intentionally frozen: it keeps byte-copies of the ui
primitives (`components/archive/dc33/ui/`) and pins its original font stack,
so DC34 design changes cannot reshape DC33 pages. Old DC33 URLs
(`/challenges/project-obsidian`, `/location`, …) permanently redirect into
the archive (`next.config.ts`).

## Performance ground rules

- Every route stays static (`○` in the build output) — no server rendering,
  no client-side content fetching.
- Client JS is limited to the countdown, the mobile menu, and analytics.
  Prefer server components and zero-JS patterns (e.g. the FAQ uses native
  `<details>`).
- All motion respects `prefers-reduced-motion` (kill-switch in `globals.css`).

## About Blue Team Village

Blue Team Village is a community-driven initiative focused on defensive
cybersecurity — education, training, and competitions for the analysts,
forensic investigators, and SOC folks.

- **Website**: https://blueteamvillage.org
- **Email**: seceng@blueteamvillage.org
- **GitHub**: [@blueteamvillage](https://github.com/blueteamvillage)

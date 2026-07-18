import type { MetadataRoute } from "next"

/*
 * robots.txt. Legit search engines get full access (this is a public event
 * site we want indexed); known AI/LLM training crawlers are disallowed. The
 * DC33 archive stays crawlable so its per-page `noindex` is actually seen —
 * disallowing it here would hide that directive.
 */

const SITE_URL = "https://ctf.blueteamvillage.org"

// AI/LLM scrapers we don't want training on or republishing the site.
// Edit this list to taste — removing a name lets that crawler back in.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "CCBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "Google-Extended",
  "Applebot-Extended",
  "PerplexityBot",
  "Bytespider",
  "Amazonbot",
  "Meta-ExternalAgent",
  "FacebookBot",
  "cohere-ai",
  "Diffbot",
  "ImagesiftBot",
  "Omgilibot",
  "Timpibot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}

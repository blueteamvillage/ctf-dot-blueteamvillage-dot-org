import type { MetadataRoute } from "next"

/*
 * XML sitemap for the current DC34 site. The DC33 archive is intentionally
 * excluded — it's marked `noindex`, so it doesn't belong in the sitemap.
 * Keep this list in sync with the routes under app/(dc34).
 */

const SITE_URL = "https://ctf.blueteamvillage.org"

type Entry = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}

const ROUTES: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/setup", priority: 0.9, changeFrequency: "weekly" },
  { path: "/challenges", priority: 0.9, changeFrequency: "weekly" },
  { path: "/challenges/converged-frontier", priority: 0.8, changeFrequency: "weekly" },
  { path: "/challenges/groundlink-intrusion", priority: 0.8, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.7, changeFrequency: "weekly" },
  { path: "/rules", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/past-winners", priority: 0.5, changeFrequency: "yearly" },
  { path: "/past-winners/defcon-31", priority: 0.3, changeFrequency: "yearly" },
  { path: "/past-winners/defcon-32", priority: 0.3, changeFrequency: "yearly" },
  { path: "/past-winners/defcon-33", priority: 0.3, changeFrequency: "yearly" },
  { path: "/code-of-conduct", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}

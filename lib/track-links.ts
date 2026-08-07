/*
 * Slug → dedicated-page routing for challenge tracks. Lives in code rather
 * than Contentful so every route stays fully static and an editor can't
 * point a card at a broken or off-site URL.
 */
export type TrackLink = {
  href: string
  /** Short CTA on the TrackCard. */
  cardLabel: string
  /** Longer CTA under the track's markdown body on /challenges. */
  bodyLabel: string
}

export const TRACK_LINKS: Record<string, TrackLink> = {
  "cloud-attack-forensics": {
    href: "/challenges/groundlink-intrusion",
    cardLabel: "Read the briefing",
    bodyLabel: "Read the full GroundLink briefing",
  },
  "converged-frontier": {
    href: "/challenges/converged-frontier",
    cardLabel: "View scenarios",
    bodyLabel: "Browse the ten scenarios",
  },
}

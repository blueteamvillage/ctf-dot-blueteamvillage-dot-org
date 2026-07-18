export interface SiteSettings {
  announcementEnabled: boolean
  announcementText: string
  announcementUrl: string
  ctfPlatformName: string
  ctfPlatformUrl: string
  discordUrl: string
  downloadsUrl: string
}

export interface EventInfo {
  name: string
  dates: string
  /** ISO timestamp the countdown targets (event doors open). */
  startsAt: string
  venue: string
  status: "upcoming" | "live" | "closed"
  badgeRequired: boolean
  tagline: string
}

export type SkillTier = "Beginner" | "Intermediate" | "Expert"

export interface ChallengeTrack {
  title: string
  slug: string
  summary: string
  /** Markdown body rendered on the challenges page. */
  body: string
  skillTiers: SkillTier[]
  icon: "container" | "cloud" | "campaign"
  order: number
}

export interface Scenario {
  title: string
  oneLiner: string
  order: number
}

export interface SetupSection {
  title: string
  /** Markdown body. */
  body: string
  tier: "everyone" | "advanced"
  order: number
}

export type SponsorTier = "blue" | "platinum" | "gold" | "community"

export interface SponsorLogo {
  url: string
  alt: string
  /** Natural dimensions of the asset, for next/image aspect ratio. */
  width: number
  height: number
}

export interface Sponsor {
  name: string
  tier: SponsorTier
  url: string
  blurb: string
  logo: SponsorLogo | null
  order: number
  active: boolean
}

export interface FaqItem {
  question: string
  /** Markdown body. */
  answer: string
  order: number
}

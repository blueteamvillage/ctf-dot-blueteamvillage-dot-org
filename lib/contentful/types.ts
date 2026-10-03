export interface SiteSettings {
  announcementEnabled: boolean
  announcementText: string
  announcementUrl: string
  ctfPlatformName: string
  ctfPlatformUrl: string
  discordUrl: string
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
  /** What was observed — the briefing a responder walks in with. */
  situation: string
  /** What the investigation has to establish. */
  objective: string
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

/*
 * EkoParty 2026 (BlueSpace Argentina). Deliberately separate from the DEF CON
 * models: this event grades on Beginner/Intermediate/Advanced (not SkillTier's
 * "Expert"), carries a "TBA" state for the capstone questions whose difficulty
 * is still unassigned, and ships paired en/es copy.
 *
 * Content guardrail (unchanged, and it matters more here): player-facing
 * framing only. No answers, accepted flag variants, grader JSON, QA state,
 * repair/review assignments, priority labels, or container credentials.
 */

export type EkopartyTrack =
  | "malware-forensics"
  | "incident-response"
  | "osint"

export type EkopartyDifficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "TBA"

/** Public-facing availability. Internal spreadsheet labels never reach here. */
export type Availability = "available" | "coming-soon" | "unavailable"

export interface EkopartyChallenge {
  /** Spreadsheet challenge ID, e.g. 409. */
  challengeId: number
  /** Scenario identifier, e.g. "INC-000". */
  scenario: string
  title: string
  track: EkopartyTrack
  difficulty: EkopartyDifficulty
  points: number
  descriptionEn: string
  descriptionEs: string
  /** Required environment, e.g. "Docker" or "Browser". */
  environment: string
  availability: Availability
  /** Empty until the challenge passes validation and is imported. */
  skillbitUrl: string
  order: number
}

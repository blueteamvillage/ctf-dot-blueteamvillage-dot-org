import "server-only"

import {
  fallbackEventInfo,
  fallbackFaqItems,
  fallbackScenarios,
  fallbackSetupSections,
  fallbackSiteSettings,
  fallbackSponsors,
  fallbackTracks,
} from "@/lib/content/fallback"
import { getContentfulClient } from "@/lib/contentful/client"
import type {
  ChallengeTrack,
  EventInfo,
  FaqItem,
  Scenario,
  SetupSection,
  SiteSettings,
  Sponsor,
  SponsorLogo,
} from "@/lib/contentful/types"

/*
 * Every query resolves to checked-in fallback content when Contentful is
 * unconfigured or unreachable. Pages are fully static — content changes
 * redeploy via the Contentful publish webhook → Vercel deploy hook.
 */
async function withFallback<T>(
  name: string,
  fetcher: () => Promise<T>,
  fallback: T
): Promise<T> {
  const client = getContentfulClient()
  if (!client) return fallback
  try {
    return await fetcher()
  } catch (error) {
    console.warn(`[contentful] ${name} failed, using fallback:`, error)
    return fallback
  }
}

type Fields = Record<string, unknown>

async function fetchEntries(contentType: string): Promise<Fields[]> {
  const client = getContentfulClient()
  if (!client) return []
  const entries = await client.getEntries({
    content_type: contentType,
    // "order" is our explicit ordering field on list-like models
    include: 1,
    limit: 100,
  })
  return entries.items.map((item) => item.fields as Fields)
}

async function fetchSingleton(contentType: string): Promise<Fields | null> {
  const items = await fetchEntries(contentType)
  return items[0] ?? null
}

const str = (fields: Fields, key: string, fallback: string): string =>
  typeof fields[key] === "string" ? (fields[key] as string) : fallback

const bool = (fields: Fields, key: string, fallback: boolean): boolean =>
  typeof fields[key] === "boolean" ? (fields[key] as boolean) : fallback

const num = (fields: Fields, key: string, fallback: number): number =>
  typeof fields[key] === "number" ? (fields[key] as number) : fallback

const byOrder = <T extends { order: number }>(items: T[]): T[] =>
  [...items].sort((a, b) => a.order - b.order)

/** Shape of an Asset link after the client's include-based link resolution. */
type ResolvedAsset = {
  fields?: {
    title?: unknown
    file?: {
      url?: unknown
      details?: { image?: { width?: unknown; height?: unknown } }
    }
  }
}

const asset = (fields: Fields, key: string): SponsorLogo | null => {
  const file = (fields[key] as ResolvedAsset | undefined)?.fields?.file
  const image = file?.details?.image
  if (
    typeof file?.url !== "string" ||
    typeof image?.width !== "number" ||
    typeof image?.height !== "number"
  ) {
    return null
  }
  const title = (fields[key] as ResolvedAsset).fields?.title
  return {
    // Delivery API returns protocol-relative asset URLs
    url: file.url.startsWith("//") ? `https:${file.url}` : file.url,
    alt: typeof title === "string" ? title : "",
    width: image.width,
    height: image.height,
  }
}

export function getSiteSettings(): Promise<SiteSettings> {
  return withFallback(
    "siteSettings",
    async () => {
      const fields = await fetchSingleton("siteSettings")
      if (!fields) return fallbackSiteSettings
      const fb = fallbackSiteSettings
      return {
        announcementEnabled: bool(fields, "announcementEnabled", fb.announcementEnabled),
        announcementText: str(fields, "announcementText", fb.announcementText),
        announcementUrl: str(fields, "announcementUrl", fb.announcementUrl),
        ctfPlatformName: str(fields, "ctfPlatformName", fb.ctfPlatformName),
        ctfPlatformUrl: str(fields, "ctfPlatformUrl", fb.ctfPlatformUrl),
        discordUrl: str(fields, "discordUrl", fb.discordUrl),
      }
    },
    fallbackSiteSettings
  )
}

export function getEventInfo(): Promise<EventInfo> {
  return withFallback(
    "eventInfo",
    async () => {
      const fields = await fetchSingleton("eventInfo")
      if (!fields) return fallbackEventInfo
      const fb = fallbackEventInfo
      const status = str(fields, "status", fb.status)
      return {
        name: str(fields, "name", fb.name),
        dates: str(fields, "dates", fb.dates),
        startsAt: str(fields, "startsAt", fb.startsAt),
        venue: str(fields, "venue", fb.venue),
        status: (["upcoming", "live", "closed"].includes(status)
          ? status
          : fb.status) as EventInfo["status"],
        badgeRequired: bool(fields, "badgeRequired", fb.badgeRequired),
        tagline: str(fields, "tagline", fb.tagline),
      }
    },
    fallbackEventInfo
  )
}

export function getTracks(): Promise<ChallengeTrack[]> {
  return withFallback(
    "challengeTrack",
    async () => {
      const items = await fetchEntries("challengeTrack")
      if (items.length === 0) return fallbackTracks
      return byOrder(
        items.map((fields, i) => ({
          title: str(fields, "title", ""),
          slug: str(fields, "slug", ""),
          summary: str(fields, "summary", ""),
          body: str(fields, "body", ""),
          skillTiers: (Array.isArray(fields.skillTiers)
            ? fields.skillTiers
            : []) as ChallengeTrack["skillTiers"],
          icon: (["container", "cloud", "campaign"].includes(
            fields.icon as string
          )
            ? fields.icon
            : "container") as ChallengeTrack["icon"],
          order: num(fields, "order", i + 1),
        }))
      )
    },
    fallbackTracks
  )
}

export function getScenarios(): Promise<Scenario[]> {
  return withFallback(
    "scenario",
    async () => {
      const items = await fetchEntries("scenario")
      if (items.length === 0) return fallbackScenarios
      return byOrder(
        items.map((fields, i) => ({
          title: str(fields, "title", ""),
          situation: str(fields, "situation", ""),
          objective: str(fields, "objective", ""),
          order: num(fields, "order", i + 1),
        }))
      )
    },
    fallbackScenarios
  )
}

export function getSetupSections(): Promise<SetupSection[]> {
  return withFallback(
    "setupSection",
    async () => {
      const items = await fetchEntries("setupSection")
      if (items.length === 0) return fallbackSetupSections
      return byOrder(
        items.map((fields, i) => ({
          title: str(fields, "title", ""),
          body: str(fields, "body", ""),
          tier: (fields.tier === "advanced" ? "advanced" : "everyone") as SetupSection["tier"],
          order: num(fields, "order", i + 1),
        }))
      )
    },
    fallbackSetupSections
  )
}

export function getSponsors(): Promise<Sponsor[]> {
  return withFallback(
    "sponsor",
    async () => {
      const items = await fetchEntries("sponsor")
      if (items.length === 0) return fallbackSponsors
      return byOrder(
        items.map((fields, i) => ({
          name: str(fields, "name", ""),
          tier: (["blue", "platinum", "gold", "community"].includes(
            fields.tier as string
          )
            ? fields.tier
            : "community") as Sponsor["tier"],
          url: str(fields, "url", ""),
          blurb: str(fields, "blurb", ""),
          logo: asset(fields, "logo"),
          order: num(fields, "order", i + 1),
          active: bool(fields, "active", true),
        }))
      ).filter((sponsor) => sponsor.active)
    },
    fallbackSponsors
  )
}

export function getFaqItems(): Promise<FaqItem[]> {
  return withFallback(
    "faqItem",
    async () => {
      const items = await fetchEntries("faqItem")
      if (items.length === 0) return fallbackFaqItems
      return byOrder(
        items.map((fields, i) => ({
          question: str(fields, "question", ""),
          answer: str(fields, "answer", ""),
          order: num(fields, "order", i + 1),
        }))
      )
    },
    fallbackFaqItems
  )
}

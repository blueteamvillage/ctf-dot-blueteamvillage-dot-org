import "server-only"

import { createClient, type ContentfulClientApi } from "contentful"

/*
 * Build-time Contentful Delivery API client. Credentials come from env vars
 * only (set in Vercel; see .env.example). When they're absent — local dev,
 * forks, CI — every query falls back to lib/content/fallback.ts, so the
 * site always builds.
 */

let client: ContentfulClientApi<undefined> | null | undefined

export function getContentfulClient(): ContentfulClientApi<undefined> | null {
  if (client !== undefined) return client

  const space = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_DELIVERY_TOKEN

  if (!space || !accessToken) {
    client = null
    return client
  }

  client = createClient({
    space,
    accessToken,
    environment: process.env.CONTENTFUL_ENVIRONMENT ?? "master",
  })
  return client
}

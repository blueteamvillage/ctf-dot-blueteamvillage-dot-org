import type { EventInfo } from "@/lib/contentful/types"

const SITE_URL = "https://ctf.blueteamvillage.org"

/*
 * Schema.org Event JSON-LD for the home page — helps search engines show the
 * CTF as a rich event result. Built defensively from eventInfo: fields that
 * can't be derived are simply omitted rather than guessed.
 */
export function EventSchema({ event }: { event: EventInfo }) {
  // venue string is "<place> · <locality>"; split if present.
  const [venueName, ...rest] = event.venue.split("·").map((s) => s.trim())
  const locality = rest.join(", ")

  const start = new Date(event.startsAt)
  const hasValidStart = !Number.isNaN(start.getTime())
  // eventInfo carries no end date; the CTF runs a three-day con, so derive
  // an end two days after the start when the start parses cleanly.
  const end = hasValidStart ? new Date(start) : null
  if (end) end.setDate(end.getDate() + 2)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Blue Team Village CTF @ DEF CON 34",
    description: event.tagline,
    ...(hasValidStart ? { startDate: start.toISOString() } : {}),
    ...(end ? { endDate: end.toISOString() } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: venueName || event.venue,
      ...(locality
        ? { address: { "@type": "PostalAddress", addressLocality: locality } }
        : {}),
    },
    organizer: {
      "@type": "Organization",
      name: "Blue Team Village",
      url: "https://blueteamvillage.org",
    },
    image: `${SITE_URL}/obsidian.png`,
    url: SITE_URL,
  }

  // Escape `<` so a stray "</script>" in any Contentful-sourced string can't
  // break out of the inline script tag.
  const serialized = JSON.stringify(jsonLd).replace(/</g, "\\u003c")

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { EventDetails } from "@/components/dc34/event-details"
import { EventSchema } from "@/components/dc34/event-schema"
import { GradientDivider } from "@/components/dc34/gradient-divider"
import { Hero } from "@/components/dc34/hero"
import { SponsorGrid } from "@/components/dc34/sponsor-grid"
import { TrackCard } from "@/components/dc34/track-card"
import {
  getEventInfo,
  getSiteSettings,
  getSponsors,
  getTracks,
} from "@/lib/contentful/queries"
import { TRACK_LINKS } from "@/lib/track-links"

export default async function HomePage() {
  const [event, settings, tracks, sponsors] = await Promise.all([
    getEventInfo(),
    getSiteSettings(),
    getTracks(),
    getSponsors(),
  ])

  return (
    <>
      <EventSchema event={event} />

      <Hero event={event} settings={settings} />

      <EventDetails event={event} settings={settings} />

      <section className="mx-auto max-w-6xl px-6 pt-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
              Choose your lane
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">Challenge Tracks</h2>
          </div>
          <Link
            href="/challenges"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-bright transition-colors hover:text-mint"
          >
            All challenge details
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard
              key={track.slug}
              track={track}
              href={TRACK_LINKS[track.slug]?.href}
              linkLabel={TRACK_LINKS[track.slug]?.cardLabel}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-20">
        <GradientDivider className="mb-16" />
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
            Supported by
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">Sponsors</h2>
          {/* <p className="mx-auto mt-3 max-w-xl text-sm text-mist">
            DEF CON 34 sponsors will be announced soon. Interested in
            sponsoring Blue Team Village?{" "}
            <a
              href="https://blueteamvillage.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-bright underline underline-offset-4 hover:text-mint"
            >
              Get in touch
            </a>
            .
          </p> */}
        </div>
        <SponsorGrid sponsors={sponsors} />
      </section>
    </>
  )
}

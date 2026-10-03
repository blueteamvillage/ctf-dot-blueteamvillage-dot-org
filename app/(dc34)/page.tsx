import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { EventDetails } from "@/components/dc34/event-details"
import { EventSchema } from "@/components/dc34/event-schema"
import { GradientDivider } from "@/components/dc34/gradient-divider"
import { Hero } from "@/components/dc34/hero"
import { SponsorGrid } from "@/components/dc34/sponsor-grid"
import { TrackCard } from "@/components/dc34/track-card"
import { Button } from "@/components/ui/button"
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

      {/* Next event. Shown once DEF CON 34 is marked closed so the home page
          points somewhere live rather than at a finished competition. */}
      {event.status === "closed" ? (
        <section className="mx-auto max-w-6xl px-6 pt-20">
          <div className="rounded-lg border border-teal/30 bg-teal/[0.06] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
              Next event
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              BTV CTF @ EkoParty 2026
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-mist">
              <MapPin className="h-4 w-4 text-teal-bright" aria-hidden />
              BlueSpace · Centro de Convenciones Buenos Aires · October 7–9, 2026
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-mist">
              Sixteen challenges adapted from Project Obsidian — malware
              forensics, an incident-response capstone, and a browser-based
              OSINT/GEOSINT track. Scored in SkillBit, in Spanish and English.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/challenges/ekoparty-2026-bluespace">
                  See the EkoParty 2026 lineup
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ) : null}

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

import Link from "next/link"
import { ArrowRight, Container, Cloud, Radar, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Countdown } from "@/components/dc34/countdown"
import { IconChip } from "@/components/dc34/icon-chip"
import { PillBadge } from "@/components/dc34/pill-badge"
import type { EventInfo, SiteSettings } from "@/lib/contentful/types"

const EKOPARTY_HREF = "/challenges/ekoparty-2026-bluespace"

export function Hero({
  event,
  settings,
}: {
  event: EventInfo
  settings: SiteSettings
}) {
  /*
   * `eventInfo.status` has been in the content model since the start but was
   * never read. It's the switch for the post-event state: once DEF CON 34 is
   * marked "closed" the countdown goes away and the CTAs point at the results
   * and at the next event instead of at setup and the scoring platform.
   */
  const isClosed = event.status === "closed"

  return (
    <section className="relative z-20 mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 pt-20 pb-16 text-center md:pt-28">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
        Blue Team Village · Project Obsidian
      </p>

      <div className="space-y-5">
        <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
          BTV CTF <span className="animate-pulse-glow text-teal-bright">@</span>{" "}
          {event.name}
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-mist">
          {isClosed ? (
            <>
              {event.name} has wrapped. Thanks to everyone who pulled a
              container, worked out what the malware did, and proved it — flag
              by flag.
            </>
          ) : (
            <>
              {event.tagline} Pull down a container, work out what the malware
              did, and prove it. Flag by flag!
            </>
          )}
        </p>
      </div>

      <div className="flex items-center justify-center gap-5" aria-hidden>
        <IconChip icon={Container} tone="teal" />
        <IconChip icon={Cloud} tone="mint" />
        <IconChip icon={Radar} tone="gold" />
      </div>

      {isClosed ? (
        <p className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-mist">
          <span className="inline-block h-2 w-2 rounded-full bg-haze" aria-hidden />
          Competition closed · {event.dates}
        </p>
      ) : (
        <Countdown startsAt={event.startsAt} />
      )}

      <div className="flex flex-wrap items-center justify-center gap-3">
        <PillBadge>{event.dates} · Las Vegas</PillBadge>
        {isClosed ? (
          <PillBadge>
            Next up: <span className="text-teal-bright">EkoParty 2026</span>
          </PillBadge>
        ) : (
          <PillBadge>
            Platform:{" "}
            <span className="text-teal-bright">{settings.ctfPlatformName}</span>
          </PillBadge>
        )}
        <PillBadge>Theme: Agency</PillBadge>
      </div>

      {isClosed ? (
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={EKOPARTY_HREF}>
              BTV CTF @ EkoParty 2026
              <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/past-winners/defcon-34">
              <Trophy aria-hidden />
              View Results
            </Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/setup">
              Get set up before the con
              <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href={settings.ctfPlatformUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open {settings.ctfPlatformName}
            </a>
          </Button>
        </div>
      )}

      <p className="text-sm text-haze">
        {isClosed
          ? "Challenge write-ups and final results are being finalised and will be posted here."
          : "This site is updated in the run-up to the con — check back for the latest setup steps, challenge details, and event info."}
      </p>
    </section>
  )
}

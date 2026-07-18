import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Markdown } from "@/components/dc34/markdown"
import { TrackCard } from "@/components/dc34/track-card"
import { getTracks } from "@/lib/contentful/queries"

export const metadata: Metadata = {
  title: "Challenges | BTV CTF @ DEF CON 34",
  description:
    "Container and malware forensics, cloud attack forensics, and the ten-scenario Converged Frontier campaign — tiered Beginner to Expert.",
}

export default async function ChallengesPage() {
  const tracks = await getTracks()

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
        Project Obsidian
      </p>
      <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">Challenges</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-mist">
        Pull down a container. Work out what the malware did. Prove it with
        evidence. Every challenge is tiered — Beginner, Intermediate, or
        Expert — and everything runs locally, so an internet outage can&apos;t
        stop your investigation.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tracks.map((track) => (
          <TrackCard
            key={track.slug}
            track={track}
            href={track.slug === "converged-frontier" ? "/challenges/converged-frontier" : undefined}
          />
        ))}
      </div>

      <div className="mt-16 space-y-12">
        {tracks.map((track) => (
          <section key={track.slug} id={track.slug}>
            <h2 className="text-2xl font-black text-white">{track.title}</h2>
            <div className="mt-4">
              <Markdown>{track.body}</Markdown>
            </div>
            {track.slug === "converged-frontier" && (
              <Link
                href="/challenges/converged-frontier"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-teal-bright transition-colors hover:text-mint"
              >
                Browse the ten scenarios
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

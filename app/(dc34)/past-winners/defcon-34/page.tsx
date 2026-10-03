import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Hourglass, Trophy } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "DEF CON 34 Results | Blue Team Village CTF",
  description:
    "Final standings and statistics for the Blue Team Village CTF at DEF CON 34 are being finalized and will be published here.",
}

/*
 * Placeholder. The competition is over but the winners and participation
 * numbers aren't confirmed yet. Structure mirrors the defcon-33 page so
 * filling this in later is a content edit, not a rebuild: replace the three
 * pending slots with <WinnerCard> and swap the em dashes for real figures.
 */

const PLACES = [
  { place: 1, emoji: "🥇", label: "1st Place", badge: "Champions" },
  { place: 2, emoji: "🥈", label: "2nd Place", badge: "Runner-up" },
  { place: 3, emoji: "🥉", label: "3rd Place", badge: "Third" },
]

const STATS = [
  { label: "Registered users", hint: "Pending final count" },
  { label: "Teams competed", hint: "Pending final count" },
  { label: "Flags captured", hint: "Pending final count" },
]

export default function Defcon34Page() {
  return (
    <div className="min-h-screen bg-linear-to-br from-navy via-navy-deep to-navy">
      {/* Hero */}
      <div className="relative pt-16 pb-16 px-4">
        <div className="absolute inset-0 bg-linear-to-r from-teal/10 to-gold/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <Link
            href="/past-winners"
            className="inline-flex items-center text-mint hover:text-mint transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Past Winners
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-teal-bright via-mint to-gold bg-clip-text text-transparent">
            DEF CON 34
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-mint mb-6">
            Project Obsidian CTF
          </h2>
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-6">
            <Hourglass className="w-3 h-3 mr-1" />
            Results being finalized
          </Badge>
          <p className="text-xl text-mist max-w-3xl mx-auto">
            The competition has wrapped. Final standings and participation
            numbers are still being verified and will be published here as soon
            as they&apos;re confirmed.
          </p>
        </div>
      </div>

      {/* Pending podium */}
      <div className="max-w-6xl mx-auto px-4 pb-16 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PLACES.map((slot) => (
            <Card
              key={slot.place}
              className="bg-navy-card border-white/10 border-dashed"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-mist">
                    <span aria-hidden>{slot.emoji}</span> {slot.label}
                  </CardTitle>
                  <Badge className="bg-white/[0.06] text-haze border-white/10">
                    {slot.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-haze">—</div>
                <p className="text-haze text-sm mt-2">To be announced</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pending stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {STATS.map((stat) => (
            <Card key={stat.label} className="bg-navy-card border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-teal-bright flex items-center justify-center text-base">
                  <Trophy className="w-4 h-4 mr-2" />
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-haze">—</div>
                <p className="text-haze text-sm">{stat.hint}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-lg border border-teal/30 bg-teal/[0.06] p-6 text-center">
          <p className="text-mist">
            While you wait — the next Blue Team Village CTF runs at BlueSpace,
            EkoParty Buenos Aires, October 7–9, 2026.
          </p>
          <Link
            href="/challenges/ekoparty-2026-bluespace"
            className="mt-4 inline-flex items-center gap-1.5 font-bold text-teal-bright transition-colors hover:text-mint"
          >
            BTV CTF @ EkoParty 2026
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  )
}

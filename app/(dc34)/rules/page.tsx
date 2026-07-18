import type { Metadata } from "next"
import Link from "next/link"
import { Scale, ShieldCheck, Users, Flag, Ban, Trophy } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSiteSettings } from "@/lib/contentful/queries"

export const metadata: Metadata = {
  title: "Rules | BTV CTF @ DEF CON 34",
  description: "Competition rules for the Blue Team Village CTF at DEF CON 34.",
}

export default async function RulesPage() {
  const settings = await getSiteSettings()

  const sections = [
    {
      icon: Flag,
      title: "The competition",
      items: [
        `All flags are submitted on ${settings.ctfPlatformName} — scores there are authoritative.`,
        "Challenges run from the opening of the village on day one until the announced closing time; exact hours are posted at the village and on the platform.",
        "Flags are found by analyzing the provided containers and evidence — titles, one-liners, and tier labels tell you where to start, not how to finish.",
      ],
    },
    {
      icon: Users,
      title: "Teams",
      items: [
        "Play solo or in a team; register your team on the platform before submitting flags together.",
        "One account per person. Don't share accounts or submit flags on someone else's behalf.",
        "Collaboration inside a team is the point. Sharing flags or solutions across teams is not.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Fair play",
      items: [
        "Attack the challenges, never the infrastructure — no scanning, flooding, or exploiting the CTF platform, the village network, or other participants' machines.",
        "No brute-forcing the flag submission endpoint.",
        "Automated tooling against your own local analysis environment is fine — that's what it's for.",
      ],
    },
    {
      icon: Ban,
      title: "Malware handling",
      items: [
        "Live-malware images stay inside the isolated sandbox described in the setup guide. Never extract samples outside it.",
        "Never re-host or push the challenge images to public registries.",
        "If you find something that looks broken or unsafe, tell the organizers — don't 'test' it.",
      ],
    },
    {
      icon: Scale,
      title: "Conduct",
      items: [
        "The DEF CON Code of Conduct and the Blue Team Village Code of Conduct apply everywhere — in the village, on Discord, and on the platform.",
        "Organizers may disqualify any participant or team for violating these rules. Their decisions are final.",
      ],
    },
    {
      icon: Trophy,
      title: "Scoring & prizes",
      items: [
        "Tiered challenges score by difficulty; some campaign components include judged written reports.",
        "Ties break by earliest final submission time.",
        "Winners are announced at the village at the close of the CTF.",
      ],
    },
  ]

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
        Play fair
      </p>
      <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">Rules</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-mist">
        Short version: investigate hard, be kind, don&apos;t attack anything
        that isn&apos;t a challenge. See also the{" "}
        <Link href="/code-of-conduct" className="text-teal-bright underline underline-offset-4 hover:text-mint">
          Code of Conduct
        </Link>
        .
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2.5 text-lg">
                <section.icon className="h-5 w-5 text-teal-bright" aria-hidden />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-mist">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

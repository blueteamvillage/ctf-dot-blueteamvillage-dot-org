import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { PillBadge } from "@/components/dc34/pill-badge"
import { ScenarioList } from "@/components/dc34/scenario-list"
import { getScenarios } from "@/lib/contentful/queries"

export const metadata: Metadata = {
  title: "Converged Frontier | BTV CTF @ DEF CON 34",
  description:
    "A ten-scenario cloud-to-OT incident-reconstruction campaign. Correlate evidence across domains and build a defensible timeline.",
}

export default async function ConvergedFrontierPage() {
  const scenarios = await getScenarios()

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/challenges"
        className="inline-flex items-center gap-1.5 text-sm text-mist transition-colors hover:text-teal-bright"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All challenges
      </Link>

      <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-mint">
        Campaign
      </p>
      <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">
        Converged Frontier
      </h1>
      <p className="mt-4 leading-relaxed text-mist">
        Modern incidents don&apos;t stay in one domain. Ten self-contained
        scenarios span cloud control planes, identity, CI/CD, OT gateways,
        network telemetry, endpoints, vendor access, backups, and
        virtualization — each asking the same operational question:{" "}
        <strong className="text-white">
          what was the primary cause, and what was downstream effect?
        </strong>
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <PillBadge>10 scenarios</PillBadge>
        <PillBadge>Beginner &amp; Pro tracks</PillBadge>
        <PillBadge>Offline · runs in local Kubernetes</PillBadge>
      </div>

      <div className="mt-10">
        <ScenarioList scenarios={scenarios} />
      </div>

      <p className="mt-10 rounded-lg border border-white/[0.06] bg-navy-card p-5 text-sm leading-relaxed text-mist">
        Every claim must cite a source artifact. Absence of evidence can
        itself be a finding. Protocol compliance is not behavioral innocence,
        and cryptographic validity is not integrity. Bring your skepticism —
        then head to the <Link href="/setup" className="text-teal-bright underline underline-offset-4 hover:text-mint">setup guide</Link>.
      </p>
    </div>
  )
}

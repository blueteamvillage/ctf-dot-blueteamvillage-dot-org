import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GradientDivider } from "@/components/dc34/gradient-divider"
import { getSiteSettings } from "@/lib/contentful/queries"

export const metadata: Metadata = {
  title: "About | BTV CTF @ DEF CON 34",
  description:
    "About Blue Team Village and Project Obsidian, the defender-focused CTF at DEF CON 34.",
}

export default async function AboutPage() {
  const settings = await getSiteSettings()

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
        Blue Team Village
      </p>
      <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">About</h1>

      <div className="mt-8 space-y-6 leading-relaxed text-fog">
        <p>
          <strong className="text-white">Blue Team Village</strong> is the DEF
          CON village for defenders — the analysts, forensic investigators,
          and security-operations people who figure out what actually
          happened. Everything we build is about learning defensive security
          by doing it.
        </p>
        <p>
          <strong className="text-white">Project Obsidian</strong> is our CTF
          track. For DEF CON 34 it takes a forensic outlook on malware in
          containerized environments: contestants pull down a container,
          analyze what the malware performed, and submit flags that prove the
          analysis. A second challenge set reconstructs attack vectors against
          cloud infrastructure, and the ten-scenario{" "}
          <Link
            href="/challenges/converged-frontier"
            className="text-teal-bright underline underline-offset-4 hover:text-mint"
          >
            Converged Frontier
          </Link>{" "}
          campaign stretches investigations across cloud, identity, OT, and
          everything in between.
        </p>
        <p>
          Challenges are hosted on {settings.ctfPlatformName} — our first year
          on the platform after several on CTFd — and the analysis environment
          is a sandboxed Kubernetes stack you run locally. Beginner,
          intermediate, and expert tiers mean you don&apos;t need to be a DFIR
          veteran to play. You just need curiosity.
        </p>
      </div>

      <GradientDivider className="my-10" />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/challenges">
            Explore the challenges
            <ArrowRight aria-hidden />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <a href="https://blueteamvillage.org" target="_blank" rel="noopener noreferrer">
            blueteamvillage.org
          </a>
        </Button>
      </div>

      <p className="mt-10 text-sm text-haze">
        Looking for last year? The DEF CON 33 site is preserved in the{" "}
        <Link href="/archive/dc33" className="text-teal-bright underline underline-offset-4 hover:text-mint">
          archive
        </Link>
        .
      </p>
    </div>
  )
}

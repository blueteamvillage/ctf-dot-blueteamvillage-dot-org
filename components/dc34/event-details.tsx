import { Shield, Skull, Zap, Smartphone, ListChecks, Server, Flag } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientDivider } from "@/components/dc34/gradient-divider"
import type { EventInfo, SiteSettings } from "@/lib/contentful/types"

/*
 * Home-page briefing grid. Content structure mirrors the event brief:
 * forensic focus with the two container options, challenge tiers, technical
 * stack, and operational requirements.
 */

function TierDots({ filled }: { filled: 1 | 2 | 3 }) {
  return (
    <span className="inline-flex gap-1.5" aria-label={`difficulty ${filled} of 3`}>
      {[1, 2, 3].map((dot) => (
        <span
          key={dot}
          className={`h-2.5 w-2.5 rounded-full ${dot <= filled ? "bg-teal-bright" : "bg-white/10"}`}
        />
      ))}
    </span>
  )
}

export function EventDetails({
  event,
  settings,
}: {
  event: EventInfo
  settings: SiteSettings
}) {
  return (
    <section className="relative z-20 mx-auto max-w-6xl space-y-6 px-6">
      {/* Forensic focus */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2.5 text-xl">
            <Shield className="h-5 w-5 text-teal-bright" aria-hidden />
            Forensic Investigation Focus
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="leading-relaxed text-mist">
            The mission centers on identifying{" "}
            <strong className="text-white">malware activity</strong> within
            container images and cloud infrastructure attack vectors.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/[0.06] bg-navy-deep p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
                Option A: Safe
              </p>
              <p className="mt-2 font-bold text-white">Forensic Snapshot</p>
              <p className="mt-1 text-sm leading-relaxed text-mist">
                Safe, post-analysis images. Evidence baked in read-only —
                nothing detonates.
              </p>
            </div>
            <div className="rounded-lg border border-magenta/30 bg-magenta/[0.06] p-4">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-magenta">
                <Skull className="h-3.5 w-3.5" aria-hidden />
                Option B: Advanced
              </p>
              <p className="mt-2 font-bold text-white">Live Malware</p>
              <p className="mt-1 text-sm leading-relaxed text-mist">
                Real samples detonating in an egress-denied Kubernetes
                sandbox. Read the warnings first.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tiers + stack + ops requirements */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Challenge Tiers</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="text-fog">Beginner</span>
                <TierDots filled={1} />
              </li>
              <li className="flex items-center justify-between">
                <span className="text-fog">Intermediate</span>
                <TierDots filled={2} />
              </li>
              <li className="flex items-center justify-between">
                <span className="text-fog">Expert</span>
                <TierDots filled={3} />
              </li>
            </ul>
            <GradientDivider className="my-5" />
            <p className="text-sm italic leading-relaxed text-haze">
              &ldquo;Differentiated levels to ensure broad accessibility for
              all contestants.&rdquo;
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Technical Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-teal/30 bg-teal/10 text-teal-bright">
                  <Flag className="h-4.5 w-4.5" aria-hidden />
                </span>
                <div>
                  <p className="font-bold text-white">{settings.ctfPlatformName}</p>
                  <p className="text-sm text-mist">Flag &amp; challenge hosting</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-mint/30 bg-mint/10 text-mint">
                  <Server className="h-4.5 w-4.5" aria-hidden />
                </span>
                <div>
                  <p className="font-bold text-white">Kubernetes Stack</p>
                  <p className="text-sm text-mist">Sandboxed user environment</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Operational Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2.5 text-mist">
                <Zap className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                Resilient to unstable DEF CON internet
              </li>
              <li className="flex items-center gap-2.5 text-mist">
                <Smartphone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                Lightweight mobile-first design
              </li>
              <li className="flex items-center gap-2.5 text-mist">
                <ListChecks className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                Step-by-step setup guides
              </li>
            </ul>
            <GradientDivider className="my-5" />
            <p className="font-mono text-xs text-haze">
              {event.dates} · {event.venue}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

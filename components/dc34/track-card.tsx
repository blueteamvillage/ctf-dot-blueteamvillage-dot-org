import Link from "next/link"
import { Container, Cloud, Radar, ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconChip } from "@/components/dc34/icon-chip"
import type { ChallengeTrack } from "@/lib/contentful/types"

const icons = {
  container: Container,
  cloud: Cloud,
  campaign: Radar,
} as const

const tones = { container: "teal", cloud: "mint", campaign: "gold" } as const

export function TrackCard({
  track,
  href,
  linkLabel = "View scenarios",
}: {
  track: ChallengeTrack
  href?: string
  linkLabel?: string
}) {
  return (
    <Card className="gap-4">
      <CardHeader>
        <div className="flex items-center gap-3">
          <IconChip icon={icons[track.icon]} tone={tones[track.icon]} />
          <CardTitle className="text-lg leading-tight">{track.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="flex-1 text-sm leading-relaxed text-mist">{track.summary}</p>
        <div className="flex flex-wrap gap-2">
          {track.skillTiers.map((tier) => (
            <Badge key={tier} variant="outline">
              {tier}
            </Badge>
          ))}
        </div>
        {href && (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-bright transition-colors hover:text-mint"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </CardContent>
    </Card>
  )
}

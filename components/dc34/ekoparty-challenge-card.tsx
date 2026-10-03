import { ExternalLink, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { EkopartyCopy, Lang } from "@/lib/content/ekoparty-copy"
import type {
  Availability,
  EkopartyChallenge,
  EkopartyDifficulty,
} from "@/lib/contentful/types"

/*
 * Class strings are written out in full and looked up by key. Do NOT build
 * them by interpolation (`bg-${tone}-500`) — Tailwind can't see those at
 * build time, which is exactly why most of the DC33 archive's colour styling
 * silently stopped rendering.
 */
const DIFFICULTY_CLASS: Record<EkopartyDifficulty, string> = {
  Beginner: "border-mint/40 bg-mint/10 text-mint",
  Intermediate: "border-teal/40 bg-teal/15 text-teal-bright",
  Advanced: "border-gold/40 bg-gold/10 text-gold",
  TBA: "border-white/10 bg-white/[0.03] text-haze",
}

const AVAILABILITY_CLASS: Record<Availability, string> = {
  available: "border-mint/40 bg-mint/10 text-mint",
  "coming-soon": "border-gold/40 bg-gold/10 text-gold",
  unavailable: "border-magenta/40 bg-magenta/15 text-magenta",
}

export function EkopartyChallengeCard({
  challenge,
  lang,
  copy,
}: {
  challenge: EkopartyChallenge
  lang: Lang
  copy: EkopartyCopy
}) {
  const t = copy.lineup
  const description =
    lang === "es" ? challenge.descriptionEs : challenge.descriptionEn

  // A challenge is only launchable once it is marked available AND has a URL.
  // Both conditions, so a half-finished Contentful edit can't open a door.
  const launchable =
    challenge.availability === "available" && challenge.skillbitUrl !== ""

  return (
    <article className="flex flex-col rounded-lg border border-white/[0.06] bg-navy-card p-5 transition-colors hover:border-teal/30">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-xs text-haze">
            {challenge.scenario} · #{challenge.challengeId}
          </p>
          <h3 className="mt-1 text-lg font-bold leading-snug text-white">
            {challenge.title}
          </h3>
        </div>
        <span className="shrink-0 rounded-md border border-teal/40 bg-teal/15 px-2 py-0.5 font-mono text-sm font-bold text-teal-bright">
          {challenge.points}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <span
          className={`inline-flex w-fit items-center rounded-md border px-2 py-0.5 text-xs font-bold ${DIFFICULTY_CLASS[challenge.difficulty]}`}
        >
          {t.difficulty[challenge.difficulty]}
        </span>
        <span
          className={`inline-flex w-fit items-center rounded-md border px-2 py-0.5 text-xs font-bold ${AVAILABILITY_CLASS[challenge.availability]}`}
        >
          {t.availability[challenge.availability]}
        </span>
        <span className="inline-flex w-fit items-center rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-xs text-mist">
          {challenge.environment}
        </span>
      </div>

      <p className="mt-4 grow text-sm leading-relaxed text-mist">
        {description}
      </p>

      <div className="mt-5">
        {launchable ? (
          <Button asChild size="sm" className="w-full">
            <a
              href={challenge.skillbitUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink aria-hidden />
              {t.card.launch}
            </a>
          </Button>
        ) : (
          <Button size="sm" variant="outline" className="w-full" disabled>
            <Lock aria-hidden />
            {t.card.notYet}
          </Button>
        )}
      </div>
    </article>
  )
}

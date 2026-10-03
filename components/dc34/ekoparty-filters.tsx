import type { EkopartyCopy } from "@/lib/content/ekoparty-copy"
import type { EkopartyChallenge } from "@/lib/contentful/types"

export type EkopartyFilter =
  | "all"
  | "malware-forensics"
  | "incident-response"
  | "osint"
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "available"

export function matchesFilter(
  challenge: EkopartyChallenge,
  filter: EkopartyFilter
): boolean {
  switch (filter) {
    case "all":
      return true
    case "available":
      return challenge.availability === "available"
    case "malware-forensics":
    case "incident-response":
    case "osint":
      return challenge.track === filter
    default:
      return challenge.difficulty === filter
  }
}

/** Ordered as the event spec lists them: tracks, then difficulty, then state. */
function options(copy: EkopartyCopy): { id: EkopartyFilter; label: string }[] {
  const f = copy.lineup.filters
  return [
    { id: "all", label: f.all },
    { id: "malware-forensics", label: f.malware },
    { id: "incident-response", label: f.ir },
    { id: "osint", label: f.osint },
    { id: "Beginner", label: f.beginner },
    { id: "Intermediate", label: f.intermediate },
    { id: "Advanced", label: f.advanced },
    { id: "available", label: f.available },
  ]
}

export function EkopartyFilters({
  active,
  onChange,
  counts,
  copy,
}: {
  active: EkopartyFilter
  onChange: (filter: EkopartyFilter) => void
  counts: Record<EkopartyFilter, number>
  copy: EkopartyCopy
}) {
  return (
    <div
      role="group"
      aria-label={copy.lineup.heading}
      className="flex flex-wrap gap-2"
    >
      {options(copy).map(({ id, label }) => {
        const isActive = id === active
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            aria-pressed={isActive}
            className={
              isActive
                ? "inline-flex items-center gap-1.5 rounded-md border border-teal/50 bg-teal/20 px-3 py-1.5 text-sm font-bold text-teal-bright transition-colors"
                : "inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-mist transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            }
          >
            {label}
            <span className="font-mono text-xs text-haze">{counts[id]}</span>
          </button>
        )
      })}
    </div>
  )
}

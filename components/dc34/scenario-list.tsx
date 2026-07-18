import type { Scenario } from "@/lib/contentful/types"

export function ScenarioList({ scenarios }: { scenarios: Scenario[] }) {
  return (
    <ol className="space-y-3">
      {scenarios.map((scenario) => (
        <li
          key={scenario.order}
          className="rounded-lg border border-white/[0.06] bg-navy-card p-5"
        >
          <h3 className="font-mono font-bold text-teal-bright">{scenario.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-mist">{scenario.oneLiner}</p>
        </li>
      ))}
    </ol>
  )
}

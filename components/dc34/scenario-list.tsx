import type { Scenario } from "@/lib/contentful/types"

/*
 * Two-part brief per scenario: what was observed, then what has to be
 * established. The objective is set off rather than run into the situation
 * text so the actual task stays scannable across ten entries.
 */
export function ScenarioList({ scenarios }: { scenarios: Scenario[] }) {
  return (
    <ol className="space-y-4">
      {scenarios.map((scenario) => (
        <li
          key={scenario.order}
          className="rounded-lg border border-white/[0.06] bg-navy-card p-5"
        >
          <h3 className="font-mono font-bold text-teal-bright">{scenario.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            {scenario.situation}
          </p>
          <div className="mt-4 border-l-2 border-mint/30 pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              Investigators must
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-fog">
              {scenario.objective}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

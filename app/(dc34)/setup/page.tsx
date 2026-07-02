import type { Metadata } from "next"
import { AlertTriangle, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Markdown } from "@/components/dc34/markdown"
import { TerminalPrompt } from "@/components/dc34/terminal-prompt"
import { getSetupSections, getSiteSettings } from "@/lib/contentful/queries"

export const metadata: Metadata = {
  title: "Setup | BTV CTF @ DEF CON 34",
  description:
    "Step-by-step environment setup: install the tooling, download and load the challenge containers, and deploy the scenario pods — before the con.",
}

export default async function SetupPage() {
  const [sections, settings] = await Promise.all([
    getSetupSections(),
    getSiteSettings(),
  ])

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
        Environment
      </p>
      <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">Setup</h1>
      <p className="mt-4 leading-relaxed text-mist">
        Everything runs locally in Kubernetes. Do the downloads at home —
        DEF CON internet goes down, your investigation shouldn&apos;t.
      </p>

      <div className="mt-6">
        <TerminalPrompt command="minikube start -p dc34" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {settings.downloadsUrl && (
          <Button asChild>
            <a href={settings.downloadsUrl} target="_blank" rel="noopener noreferrer">
              <Download aria-hidden />
              Container downloads
            </a>
          </Button>
        )}
        <Button asChild variant="outline">
          <a href={settings.ctfPlatformUrl} target="_blank" rel="noopener noreferrer">
            Open {settings.ctfPlatformName}
          </a>
        </Button>
      </div>

      <ol className="mt-12 space-y-10">
        {sections.map((section, index) => (
          <li key={section.order} className="relative">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm font-bold text-teal-bright" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl font-black text-white">{section.title}</h2>
            </div>

            {section.tier === "advanced" && (
              <div
                className="mt-4 flex gap-3 rounded-lg border border-magenta/40 bg-magenta/[0.08] p-4"
                role="note"
              >
                <AlertTriangle className="h-5 w-5 shrink-0 text-magenta" aria-hidden />
                <p className="text-sm leading-relaxed text-fog">
                  <strong className="text-magenta">Advanced path — live malware.</strong>{" "}
                  Only proceed if you understand what you&apos;re running. The
                  forensic-snapshot track covers the same investigative skills
                  with zero risk.
                </p>
              </div>
            )}

            <div className="mt-4 border-l border-white/[0.06] pl-8">
              <Markdown>{section.body}</Markdown>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

import type { Metadata } from "next"
import { AlertTriangle, Github, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Markdown } from "@/components/dc34/markdown"
import { TerminalPrompt } from "@/components/dc34/terminal-prompt"
import { getSetupSections, getSiteSettings } from "@/lib/contentful/queries"

export const metadata: Metadata = {
  title: "Setup | BTV CTF @ DEF CON 34",
  description:
    "Step-by-step environment setup: build the local Kubernetes sandbox before the con. Challenge images stay private on GitHub until the CTF opens.",
}

const sandboxRepoUrl =
  "https://github.com/blueteamvillage/btv-k8s-sandbox-infrastructure"

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
        Everything runs locally in Kubernetes — macOS, Windows, or Linux.
        Build the sandbox at home — DEF CON internet goes down, your
        investigation shouldn&apos;t.
      </p>

      <div className="mt-6">
        <TerminalPrompt command="make tools && make up" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a href={sandboxRepoUrl} target="_blank" rel="noopener noreferrer">
            <Github aria-hidden />
            Sandbox repo
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={settings.ctfPlatformUrl} target="_blank" rel="noopener noreferrer">
            Open {settings.ctfPlatformName}
          </a>
        </Button>
      </div>

      <div
        className="mt-8 flex gap-3 rounded-lg border border-gold/40 bg-gold/[0.08] p-4"
        role="note"
      >
        <Lock className="h-5 w-5 shrink-0 text-gold" aria-hidden />
        <p className="text-sm leading-relaxed text-fog">
          <strong className="text-gold">
            Challenge images are private until the con.
          </strong>{" "}
          The container packages at <code>ghcr.io/blueteamvillage</code> stay
          private until the CTF opens at DEF CON 34 — you can&apos;t pull them
          ahead of time, and that&apos;s by design. Build the sandbox now;
          you&apos;ll get pull credentials at the village.
        </p>
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

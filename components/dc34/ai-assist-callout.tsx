import Link from "next/link"
import { BookOpen, Bot } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/dc34/code-block"
import { cn } from "@/lib/utils"

export const SECURE_AGENT_PLAYBOOK_URL =
  "https://github.com/OWASP/secure-agent-playbook"

const INSTALL_COMMANDS = `/plugin marketplace add OWASP/secure-agent-playbook
/plugin install code-security-skills@agent-security-playbook
/plugin install ai-security-skills@agent-security-playbook
`

/*
 * Points contestants at the OWASP Secure Agent Playbook. Bringing an AI agent
 * to a forensics CTF is allowed (see /rules — automated tooling against your
 * own analysis environment is fine); the failure mode is an agent that guesses
 * confidently instead of investigating. The playbook is the fix: OWASP-grounded
 * procedures with checklists and evidence-shaped output.
 *
 * Used on /challenges and /setup.
 */
export function AiAssistCallout({ className }: { className?: string }) {
  return (
    <aside
      aria-labelledby="ai-assist-heading"
      className={cn(
        "rounded-lg border border-mint/30 bg-mint/[0.06] p-5",
        className
      )}
    >
      <div className="flex gap-3">
        <Bot className="mt-0.5 h-5 w-5 shrink-0 text-mint" aria-hidden />
        <div className="min-w-0">
          <h2 id="ai-assist-heading" className="text-base font-bold text-white">
            Bringing an AI agent? Give it a methodology.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-fog">
            An unguided model will happily invent a plausible-sounding root
            cause. The{" "}
            <a
              href={SECURE_AGENT_PLAYBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-mint underline underline-offset-4 transition-colors hover:text-teal-bright"
            >
              OWASP Secure Agent Playbook
            </a>{" "}
            is an open-source set of structured, OWASP-grounded procedures that
            make an agent work a checklist and show its evidence instead — which
            is exactly what a flag needs to survive scrutiny.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-fog">
            The skills that map onto these tracks:{" "}
            <code className="rounded-sm border border-white/[0.06] bg-navy-deep px-1.5 py-0.5 font-mono text-xs">
              secrets-scan
            </code>{" "}
            for credentials left behind in image layers,{" "}
            <code className="rounded-sm border border-white/[0.06] bg-navy-deep px-1.5 py-0.5 font-mono text-xs">
              sca-audit
            </code>{" "}
            for what is actually inside a container,{" "}
            <code className="rounded-sm border border-white/[0.06] bg-navy-deep px-1.5 py-0.5 font-mono text-xs">
              code-review-security
            </code>{" "}
            for the dropped script you just carved out, and{" "}
            <code className="rounded-sm border border-white/[0.06] bg-navy-deep px-1.5 py-0.5 font-mono text-xs">
              iac-security-review
            </code>{" "}
            for the cloud and Kubernetes manifests in the attack-forensics
            tracks.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-fog">
            Install it into Claude Code before you travel — it is three
            commands, and the plugin marketplace is not something you want to be
            fetching over con Wi-Fi:
          </p>

          <div className="mt-3">
            <CodeBlock code={INSTALL_COMMANDS}>
              {/* pr-14 keeps long lines clear of the copy button. */}
              <pre className="overflow-x-auto rounded-lg border border-white/[0.06] bg-navy-deep p-4 pr-14 font-mono text-xs leading-relaxed text-fog">
                {INSTALL_COMMANDS}
              </pre>
            </CodeBlock>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-fog">
            Point it at evidence you have already pulled out of the sandbox, not
            at the CTF platform — the{" "}
            <Link
              href="/rules"
              className="font-bold text-mint underline underline-offset-4 transition-colors hover:text-teal-bright"
            >
              rules
            </Link>{" "}
            allow automated tooling against your own analysis environment and
            nothing else. The agent helps you build the argument; you still have
            to be right.
          </p>

          <div className="mt-4">
            <Button asChild size="sm" variant="outline">
              <a
                href={SECURE_AGENT_PLAYBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen aria-hidden />
                Open the playbook
              </a>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}

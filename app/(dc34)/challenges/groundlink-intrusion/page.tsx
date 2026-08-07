import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Cloud, ExternalLink } from "lucide-react"

import { CodeBlock } from "@/components/dc34/code-block"
import { PillBadge } from "@/components/dc34/pill-badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "GroundLink Intrusion | BTV CTF @ DEF CON 34",
  description:
    "An AWS cloud-forensics investigation over a single sanitized CloudTrail corpus — ten scored objectives, contributed by the DEF CON Cloud Village.",
}

const CLOUD_VILLAGE_URL = "https://www.cloud-village.org/dc34"

const DEPLOY_COMMAND =
  "kubectl --context dc34 apply -f challenges/challenge-024.pod.yaml"

/*
 * The ten separately scored objectives, in investigation order. Shape only —
 * per the content guardrail, no identifiers from the incident chain (event
 * IDs, bucket/role/instance/security-group names) belong on this page.
 */
const OBJECTIVES = [
  "Initial cloud access",
  "Actor identity",
  "Role discovery",
  "Trust-policy change",
  "Session pivot",
  "Terminal discovery",
  "Network-control change",
  "SSM session",
  "Object-version history",
  "Final historical retrieval",
]

/*
 * Like the Converged Frontier page, this prose is hardcoded JSX — the
 * cloud-attack-forensics track body in Contentful is a summary of this page,
 * so keep the two roughly in sync when the copy changes.
 */
export default function GroundlinkIntrusionPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/challenges"
        className="inline-flex items-center gap-1.5 text-sm text-mist transition-colors hover:text-teal-bright"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All challenges
      </Link>

      <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-mint">
        Cloud Attack Forensics
      </p>
      <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">
        GroundLink Intrusion: Ten Techniques
      </h1>
      <p className="mt-4 leading-relaxed text-mist">
        Case <CodeSpan>IR-GL10</CodeSpan>. A threat actor tracked as{" "}
        <CodeSpan>H3XN0V4</CodeSpan> worked ten techniques across three
        sessions and left exactly ten records behind in a sanitized, native
        CloudTrail corpus of 211 — the other 201 are routine activity and
        decoys. No malware, nothing executes:{" "}
        <strong className="text-white">
          you read logs with jq and reconstruct the incident chain.
        </strong>
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <PillBadge>10 flags · 2,000 points</PillBadge>
        <PillBadge>Beginner → Advanced ramp</PillBadge>
        <PillBadge>Offline · runs in local Kubernetes</PillBadge>
      </div>

      <aside
        aria-labelledby="cloud-village-heading"
        className="mt-8 rounded-lg border border-gold/30 bg-gold/[0.06] p-5"
      >
        <div className="flex gap-3">
          <Cloud className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
          <div className="min-w-0">
            <h2
              id="cloud-village-heading"
              className="text-base font-bold text-white"
            >
              Contributed by the DEF CON Cloud Village
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-fog">
              This challenge was built through our collaboration with the{" "}
              <a
                href={CLOUD_VILLAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-bright underline underline-offset-4 transition-colors hover:text-mint"
              >
                DEF CON Cloud Village
              </a>{" "}
              — the community for cloud security at DEF CON. Go see what
              they&apos;re running at DC34.
            </p>
            <div className="mt-4">
              <Button asChild size="sm">
                <a
                  href={CLOUD_VILLAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink aria-hidden />
                  Visit Cloud Village
                </a>
              </Button>
            </div>
          </div>
        </div>
      </aside>

      <h2 className="mt-12 text-2xl font-black text-white">
        The ten objectives
      </h2>
      <p className="mt-4 leading-relaxed text-mist">
        Each objective is a separately auto-scored flag, ramping from 100 to
        300 points across Beginner, Intermediate, and Advanced. In order, you
        establish:
      </p>
      <ol className="mt-4 space-y-2 pl-5 list-decimal marker:text-teal">
        {OBJECTIVES.map((objective) => (
          <li key={objective} className="leading-relaxed text-fog">
            {objective}
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-2xl font-black text-white">Why it&apos;s hard</h2>
      <p className="mt-4 leading-relaxed text-mist">
        Every record in the corpus succeeded, so there is nothing to filter on
        by outcome. All 211 records share one source IP, so IP is not a pivot.
        The whole incident spans about two minutes, so chronology alone
        won&apos;t separate signal from noise. And the interesting API calls
        each have successful look-alikes made by other principals.{" "}
        <strong className="text-white">
          What&apos;s left is identity chaining and request-parameter
          correlation.
        </strong>
      </p>

      <h2 className="mt-12 text-2xl font-black text-white">Run it</h2>
      <p className="mt-4 leading-relaxed text-mist">
        The image is <CodeSpan>ghcr.io/blueteamvillage/challenge-024</CodeSpan>,
        published multi-arch (amd64 + arm64), so it runs natively on Apple
        Silicon. Deploy it into your sandbox cluster:
      </p>
      <CodeBlock code={DEPLOY_COMMAND}>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-white/[0.06] bg-navy-deep p-4 pr-14 font-mono text-sm text-fog">
          {DEPLOY_COMMAND}
        </pre>
      </CodeBlock>
      <p className="mt-4 leading-relaxed text-mist">
        The evidence mounts read-only at <CodeSpan>/forensics</CodeSpan>, with
        writable scratch space at <CodeSpan>/work</CodeSpan>. The image also
        ships an offline browser workbench at{" "}
        <CodeSpan>/forensics/workbench</CodeSpan> — search, a raw-record
        inspector, per-objective notes, and export. It grades nothing and
        reveals nothing; the <CodeSpan>jq</CodeSpan> workflow is the canonical
        path, and the workbench is just a convenience.
      </p>

      <p className="mt-10 rounded-lg border border-white/[0.06] bg-navy-card p-5 text-sm leading-relaxed text-mist">
        Everything runs locally — no AWS account, credentials, or internet
        required once the image is pulled. New to the sandbox? Start with the{" "}
        <Link
          href="/setup"
          className="text-teal-bright underline underline-offset-4 hover:text-mint"
        >
          setup guide
        </Link>
        .
      </p>
    </div>
  )
}

/* Matches the markdown renderer's inline-code treatment. */
function CodeSpan({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-sm border border-white/[0.06] bg-navy-deep px-1.5 py-0.5 font-mono text-[0.85em] text-mint">
      {children}
    </code>
  )
}

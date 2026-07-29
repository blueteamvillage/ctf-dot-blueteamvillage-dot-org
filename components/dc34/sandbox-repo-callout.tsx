import { FolderTree, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const SANDBOX_REPO_URL =
  "https://github.com/blueteamvillage/btv-k8s-sandbox-infrastructure"
export const SANDBOX_CHALLENGES_URL = `${SANDBOX_REPO_URL}/tree/main/challenges`

/*
 * Points at btv-k8s-sandbox-infrastructure as the source of truth. The site
 * summarises the setup and the tracks; the repo carries the full per-OS
 * instructions, every challenge's pod manifest, and the troubleshooting notes.
 * Used on /setup and /challenges so neither page looks self-contained when it
 * isn't.
 */
export function SandboxRepoCallout({ className }: { className?: string }) {
  return (
    <aside
      aria-labelledby="sandbox-repo-heading"
      className={cn(
        "rounded-lg border border-teal/30 bg-teal/[0.06] p-5",
        className
      )}
    >
      <div className="flex gap-3">
        <Github className="mt-0.5 h-5 w-5 shrink-0 text-teal-bright" aria-hidden />
        <div className="min-w-0">
          <h2
            id="sandbox-repo-heading"
            className="text-base font-bold text-white"
          >
            Everything lives in the sandbox repo
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-fog">
            <a
              href={SANDBOX_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-teal-bright underline underline-offset-4 transition-colors hover:text-mint"
            >
              btv-k8s-sandbox-infrastructure
            </a>{" "}
            is the source of truth: full install instructions for macOS,
            Windows, and Linux, the Kubernetes pod manifest for every challenge,
            and the troubleshooting notes. This page is the short version — if
            the two ever disagree, trust the repo.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild size="sm">
              <a
                href={SANDBOX_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github aria-hidden />
                Open the repo
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a
                href={SANDBOX_CHALLENGES_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FolderTree aria-hidden />
                Browse challenge manifests
              </a>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}

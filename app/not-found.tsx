import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScanlineOverlay } from "@/components/dc34/scanline-overlay"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6">
      <ScanlineOverlay />
      <div className="relative z-20 w-full max-w-xl">
        <div className="rounded-lg border border-white/[0.06] bg-navy-deep p-6 font-mono text-sm shadow-2xs">
          <div className="mb-4 flex items-center gap-2 border-b border-white/[0.06] pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-magenta/70" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-mint/70" aria-hidden />
            <span className="ml-2 text-xs text-haze">btv-ctf — investigation</span>
          </div>
          <p>
            <span className="text-mint">$</span>{" "}
            <span className="text-fog">btv-ctf locate --path {"<requested>"}</span>
          </p>
          <p className="mt-3 text-magenta">ERROR 404: evidence not found</p>
          <p className="mt-1 text-haze">
            The artifact you&apos;re looking for was moved, archived, or never
            existed. Absence of evidence is itself a finding.
          </p>
          <p className="mt-3">
            <span className="text-mint">$</span>{" "}
            <span className="text-fog">btv-ctf suggest</span>
          </p>
          <ul className="mt-2 space-y-1 text-mist">
            <li>
              → <Link href="/" className="text-teal-bright hover:underline">home</Link>
            </li>
            <li>
              → <Link href="/challenges" className="text-teal-bright hover:underline">challenges</Link>
            </li>
            <li>
              → <Link href="/archive/dc33" className="text-teal-bright hover:underline">def-con-33 archive</Link>
            </li>
          </ul>
          <p className="mt-4">
            <span className="text-mint">$</span>{" "}
            <span aria-hidden className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-teal-bright" />
          </p>
        </div>

        <div className="mt-6 text-center">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft aria-hidden />
              Back to the current site
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

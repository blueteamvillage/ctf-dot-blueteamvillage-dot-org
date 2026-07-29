"use client"

import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

/*
 * Copy-to-clipboard wrapper for markdown code fences. The <pre> itself stays
 * server-rendered and is passed straight through as children — only the button
 * ships client JS. `code` carries the raw fence text so copying never has to
 * read it back out of the DOM.
 */
export function CodeBlock({
  code,
  children,
}: {
  code: string
  children: React.ReactNode
}) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      // Clipboard blocked (insecure origin, denied permission). The block is
      // still selectable, so fall back to copying by hand rather than lying
      // with a "Copied" state.
      setCopied(false)
    }
  }

  return (
    <div className="group relative">
      {children}
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
        className="absolute right-2 top-2 rounded-md border border-white/[0.06] bg-navy-deep/90 p-2 text-haze transition-colors hover:border-teal/40 hover:text-teal-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright"
      >
        {copied ? (
          <Check className="h-4 w-4 text-mint" aria-hidden />
        ) : (
          <Copy className="h-4 w-4" aria-hidden />
        )}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  )
}

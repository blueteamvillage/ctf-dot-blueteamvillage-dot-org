import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/*
 * Quiet metadata pill (dates, platform, theme). Low-contrast chrome by design.
 */
export function PillBadge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-mist",
        className
      )}
    >
      {children}
    </span>
  )
}

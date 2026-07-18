import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const tones = {
  teal: "border-teal/40 text-teal-bright",
  mint: "border-mint/40 text-mint",
  gold: "border-gold/40 text-gold",
  magenta: "border-magenta/40 text-magenta",
} as const

export function IconChip({
  icon: Icon,
  tone = "teal",
  className,
}: {
  icon: LucideIcon
  tone?: keyof typeof tones
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white/[0.03]",
        tones[tone],
        className
      )}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  )
}

import { cn } from "@/lib/utils"

export function GradientDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full bg-linear-to-r from-transparent via-teal/40 to-transparent",
        className
      )}
    />
  )
}

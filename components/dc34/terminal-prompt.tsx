import { cn } from "@/lib/utils"

/*
 * Signature terminal box: mint `$` prompt, mono command, blinking teal cursor.
 */
export function TerminalPrompt({
  command = "btv-ctf init --theme agency",
  className,
}: {
  command?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-navy-deep px-4 py-3 font-mono text-sm",
        className
      )}
    >
      <span className="text-mint">$</span>
      <span className="text-haze">{command}</span>
      <span aria-hidden className="animate-blink inline-block h-4 w-2 bg-teal-bright" />
    </div>
  )
}

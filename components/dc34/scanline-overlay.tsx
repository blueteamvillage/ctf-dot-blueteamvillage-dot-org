/*
 * CRT chrome: a static scanline grid over the whole viewport plus one slow
 * sweeping bar. Purely decorative — pointer-events-none, aria-hidden, and the
 * sweep stops under prefers-reduced-motion (globals.css kill-switch).
 */
export function ScanlineOverlay() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #ffffff 2px, #ffffff 3px)",
        }}
      />
      <div className="animate-scanline absolute inset-x-0 h-24 bg-linear-to-b from-transparent via-white/[0.03] to-transparent" />
    </div>
  )
}

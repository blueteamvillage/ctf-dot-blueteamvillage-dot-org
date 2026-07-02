"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function remaining(targetMs: number): TimeLeft | null {
  const difference = targetMs - Date.now()
  if (difference <= 0) return null
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  }
}

/*
 * Countdown to the event start (ISO timestamp from content). Renders nothing
 * until mounted (avoids hydration mismatch) and switches to a "live" line
 * once the target passes.
 */
export function Countdown({ startsAt }: { startsAt: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(undefined)

  useEffect(() => {
    const targetMs = new Date(startsAt).getTime()
    const tick = () => setTimeLeft(remaining(targetMs))
    // First paint after mount happens via rAF so hydration stays consistent.
    const frame = requestAnimationFrame(tick)
    const timer = setInterval(tick, 1000)
    return () => {
      cancelAnimationFrame(frame)
      clearInterval(timer)
    }
  }, [startsAt])

  if (timeLeft === undefined) {
    return <div className="h-[104px]" aria-hidden />
  }

  if (timeLeft === null) {
    return (
      <p className="inline-flex items-center gap-2 rounded-lg border border-mint/30 bg-mint/10 px-4 py-3 font-mono text-mint">
        <span className="inline-block h-2 w-2 rounded-full bg-mint" aria-hidden />
        CTF is live — see you at the village
      </p>
    )
  }

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ]

  return (
    <div>
      <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-mist">
        <Clock className="h-4 w-4 text-teal-bright" aria-hidden />
        CTF starts in
      </p>
      <div className="grid grid-cols-4 gap-3" role="timer" aria-label="Countdown to CTF start">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="rounded-lg border border-white/[0.06] bg-navy-deep px-3 py-2 text-center"
          >
            <div className="font-mono text-2xl font-bold text-teal-bright md:text-3xl">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="mt-1 text-xs text-haze">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

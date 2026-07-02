"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  onCountdownComplete?: (isComplete: boolean) => void
}

export function CountdownTimer({ onCountdownComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date("August 8, 2025 10:00:00 PST")
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
        onCountdownComplete?.(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        onCountdownComplete?.(true)
      }
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-6 mb-8">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Clock className="w-6 h-6 text-yellow-400 mr-2" />
          <h3 className="text-xl font-bold text-yellow-300">CTF Starts In</h3>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-yellow-400 mt-1">Days</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-yellow-400 mt-1">Hours</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-yellow-400 mt-1">Minutes</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-yellow-400 mt-1">Seconds</div>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-400 mt-4">
          August 8, 2025 at 10:00 AM PST
        </p>
      </div>
    </div>
  )
} 
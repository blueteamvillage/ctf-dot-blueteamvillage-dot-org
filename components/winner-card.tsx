import { Badge } from "@/components/ui/badge"

interface WinnerCardProps {
  place: 1 | 2 | 3
  teamName: string
  teamScore: number
  participants: Array<{
    username: string
    points: number
  }>
  className?: string
}

export function WinnerCard({ 
  place, 
  teamName, 
  teamScore, 
  participants, 
  className = "" 
}: WinnerCardProps) {
  const placeConfig = {
    1: {
      emoji: "🥇",
      label: "1st Place",
      color: "yellow",
      badgeText: "Champions",
      bgGradient: "from-gold/10 to-gold/10",
      borderColor: "border-gold/30",
      textColor: "text-gold",
      badgeClasses: "bg-gold/20 text-gold border-gold/30"
    },
    2: {
      emoji: "🥈",
      label: "2nd Place",
      color: "gray",
      badgeText: "Runner-up",
      bgGradient: "from-gray-500/10 to-gray-600/10",
      borderColor: "border-gray-500/30",
      textColor: "text-mist",
      badgeClasses: "bg-gray-500/20 text-mist border-gray-500/30"
    },
    3: {
      emoji: "🥉",
      label: "3rd Place",
      color: "orange",
      badgeText: "Third",
      bgGradient: "from-gold/10 to-gold/10",
      borderColor: "border-gold/30",
      textColor: "text-gold",
      badgeClasses: "bg-gold/20 text-gold border-gold/30"
    }
  }

  const config = placeConfig[place]

  return (
    <div className={`bg-linear-to-r ${config.bgGradient} ${config.borderColor} rounded-lg p-10 pt-6 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-lg font-semibold ${config.textColor}`}>
          {config.emoji} {config.label}
        </h3>
        <Badge className={config.badgeClasses}>
          {config.badgeText}
        </Badge>
      </div>
      
      <div className="text-white font-semibold mb-2">{teamName}</div>
      <div className="text-gold text-sm font-medium mb-3">
        {teamScore.toLocaleString()} points
      </div>
      
      <div className="space-y-2">
        <h4 className="text-xs font-semibold text-mist uppercase tracking-wide">
          Individual Scores:
        </h4>
        <div className="space-y-1">
          {participants.map((participant, index) => (
            <div key={index} className="flex justify-between items-center text-xs">
              <span className="text-haze">{participant.username}</span>
              <span className="text-gold font-medium">
                {participant.points.toLocaleString()} pts
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
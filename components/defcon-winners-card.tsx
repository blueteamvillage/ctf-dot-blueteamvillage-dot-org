import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Link from "next/link"

interface Winner {
  place: 1 | 2 | 3
  teamName: string
  members?: string
  displayName?: string
  points?: number
  usernames?: string[]
}

interface DefconWinnersCardProps {
  year: number
  defconNumber: number
  winners: Winner[]
  themeColor: "cyan" | "purple" | "green" | "blue" | "orange"
  linkHref: string
}

export function DefconWinnersCard({ 
  year, 
  defconNumber, 
  winners, 
  themeColor, 
  linkHref 
}: DefconWinnersCardProps) {
  const colorClasses = {
    cyan: {
      title: "text-teal-bright",
      border: "hover:border-teal/30",
      badge: "bg-teal/20 text-teal-bright border-teal/30",
      link: "text-teal-bright hover:text-teal-bright"
    },
    purple: {
      title: "text-mint",
      border: "hover:border-teal-dark/30",
      badge: "bg-teal-dark/20 text-mint border-teal-dark/30",
      link: "text-mint hover:text-mint"
    },
    green: {
      title: "text-mint",
      border: "hover:border-mint/30",
      badge: "bg-mint/20 text-mint border-mint/30",
      link: "text-mint hover:text-mint"
    },
    blue: {
      title: "text-teal-bright",
      border: "hover:border-teal/30",
      badge: "bg-teal/20 text-teal-bright border-teal/30",
      link: "text-teal-bright hover:text-teal-bright"
    },
    orange: {
      title: "text-gold",
      border: "hover:border-gold/30",
      badge: "bg-gold/20 text-gold border-gold/30",
      link: "text-gold hover:text-gold"
    }
  }

  const placeConfig = {
    1: {
      emoji: "🥇",
      label: "1st Place",
      color: "yellow",
      badgeText: "Champions"
    },
    2: {
      emoji: "🥈",
      label: "2nd Place",
      color: "gray",
      badgeText: "Runner-up"
    },
    3: {
      emoji: "🥉",
      label: "3rd Place",
      color: "orange",
      badgeText: "Third"
    }
  }

  const getPlaceColorClasses = (color: string) => {
    const colorMap = {
      yellow: {
        bg: "from-gold/10 to-gold/10",
        border: "border-gold/30",
        text: "text-gold",
        badge: "bg-gold/20 text-gold border-gold/30"
      },
      gray: {
        bg: "from-gray-500/10 to-gray-600/10",
        border: "border-gray-500/30",
        text: "text-mist",
        badge: "bg-gray-500/20 text-mist border-gray-500/30"
      },
      orange: {
        bg: "from-gold/10 to-gold/10",
        border: "border-gold/30",
        text: "text-gold",
        badge: "bg-gold/20 text-gold border-gold/30"
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.gray
  }

  return (
    <Card className={`bg-navy-card border-white/10 ${colorClasses[themeColor].border} transition-colors`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className={`text-2xl font-bold ${colorClasses[themeColor].title}`}>
            DEF CON {defconNumber}
          </CardTitle>
          <Badge className={colorClasses[themeColor].badge}>
            <Calendar className="w-3 h-3 mr-1" />
            {year}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {winners.map((winner) => {
          const config = placeConfig[winner.place]
          const placeColors = getPlaceColorClasses(config.color)
          
          return (
            <div 
              key={winner.place}
              className={`bg-linear-to-r ${placeColors.bg} ${placeColors.border} rounded-lg p-4`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-lg font-semibold ${placeColors.text}`}>
                  {config.emoji} {config.label}
                </h3>
                <Badge className={placeColors.badge}>
                  {config.badgeText}
                </Badge>
              </div>
              <div className="text-white font-semibold">
                {winner.displayName || winner.teamName}
              </div>
              {winner.points && (
                <div className="text-gold text-sm font-medium mt-1">
                  {winner.points} points
                </div>
              )}
              {winner.usernames && winner.usernames.length > 0 ? (
                <div className="text-haze text-sm mt-1">
                  {winner.usernames.join(', ')}
                </div>
              ) : winner.members ? (
                <div className="text-haze text-sm mt-1">
                  {winner.members}
                </div>
              ) : null}
            </div>
          )
        })}

        <Link 
          href={linkHref}
          className={`inline-flex items-center ${colorClasses[themeColor].link} transition-colors`}
        >
          View Full Results
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardContent>
    </Card>
  )
} 
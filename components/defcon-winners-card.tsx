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
      title: "text-cyan-300",
      border: "hover:border-cyan-500/30",
      badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      link: "text-cyan-400 hover:text-cyan-300"
    },
    purple: {
      title: "text-purple-300",
      border: "hover:border-purple-500/30",
      badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      link: "text-purple-400 hover:text-purple-300"
    },
    green: {
      title: "text-green-300",
      border: "hover:border-green-500/30",
      badge: "bg-green-500/20 text-green-300 border-green-500/30",
      link: "text-green-400 hover:text-green-300"
    },
    blue: {
      title: "text-blue-300",
      border: "hover:border-blue-500/30",
      badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      link: "text-blue-400 hover:text-blue-300"
    },
    orange: {
      title: "text-orange-300",
      border: "hover:border-orange-500/30",
      badge: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      link: "text-orange-400 hover:text-orange-300"
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
        bg: "from-yellow-500/10 to-yellow-600/10",
        border: "border-yellow-500/30",
        text: "text-yellow-300",
        badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      },
      gray: {
        bg: "from-gray-500/10 to-gray-600/10",
        border: "border-gray-500/30",
        text: "text-gray-300",
        badge: "bg-gray-500/20 text-gray-300 border-gray-500/30"
      },
      orange: {
        bg: "from-orange-500/10 to-orange-600/10",
        border: "border-orange-500/30",
        text: "text-orange-300",
        badge: "bg-orange-500/20 text-orange-300 border-orange-500/30"
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.gray
  }

  return (
    <Card className={`bg-gray-900/50 border-gray-700 ${colorClasses[themeColor].border} transition-colors`}>
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
                <div className="text-yellow-400 text-sm font-medium mt-1">
                  {winner.points} points
                </div>
              )}
              {winner.usernames && winner.usernames.length > 0 ? (
                <div className="text-gray-400 text-sm mt-1">
                  {winner.usernames.join(', ')}
                </div>
              ) : winner.members ? (
                <div className="text-gray-400 text-sm mt-1">
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
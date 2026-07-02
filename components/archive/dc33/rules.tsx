import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Users, Clock, Trophy } from "lucide-react"

export function Rules() {
  return (
    <section className="py-20 px-6 sm:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Rules & Guidelines
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fair play and learning are our top priorities. Please review these important guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gray-900/50 border-red-500/30">
            <CardHeader>
              <AlertCircle className="w-8 h-8 text-red-400 mb-2" />
              <CardTitle className="text-red-300">Competition Rules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">No attacking other teams or the competition infrastructure</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">No sharing flags or solutions with other teams</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Respect all participants and organizers</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Follow DEF CON code of conduct</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-blue-500/30">
            <CardHeader>
              <Users className="w-8 h-8 text-blue-400 mb-2" />
              <CardTitle className="text-blue-300">Team Formation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Teams can have 1-4 members maximum</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Solo participation is encouraged and welcome</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Team registration required before competition starts</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">All skill levels welcome - beginners encouraged!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-green-500/30">
            <CardHeader>
              <Clock className="w-8 h-8 text-green-400 mb-2" />
              <CardTitle className="text-green-300">Timing & Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Competition runs for 48 hours straight</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Challenges released in waves throughout the event</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Scoreboard updates in real-time</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Final submissions accepted until closing ceremony</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-yellow-500/30">
            <CardHeader>
              <Trophy className="w-8 h-8 text-yellow-400 mb-2" />
              <CardTitle className="text-yellow-300">Scoring & Prizes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Points awarded based on challenge difficulty</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Dynamic scoring - points decrease as more teams solve</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Prizes for top 3 teams and special categories</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Recognition certificates for all participants</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyan-300 mb-3">Important Notes</h3>
          <p className="text-gray-300 text-sm mb-2">
            This is a <strong>defensive security</strong> focused CTF. While some challenges may involve understanding
            attack techniques, the primary focus is on detection, analysis, and response.
          </p>
          <p className="text-gray-300 text-sm">
            Questions during the competition? Look for Blue Team Village organizers, or visit our
            help desk in the village area.
          </p>
        </div>
      </div>
    </section>
  )
}

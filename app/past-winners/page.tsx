import Link from "next/link"
import { Trophy, Calendar, Users, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"
import { DefconWinnersCard } from "@/components/defcon-winners-card"

export default function PastWinnersPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <Header />
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-4">
              Past Champions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Past Winners
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-300 mb-6">Celebrating CTF Champions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the exceptional teams and individuals who have conquered our Capture The Flag challenges in previous years.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-cyan-300 flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Total Participants
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">850</div>
                <p className="text-gray-400 text-sm">Across DEF CON 31, 32, & 33</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-purple-300 flex items-center justify-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Teams Competed
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">473</div>
                <p className="text-gray-400 text-sm">From solo to 4-person teams</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-yellow-300 flex items-center justify-center">
                  <Award className="w-5 h-5 mr-2" />
                  Champions Crowned
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">9</div>
                <p className="text-gray-400 text-sm">Top 3 teams each year</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Winners Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DEF CON 33 */}
          <DefconWinnersCard
            year={2025}
            defconNumber={33}
            themeColor="orange"
            linkHref="/past-winners/defcon-33"
            winners={[
              {
                place: 1,
                teamName: "GhidraGoons",
                displayName: "GhidraGoons",
                points: 39057,
                usernames: ["almanac-problem", "BorrowedMilk", "null", "So1ArF1Ar3"]
              },
              {
                place: 2,
                teamName: "0x325",
                points: 30957,
                usernames: ["0x325-owl", "mando", "Rooster", "Samba"]
              },
              {
                place: 3,
                teamName: "SISC",
                points: 30952,
                usernames: ["Go5", "hwPark", "sh3rlock", "shw"]
              }
            ]}
          />
          {/* DEF CON 32 */}
          <DefconWinnersCard
            year={2024}
            defconNumber={32}
            themeColor="purple"
            linkHref="/past-winners/defcon-32"
            winners={[
              {
                place: 1,
                teamName: "GhidraGoons",
                displayName: "Def con dans mison"
              },
              {
                place: 2,
                teamName: "N1t3_Tr@1n"
              },
              {
                place: 3,
                teamName: "Slept4Day"
              }
            ]}
          />
          {/* DEF CON 31 */}
          <DefconWinnersCard
            year={2023}
            defconNumber={31}
            themeColor="cyan"
            linkHref="/past-winners/defcon-31"
            winners={[
              {
                place: 1,
                teamName: "GhidraGoons",
                members: "obnoxious_goat, _marctheshark_, so1arf1ar3z, eddo"
              },
              {
                place: 2,
                teamName: "AMBUSH"
              },
              {
                place: 3,
                teamName: "TheCancelledCrewxXqc"
              }
            ]}
          />
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join the Challenge?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Think you have what it takes to be the next champion? Register now for DEF CON 33 and compete against the best cybersecurity professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://ctfd.dc33.blueteamvillage.org/register"
                className="bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Register for CTF
              </Link>
              <Link 
                href="/challenges"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                View Challenges
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  )
} 
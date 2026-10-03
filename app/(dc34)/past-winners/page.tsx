import { Trophy, Users, Award, Hourglass, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DefconWinnersCard } from "@/components/defcon-winners-card"
import Link from "next/link"

export default function PastWinnersPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-navy via-navy-deep to-navy">
      {/* Hero Section */}
      <div className="relative pt-16 pb-16 px-4">
        <div className="absolute inset-0 bg-linear-to-r from-teal/10 to-teal-dark/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
              Past Champions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-gold via-gold to-magenta bg-clip-text text-transparent">
              Past Winners
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gold mb-6">Celebrating CTF Champions</h2>
            <p className="text-xl text-mist max-w-3xl mx-auto">
              Discover the exceptional teams and individuals who have conquered our Capture The Flag challenges in previous years.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <Card className="bg-navy-card border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-teal-bright flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Total Participants
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">850</div>
                <p className="text-haze text-sm">Across DEF CON 31, 32, & 33</p>
              </CardContent>
            </Card>

            <Card className="bg-navy-card border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-mint flex items-center justify-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Teams Competed
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">473</div>
                <p className="text-haze text-sm">From solo to 4-person teams</p>
              </CardContent>
            </Card>

            <Card className="bg-navy-card border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-gold flex items-center justify-center">
                  <Award className="w-5 h-5 mr-2" />
                  Champions Crowned
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">9</div>
                <p className="text-haze text-sm">Top 3 teams each year</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Winners Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DEF CON 34 — results pending. Deliberately not a
              DefconWinnersCard: that component needs three named teams, and
              inventing placeholder podium entries would read as real. */}
          <Card className="bg-navy-card border-white/10 border-dashed">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-teal-bright">
                  DEF CON 34
                </CardTitle>
                <Badge className="bg-gold/20 text-gold border-gold/30">
                  <Hourglass className="w-3 h-3 mr-1" />
                  2026
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-mist">
                The competition has wrapped. Final standings and participation
                numbers are being verified and will be published here.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {["1st", "2nd", "3rd"].map((slot) => (
                  <div
                    key={slot}
                    className="rounded-lg border border-dashed border-white/10 bg-white/[0.02] p-4 text-center"
                  >
                    <div className="text-xs text-haze">{slot}</div>
                    <div className="mt-1 text-2xl font-bold text-haze">—</div>
                  </div>
                ))}
              </div>
              <Link
                href="/past-winners/defcon-34"
                className="inline-flex items-center text-teal-bright transition-colors hover:text-mint"
              >
                View Full Results
                <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
              </Link>
            </CardContent>
          </Card>

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
      </div>

    </div>
  )
}
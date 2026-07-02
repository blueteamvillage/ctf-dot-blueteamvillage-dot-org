import Link from "next/link"
import { Trophy, ArrowLeft, BarChart3, Server, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WinnerCard } from "@/components/winner-card"

export default function Defcon33Page() {
  return (
    <div className="min-h-screen bg-linear-to-br from-navy via-navy-deep to-navy">
      {/* Hero Section */}
      <div className="relative pt-16 pb-16 px-4">
        <div className="absolute inset-0 bg-linear-to-r from-teal-dark/10 to-magenta/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Link 
              href="/past-winners" 
              className="inline-flex items-center text-mint hover:text-mint transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Past Winners
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-mint via-magenta to-teal-dark bg-clip-text text-transparent">
              DEF CON 33
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-mint mb-6">Project Obsidian CTF Winners</h2>
            <p className="text-xl text-mist max-w-3xl mx-auto">
              The 2025 competition saw unprecedented participation with <span className="text-white font-bold">393 registered users</span> and <span className="text-white font-bold">229 teams</span> competing across multiple platforms and challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Winners Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 1st Place */}
          <WinnerCard
            place={1}
            teamName="GhidraGoons"
            teamScore={39057}
            participants={[
              { username: "almanac-problem", points: 12500 },
              { username: "BorrowedMilk", points: 9800 },
              { username: "null", points: 8900 },
              { username: "So1ArF1Ar3", points: 8857 }
            ]}
          />

          {/* 2nd Place */}
          <WinnerCard
            place={2}
            teamName="0x325"
            teamScore={30957}
            participants={[
              { username: "0x325-owl", points: 8500 },
              { username: "mando", points: 7800 },
              { username: "Rooster", points: 7500 },
              { username: "Samba", points: 7157 }
            ]}
          />

          {/* 3rd Place */}
          <WinnerCard
            place={3}
            teamName="SISC"
            teamScore={30952}
            participants={[
              { username: "Go5", points: 8200 },
              { username: "hwPark", points: 7800 },
              { username: "sh3rlock", points: 7600 },
              { username: "shw", points: 7352 }
            ]}
          />
        </div>

        {/* Comprehensive Statistics */}
        <Card className="bg-navy-card border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-mint flex items-center">
              <BarChart3 className="w-6 h-6 mr-2" />
              Competition Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CTFd Statistics */}
              <div>
                <h3 className="text-lg font-semibold text-teal-bright mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  CTFd Platform
                </h3>
                <div className="space-y-4">
                  <div className="bg-navy-deep rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">User Registration</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-teal-bright">Friday (Aug 8, 2025)</div>
                        <div className="text-white font-bold">183 users</div>
                      </div>
                      <div>
                        <div className="text-mint">Saturday (Aug 9, 2025)</div>
                        <div className="text-white font-bold">210 users</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-navy-deep rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Team Registration</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-teal-bright">Friday (Aug 8, 2025)</div>
                        <div className="text-white font-bold">110 teams</div>
                      </div>
                      <div>
                        <div className="text-mint">Saturday (Aug 9, 2025)</div>
                        <div className="text-white font-bold">119 teams</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-navy-deep rounded-lg p-4">
                    <div className="text-white font-semibold mb-3">Team Size Distribution</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-mist">1-person teams:</span>
                        <span className="text-white font-bold">131 teams</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-mist">2-person teams:</span>
                        <span className="text-white font-bold">37 teams</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-mist">3-person teams:</span>
                        <span className="text-white font-bold">23 teams</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-mist">4-person teams:</span>
                        <span className="text-white font-bold">19 teams</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Statistics */}
              <div>
                <h3 className="text-lg font-semibold text-mint mb-4 flex items-center">
                  <Server className="w-5 h-5 mr-2" />
                  Final Competition Results
                </h3>
                <div className="text-sm space-y-4">
                  <div className="bg-navy-deep rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Top 15 Teams</div>
                    {[
                      { name: "GhidraGoons", points: 39057 },
                      { name: "0x325", points: 30957 },
                      { name: "SISC", points: 30952 },
                      { name: "Ctrl+Alt+DEFEAT", points: 22117 },
                      { name: "Couch Pounders", points: 17357 },
                      { name: "thisisapen", points: 16587 },
                      { name: "No wifi at the armory", points: 15802 },
                      { name: "P0shPh1sh", points: 15157 },
                      { name: "WeAre18gi0n", points: 14437 },
                      { name: "KirklandSignaturePwnys", points: 14357 },
                      { name: "T97", points: 11932 },
                      { name: "ntwk_defeders", points: 10507 },
                      { name: "alohaX", points: 10357 },
                      { name: "G3tt1nPhr34ky", points: 10205 },
                      { name: "inSIRT Name Here", points: 9007 }
                    ].map((team, index) => (
                      <div key={index} className="flex justify-between pt-1">
                        <span className="text-mist">
                          {(index + 1).toString().padStart(2, '0')}. {team.name}
                        </span>
                        <span className="text-white font-bold">
                          {team.points.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competition Highlights */}
        <Card className="bg-navy-card border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gold flex items-center">
              <Activity className="w-6 h-6 mr-2" />
              Competition Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Record Participation</h3>
                <p className="text-mist mb-4">
                  DEF CON 33 saw unprecedented participation with 393 registered users and 229 teams, demonstrating the growing interest in cybersecurity competitions.
                </p>
                <div className="bg-navy-deep rounded-lg p-3">
                  <div className="text-teal-bright font-semibold">Team Success Patterns</div>
                  <div className="text-haze text-sm mt-1">
                    4-person teams dominated the top rankings, with 6 out of the Top 10 teams being 4-person teams, highlighting the importance of collaboration.
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Platform Diversity</h3>
                <p className="text-mist mb-4">
                  The competition utilized multiple platforms to provide diverse learning experiences and accommodate different skill sets.
                </p>
                <div className="space-y-2">
                  <div className="bg-navy-deep rounded-lg p-3">
                    <div className="text-mint font-semibold">Multi-Platform Approach</div>
                    <div className="text-haze text-sm">CTFd, Wazuh, and Keycloak</div>
                  </div>
                  <div className="bg-navy-deep rounded-lg p-3">
                    <div className="text-gold font-semibold">Scalable Infrastructure</div>
                    <div className="text-haze text-sm">Kubernetes-based deployment for reliability</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            href="/past-winners/defcon-32" 
            className="inline-flex items-center text-teal-bright hover:text-teal-bright transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            DEF CON 32 Results
          </Link>
          <Link 
            href="/past-winners" 
            className="inline-flex items-center text-mint hover:text-mint transition-colors"
          >
            Back to Past Winners
            <ArrowLeft className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
} 
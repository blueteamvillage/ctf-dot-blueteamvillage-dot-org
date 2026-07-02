import Link from "next/link"
import { Trophy, Calendar, Users, Award, ArrowLeft, Crown, Medal, Star, BarChart3, Server, Database, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Defcon32Page() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Link 
              href="/past-winners" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Past Winners
            </Link>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
              DEF CON 32 Champions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              DEF CON 32
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-6">Project Obsidian CTF Winners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The 2024 competition saw unprecedented participation with 262 registered users and 140 teams competing across multiple platforms and challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Winners Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 1st Place */}
          <Card className="bg-linear-to-br from-yellow-500/10 to-yellow-600/10 border-yellow-500/30">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-yellow-300">🥇 1st Place</CardTitle>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Champions</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Def con dans mison</div>
              <div className="text-gray-300 mb-4">
                <div className="text-sm">Also known as:</div>
                <div className="font-semibold">GhidraGoons</div>
              </div>
              <p className="text-gray-400 text-sm">
                Back-to-back champions who demonstrated exceptional skills and strategic thinking, securing their place in CTF history.
              </p>
            </CardContent>
          </Card>

          {/* 2nd Place */}
          <Card className="bg-linear-to-br from-gray-500/10 to-gray-600/10 border-gray-500/30">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-linear-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                  <Medal className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-300">🥈 2nd Place</CardTitle>
              <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">Runner-up</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-white mb-4">N1t3_Tr@1n</div>
              <p className="text-gray-400 text-sm">
                A formidable competitor who showcased outstanding technical skills and determination throughout the competition.
              </p>
            </CardContent>
          </Card>

          {/* 3rd Place */}
          <Card className="bg-linear-to-br from-orange-500/10 to-orange-600/10 border-orange-500/30">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-linear-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-orange-300">🥉 3rd Place</CardTitle>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Third Place</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-white mb-4">Slept4Day</div>
              <p className="text-gray-400 text-sm">
                A skilled competitor who demonstrated excellent problem-solving abilities and technical expertise in the CTF challenges.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Comprehensive Statistics */}
        <Card className="bg-gray-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-300 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2" />
              Competition Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CTFd Statistics */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  CTFd Platform
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">User Registration</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-cyan-300">Friday (Aug 9)</div>
                        <div className="text-white font-bold">195 users</div>
                      </div>
                      <div>
                        <div className="text-purple-300">Saturday (Aug 10)</div>
                        <div className="text-white font-bold">262 users</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Team Registration</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-cyan-300">Friday (Aug 9)</div>
                        <div className="text-white font-bold">104 teams</div>
                      </div>
                      <div>
                        <div className="text-purple-300">Saturday (Aug 10)</div>
                        <div className="text-white font-bold">140 teams</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-white font-semibold mb-3">Team Size Distribution</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">4-person teams:</span>
                        <span className="text-white font-bold">10 teams</span>
                      </div>
                      <div className="text-cyan-300 text-xs">6 out of the Top 10 teams</div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-300">3-person teams:</span>
                        <span className="text-white font-bold">14 teams</span>
                      </div>
                      <div className="text-purple-300 text-xs">Highest: AKATSUKI (6th place)</div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-300">2-person teams:</span>
                        <span className="text-white font-bold">24 teams</span>
                      </div>
                      <div className="text-yellow-300 text-xs">Highest: dimasiados (9th place)</div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-300">Solo competitors:</span>
                        <span className="text-white font-bold">70 teams</span>
                      </div>
                      <div className="text-orange-300 text-xs">Highest: Blue Team of Death (20th place)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Statistics */}
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
                  <Server className="w-5 h-5 mr-2" />
                  Platform Usage
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Graylog</div>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Users:</span>
                        <span className="text-white font-bold">73</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Reingested Logs:</span>
                        <span className="text-white font-bold">2,263,490</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Datadog</div>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Users:</span>
                        <span className="text-white font-bold">78</span>
                      </div>
                      <div className="text-gray-300 text-xs">Logs Generated:</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Thursday (Aug 8):</span>
                          <span className="text-white font-bold">~1.63M</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Friday (Aug 9):</span>
                          <span className="text-white font-bold">~15.03M</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Saturday (Aug 10):</span>
                          <span className="text-white font-bold">~7.78M</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Multi-Juicer</div>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Teams Created:</span>
                        <span className="text-white font-bold">101 instances</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Infrastructure */}
        <Card className="bg-gray-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-cyan-300 flex items-center">
              <Database className="w-6 h-6 mr-2" />
              Technical Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Graylog Setup</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• 4 Pod Stateful Set hosted in Kubernetes</li>
                  <li>• Connected to Okta SSO</li>
                  <li>• High-performance log processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Multi-Juicer Setup</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• 30 Nodes (m5.xlarge) on Elastic Kubernetes Service (EKS)</li>
                  <li>• 10 Juice Balancers (Load Balancers)</li>
                  <li>• Supports up to 300 instances with 30 nodes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competition Highlights */}
        <Card className="bg-gray-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-yellow-300 flex items-center">
              <Activity className="w-6 h-6 mr-2" />
              Competition Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Record Participation</h3>
                <p className="text-gray-300 mb-4">
                  DEF CON 32 saw unprecedented participation with 262 registered users and 140 teams, demonstrating the growing interest in cybersecurity competitions.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-cyan-300 font-semibold">Team Success Patterns</div>
                  <div className="text-gray-400 text-sm mt-1">
                    4-person teams dominated the top rankings, with 6 out of the Top 10 teams being 4-person teams, highlighting the importance of collaboration.
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Platform Diversity</h3>
                <p className="text-gray-300 mb-4">
                  The competition utilized multiple platforms to provide diverse learning experiences and accommodate different skill sets.
                </p>
                <div className="space-y-2">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-purple-300 font-semibold">Multi-Platform Approach</div>
                    <div className="text-gray-400 text-sm">CTFd, Graylog, Datadog, and Multi-Juicer</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-yellow-300 font-semibold">Scalable Infrastructure</div>
                    <div className="text-gray-400 text-sm">Kubernetes-based deployment for reliability</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            href="/past-winners/defcon-31" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            DEF CON 31 Results
          </Link>
          <Link 
            href="/past-winners" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            Back to Past Winners
            <ArrowLeft className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
} 
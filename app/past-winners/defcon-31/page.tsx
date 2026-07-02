import Link from "next/link"
import { Trophy, Calendar, Users, Award, ArrowLeft, Crown, Medal, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Defcon31Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Link 
              href="/past-winners" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Past Winners
            </Link>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">
              DEF CON 31 Champions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              DEF CON 31
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">Project Obsidian CTF Winners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Congratulations to the champions of 2023&apos;s Capture The Flag competition! Here, we highlight the exceptional teams and individuals who showcased their skills and emerged victorious.
            </p>
          </div>
        </div>
      </div>

      {/* Winners Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 1st Place */}
          <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-yellow-500/30">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-yellow-300">🥇 1st Place</CardTitle>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Champions</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-white mb-2">GhidraGoons</div>
              <div className="text-gray-300 mb-4">
                <div className="text-sm">Team Members:</div>
                <div className="font-semibold">obnoxious_goat</div>
                <div className="font-semibold">_marctheshark_</div>
                <div className="font-semibold">so1arf1ar3z</div>
                <div className="font-semibold">eddo</div>
              </div>
              <p className="text-gray-400 text-sm">
                The ultimate champions who demonstrated exceptional skills in cybersecurity challenges and emerged victorious against all competitors.
              </p>
            </CardContent>
          </Card>

          {/* 2nd Place */}
          <Card className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 border-gray-500/30">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                  <Medal className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-300">🥈 2nd Place</CardTitle>
              <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">Runner-up</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-white mb-4">AMBUSH</div>
              <p className="text-gray-400 text-sm">
                A formidable team that showcased outstanding defensive capabilities and strategic thinking throughout the competition.
              </p>
            </CardContent>
          </Card>

          {/* 3rd Place */}
          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/30">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-orange-300">🥉 3rd Place</CardTitle>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Third Place</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-white mb-4">TheCancelledCrewxXqc</div>
              <p className="text-gray-400 text-sm">
                A skilled team that demonstrated excellent problem-solving abilities and technical expertise in the CTF challenges.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Competition Overview */}
        <Card className="bg-gray-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-cyan-300 flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Competition Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Project Obsidian</h3>
                <p className="text-gray-300 mb-4">
                  The DEF CON 31 CTF featured Project Obsidian, a comprehensive cybersecurity challenge that tested participants&apos; skills in:
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Digital forensics and incident response</li>
                  <li>• Network security and traffic analysis</li>
                  <li>• Malware analysis and reverse engineering</li>
                  <li>• Web application security</li>
                  <li>• Cryptography and steganography</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Competition Highlights</h3>
                <div className="space-y-3">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-cyan-300 font-semibold">Multi-Stage Challenges</div>
                    <div className="text-gray-400 text-sm">Complex scenarios requiring multiple skill sets</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-purple-300 font-semibold">Real-World Scenarios</div>
                    <div className="text-gray-400 text-sm">Based on actual cybersecurity incidents</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-yellow-300 font-semibold">Team Collaboration</div>
                    <div className="text-gray-400 text-sm">Emphasis on teamwork and communication</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legacy and Impact */}
        <Card className="bg-gray-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-300">Legacy & Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Setting the Standard</h3>
                <p className="text-gray-300 mb-4">
                  The DEF CON 31 competition set new standards for CTF challenges, introducing innovative scenarios that would influence future competitions.
                </p>
                <p className="text-gray-300">
                  The success of Project Obsidian demonstrated the importance of realistic, multi-faceted cybersecurity challenges in developing practical skills.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Community Impact</h3>
                <p className="text-gray-300 mb-4">
                  The competition fostered a strong sense of community among cybersecurity professionals and enthusiasts.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Knowledge sharing and collaboration</li>
                  <li>• Networking opportunities</li>
                  <li>• Skill development and mentorship</li>
                  <li>• Industry recognition and career advancement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            href="/past-winners" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Past Winners
          </Link>
          <Link 
            href="/past-winners/defcon-32" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            DEF CON 32 Results
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 
"use client"

import { useState } from "react"
import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/archive/dc33/ui/card"
import { Button } from "@/components/archive/dc33/ui/button"
import { Badge } from "@/components/archive/dc33/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/archive/dc33/ui/tabs"
import {
  Users,
  ExternalLink,
  BookOpen,
  Shield,
  Target,
  Trophy,
  Timer,
  Sword,
  ChevronDown,
} from "lucide-react"

export default function CyberbitPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-linear-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px] animate-pulse" />

        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6">
              Cyberbit Presents
            </Badge>
            <div className="flex justify-center mb-6">
              <img 
                src="/cyberbit.png" 
                alt="Cyberbit Operation 33" 
                className="h-32 md:h-48 w-auto"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-300 mb-6">Two-Day Cyber Defense Challenge</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for defenders ready to test their skills in real-world attack scenarios. Compete solo in 14 timed 
              missions or join the team tournament with squads of 3 to 4 battling through full-scale investigations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xs border border-blue-500/30 rounded-lg p-4">
              <Timer className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">2 Days</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-indigo-500/30 rounded-lg p-4">
              <Target className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">14 Missions</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-purple-500/30 rounded-lg p-4">
              <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Solo & Teams</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-cyan-500/30 rounded-lg p-4">
              <Trophy className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Finals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            {/* Mobile Dropdown */}
            <div className="md:hidden mb-6">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg p-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-3 text-gray-300" />
                    <span className="text-gray-300 font-medium">Overview</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900/95 border border-gray-700 rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300 rounded-t-lg"
                    >
                      <BookOpen className="w-5 h-5 mr-3" />
                      <span className="font-medium">Overview</span>
                      <Badge className="ml-auto bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">Active</Badge>
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300"
                    >
                      <Target className="w-5 h-5 mr-3" />
                      <span className="font-medium">Missions</span>
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300"
                    >
                      <Trophy className="w-5 h-5 mr-3" />
                      <span className="font-medium">Tournament</span>
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300 rounded-b-lg"
                    >
                      <BookOpen className="w-5 h-5 mr-3" />
                      <span className="font-medium">Requirements</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:block">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-900/50 mb-8 gap-2">
                <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="missions" className="data-[state=active]:bg-indigo-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <Target className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Missions
                </TabsTrigger>
                <TabsTrigger value="tournament" className="data-[state=active]:bg-purple-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <Trophy className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Tournament
                </TabsTrigger>
                <TabsTrigger value="requirements" className="data-[state=active]:bg-cyan-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Requirements
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="space-y-8">
                {/* Introduction */}
                <Card className="bg-gray-900/50 border-blue-500/30">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      About Operation 33
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Operation 33 is Cyberbit&apos;s two-day cyber defense challenge at DEF CON 33&apos;s Blue Team Village, 
                      built for defenders ready to test their skills in real-world attack scenarios. Expect live 
                      environments, nonstop action, and real-world pressure that will push your defensive capabilities 
                      to the limit.
                    </p>

                    <div className="bg-linear-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/30 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <Sword className="w-6 h-6 text-indigo-400 mt-1 shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold text-indigo-300 mb-2">Only the Sharpest Survive</h3>
                          <p className="text-gray-300">
                            With first-to-solve wins and escalating difficulty across 14 timed missions, only the 
                            most skilled defenders will survive all challenges. This is not for the faint of heart 
                            - it&apos;s a true test of defensive cybersecurity expertise.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      This immersive, hands-on experience replicates real-world security operations and pushes participants to think like true threat hunters, SOC analysts, and incident responders.
                    </p>
                  </CardContent>
                </Card>

                {/* What to Expect Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-gray-900/50 border-blue-500/30 hover:border-blue-400/50 transition-colors">
                    <CardHeader>
                      <Timer className="w-12 h-12 text-blue-400 mb-4" />
                      <CardTitle className="text-blue-300">Timed Missions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Face 14 challenging missions with escalating difficulty and first-to-solve wins. 
                        Every second counts in this high-pressure environment.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• 14 timed challenges</li>
                        <li>• Escalating difficulty</li>
                        <li>• First-to-solve wins</li>
                        <li>• Real-time scoring</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-indigo-500/30 hover:border-indigo-400/50 transition-colors">
                    <CardHeader>
                      <Shield className="w-12 h-12 text-indigo-400 mb-4" />
                      <CardTitle className="text-indigo-300">Live Environments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Work with live, dynamic environments that simulate real-world attack scenarios 
                        and require immediate defensive responses.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Real-time scenarios</li>
                        <li>• Dynamic challenges</li>
                        <li>• Live threat simulation</li>
                        <li>• Immediate response required</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-purple-500/30 hover:border-purple-400/50 transition-colors">
                    <CardHeader>
                      <Users className="w-12 h-12 text-purple-400 mb-4" />
                      <CardTitle className="text-purple-300">Team Tournament</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Join squads of 3 to 4 defenders in full-scale investigations with top teams 
                        advancing to the finals for ultimate glory.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• 3-4 member teams</li>
                        <li>• Full-scale investigations</li>
                        <li>• Finals advancement</li>
                        <li>• Collaborative defense</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
                    <CardHeader>
                      <Trophy className="w-12 h-12 text-cyan-400 mb-4" />
                      <CardTitle className="text-cyan-300">Championship Finals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Top teams advance to the finals where the most skilled defenders compete for 
                        ultimate recognition and prizes.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Elite competition</li>
                        <li>• Advanced challenges</li>
                        <li>• Championship prizes</li>
                        <li>• Professional recognition</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Missions Tab */}
            <TabsContent value="missions">
              <Card className="bg-gray-900/50 border-indigo-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-indigo-300">14 Timed Missions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Compete in 14 challenging missions covering the full spectrum of defensive cybersecurity:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                        <h4 className="text-indigo-300 font-semibold mb-3">Incident Response</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Real-time incident handling</li>
                          <li>• Threat containment</li>
                          <li>• Evidence preservation</li>
                          <li>• Response coordination</li>
                          <li>• Recovery procedures</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                        <h4 className="text-indigo-300 font-semibold mb-3">Digital Forensics</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Memory forensics</li>
                          <li>• Disk image analysis</li>
                          <li>• Network forensics</li>
                          <li>• Timeline reconstruction</li>
                          <li>• Evidence correlation</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                        <h4 className="text-indigo-300 font-semibold mb-3">Threat Hunting</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Proactive threat detection</li>
                          <li>• IOC hunting</li>
                          <li>• Behavioral analysis</li>
                          <li>• Threat intelligence</li>
                          <li>• Hunting methodologies</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                        <h4 className="text-indigo-300 font-semibold mb-3">Cloud Security</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Cloud infrastructure defense</li>
                          <li>• Identity and access management</li>
                          <li>• Cloud-native security</li>
                          <li>• Multi-cloud environments</li>
                          <li>• Cloud forensics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tournament Tab */}
            <TabsContent value="tournament">
              <Card className="bg-gray-900/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-purple-300">Team Tournament</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Join the team tournament where squads of 3 to 4 battle through full-scale investigations:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-3">Team Formation</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• 3-4 member teams</li>
                          <li>• Diverse skill sets</li>
                          <li>• Collaborative strategy</li>
                          <li>• Role specialization</li>
                          <li>• Team coordination</li>
                        </ul>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-3">Full-Scale Investigations</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Complex scenarios</li>
                          <li>• Multi-stage attacks</li>
                          <li>• Cross-domain challenges</li>
                          <li>• Real-world complexity</li>
                          <li>• Time-sensitive decisions</li>
                        </ul>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-3">Advancement System</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Progressive elimination</li>
                          <li>• Performance-based advancement</li>
                          <li>• Competitive scoring</li>
                          <li>• Finals qualification</li>
                          <li>• Championship opportunity</li>
                        </ul>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-3">Championship Finals</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Elite competition</li>
                          <li>• Advanced challenges</li>
                          <li>• Professional recognition</li>
                          <li>• Industry networking</li>
                          <li>• Career opportunities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Requirements Tab */}
            <TabsContent value="requirements">
              <Card className="bg-gray-900/50 border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-cyan-300">Participation Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Essential requirements and preparation for Operation 33:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                        <h4 className="text-cyan-300 font-semibold mb-3">Technical Requirements</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• BYOD (Bring Your Own Device)</li>
                          <li>• Laptop with sufficient resources</li>
                          <li>• Network connectivity</li>
                          <li>• Required software tools</li>
                          <li>• Backup power solutions</li>
                        </ul>
                      </div>
                      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                        <h4 className="text-cyan-300 font-semibold mb-3">Skill Prerequisites</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Defensive cybersecurity experience</li>
                          <li>• Incident response knowledge</li>
                          <li>• Digital forensics skills</li>
                          <li>• Threat hunting capabilities</li>
                          <li>• Team collaboration skills</li>
                        </ul>
                      </div>
                      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                        <h4 className="text-cyan-300 font-semibold mb-3">Competition Format</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Two-day continuous challenge</li>
                          <li>• Solo and team categories</li>
                          <li>• Live scoring system</li>
                          <li>• Real-time leaderboards</li>
                          <li>• Finals qualification</li>
                        </ul>
                      </div>
                      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                        <h4 className="text-cyan-300 font-semibold mb-3">Preparation Tips</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Practice defensive techniques</li>
                          <li>• Familiarize with tools</li>
                          <li>• Build team chemistry</li>
                          <li>• Study past challenges</li>
                          <li>• Prepare for pressure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Defend?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join Operation 33 and prove you have what it takes to survive all 14 missions. 
            Are you ready to face the challenge and emerge as one of the sharpest defenders?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-linear-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Register for Operation 33
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
} 
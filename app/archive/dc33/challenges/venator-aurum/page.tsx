"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Target,
  Users,
  Clock,
  ExternalLink,
  Zap,
  BookOpen,
  Lock,
  Puzzle,
  Eye,
  Code,
  MapPin,
  Brain,
  ChevronDown,
  Trophy,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function VenatorAurumPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isCountdownComplete, setIsCountdownComplete] = useState(false)

  useEffect(() => {
    const targetDate = new Date('2025-08-08T10:00:00-07:00') // August 8, 2025 at 10:00 AM PST
    const now = new Date().getTime()
    const distance = targetDate.getTime() - now

    if (distance < 0) {
      setIsCountdownComplete(true)
    }
  }, [])
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-4">
              Blue Team Village Presents
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Venator Aurum
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-6">The Golden Hunter&apos;s Labyrinth</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              An enigmatic puzzle challenge that takes players through cryptography, code-breaking, and physical 
              security challenges in a thrilling labyrinth of mysteries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4">
              <Puzzle className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">25 Puzzles</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4">
              <Clock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">48 Hours</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">1-4 Members</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
              <Target className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">All Levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Access Section */}
      <section className="py-12 px-6 sm:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          {!isCountdownComplete ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Venator Aurum Starts August 8, 2025</h2>
              <p className="text-lg text-gray-300 mb-6">
                The CTF platforms will be available once the conference begins at 10:00 AM PST.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CTFd Platform - Disabled */}
                <Card className="bg-gray-900/50 border-gray-600/30 opacity-50">
                  <CardHeader className="text-center pb-4">
                    <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <CardTitle className="text-xl text-gray-400">CTFd Platform</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <p className="text-gray-400 text-sm">
                      Register your team and submit flags to earn points. This is where you'll track your progress 
                      and compete with other teams.
                    </p>
                    <Button disabled className="w-full bg-gray-600 text-gray-400 cursor-not-allowed text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      Available August 8, 2025
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Venator Aurum is Live! 🚀</h2>
              <p className="text-lg text-gray-300 mb-6">
                The conference has begun! Head to the platforms below to start your incident response journey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* CTFd Platform - Active */}
                <Card className="bg-gray-900/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <Trophy className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                    <CardTitle className="text-xl text-purple-300">CTFd Platform</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <p className="text-gray-300 text-sm">
                      Register your team and submit flags to earn points. This is where you'll track your progress 
                      and compete with other teams.
                    </p>
                    <Button 
                      disabled 
                      className="w-full bg-gray-500 text-gray-300 cursor-not-allowed font-semibold text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      CTFd Platform (Closed)
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Getting Started</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300">
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-1">Step 1: Register Your Team</h4>
                    <p>Visit the CTFd platform to register your team and get access to the challenge categories.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-1">Step 2: Access Wazuh SIEM</h4>
                    <p>Use the Wazuh platform to analyze logs and investigate the security incidents.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
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
                      <Badge className="ml-auto bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs">Active</Badge>
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300"
                    >
                      <Lock className="w-5 h-5 mr-3" />
                      <span className="font-medium">Cryptography</span>
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300"
                    >
                      <Code className="w-5 h-5 mr-3" />
                      <span className="font-medium">Code Breaking</span>
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300"
                    >
                      <MapPin className="w-5 h-5 mr-3" />
                      <span className="font-medium">Physical Security</span>
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300 rounded-b-lg"
                    >
                      <Eye className="w-5 h-5 mr-3" />
                      <span className="font-medium">The Labyrinth</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:block">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-900/50 mb-8 gap-2">
                <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Overview</span>
                  <span className="sm:hidden">Overview</span>
                </TabsTrigger>
                <TabsTrigger value="cryptography" className="data-[state=active]:bg-purple-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <Lock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Cryptography</span>
                  <span className="sm:hidden">Crypto</span>
                </TabsTrigger>
                <TabsTrigger value="codebreaking" className="data-[state=active]:bg-green-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <Code className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Code Breaking</span>
                  <span className="sm:hidden">Code</span>
                </TabsTrigger>
                <TabsTrigger value="physical" className="data-[state=active]:bg-yellow-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Physical Security</span>
                  <span className="sm:hidden">Physical</span>
                </TabsTrigger>
                <TabsTrigger value="labyrinth" className="data-[state=active]:bg-red-500 text-gray-300 hover:text-white text-xs md:text-sm col-span-2 md:col-span-1">
                  <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">The Labyrinth</span>
                  <span className="sm:hidden">Labyrinth</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="space-y-8">
                {/* Introduction */}
                <Card className="bg-gray-900/50 border-cyan-500/30">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Welcome to Venator Aurum
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Step into the mysterious world of Venator Aurum, where ancient secrets meet modern cryptography. 
                      This enigmatic puzzle challenge will test your ability to think laterally, decode hidden messages, 
                      and navigate through a labyrinth of interconnected mysteries.
                    </p>

                    <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold text-yellow-300 mb-2">The Golden Hunter&apos;s Quest</h3>
                          <p className="text-gray-300">
                            Follow the trail of the legendary Venator Aurum, a master puzzle solver whose secrets 
                            have been scattered across multiple domains. Each solved puzzle reveals a piece of the 
                            greater mystery, leading you deeper into the labyrinth.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      Whether you&apos;re a cryptography enthusiast, a code-breaking expert, or simply someone who 
                      loves solving complex puzzles, Venator Aurum offers a unique blend of technical challenges 
                      and creative problem-solving that will keep you engaged for hours.
                    </p>
                  </CardContent>
                </Card>

                {/* What to Expect Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
                    <CardHeader>
                      <Lock className="w-12 h-12 text-cyan-400 mb-4" />
                      <CardTitle className="text-cyan-300">Cryptographic Challenges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Master various cryptographic techniques from classical ciphers to modern encryption methods. 
                        Decode hidden messages and uncover secrets buried in encrypted communications.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Classical cipher analysis</li>
                        <li>• Modern encryption breaking</li>
                        <li>• Steganography detection</li>
                        <li>• Hash function analysis</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-purple-500/30 hover:border-purple-400/50 transition-colors">
                    <CardHeader>
                      <Code className="w-12 h-12 text-purple-400 mb-4" />
                      <CardTitle className="text-purple-300">Code Breaking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Analyze and reverse-engineer various code formats, from simple substitution ciphers to 
                        complex programming challenges that require creative thinking.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Programming puzzle solving</li>
                        <li>• Algorithm reverse engineering</li>
                        <li>• Logic puzzle analysis</li>
                        <li>• Pattern recognition</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-green-500/30 hover:border-green-400/50 transition-colors">
                    <CardHeader>
                      <MapPin className="w-12 h-12 text-green-400 mb-4" />
                      <CardTitle className="text-green-300">Physical Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Explore physical security concepts through virtual simulations and real-world scenarios 
                        that test your understanding of access control and security systems.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Access control bypass</li>
                        <li>• Security system analysis</li>
                        <li>• Physical surveillance</li>
                        <li>• Environmental security</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-yellow-500/30 hover:border-yellow-400/50 transition-colors">
                    <CardHeader>
                      <Brain className="w-12 h-12 text-yellow-400 mb-4" />
                      <CardTitle className="text-yellow-300">Creative Problem Solving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Think outside the box and apply creative problem-solving techniques to overcome 
                        seemingly impossible challenges and unlock hidden secrets.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Lateral thinking puzzles</li>
                        <li>• Creative solution finding</li>
                        <li>• Multi-step problem solving</li>
                        <li>• Abstract reasoning</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Cryptography Tab */}
            <TabsContent value="cryptography">
              <Card className="bg-gray-900/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-purple-300">Cryptographic Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Master the art of cryptography through a series of increasingly complex challenges:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-2">Classical Ciphers</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Caesar cipher variations</li>
                          <li>• Vigenère cipher analysis</li>
                          <li>• Substitution ciphers</li>
                          <li>• Transposition techniques</li>
                        </ul>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-2">Modern Cryptography</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• RSA key analysis</li>
                          <li>• Hash function cracking</li>
                          <li>• Symmetric encryption</li>
                          <li>• Digital signatures</li>
                        </ul>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-2">Steganography</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Image steganography</li>
                          <li>• Audio file analysis</li>
                          <li>• Text hiding techniques</li>
                          <li>• Metadata extraction</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Code Breaking Tab */}
            <TabsContent value="codebreaking">
              <Card className="bg-gray-900/50 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-green-300">Code Breaking Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Analyze and reverse-engineer various code formats and programming puzzles:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-3">Programming Puzzles</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Algorithm reverse engineering</li>
                          <li>• Code obfuscation analysis</li>
                          <li>• Logic puzzle solving</li>
                          <li>• Pattern recognition challenges</li>
                          <li>• Mathematical sequence analysis</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-3">Binary Analysis</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Binary pattern recognition</li>
                          <li>• Assembly code analysis</li>
                          <li>• Memory dump examination</li>
                          <li>• Reverse engineering challenges</li>
                          <li>• Malware code analysis</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-3">Web Technologies</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• JavaScript obfuscation</li>
                          <li>• HTML/CSS puzzle solving</li>
                          <li>• API reverse engineering</li>
                          <li>• Web application analysis</li>
                          <li>• Client-side security challenges</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-3">Data Analysis</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Data format analysis</li>
                          <li>• File format reverse engineering</li>
                          <li>• Database query optimization</li>
                          <li>• Statistical pattern recognition</li>
                          <li>• Time series analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Physical Security Tab */}
            <TabsContent value="physical">
              <Card className="bg-gray-900/50 border-yellow-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-yellow-300">Physical Security Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Explore physical security concepts through virtual simulations and real-world scenarios:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-3">Access Control Systems</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• RFID card analysis</li>
                          <li>• Biometric system bypass</li>
                          <li>• Key card cloning</li>
                          <li>• PIN code cracking</li>
                          <li>• Door lock mechanisms</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-3">Surveillance Systems</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• CCTV system analysis</li>
                          <li>• Camera blind spot identification</li>
                          <li>• Motion sensor bypass</li>
                          <li>• Alarm system manipulation</li>
                          <li>• Security perimeter analysis</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-3">Environmental Security</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Building layout analysis</li>
                          <li>• Escape route planning</li>
                          <li>• Environmental monitoring</li>
                          <li>• Facility security assessment</li>
                          <li>• Physical barrier analysis</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-3">Social Engineering</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Tailgating scenarios</li>
                          <li>• Impersonation challenges</li>
                          <li>• Social manipulation puzzles</li>
                          <li>• Psychological manipulation</li>
                          <li>• Human factor analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* The Labyrinth Tab */}
            <TabsContent value="labyrinth">
              <Card className="bg-gray-900/50 border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-300">The Labyrinth of Mysteries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Navigate through the interconnected maze of puzzles where each solved challenge reveals 
                      clues to the next. The labyrinth is designed to test your persistence, creativity, and 
                      ability to think laterally across multiple domains.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-3">Progressive Complexity</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Increasingly difficult challenges</li>
                          <li>• Multi-step puzzle sequences</li>
                          <li>• Interconnected problem solving</li>
                          <li>• Cumulative knowledge building</li>
                          <li>• Advanced technique integration</li>
                        </ul>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-3">Hidden Secrets</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Easter egg discoveries</li>
                          <li>• Secret passage identification</li>
                          <li>• Hidden message decoding</li>
                          <li>• Concealed clue locations</li>
                          <li>• Bonus challenge unlocking</li>
                        </ul>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-3">Cross-Domain Integration</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Cryptography meets code breaking</li>
                          <li>• Physical security with digital analysis</li>
                          <li>• Web technologies with steganography</li>
                          <li>• Mathematical puzzles with programming</li>
                          <li>• Creative thinking with technical skills</li>
                        </ul>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-3">The Golden Hunter&apos;s Legacy</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Ancient puzzle techniques</li>
                          <li>• Historical cryptography methods</li>
                          <li>• Traditional code breaking</li>
                          <li>• Classical problem solving</li>
                          <li>• Time-tested security concepts</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-500/10 to-cyan-500/10 border border-red-500/30 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <Eye className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold text-cyan-300 mb-2">Navigating the Labyrinth</h3>
                          <p className="text-gray-300">
                            Each puzzle solved opens new pathways through the labyrinth. Some challenges may seem 
                            impossible at first, but remember: the Venator Aurum left clues for those who know how 
                            to look. Trust your instincts, think creatively, and don&apos;t be afraid to explore 
                            unconventional solutions.
                          </p>
                        </div>
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
      {/* <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Enter the Labyrinth?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Begin your journey as the next Venator Aurum and prove your worth as a master puzzle solver. 
            The golden secrets await those brave enough to seek them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Enter the Labyrinth
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Need Help?
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
"use client"

import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Target,
  Users,
  Clock,
  ExternalLink,
  Zap,
  BookOpen,
  Trophy,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { KillChainTabs, projectObsidianKillChains } from "@/components/archive/dc33/kill-chain-tabs"

export default function ProjectObsidianPage() {
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
      <section className="pt-24 pb-12 px-4 bg-linear-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px] animate-pulse" />

        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
              Blue Team Village Presents
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Project Obsidian
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">Flagship Incident Response CTF</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immerse yourself in realistic security incidents that mirror real-world threats. Practice containment, 
              analysis, and remediation techniques used by professional incident response teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xs border border-purple-500/30 rounded-lg p-4">
              <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">224 Challenges</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-cyan-500/30 rounded-lg p-4">
              <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">48 Hours</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-green-500/30 rounded-lg p-4">
              <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">1-4 Members</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-yellow-500/30 rounded-lg p-4">
              <Target className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">All Levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Access Section */}
      <section className="py-12 px-6 sm:px-8 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          {!isCountdownComplete ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Project Obsidian Starts August 8, 2025</h2>
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

                {/* Wazuh Platform - Disabled */}
                <Card className="bg-gray-900/50 border-gray-600/30 opacity-50">
                  <CardHeader className="text-center pb-4">
                    <Shield className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <CardTitle className="text-xl text-gray-400">Wazuh SIEM</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <p className="text-gray-400 text-sm">
                      Access the Security Information and Event Management platform to analyze logs, 
                      investigate incidents, and find clues to solve the challenges.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Project Obsidian is Live! 🚀</h2>
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
                    <Button disabled className="w-full bg-gray-500 text-gray-300 cursor-not-allowed font-semibold text-sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      CTFd Platform (Closed)
                    </Button>
                  </CardContent>
                </Card>

                {/* Wazuh Platform - Active */}
                <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                    <CardTitle className="text-xl text-cyan-300">Wazuh SIEM</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <p className="text-gray-300 text-sm">
                      Access the Security Information and Event Management platform to analyze logs, 
                      investigate incidents, and find clues to solve the challenges.
                    </p>
                      <Button disabled className="w-full bg-gray-500 text-gray-300 cursor-not-allowed font-semibold text-sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Wazuh SIEM (Closed)
                      </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-linear-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Getting Started</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300">
                    <div>
                      <Link href="https://ctfd.dc33.blueteamvillage.org/register">
                        <h4 className="font-semibold text-cyan-300 mb-1">Step 1: Register Your Team</h4>
                        <p>Visit the CTFd platform to register your team and get access to the challenge categories.</p>
                      </Link>
                  </div>
                    <div>
                      <Link href="https://wazuh.dc33.blueteamvillage.org/">
                        <h4 className="font-semibold text-green-300 mb-1">Step 2: Access Wazuh SIEM</h4>
                        <p>Use the Wazuh platform to analyze logs and investigate the security incidents.</p>
                      </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>


      {/* Main Content Tabs */}
      <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            {/* Kill Chain Tabs */}
            <KillChainTabs killChains={projectObsidianKillChains} />

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="space-y-8">
                {/* Introduction */}
                <Card className="bg-gray-900/50 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      About Project Obsidian
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Developed by BTV&apos;s Project Obsidian team, this CTF offers an immersive incident response exercise
                      designed to challenge and engage participants of all skill levels. Dive into a detailed, realistic
                      scenario that tests your ability to handle complex security incidents and sharpen your cyber
                      defense skills.
                    </p>

                    <div className="bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <Zap className="w-6 h-6 text-yellow-400 mt-1 shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Enhanced Experience</h3>
                          <p className="text-gray-300">
                            This year, we&apos;re enhancing the experience with the{" "}
                            <strong className="text-cyan-300">Digital Breadcrumbs and Village Voyages</strong>, partnering with the OWASP and Red Team Rumble village to provide a more immersive experience.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      Whether you&apos;re new to cybersecurity or a seasoned expert, join us for a dynamic and rewarding
                      experience.
                      <span className="text-cyan-300 font-semibold">
                        {" "}
                        Blue Team Village proudly presents… Project Obsidian!
                      </span>
                    </p>
                  </CardContent>
                </Card>

                {/* What to Expect Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-gray-900/50 border-purple-500/30 hover:border-purple-400/50 transition-colors">
                    <CardHeader>
                      <Shield className="w-12 h-12 text-purple-400 mb-4" />
                      <CardTitle className="text-purple-300">Incident Response Scenarios</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Immerse yourself in realistic security incidents that mirror real-world threats. Practice
                        containment, analysis, and remediation techniques used by professional incident response teams.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Malware analysis and containment</li>
                        <li>• Network intrusion investigation</li>
                        <li>• Digital forensics challenges</li>
                        <li>• Timeline reconstruction</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
                    <CardHeader>
                      <Target className="w-12 h-12 text-cyan-400 mb-4" />
                      <CardTitle className="text-cyan-300">Downloadable Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Access downloadable content from our S3 bucket for offline analysis. If you prefer to use your own 
                        SIEM or search capabilities, you can download the data and analyze it with your preferred tools.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• S3 bucket data access</li>
                        <li>• Offline analysis support</li>
                        <li>• Custom SIEM integration</li>
                        <li>• Flexible investigation tools</li>
                      </ul>
                      <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                        <p className="text-sm text-cyan-300 font-semibold mb-1">Data Source:</p>
                        <a 
                          href="https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/index.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 hover:text-cyan-300 underline break-all hover:wrap-break-word"
                        >
                          https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/index.html
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-green-500/30 hover:border-green-400/50 transition-colors">
                    <CardHeader>
                      <Users className="w-12 h-12 text-green-400 mb-4" />
                      <CardTitle className="text-green-300">Skill Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Designed for all experience levels, from cybersecurity newcomers to seasoned professionals.
                        Progressive difficulty ensures everyone can learn and contribute.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Beginner-friendly introductory challenges</li>
                        <li>• Intermediate threat hunting exercises</li>
                        <li>• Advanced persistent threat scenarios</li>
                        <li>• Expert-level forensics investigations</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-yellow-500/30 hover:border-yellow-400/50 transition-colors">
                    <CardHeader>
                      <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                      <CardTitle className="text-yellow-300">Real-World Application</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Every challenge is based on actual security incidents and industry best practices. Gain
                        practical experience that directly applies to professional cybersecurity roles.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Industry-standard tools and techniques</li>
                        <li>• Current threat landscape scenarios</li>
                        <li>• Professional workflow simulation</li>
                        <li>• Career-relevant skill building</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}

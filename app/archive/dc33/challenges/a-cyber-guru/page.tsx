"use client"

import { useState } from "react"
import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Clock,
  ExternalLink,
  BookOpen,
  Shield,
  Target,
  Brain,
  MapPin,
  AlertTriangle,
  Activity,
  Server,
  ChevronDown,
} from "lucide-react"

export default function ACyberGuruPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-6">
              A Cyber Guru CTF
            </Badge>
            <div className="flex justify-center mb-6">
              <img 
                src="/cyber-guru.png" 
                alt="A Cyber Guru CTF" 
                className="h-32 md:h-48 w-auto"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-300 mb-6">Real-World Security Operations CTF</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Designed for cybersecurity professionals and blue teamers ready to challenge themselves in realistic, 
              high-pressure scenarios that replicate real-world security operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-4">
              <Target className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Real-World Scenarios</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/30 rounded-lg p-4">
              <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">High-Pressure</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
              <Users className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Professional Focus</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <Brain className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Advanced Skills</p>
            </div>
          </div>
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
                      <Badge className="ml-auto bg-red-500/20 text-red-300 border-red-500/30 text-xs">Active</Badge>
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300"
                    >
                      <Target className="w-5 h-5 mr-3" />
                      <span className="font-medium">Investigations</span>
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300"
                    >
                      <Activity className="w-5 h-5 mr-3" />
                      <span className="font-medium">SOC Challenges</span>
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors text-gray-300 rounded-b-lg"
                    >
                      <BookOpen className="w-5 h-5 mr-3" />
                      <span className="font-medium">Resources</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:block">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-900/50 mb-8 gap-2">
                <TabsTrigger value="overview" className="data-[state=active]:bg-red-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="investigations" className="data-[state=active]:bg-orange-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <Target className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Investigations</span>
                  <span className="sm:hidden">Invest</span>
                </TabsTrigger>
                <TabsTrigger value="soc" className="data-[state=active]:bg-yellow-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <Activity className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">SOC Challenges</span>
                  <span className="sm:hidden">SOC</span>
                </TabsTrigger>
                <TabsTrigger value="resources" className="data-[state=active]:bg-green-500 text-gray-300 hover:text-white text-xs md:text-sm">
                  <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Resources
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="space-y-8">
                {/* Introduction */}
                <Card className="bg-gray-900/50 border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      Professional Cybersecurity Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      The A Cyber Guru CTF is designed for cybersecurity professionals and blue teamers ready to 
                      challenge themselves in realistic, high-pressure scenarios. This immersive, hands-on experience 
                      replicates real-world security operations and pushes participants to think like true threat 
                      hunters, SOC analysts, and incident responders.
                    </p>

                    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold text-orange-300 mb-2">Real-World Pressure</h3>
                          <p className="text-gray-300">
                            Experience the intensity of real security operations with time-sensitive investigations, 
                            complex threat scenarios, and the pressure to make critical decisions that could impact 
                            organizational security.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      Whether you&apos;re a seasoned security professional or an aspiring blue teamer, this CTF will 
                      test your analytical skills, technical expertise, and ability to work under pressure in 
                      scenarios that mirror actual cybersecurity incidents.
                    </p>
                  </CardContent>
                </Card>

                {/* What to Expect Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-gray-900/50 border-red-500/30 hover:border-red-400/50 transition-colors">
                    <CardHeader>
                      <MapPin className="w-12 h-12 text-red-400 mb-4" />
                      <CardTitle className="text-red-300">Geolocation & OSINT</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Master advanced geolocation techniques and open-source intelligence gathering to track 
                        threat actors and uncover hidden connections.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• IP geolocation analysis</li>
                        <li>• Social media intelligence</li>
                        <li>• Infrastructure mapping</li>
                        <li>• Threat actor profiling</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-orange-500/30 hover:border-orange-400/50 transition-colors">
                    <CardHeader>
                      <Shield className="w-12 h-12 text-orange-400 mb-4" />
                      <CardTitle className="text-orange-300">Threat Intelligence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Enrich threat intelligence data and correlate indicators of compromise to build comprehensive 
                        threat profiles and understand attack patterns.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• IOC correlation</li>
                        <li>• Threat intelligence enrichment</li>
                        <li>• Attack pattern analysis</li>
                        <li>• Risk assessment</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-yellow-500/30 hover:border-yellow-400/50 transition-colors">
                    <CardHeader>
                      <Server className="w-12 h-12 text-yellow-400 mb-4" />
                      <CardTitle className="text-yellow-300">C2 Detection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Identify and analyze command-and-control infrastructure, understanding how threat actors 
                        maintain persistence and control over compromised systems.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• C2 infrastructure analysis</li>
                        <li>• Network traffic analysis</li>
                        <li>• Malware communication</li>
                        <li>• Persistence mechanisms</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-green-500/30 hover:border-green-400/50 transition-colors">
                    <CardHeader>
                      <Activity className="w-12 h-12 text-green-400 mb-4" />
                      <CardTitle className="text-green-300">PCAP Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Analyze packet capture data from malware-infected devices to understand attack vectors, 
                        data exfiltration, and network behavior patterns.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Traffic analysis</li>
                        <li>• Malware behavior</li>
                        <li>• Data exfiltration detection</li>
                        <li>• Network forensics</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Investigations Tab */}
            <TabsContent value="investigations">
              <Card className="bg-gray-900/50 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-orange-300">Investigation Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Participants will dive into investigations involving multiple cybersecurity domains:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h4 className="text-orange-300 font-semibold mb-3">Geolocation & OSINT Analysis</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• IP geolocation techniques</li>
                          <li>• Social media intelligence</li>
                          <li>• Infrastructure mapping</li>
                          <li>• Threat actor location tracking</li>
                          <li>• Digital footprint analysis</li>
                        </ul>
                      </div>
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h4 className="text-orange-300 font-semibold mb-3">Threat Intelligence & IOC Correlation</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Indicator of compromise analysis</li>
                          <li>• Threat intelligence enrichment</li>
                          <li>• Attack pattern correlation</li>
                          <li>• Risk assessment and scoring</li>
                          <li>• Threat actor profiling</li>
                        </ul>
                      </div>
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h4 className="text-orange-300 font-semibold mb-3">Command-and-Control Detection</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• C2 infrastructure identification</li>
                          <li>• Network traffic analysis</li>
                          <li>• Malware communication patterns</li>
                          <li>• Persistence mechanism detection</li>
                          <li>• Command channel analysis</li>
                        </ul>
                      </div>
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h4 className="text-orange-300 font-semibold mb-3">PCAP Traffic Analysis</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Malware-infected device analysis</li>
                          <li>• Network forensics</li>
                          <li>• Data exfiltration detection</li>
                          <li>• Protocol analysis</li>
                          <li>• Anomaly detection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* SOC Challenges Tab */}
            <TabsContent value="soc">
              <Card className="bg-gray-900/50 border-yellow-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-yellow-300">Virtual SOC Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Experience the intensity of Security Operations Center work through realistic challenges:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-3">Alarm Triage</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Security alert prioritization</li>
                          <li>• False positive identification</li>
                          <li>• Incident classification</li>
                          <li>• Response time optimization</li>
                          <li>• Alert correlation</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-3">Root Cause Analysis</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Attack chain reconstruction</li>
                          <li>• Vulnerability identification</li>
                          <li>• System compromise analysis</li>
                          <li>• Attack vector determination</li>
                          <li>• Impact assessment</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-3">Incident Reporting</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Executive summary creation</li>
                          <li>• Technical documentation</li>
                          <li>• Timeline reconstruction</li>
                          <li>• Evidence preservation</li>
                          <li>• Remediation recommendations</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-3">Malware Behavior Inspection</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Dynamic malware analysis</li>
                          <li>• Behavioral pattern identification</li>
                          <li>• System call monitoring</li>
                          <li>• Registry and file system changes</li>
                          <li>• Network communication analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources">
              <Card className="bg-gray-900/50 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-green-300">Professional Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Essential tools and techniques for professional cybersecurity investigations:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-3">OSINT Tools</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Shodan and Censys</li>
                          <li>• Maltego and SpiderFoot</li>
                          <li>• Social media intelligence</li>
                          <li>• Domain and IP analysis</li>
                          <li>• Threat intelligence platforms</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-3">Network Analysis</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Wireshark and tcpdump</li>
                          <li>• NetworkMiner and CapAnalysis</li>
                          <li>• Bro/Zeek and Suricata</li>
                          <li>• NetFlow analysis tools</li>
                          <li>• Traffic pattern recognition</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-3">Malware Analysis</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Cuckoo Sandbox and Joe Sandbox</li>
                          <li>• IDA Pro and Ghidra</li>
                          <li>• Process Monitor and Process Hacker</li>
                          <li>• RegShot and API Monitor</li>
                          <li>• YARA rules and signatures</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-3">SOC Tools</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• SIEM platforms (Splunk, ELK)</li>
                          <li>• EDR and XDR solutions</li>
                          <li>• Threat hunting platforms</li>
                          <li>• Incident response tools</li>
                          <li>• Case management systems</li>
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
      {/* <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready for the Challenge?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Test your skills in realistic, high-pressure scenarios and prove yourself as a cybersecurity professional. 
            Are you ready to think like a true threat hunter and SOC analyst?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Register for CTF
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-400/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
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
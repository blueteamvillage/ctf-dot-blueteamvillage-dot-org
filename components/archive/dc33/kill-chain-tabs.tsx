"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  BookOpen,
  ChevronDown,
} from "lucide-react"

interface KillChainData {
  id: string
  title: string
  description: string
  color: string
  focusAreas: string[]
  challenges: string[]
  skillsDeveloped: string[]
}

interface KillChainTabsProps {
  killChains: KillChainData[]
  className?: string
}

export function KillChainTabs({ killChains, className = "" }: KillChainTabsProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const allTabs = [
    { id: "overview", title: "Overview", icon: BookOpen, color: "purple" },
    ...killChains.map(chain => ({ 
      id: chain.id, 
      title: chain.title,
      icon: Target, 
      color: chain.color 
    }))
  ]

  const activeTabData = allTabs.find(tab => tab.id === activeTab) || allTabs[0]

  return (
    <div className={`w-full ${className}`}>
      {/* Mobile Dropdown */}
      <div className="md:hidden mb-6">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg p-4 flex items-center justify-between text-left"
          >
            <div className="flex items-center">
              <activeTabData.icon className="w-5 h-5 mr-3 text-gray-300" />
              <span className="text-gray-300 font-medium">{activeTabData.title}</span>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900/95 border border-gray-700 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {allTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setIsDropdownOpen(false)
                  }}
                  className={`w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors ${
                    activeTab === tab.id ? 'bg-gray-800/50 text-white' : 'text-gray-300'
                  } ${tab.id === allTabs[0].id ? 'rounded-t-lg' : ''} ${tab.id === allTabs[allTabs.length - 1].id ? 'rounded-b-lg' : ''}`}
                >
                  <tab.icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{tab.title}</span>
                  {activeTab === tab.id && (
                    <Badge className="ml-auto bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                      Active
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:block">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className={`grid w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-${Math.min(allTabs.length, 6)} bg-gray-900/50 mb-8 gap-2`}>
            {allTabs.map((tab) => (
              <TabsTrigger 
                key={tab.id}
                value={tab.id} 
                className={`data-[state=active]:bg-${tab.color}-500 text-gray-300 hover:text-white text-xs lg:text-sm`}
              >
                <tab.icon className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span className="hidden sm:inline">{tab.title}</span>
                <span className="sm:hidden">{tab.title.length > 10 ? tab.title.split(' ')[0] : tab.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

      {/* Overview Tab - This will be handled by the parent component */}
      <TabsContent value="overview">
        {/* Overview content will be passed as children */}
      </TabsContent>

      {/* Kill Chain Tabs */}
      {killChains.map((chain) => (
        <TabsContent key={chain.id} value={chain.id}>
          <Card className={`bg-gray-900/50 border-${chain.color}-500/30`}>
            <CardHeader>
              <CardTitle className={`text-3xl font-bold text-${chain.color}-300`}>
                {chain.id === "killchain5" ? "Digital Breadcrumbs and Village Voyages" : chain.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-300">
                  {chain.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`bg-${chain.color}-500/10 border border-${chain.color}-500/30 rounded-lg p-4`}>
                    <h4 className={`text-${chain.color}-300 font-semibold mb-2`}>Focus Areas</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {chain.focusAreas.map((area, index) => (
                        <li key={index}>• {area}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-${chain.color}-500/10 border border-${chain.color}-500/30 rounded-lg p-4`}>
                    <h4 className={`text-${chain.color}-300 font-semibold mb-2`}>Challenges</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {chain.challenges.map((challenge, index) => (
                        <li key={index}>• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-${chain.color}-500/10 border border-${chain.color}-500/30 rounded-lg p-4`}>
                    <h4 className={`text-${chain.color}-300 font-semibold mb-2`}>Skills Developed</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {chain.skillsDeveloped.map((skill, index) => (
                        <li key={index}>• {skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
        </Tabs>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden">
        {activeTab === "overview" ? (
          <div>
            {/* Overview content will be passed as children */}
          </div>
        ) : (
          killChains.map((chain) => (
            chain.id === activeTab && (
              <Card key={chain.id} className={`bg-gray-900/50 border-${chain.color}-500/30`}>
                <CardHeader>
                  <CardTitle className={`text-3xl font-bold text-${chain.color}-300`}>
                    {chain.id === "killchain5" ? "Digital Breadcrumbs and Village Voyages" : chain.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      {chain.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className={`bg-${chain.color}-500/10 border border-${chain.color}-500/30 rounded-lg p-4`}>
                        <h4 className={`text-${chain.color}-300 font-semibold mb-2`}>Focus Areas</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {chain.focusAreas.map((area, index) => (
                            <li key={index}>• {area}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`bg-${chain.color}-500/10 border border-${chain.color}-500/30 rounded-lg p-4`}>
                        <h4 className={`text-${chain.color}-300 font-semibold mb-2`}>Challenges</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {chain.challenges.map((challenge, index) => (
                            <li key={index}>• {challenge}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`bg-${chain.color}-500/10 border border-${chain.color}-500/30 rounded-lg p-4`}>
                        <h4 className={`text-${chain.color}-300 font-semibold mb-2`}>Skills Developed</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {chain.skillsDeveloped.map((skill, index) => (
                            <li key={index}>• {skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          ))
        )}
      </div>
    </div>
  )
}

// Predefined kill chain data for Project Obsidian
export const projectObsidianKillChains: KillChainData[] = [
  {
    id: "killchain1",
    title: "Kill Chain 1",
    description: "Uncover an adversary's full compromise of multiple Windows workstations. Investigate the adversary's activities from reconnaissance to credential theft, persistence, and privilege escalation while defenders trace their steps through forensic artifacts, browser activity, and Active Directory abuse.",
    color: "red",
    focusAreas: [
      "Windows forensics",
      "Browser artifact analysis", 
      "Active Directory investigation",
      "Credential theft detection"
    ],
    challenges: [
      "25+ challenges",
      "Progressive difficulty",
      "Real-world scenarios",
      "Hands-on practice"
    ],
    skillsDeveloped: [
      "Incident response",
      "Digital forensics",
      "Threat hunting",
      "Analysis techniques"
    ]
  },
  {
    id: "killchain2",
    title: "Kill Chain 2", 
    description: "Track a remote access trojan (RAT) enabled social engineering attack, uses phishing, RMM tools, and AD recon to compromise a user and explore lateral movement.",
    color: "orange",
    focusAreas: [
      "RAT analysis",
      "Social engineering detection",
      "Phishing investigation", 
      "Lateral movement tracking"
    ],
    challenges: [
      "20+ challenges",
      "Network analysis",
      "Malware reverse engineering",
      "Behavioral analysis"
    ],
    skillsDeveloped: [
      "Malware analysis",
      "Network forensics",
      "Threat intelligence",
      "Incident containment"
    ]
  },
  {
    id: "killchain3",
    title: "Kill Chain 3",
    description: "Challenges players to investigate a web application attack targeting a vulnerable web application, where the adversary exploits vulnerabilities, all while evading detection across proxy headers and misaligned logs.",
    color: "yellow",
    focusAreas: [
      "Web application security",
      "Log analysis",
      "Proxy investigation",
      "Vulnerability assessment"
    ],
    challenges: [
      "15+ challenges",
      "Web exploitation",
      "Detection evasion",
      "Advanced persistence"
    ],
    skillsDeveloped: [
      "Web security",
      "Log correlation",
      "Attack detection",
      "Security monitoring"
    ]
  },
  {
    id: "killchain4",
    title: "Kill Chain 4",
    description: "Follows a convincing phishing attack that tricks a corporate employee into opening a malicious attachment, triggering macro-based malware, persistence via scheduled tasks, DNS tunneling, and stealthy exfiltration. Challenging defenders to trace every log cleared, service modified, and file exfiltrated in the wake of the compromise.",
    color: "green",
    focusAreas: [
      "Phishing investigation",
      "Macro malware analysis",
      "DNS tunneling detection",
      "Data exfiltration tracking"
    ],
    challenges: [
      "16+ challenges",
      "Advanced persistence",
      "Covert communication",
      "Evidence preservation"
    ],
    skillsDeveloped: [
      "Advanced forensics",
      "Threat hunting",
      "Incident response",
      "Evidence analysis"
    ]
  },
  {
    id: "killchain5",
    title: "Kill Chain 5",
    description: "Kill Chain #5 takes players on a journey across multiple village domains, challenging them to uncover user behaviors, downloaded files, browser artifacts, and security community trivia—all while stitching together clues from file servers, local activity, and curiosity-fueled internet footprints.",
    color: "blue",
    focusAreas: [
      "Multiple village domains",
      "User behavior analysis",
      "Downloaded file tracking",
      "Browser artifact examination",
      "Security community research"
    ],
    challenges: [
      "Cross-domain investigation",
      "Digital footprint analysis",
      "Evidence correlation",
      "Community intelligence",
      "Multi-source investigation"
    ],
    skillsDeveloped: [
      "Cross-domain analysis",
      "Digital footprint tracking",
      "Evidence correlation",
      "Community intelligence",
      "Multi-source investigation"
    ]
  }
] 
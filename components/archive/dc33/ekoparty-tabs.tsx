"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Terminal,
  ChevronDown,
  CheckCircle,
  Copy,
} from "lucide-react"

interface TabData {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  description: string
}

interface EkopartyData {
  id: string
  title: string
  description: string
  color: string
  focusAreas: string[]
  challenges: string[]
  skillsDeveloped: string[]
}


interface EkopartyTabsProps {
  children: React.ReactNode
  className?: string
}

export function EkopartyTabs({ children, className = "" }: EkopartyTabsProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const tabs = [
    { 
      id: "overview", 
      title: "Overview", 
      icon: BookOpen, 
      color: "blue",
      description: "Learn about the Ekoparty 2025 Bluespace challenge and what you'll accomplish"
    },
    { 
      id: "installation", 
      title: "Installation", 
      icon: Terminal, 
      color: "cyan",
      description: "Step-by-step guide to install and configure Wazuh SIEM on Apple Silicon Macs"
    }
  ]

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0]

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
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900/95 border border-gray-700 rounded-lg shadow-lg z-50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setIsDropdownOpen(false)
                  }}
                  className={`w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors ${
                    activeTab === tab.id ? 'bg-gray-800/50 text-white' : 'text-gray-300'
                  } ${tab.id === tabs[0].id ? 'rounded-t-lg' : ''} ${tab.id === tabs[tabs.length - 1].id ? 'rounded-b-lg' : ''}`}
                >
                  <tab.icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{tab.title}</span>
                  {activeTab === tab.id && (
                    <Badge className="ml-auto bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
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
          <TabsList className="grid w-full grid-cols-2 bg-gray-900/50 mb-8 gap-2">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id}
                value={tab.id} 
                className={`data-[state=active]:bg-${tab.color}-500 text-gray-300 hover:text-white text-xs md:text-sm`}
              >
                <tab.icon className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">{tab.title}</span>
                <span className="sm:hidden">{tab.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="overview">
            {children}
          </TabsContent>

          <TabsContent value="installation">
            {children}
          </TabsContent>
        </Tabs>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden">
        {children}
      </div>
    </div>
  )
}

// Tab content components for better organization
export function OverviewContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      {children}
    </div>
  )
}

export function InstallationContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      {children}
    </div>
  )
}

// Installation steps component for better organization
export function InstallationSteps() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="space-y-8">
      {/* CTF Setup Guide Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-300 mb-4">CTF Setup Guide</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Follow these step-by-step instructions to set up your Wazuh SIEM environment for the Ekoparty 2025 Bluespace challenge.
        </p>
      </div>

      {/* Prerequisites */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-cyan-300">Prerequisites</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">System Requirements</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Windows: 10 or later</li>
              <li>• macOS: 12.0 (Monterey) or later</li>
              <li>• RAM: Minimum 8GB, Recommended 12GB+</li>
              <li>• Storage: 100GB+ free space</li>
              <li>• Architecture: Apple Silicon (M1/M2/M3) or x86_64</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Required Software for Windows</h3>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <h4 className="text-yellow-300 font-semibold mb-2">Perform the following steps:</h4>
            <ol className="text-sm text-gray-300 space-y-1">
              <li>1. Download <a href="https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/DC33/CTF-OBSIDIAN/SCRIPTS/Setup-WazuhCTF.ps1" className="text-cyan-400 hover:text-cyan-300 underline">Setup-WazuhCTF.ps1</a></li>
              <li>2. Run the script as Administrator</li>
              <li>3. Follow the prompts to install Wazuh SIEM and configure the CTF environment</li>
            </ol>
          </div>
            <h3 className="text-lg font-semibold text-white mb-3">Required Software for macOS</h3>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Install Homebrew and Docker</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(
                    `# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install required tools
brew install docker docker-compose`,
                    "prereq-1"
                  )}
                  className="text-xs"
                >
                  {copiedCode === "prereq-1" ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <pre className="text-xs text-gray-300 overflow-x-auto">
{`# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install required tools
brew install docker docker-compose`}
              </pre>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <h4 className="text-yellow-300 font-semibold mb-2">Docker Desktop Setup</h4>
            <ol className="text-sm text-gray-300 space-y-1">
              <li>1. Download Docker Desktop for Mac (Apple Silicon)</li>
              <li>2. Enable "Use Rosetta for x86/amd64 emulation"</li>
              <li>3. Allocate 12GB+ RAM</li>
              <li>4. Allocate 6+ CPU cores</li>
              <li>5. Allocate 100 GB of Disk usage</li>
              <li>6. Ensure Docker Desktop is running before proceeding</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Step 1: Clone Repository */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-cyan-300">Step 1: Clone the Repository</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Clone Wazuh Docker repository</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(
                  `git clone https://github.com/wazuh/wazuh-docker.git -b v4.13.1
cd wazuh-docker/single-node`,
                  "step1"
                )}
                className="text-xs"
              >
                {copiedCode === "step1" ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </Button>
            </div>
            <pre className="text-xs text-gray-300 overflow-x-auto">
{`git clone https://github.com/wazuh/wazuh-docker.git -b v4.13.1
cd wazuh-docker/single-node`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Step 2: Generate Certificates */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-cyan-300">Step 2: Generate Certificates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Generate SSL certificates</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(
                  `# Generate SSL certificates
docker compose -f generate-indexer-certs.yml run --rm generator

# Fix permission issues
chmod 755 config/wazuh_indexer_ssl_certs/
chmod 644 config/wazuh_indexer_ssl_certs/*.pem
chmod 644 config/wazuh_indexer_ssl_certs/*.key

# Create missing root-ca-manager files (required for ARM Mac)
cp config/wazuh_indexer_ssl_certs/root-ca.pem config/wazuh_indexer_ssl_certs/root-ca-manager.pem
cp config/wazuh_indexer_ssl_certs/root-ca.key config/wazuh_indexer_ssl_certs/root-ca-manager.key`,
                  "step2"
                )}
                className="text-xs"
              >
                {copiedCode === "step2" ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </Button>
            </div>
            <pre className="text-xs text-gray-300 overflow-x-auto">
{`# Generate SSL certificates
docker compose -f generate-indexer-certs.yml run --rm generator

# Fix permission issues
chmod 755 config/wazuh_indexer_ssl_certs/
chmod 644 config/wazuh_indexer_ssl_certs/*.pem
chmod 644 config/wazuh_indexer_ssl_certs/*.key

# Create missing root-ca-manager files (required for ARM Mac)
cp config/wazuh_indexer_ssl_certs/root-ca.pem config/wazuh_indexer_ssl_certs/root-ca-manager.pem
cp config/wazuh_indexer_ssl_certs/root-ca.key config/wazuh_indexer_ssl_certs/root-ca-manager.key`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Create x86_64 Override File */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-cyan-300">Step 3: Create x86_64 Override File</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300">
            Create <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">docker-compose.x86-simple.yml</code>:
          </p>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Create x86_64 override file</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(
                  `# docker-compose.x86-simple.yml
services:
  wazuh.manager:
    platform: linux/amd64
  wazuh.indexer:
    platform: linux/amd64
    environment:
      - "OPENSEARCH_JAVA_OPTS=-Xms1g -Xmx1g -Dopensearch.bootstrap.system_call_filter=false"
  wazuh.dashboard:
    platform: linux/amd64`,
                  "step3"
                )}
                className="text-xs"
              >
                {copiedCode === "step3" ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </Button>
            </div>
            <pre className="text-xs text-gray-300 overflow-x-auto">
{`# docker-compose.x86-simple.yml
services:
  wazuh.manager:
    platform: linux/amd64
  wazuh.indexer:
    platform: linux/amd64
    environment:
      - "OPENSEARCH_JAVA_OPTS=-Xms1g -Xmx1g -Dopensearch.bootstrap.system_call_filter=false"
  wazuh.dashboard:
    platform: linux/amd64`}
            </pre>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <h4 className="text-blue-300 font-semibold mb-2">Key Points:</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• <code className="bg-gray-800 px-1 rounded">platform: linux/amd64</code> forces x86_64 emulation for ARM Mac compatibility</li>
              <li>• OpenSearch Java options disable seccomp filter (critical for ARM Mac)</li>
              <li>• Service names match the official Wazuh Docker setup</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Step 4: Deploy with x86 Emulation */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-cyan-300">Step 4: Deploy with x86 Emulation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Deploy with x86_64 emulation (REQUIRED for ARM Mac)</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(
                  `# Deploy with x86_64 emulation (REQUIRED for ARM Mac)
docker compose -f docker-compose.yml -f docker-compose.x86-simple.yml up -d

# Check status
docker compose ps`,
                  "step4"
                )}
                className="text-xs"
              >
                {copiedCode === "step4" ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </Button>
            </div>
            <pre className="text-xs text-gray-300 overflow-x-auto">
{`# Deploy with x86_64 emulation (REQUIRED for ARM Mac)
docker compose -f docker-compose.yml -f docker-compose.x86-simple.yml up -d

# Check status
docker compose ps`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Step 5: Restore Docker Volumes */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-cyan-300">Step 5: Restore Docker Volumes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300">
            This will hydrate your Wazuh environment to support CTF challenges:
          </p>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Download and restore Wazuh data</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(
                  `curl -L -o wazuh-backup-20251017-192456.tar.gz \\
	--progress-bar \\
	https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/DC33/CTF-OBSIDIAN/DOCKER_VOLUMES/wazuh-backup-20251017-192456.tar.gz

tar -xzvf wazuh-backup-20251017-192456.tar.gz

cd wazuh-backup-20251017-192456/

./restore-wazuh-volumes.sh`,
                  "step5"
                )}
                className="text-xs"
              >
                {copiedCode === "step5" ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </Button>
            </div>
            <pre className="text-xs text-gray-300 overflow-x-auto">
{`curl -L -o wazuh-backup-20251017-192456.tar.gz \\
	--progress-bar \\
	https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/DC33/CTF-OBSIDIAN/DOCKER_VOLUMES/wazuh-backup-20251017-192456.tar.gz

tar -xzvf wazuh-backup-20251017-192456.tar.gz

cd wazuh-backup-20251017-192456/

./restore-wazuh-volumes.sh`}
            </pre>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <h4 className="text-green-300 font-semibold mb-2">Restart Docker Deployment</h4>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Restart containers</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(
                    `docker rm -f $(docker ps -a -q)`,
                    "restart"
                  )}
                  className="text-xs"
                >
                  {copiedCode === "restart" ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <pre className="text-xs text-gray-300 overflow-x-auto">
{`docker rm -f $(docker ps -a -q)`}
              </pre>
              <pre className="text-xs text-gray-300 overflow-x-auto">
{`cd ..`}
              </pre>
              <pre className="text-xs text-gray-300 overflow-x-auto">
{`docker compose -f docker-compose.yml -f docker-compose.x86-simple.yml up -d`}
              </pre>
            </div>
          </div>
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
            <h4 className="text-cyan-300 font-semibold mb-2">Access Wazuh</h4>
            <p className="text-sm text-gray-300 mb-2">
              After the Wazuh instance comes up again, go to <a href="https://localhost/" className="text-cyan-400 hover:text-cyan-300 underline">https://localhost/</a> and log in with:
            </p>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="space-y-2">
                <div className="text-sm text-gray-300">
                  <span className="text-cyan-300">username:</span> <code className="bg-gray-700 px-1 rounded">admin</code>
                </div>
                <div className="text-sm text-gray-300">
                  <span className="text-cyan-300">password:</span> <code className="bg-gray-700 px-1 rounded">SecretPassword</code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Predefined kill chain data for Project Obsidian
export const ekoPartyKillChains: EkopartyData[] = [
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
  }
] 
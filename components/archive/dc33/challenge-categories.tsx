import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Search, AlertTriangle, Network, Database, Lock } from "lucide-react"

const categories = [
  {
    icon: Shield,
    title: "Kill Chain #1",
    description: "Uncovers an adversary's full compromise of multiple Windows workstations. Investigate the adversary's activities from reconnaissance to credential theft, persistence, and privilege escalation while defenders trace their steps through forensic artifacts, browser activity, and Active Directory abuse.",
    difficulty: "",
    color: "cyan",
    challenges: 76,
  },
  {
    icon: Search,
    title: "Kill Chain #2",
    description: "Tracks a remote access trojan (RAT) enabled social engineering attack, uses phishing, RMM tools, and AD recon to compromise a user and explore lateral movement.",
    // description: "Investigate digital evidence, recover artifacts, and piece together attack timelines.",
    difficulty: "",
    color: "purple",
    challenges: 43,
  },
  {
    icon: AlertTriangle,
    title: "Kill Chain #3",
    description: "Challenges players to investigate a web application attack targeting a vulnerable web application, where the adversary exploits vulnerabilities, all while evading detection across proxy headers and misaligned logs",
    difficulty: "",
    color: "red",
    challenges: 30,
  },
  {
    icon: Network,
    title: "Kill Chain #4",
    description: "Follows a convincing phishing attack that tricks a corporate employee into opening a malicious attachment, triggering macro-based malware, persistence via scheduled tasks, DNS tunneling, and stealthy exfiltration. Challenging defenders to trace every log cleared, service modified, and file exfiltrated in the wake of the compromise.",
    difficulty: "",
    color: "green",
    challenges: 29,
  },
  {
    icon: Database,
    title: "Geolocation OSINT",
    description: "Challenges players to use OSINT to identify the location of a threat actor's command and control server, and then use that information to track the threat actor's activities.",
    difficulty: "",
    color: "blue",
    challenges: 8,
  },
  {
    icon: Lock,
    title: "Digital Breadcrumbs and Village Voyages",
    description: "Takes players on a journey across multiple village domains, challenging them to uncover user behaviors, downloaded files, browser artifacts, and security community trivia.",
    difficulty: "",
    color: "yellow",
    challenges: 25,
  },
]

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-300 border-green-500/30",
  Medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Hard: "bg-red-500/20 text-red-300 border-red-500/30",
}

const iconColors = {
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  red: "text-red-400",
  green: "text-green-400",
  blue: "text-blue-400",
  yellow: "text-yellow-400",
}

export function ChallengeCategories() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Challenge Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test your blue team skills across multiple domains of cybersecurity defense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-8 h-8 ${iconColors[category.color as keyof typeof iconColors]}`} />
                    {/* <Badge className={difficultyColors[category.difficulty as keyof typeof difficultyColors]}>
                      {category.difficulty}
                    </Badge> */}
                  </div>
                  <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-300 text-sm mb-4 flex-1">{category.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs text-cyan-400">{category.challenges} challenges</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">More categories and challenges will be revealed closer to the event!</p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200" />
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400" />
          </div>
        </div> */}
      </div>
    </section>
  )
}

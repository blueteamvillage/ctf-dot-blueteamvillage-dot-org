import { Card, CardContent, CardHeader, CardTitle } from "@/components/archive/dc33/ui/card"
import { Button } from "@/components/archive/dc33/ui/button"
import { Badge } from "@/components/archive/dc33/ui/badge"
import {
  Shield,
  AlertCircle,
  ArrowRight,
  Trophy,
  Star,
  Globe,
} from "lucide-react"
import Link from "next/link"

interface CTFData {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  badge: string
  badgeColor: string
  borderColor: string
  buttonColor: string
  duration: string
  teamSize: string
  level: string
  challenges: string
  href: string
  disabled?: boolean
}

interface CTFShowcaseProps {
  title: string
  subtitle?: string
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  titleColor: string
  ctfs: CTFData[]
  className?: string
}

const CTFCard = ({ ctf }: { ctf: CTFData }) => {
  const IconComponent = ctf.icon

  return (
    <Card className={`bg-gray-900/50 ${ctf.borderColor} hover:${ctf.borderColor.replace('/30', '/50')} transition-all duration-300 hover:transform hover:scale-105`}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <IconComponent className={`w-8 h-8 ${ctf.badgeColor.replace('500', '400')}`} />
          <Badge className={`${ctf.badgeColor} ${ctf.badgeColor.replace('500', '300')} ${ctf.borderColor}`}>
            {ctf.badge}
          </Badge>
        </div>
        <CardTitle className={`text-xl ${ctf.badgeColor.replace('500', '300')}`}>
          {ctf.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300 text-sm">
          {ctf.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{ctf.duration}</span>
          <span>{ctf.teamSize}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{ctf.level}</span>
          <span>{ctf.challenges}</span>
        </div>
        {ctf.disabled ? (
          <Button className={`w-full ${ctf.buttonColor} text-white`} disabled>
            <AlertCircle className="w-4 h-4 mr-2" />
            Coming Soon
          </Button>
        ) : (
          <Link href={ctf.href}>
            <Button className={`w-full ${ctf.buttonColor} hover:${ctf.buttonColor.replace('500', '600')} text-white`}>
              <ArrowRight className="w-4 h-4 mr-2" />
              View CTF
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}

/**
 * CTFShowcase Component
 * 
 * A reusable component for displaying CTF (Capture The Flag) challenges in a grid layout.
 * Supports both BTV CTFs and Guest CTFs with customizable styling and data.
 * 
 * @example
 * ```tsx
 * import { CTFShowcase, btvCTFs } from "@/components/archive/dc33/ctf-showcase"
 * import { Building } from "lucide-react"
 * 
 * <CTFShowcase
 *   title="Blue Team Village CTFs"
 *   icon={Building}
 *   iconColor="text-purple-400"
 *   titleColor="text-purple-300"
 *   ctfs={btvCTFs}
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Custom CTF data
 * const customCTFs = [
 *   {
 *     id: "custom-ctf",
 *     title: "Custom CTF",
 *     description: "A custom CTF description",
 *     icon: Shield,
 *     badge: "Custom",
 *     badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
 *     borderColor: "border-green-500/30",
 *     buttonColor: "bg-green-500",
 *     duration: "24 Hours",
 *     teamSize: "1-2 Members",
 *     level: "Beginner",
 *     challenges: "10 Challenges",
 *     href: "/archive/dc33/challenges/custom-ctf"
 *   }
 * ]
 * 
 * <CTFShowcase
 *   title="Custom CTFs"
 *   subtitle="Optional subtitle for additional context"
 *   icon={Star}
 *   iconColor="text-green-400"
 *   titleColor="text-green-300"
 *   ctfs={customCTFs}
 * />
 * ```
 */
export function CTFShowcase({ title, subtitle, icon: IconComponent, iconColor, titleColor, ctfs, className = "" }: CTFShowcaseProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <div className="flex items-center mb-8">
        <IconComponent className={`w-8 h-8 ${iconColor} mr-3`} />
        <h3 className={`text-3xl font-bold ${titleColor}`}>{title}</h3>
      </div>
      
      {subtitle && (
        <p className="text-gray-300 mb-8 max-w-3xl">
          {subtitle}
        </p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ctfs.map((ctf) => (
          <CTFCard key={ctf.id} ctf={ctf} />
        ))}
      </div>
    </div>
  )
}

// Predefined CTF data for easy reuse
export const btvCTFs: CTFData[] = [
  {
    id: "project-obsidian",
    title: "Project Obsidian",
    description: "Our flagship incident response CTF featuring realistic security scenarios, digital forensics challenges, and comprehensive kill chain investigations.",
    icon: Shield,
    badge: "Featured",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    borderColor: "border-purple-500/30",
    buttonColor: "bg-purple-500",
    duration: "48 Hours",
    teamSize: "1-4 Members",
    level: "All Levels",
    challenges: "224 Challenges",
    href: "/archive/dc33/challenges/project-obsidian"
  },
  {
    id: "venator-aurum",
    title: "Venator Aurum",
    description: "An enigmatic puzzle challenge that takes players through cryptography, code-breaking, and physical security challenges in a thrilling labyrinth of mysteries.",
    icon: Globe,
    badge: "Puzzle",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    borderColor: "border-cyan-500/30",
    buttonColor: "bg-cyan-500",
    duration: "48 Hours",
    teamSize: "1-4 Members",
    level: "All Levels",
    challenges: "25 Puzzles",
    href: "/archive/dc33/challenges/venator-aurum"
  }
]

export const guestCTFs: CTFData[] = [
  {
    id: "a-cyber-guru",
    title: "A Cyber Guru CTF",
    description: "The CTF is designed for cybersecurity professionals and blue teamers ready to challenge themselves in realistic, high-pressure scenarios.",
    icon: Trophy,
    badge: "Guest",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    borderColor: "border-red-500/30",
    buttonColor: "bg-red-500",
    duration: "48 Hours",
    teamSize: "1-4 Members",
    level: "Professional",
    challenges: "Multiple Domains",
    href: "/archive/dc33/challenges/a-cyber-guru"
  },
  {
    id: "cyberbit",
    title: "Cyberbit Operation 33",
    description: "Two-day cyber defense challenge with 14 timed missions, live environments, and team tournament featuring full-scale investigations and championship finals.",
    icon: Shield,
    badge: "Guest",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    borderColor: "border-blue-500/30",
    buttonColor: "bg-blue-500",
    duration: "2 Days",
    teamSize: "Solo & Teams",
    level: "Advanced",
    challenges: "14 Missions",
    href: "/archive/dc33/challenges/cyberbit"
  },
  {
    id: "ekoparty-2025-bluespace",
    title: "Ekoparty 2025 - Bluespace",
    description: "Our flagship incident response CTF featuring realistic security scenarios, digital forensics challenges, and comprehensive kill chain investigations.",
    icon: Shield,
    badge: "Guest",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    borderColor: "border-cyan-500/30",
    buttonColor: "bg-cyan-500",
    duration: "Self-Paced",
    teamSize: "1-4 Members",
    level: "Intermediate",
    challenges: "Wazuh Setup",
    href: "/archive/dc33/challenges/ekoparty-2025-bluespace"
  }
] 
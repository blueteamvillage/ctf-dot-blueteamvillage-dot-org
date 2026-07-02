import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Target,
  Users,
  Clock,
  Building,
  Star,
} from "lucide-react"
import { CTFShowcase, btvCTFs, guestCTFs } from "@/components/archive/dc33/ctf-showcase"

export default function ChallengesPage() {
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
              CTF Challenges
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">Multiple Competitions, One Platform</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience a variety of cybersecurity challenges from Guest CTFs from our call for contests and Blue Team Village&apos;s own CTFs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xs border border-purple-500/30 rounded-lg p-4">
              <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Multiple CTFs</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-cyan-500/30 rounded-lg p-4">
              <Target className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">All Skill Levels</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-green-500/30 rounded-lg p-4">
              <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Team Based</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-yellow-500/30 rounded-lg p-4">
              <Clock className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Various Durations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTF Categories Section */}
      <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Available CTFs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our curated selection of Guest CTFs from our call for contests and Blue Team Village&apos;s signature CTFs.
            </p>
          </div>

          {/* BTV CTFs */}
          <CTFShowcase
            title="Blue Team Village CTFs"
            icon={Building}
            iconColor="text-purple-400"
            titleColor="text-purple-300"
            ctfs={btvCTFs}
          />

          {/* Guest CTFs */}
          <CTFShowcase
            title="Guest CTFs"
            subtitle="CTFs from our call for contests"
            icon={Star}
            iconColor="text-yellow-400"
            titleColor="text-yellow-300"
            ctfs={guestCTFs}
          />

          {/* Information Section */}
          <div className="bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">About Our CTF Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">BTV CTFs</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Our signature CTFs are designed by Blue Team Village&apos;s expert team, focusing on defensive security, 
                  incident response, and real-world scenarios that mirror actual cybersecurity challenges.
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Incident response scenarios</li>
                  <li>• Digital forensics challenges</li>
                  <li>• OSINT investigations</li>
                  <li>• Blue team skill development</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">Guest CTFs</h4>
                <p className="text-gray-300 text-sm mb-4">
                  CTFs from our call for contests, bringing diverse challenges from the cybersecurity community 
                  covering various aspects of offensive and defensive security.
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Industry-standard tools</li>
                  <li>• Real-world attack scenarios</li>
                  <li>• Professional skill validation</li>
                  <li>• Networking opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your CTF Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your preferred CTF and begin developing your cybersecurity skills today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/archive/dc33/challenges/project-obsidian">
              <Button
                size="lg"
                className="bg-linear-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start with Project Obsidian
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
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

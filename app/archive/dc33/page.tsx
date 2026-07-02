import { Header } from "@/components/archive/dc33/header"
import { Hero } from "@/components/archive/dc33/hero"
import { EventDetails } from "@/components/archive/dc33/event-details"
import { Rules } from "@/components/archive/dc33/rules"
import { Sponsors } from "@/components/archive/dc33/sponsors"
import { Footer } from "@/components/archive/dc33/footer"
import { CTFShowcase, btvCTFs, guestCTFs } from "@/components/archive/dc33/ctf-showcase"
import { Building, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <EventDetails />
      
      {/* CTF Showcase Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Available CTFs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our curated selection of Guest CTFs from our call for contests and Blue Team Village&apos;s signature CTFs.
            </p>
          </div>

          <CTFShowcase
            title="Blue Team Village CTFs"
            icon={Building}
            iconColor="text-purple-400"
            titleColor="text-purple-300"
            ctfs={btvCTFs}
          />

          <CTFShowcase
            title="Guest CTFs"
            subtitle="CTFs from our call for contests"
            icon={Star}
            iconColor="text-yellow-400"
            titleColor="text-yellow-300"
            ctfs={guestCTFs}
          />
        </div>
      </section>
      
      <Rules />
      <Sponsors />
      <Footer />
    </div>
  )
}

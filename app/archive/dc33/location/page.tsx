import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/archive/dc33/ui/card"
import { Button } from "@/components/archive/dc33/ui/button"
import { Badge } from "@/components/archive/dc33/ui/badge"
import { MapPin, Calendar, Clock, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LocationPage() {
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
              Event Location
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Blue Team Village Location
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">DEF CON 33 - Las Vegas Convention Center</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your way to the Blue Team Village CTF at DEF CON 33. We&apos;re located in the West Hall Level 2 of the Las Vegas Convention Center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xs border border-purple-500/30 rounded-lg p-4">
              <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">West Hall Level 2</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-cyan-500/30 rounded-lg p-4">
              <Calendar className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">August 8-10, 2025</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-green-500/30 rounded-lg p-4">
              <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">24/7 CTF Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Venue Map
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate to the Blue Team Village in the West Hall Level 2 of the Las Vegas Convention Center
            </p>
          </div>

          <Card className="bg-gray-900/50 border-purple-500/30 mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-purple-300">
                LVCC West Hall Level 2
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-6">
                <Image
                  src="/lvcc-west-hall-level2.png"
                  alt="LVCC West Hall Level 2 Map"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  The Blue Team Village CTF is located in the West Hall Level 2 of the Las Vegas Convention Center. 
                  Look for our signage and team members to help guide you to the CTF area.
                </p>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Blue Team Village CTF Area
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-cyan-300">Getting There</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-cyan-300 font-semibold">Address</h4>
                      <p className="text-gray-300 text-sm">
                        Las Vegas Convention Center<br />
                        3150 Paradise Road<br />
                        Las Vegas, NV 89109
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-cyan-300 font-semibold">Hours</h4>
                      <p className="text-gray-300 text-sm">
                        CTF runs 24/7 during DEF CON 33<br />
                        August 8-10, 2025
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-300">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full mt-1 shrink-0" />
                    <div>
                      <h4 className="text-green-300 font-semibold">CTF Setup</h4>
                      <p className="text-gray-300 text-sm">
                        Multiple CTF stations with dedicated work areas for teams
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full mt-1 shrink-0" />
                    <div>
                      <h4 className="text-green-300 font-semibold">Support Staff</h4>
                      <p className="text-gray-300 text-sm">
                        Blue Team Village volunteers available to assist with challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full mt-1 shrink-0" />
                    <div>
                      <h4 className="text-green-300 font-semibold">Equipment</h4>
                      <p className="text-gray-300 text-sm">
                        BYOD (Bring Your Own Device) - laptops and tools required
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Navigate to the Blue Team Village and start your CTF journey at DEF CON 33.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/archive/dc33/challenges">
              <Button
                size="lg"
                className="bg-linear-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Challenges
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              DEF CON Website
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
} 
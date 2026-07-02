import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Target, 
  Globe, 
  Heart, 
  Shield, 
  Award, 
  ExternalLink,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-linear-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px] animate-pulse" />

        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-4 inline-block">
              About Blue Team Village
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              About Us
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-6">Defending the Digital Frontier</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building a global community of cyber defenders through education, collaboration, and shared experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xs border border-cyan-500/30 rounded-lg p-4">
              <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Global Community</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-purple-500/30 rounded-lg p-4">
              <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Defense Focused</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-green-500/30 rounded-lg p-4">
              <Heart className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Inclusive</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-yellow-500/30 rounded-lg p-4">
              <Globe className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Our History */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  During the winter of early 2018, The Blue Team Village (BTV) was formed through conversations that began on Twitter. 
                  A small group shared ideas about what a defense-focused village at Defcon would look like and the type of content to host. 
                  In a matter of weeks, BTV was organizing itself as an organization and recruiting volunteers to help make things happen.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  With the oversight of a few Defcon veterans, BTV&apos;s primary organizers were <strong className="text-cyan-300">munin</strong>, 
                  <strong className="text-cyan-300"> ttheveii0x</strong>, <strong className="text-cyan-300">devnull</strong>, 
                  <strong className="text-cyan-300"> V3rbaal</strong>, and <strong className="text-cyan-300">H4r0ld</strong>. 
                  Planning for Defcon 26 was underway. The rest is history.
                </p>
                <div className="bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-300 mb-2">From Twitter to Global Community</h3>
                      <p className="text-gray-300">
                        What started as a simple conversation on social media has grown into one of the most respected 
                        cybersecurity communities in the world, dedicated to advancing defensive security practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission and Vision */}
          <Card className="bg-gray-900/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-linear-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                Our Mission and Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
                    <Shield className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">Our Mission</h3>
                    <p className="text-gray-300">
                      The mission of the Blue Team Village is to curate content and create global, safe and inclusive spaces 
                      designed to foster sharing, learning, community, support, and encouragement for all cyber defenders 
                      regardless of skill level.
                    </p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                    <Target className="w-12 h-12 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-green-300 mb-3">Our Vision</h3>
                    <p className="text-gray-300">
                      Blue Team Village strives to be the premier organization supporting the cyber defender community. 
                      To build a community that encourages, teaches, learns, and shares experiences and knowledge. 
                      To be the model for what a cyber defender community should embody.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Community */}
          <Card className="bg-gray-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-linear-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                Our Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  The Blue Team Village community is a diverse and inclusive group that brings together individuals from all walks 
                  of life and across the globe. We pride ourselves on fostering an environment where everyone, regardless of 
                  their background or skill level, can learn, share, and grow together.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">All Skill Levels Welcome</h4>
                      <p className="text-gray-300 text-sm">
                        Our community is composed of individuals ranging from beginners to seasoned professionals. Whether you are 
                        just starting your journey in cybersecurity or have years of experience, you will find valuable resources, 
                        support, and challenges that match your skill level.
                      </p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">Professionals and Experts</h4>
                      <p className="text-gray-300 text-sm">
                        Many of our members are industry professionals who bring a wealth of knowledge and practical experience. 
                        These experts are often found leading workshops, delivering talks, and providing mentorship to those 
                        looking to advance their careers in defensive cybersecurity.
                      </p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">Students and Newcomers</h4>
                      <p className="text-gray-300 text-sm">
                        We also have a vibrant contingent of students and newcomers eager to learn and make their mark in the 
                        cybersecurity world. Our inclusive environment encourages learning and collaboration, offering a supportive 
                        space for those who are new to the field.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">Volunteers and Enthusiasts</h4>
                      <p className="text-gray-300 text-sm">
                        Our community thrives thanks to the dedicated volunteers and passionate enthusiasts who contribute their 
                        time and skills. From organizing events to creating content, these individuals play a crucial role in 
                        the success of Blue Team Village.
                      </p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">Global Representation</h4>
                      <p className="text-gray-300 text-sm">
                        Blue Team Village is truly international, with members from various nationalities and cultures. This 
                        global perspective enriches our discussions and activities, providing diverse insights and approaches 
                        to cybersecurity challenges.
                      </p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">Collaborative and Supportive</h4>
                      <p className="text-gray-300 text-sm">
                        At Blue Team Village, we believe in the power of collaboration. Our community is built on the principles 
                        of mutual support, respect, and the sharing of knowledge. Whether through online forums, in-person events, 
                        or collaborative projects, we strive to create a welcoming space for everyone.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-lg text-gray-300 mb-4">
                    Join us at Blue Team Village and become part of a dynamic and supportive community dedicated to advancing 
                    the art and science of defensive cybersecurity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Donate Section */}
          <Card className="bg-gray-900/50 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Support Blue Team Village
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-300 mb-6">
                  The Association of Blue Team Villages (aka. Blue Team Village) is a Domestic Nonprofit Corporation formed in 
                  Pennsylvania, USA and is classified as a public charity exempt from federal income tax under IRC 501(c)(3).
                </p>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="text-yellow-300 font-semibold mb-2">EIN</h4>
                      <p className="text-gray-300">83-3529393</p>
                    </div>
                    <div>
                      <h4 className="text-yellow-300 font-semibold mb-2">Organization</h4>
                      <p className="text-gray-300">Association of Blue Team Villages</p>
                    </div>
                    <div>
                      <h4 className="text-yellow-300 font-semibold mb-2">Address</h4>
                      <p className="text-gray-300">
                        1657 The Fairway 1150<br />
                        Jenkintown, PA, 19046
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button
                  size="lg"
                  className="bg-linear-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Make a Tax-Deductible Donation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Join Our Community</h2>
          <p className="text-xl text-gray-300 mb-8">
            Become part of the Blue Team Village family and help us advance defensive cybersecurity worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/archive/dc33/challenges">
              <Button
                size="lg"
                className="bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Challenges
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Official Site
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
} 
import type { Metadata } from "next"
import { Heart, Shield, Users, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"

export const metadata: Metadata = {
  title: "Code of Conduct - Blue Team Village CTF",
  description: "Code of Conduct for Blue Team Village's CTF competition at DEF CON 33.",
}

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Code of Conduct
            </h1>
            <p className="text-gray-400 text-lg">
              Blue Team Village CTF Competition - DEF CON 33
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-cyan max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-cyan-400" />
                  Our Commitment
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Blue Team Village is dedicated to providing a welcoming, inclusive, and respectful environment 
                  for all participants in our CTF competition. We believe that cybersecurity should be accessible 
                  to everyone, regardless of background, experience level, or identity.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  This Code of Conduct applies to all participants, organizers, volunteers, sponsors, and attendees 
                  of the Blue Team Village CTF competition at DEF CON 33.
                </p>
              </section>

              {/* Expected Behavior */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                  Expected Behavior
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p>We expect all participants to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Be respectful and considerate of others</li>
                    <li>Use inclusive language and avoid discriminatory remarks</li>
                    <li>Respect personal boundaries and consent</li>
                    <li>Be mindful of your surroundings and fellow participants</li>
                    <li>Help create a safe and welcoming environment</li>
                    <li>Report any concerns or violations to organizers</li>
                    <li>Follow all DEF CON and venue rules and regulations</li>
                    <li>Engage in healthy competition while maintaining sportsmanship</li>
                  </ul>
                </div>
              </section>

              {/* Unacceptable Behavior */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <XCircle className="w-6 h-6 mr-2 text-red-400" />
                  Unacceptable Behavior
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p>The following behaviors are considered unacceptable and will not be tolerated:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Harassment, intimidation, or discrimination of any kind</li>
                    <li>Sexual harassment, including unwelcome advances or inappropriate comments</li>
                    <li>Verbal, physical, or written abuse</li>
                    <li>Bullying, trolling, or deliberate intimidation</li>
                    <li>Disruptive or disrespectful behavior</li>
                    <li>Use of offensive language or slurs</li>
                    <li>Inappropriate use of competition equipment or facilities</li>
                    <li>Violation of privacy or personal space</li>
                    <li>Any form of cheating or collusion</li>
                    <li>Retaliation against those who report violations</li>
                  </ul>
                </div>
              </section>

              {/* Reporting Violations */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-yellow-400" />
                  Reporting Violations
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p>
                    If you experience or witness unacceptable behavior, please report it immediately. 
                    You can report violations through any of the following channels:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Speak directly to a Blue Team Village organizer (wearing BTV shirts)</li>
                    <li>Contact the CTF organizers at the competition desk</li>
                                         <li>Email: seceng@blueteamvillage.org</li>
                    <li>Use the DEF CON reporting system for venue-related issues</li>
                  </ul>
                  <p className="mt-4">
                    All reports will be treated confidentially and investigated promptly. 
                    We are committed to protecting the privacy and safety of those who report violations.
                  </p>
                </div>
              </section>

              {/* Consequences */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-cyan-400" />
                  Consequences of Violations
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Participants who engage in unacceptable behavior may face consequences including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Verbal or written warning</li>
                    <li>Immediate removal from the competition</li>
                    <li>Ban from future Blue Team Village events</li>
                    <li>Reporting to DEF CON organizers</li>
                    <li>Legal action if appropriate</li>
                  </ul>
                  <p className="mt-4">
                    The severity of the consequence will depend on the nature and severity of the violation, 
                    as well as any previous incidents.
                  </p>
                </div>
              </section>

              {/* Competition-Specific Guidelines */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Competition-Specific Guidelines</h2>
                <div className="text-gray-300 space-y-3">
                  <p>In addition to general conduct guidelines, we expect participants to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respect the competition area and equipment</li>
                    <li>Not interfere with other teams' work or equipment</li>
                    <li>Follow all technical and safety guidelines</li>
                    <li>Ask for help when needed, and offer help when appropriate</li>
                    <li>Celebrate others' successes and learn from their approaches</li>
                    <li>Share knowledge and techniques in a constructive manner</li>
                    <li>Respect intellectual property and competition materials</li>
                  </ul>
                </div>
              </section>

              {/* Inclusivity Statement */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-cyan-400" />
                  Inclusivity and Diversity
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Blue Team Village is committed to fostering a diverse and inclusive cybersecurity community. 
                    We welcome participants of all backgrounds, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Different ethnicities, nationalities, and cultural backgrounds</li>
                    <li>All genders and gender identities</li>
                    <li>Different ages and experience levels</li>
                    <li>People with disabilities</li>
                    <li>Different educational and professional backgrounds</li>
                    <li>Various skill levels, from beginners to experts</li>
                  </ul>
                  <p className="mt-4">
                    We believe that diverse perspectives make our community stronger and more innovative. 
                    Everyone has something valuable to contribute to the field of cybersecurity.
                  </p>
                </div>
              </section>

              {/* Support and Resources */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Support and Resources</h2>
                <div className="text-gray-300 space-y-3">
                  <p>If you need support or have questions, we're here to help:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Blue Team Village organizers are available throughout the competition</li>
                    <li>DEF CON has its own Code of Conduct and support systems</li>
                    <li>Mental health and safety resources are available at the venue</li>
                    <li>Emergency contacts are posted throughout the competition area</li>
                  </ul>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                <div className="text-gray-300 space-y-3">
                  <p>For questions about this Code of Conduct or to report violations:</p>
                  <ul className="list-none space-y-2 ml-4">
                                         <li>• Email: seceng@blueteamvillage.org</li>
                    <li>• Website: https://blueteamvillage.org</li>
                    <li>• Twitter: @blueteamvillage</li>
                    <li>• In-person: Find a Blue Team Village organizer at the competition</li>
                  </ul>
                </div>
              </section>

              {/* Emergency Contacts */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Emergency Contacts</h2>
                <div className="text-gray-300 space-y-3">
                  <p>In case of emergency:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li>• Emergency Services: 911</li>
                    <li>• DEF CON Security: Available at the venue</li>
                    <li>• Venue Security: Posted throughout the facility</li>
                    <li>• Blue Team Village Emergency: Contact any organizer immediately</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              By participating in the Blue Team Village CTF, you agree to follow this Code of Conduct 
              and help create a positive, inclusive environment for everyone.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Thank you for helping us build a better cybersecurity community.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 
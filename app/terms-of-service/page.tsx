import type { Metadata } from "next"
import { Shield, FileText, AlertTriangle, Users, Trophy } from "lucide-react"
import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"

export const metadata: Metadata = {
  title: "Terms of Service - Blue Team Village CTF",
  description: "Terms of Service for Blue Team Village's CTF competition at DEF CON 33.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Terms of Service
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
                  <Shield className="w-6 h-6 mr-2 text-cyan-400" />
                  1. Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) govern your participation in the Blue Team Village Capture The Flag (CTF) 
                  competition (&quot;Competition&quot;) held during DEF CON 33. By participating in the Competition, you agree to be 
                  bound by these Terms and all applicable laws and regulations.
                </p>
              </section>

              {/* Eligibility */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-cyan-400" />
                  2. Eligibility
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p>To participate in the Competition, you must:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Be at least 18 years of age or have parental/guardian consent</li>
                    <li>Be physically present at DEF CON 33 in Las Vegas, Nevada</li>
                    <li>Register through the official CTF platform</li>
                    <li>Comply with all DEF CON and venue rules and regulations</li>
                    <li>Not be a member of the Blue Team Village CTF organizing team</li>
                  </ul>
                </div>
              </section>

              {/* Competition Rules */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-cyan-400" />
                  3. Competition Rules
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p>All participants must adhere to the following rules:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>No attacks against the competition infrastructure or other participants</li>
                    <li>No sharing of flags, solutions, or hints with other teams</li>
                    <li>No use of automated tools to solve challenges (unless explicitly allowed)</li>
                    <li>Respect the designated competition area and equipment</li>
                    <li>Follow all instructions provided by competition organizers</li>
                    <li>Report any security vulnerabilities found in the competition platform</li>
                  </ul>
                </div>
              </section>

              {/* Prohibited Activities */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
                  4. Prohibited Activities
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p>The following activities are strictly prohibited:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Any form of cheating or collusion between teams</li>
                    <li>Attempting to gain unauthorized access to systems outside the competition scope</li>
                    <li>Harassment, discrimination, or inappropriate behavior towards other participants</li>
                    <li>Violation of DEF CON&apos;s Code of Conduct</li>
                    <li>Use of illegal or unauthorized tools or techniques</li>
                    <li>Attempting to disrupt the competition or other participants</li>
                  </ul>
                </div>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
                <div className="text-gray-300 space-y-3">
                  <p>
                    All competition materials, including but not limited to challenges, flags, and infrastructure, 
                    are the intellectual property of Blue Team Village and its partners. Participants may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Reproduce or distribute competition materials without permission</li>
                    <li>Use competition materials for commercial purposes</li>
                    <li>Reverse engineer or attempt to copy competition infrastructure</li>
                  </ul>
                </div>
              </section>

              {/* Privacy and Data */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Privacy and Data Collection</h2>
                <div className="text-gray-300 space-y-3">
                  <p>
                    By participating in the Competition, you consent to the collection and processing of your personal 
                    data as described in our Privacy Policy. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Registration information (name, email, team affiliation)</li>
                    <li>Competition activity and performance data</li>
                    <li>Photographs and video recordings for promotional purposes</li>
                    <li>Technical logs and analytics data</li>
                  </ul>
                </div>
              </section>

              {/* Disclaimers */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Disclaimers</h2>
                <div className="text-gray-300 space-y-3">
                  <p>
                    The Competition is provided &quot;as is&quot; without warranties of any kind. Blue Team Village and its 
                    organizers are not responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Technical issues or system failures</li>
                    <li>Loss of data or competition progress</li>
                    <li>Injuries or accidents during the competition</li>
                    <li>Disputes between participants</li>
                    <li>Changes to competition schedule or format</li>
                  </ul>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  To the maximum extent permitted by law, Blue Team Village and its organizers shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages arising from your 
                  participation in the Competition.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Blue Team Village reserves the right to terminate or suspend your participation in the Competition 
                    at any time for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Violation of these Terms</li>
                    <li>Violation of DEF CON&apos;s Code of Conduct</li>
                    <li>Inappropriate or disruptive behavior</li>
                    <li>Any other reason deemed appropriate by the organizers</li>
                  </ul>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Nevada, 
                  United States. Any disputes arising from these Terms or the Competition shall be resolved in the 
                  courts of Clark County, Nevada.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  Blue Team Village reserves the right to modify these Terms at any time. Changes will be effective 
                  immediately upon posting. Your continued participation in the Competition constitutes acceptance 
                  of any modified Terms.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Information</h2>
                <div className="text-gray-300 space-y-3">
                  <p>For questions about these Terms, please contact us:</p>
                  <ul className="list-none space-y-2 ml-4">
                                         <li>• Email: seceng@blueteamvillage.org</li>
                    <li>• Website: https://blueteamvillage.org</li>
                    <li>• Twitter: @blueteamvillage</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              By participating in the Blue Team Village CTF, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 
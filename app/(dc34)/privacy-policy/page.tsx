import { Shield, Lock, Eye, Database, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-navy via-navy-deep to-navy">

      {/* Hero Section */}
      <div className="relative pt-16 pb-16 px-4">
        <div className="absolute inset-0 bg-linear-to-r from-mint/10 to-teal/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-mint/20 text-mint border-mint/30 mb-4">
              Privacy & Security
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-mint via-teal-bright to-mint bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-bright mb-6">A static site that barely knows you were here</h2>
            <p className="text-xl text-mist max-w-3xl mx-auto">
              This website has no accounts, no logins, and no forms. It sets no cookies and tracks no individuals. This policy explains the little that is processed, and where competition data actually lives.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="space-y-8">
          {/* Last Updated */}
          <Card className="bg-navy-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-mint flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Last Updated
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-mist">This Privacy Policy was last updated on July 18, 2026. It covers this website (ctf.blueteamvillage.org) only — not the MetaCTF competition platform, which has its own privacy policy.</p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-navy-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-teal-bright flex items-center">
                <Database className="w-5 h-5 mr-2" />
                What This Site Collects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-mist">
                This is an informational website with no user accounts, no sign-in, and no forms — so we don&apos;t ask for or store your name, email, or any personal details. The only data processed is anonymous, and it comes from two places:
              </p>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Anonymous analytics</h3>
                <p className="text-mist text-sm mb-2">
                  We use Vercel Web Analytics, which is <strong className="text-white">cookieless</strong> and does not identify individual visitors. It records aggregate, non-personal data:
                </p>
                <ul className="text-mist space-y-1 ml-4">
                  <li>• Pages viewed and the referring site</li>
                  <li>• Approximate location at the country level (derived from your connection, not stored as an IP address)</li>
                  <li>• Device type, browser, and operating system</li>
                </ul>
                <p className="text-mist text-sm mt-2">
                  Your IP address is not stored, and the identifier used to count unique visitors rotates every 24 hours, so you can&apos;t be tracked from one day to the next.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Server logs</h3>
                <p className="text-mist text-sm">
                  Our host (Vercel) keeps standard request logs that can include your IP address and basic request details. On our Hobby-tier plan these runtime logs are retained for roughly one hour and are used only to operate and secure the site.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Competition data (handled elsewhere)</h3>
                <p className="text-mist text-sm">
                  Registration, team details, scoreboard rankings, and challenge submissions are handled on the <strong className="text-white">MetaCTF</strong> platform — not this website. How that information is collected and used is governed by MetaCTF&apos;s own privacy policy.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="bg-navy-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-mint flex items-center">
                <Users className="w-5 h-5 mr-2" />
                How We Use It
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-navy-deep rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Running the site</h3>
                  <p className="text-mist text-sm">To serve pages and keep the site available, functioning, and secure.</p>
                </div>

                <div className="bg-navy-deep rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Understanding traffic</h3>
                  <p className="text-mist text-sm">To see, in aggregate, which pages are useful so we can improve the content — using anonymous analytics only.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="bg-navy-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gold flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Data Sharing and Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-mist mb-4">We do not sell, trade, or rent any data. The site relies on a small number of service providers, and we may disclose information where legally required:</p>

              <div className="space-y-3">
                <div className="bg-navy-deep rounded-lg p-3">
                  <h3 className="text-white font-semibold text-sm">Vercel (hosting &amp; analytics)</h3>
                  <p className="text-haze text-sm">Serves the site and provides the cookieless, aggregate analytics described above.</p>
                </div>

                <div className="bg-navy-deep rounded-lg p-3">
                  <h3 className="text-white font-semibold text-sm">MetaCTF (competition platform)</h3>
                  <p className="text-haze text-sm">Handles registration, scoring, and challenge submissions under its own privacy policy — separate from this website.</p>
                </div>

                <div className="bg-navy-deep rounded-lg p-3">
                  <h3 className="text-white font-semibold text-sm">Legal Requirements</h3>
                  <p className="text-haze text-sm">When required by law or to protect our rights and safety.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="bg-navy-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-magenta flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-mist">A few practical points about how the site is secured:</p>

                <ul className="text-mist space-y-2 ml-4">
                  <li>• All traffic is served over HTTPS (encrypted in transit)</li>
                  <li>• The site holds no accounts and no personal profiles, which keeps the data-at-risk minimal by design</li>
                  <li>• Hosting and infrastructure are provided by Vercel</li>
                  <li>• Content is served as static pages, reducing the attack surface</li>
                </ul>

                <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <p className="text-gold text-sm">
                    <strong>Note:</strong> While we strive to protect the site, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-navy-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-mint flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Your Choices &amp; Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-mist">
                  Because this site stores no personal profile and its analytics are anonymous, there is usually nothing personal for us to look up, correct, or delete here.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-navy-deep rounded-lg p-3">
                    <h3 className="text-white font-semibold text-sm">No cookies to manage</h3>
                    <p className="text-haze text-sm">The site sets none, so there&apos;s nothing to opt out of.</p>
                  </div>

                  <div className="bg-navy-deep rounded-lg p-3">
                    <h3 className="text-white font-semibold text-sm">Competition data</h3>
                    <p className="text-haze text-sm">For data tied to your MetaCTF account, use MetaCTF&apos;s privacy controls.</p>
                  </div>

                  <div className="bg-navy-deep rounded-lg p-3">
                    <h3 className="text-white font-semibold text-sm">Browser privacy tools</h3>
                    <p className="text-haze text-sm">You&apos;re welcome to use any tracker/analytics blockers you prefer.</p>
                  </div>

                  <div className="bg-navy-deep rounded-lg p-3">
                    <h3 className="text-white font-semibold text-sm">Questions</h3>
                    <p className="text-haze text-sm">Reach us any time at the address below.</p>
                  </div>
                </div>

                <p className="text-mist text-sm">To ask about privacy on this site, contact us at seceng@blueteamvillage.org</p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card className="bg-navy-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-teal-bright">Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-mist">
                  <strong className="text-white">This site does not use cookies.</strong> There are no advertising cookies, no cross-site tracking, and no third-party marketing pixels.
                </p>

                <ul className="text-mist space-y-1 ml-4">
                  <li>• Analytics is cookieless and anonymous (Vercel Web Analytics)</li>
                  <li>• Fonts are self-hosted, so no third-party font requests are made from your browser</li>
                  <li>• No session, preference, or advertising cookies are set</li>
                </ul>

                <p className="text-mist text-sm">There&apos;s nothing here to consent to or turn off, but you&apos;re free to use browser privacy tools all the same.</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-navy-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-teal-bright">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-mist">If you have questions about this Privacy Policy, please contact us:</p>
                <div className="bg-navy-deep rounded-lg p-4">
                  <p className="text-white font-semibold">Blue Team Village</p>
                  <p className="text-mist">Email: seceng@blueteamvillage.org</p>
                  <p className="text-mist">Website: blueteamvillage.org</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  )
}

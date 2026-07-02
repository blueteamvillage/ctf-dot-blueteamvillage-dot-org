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
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-bright mb-6">Your Data, Your Control</h2>
            <p className="text-xl text-mist max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
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
              <p className="text-mist">This Privacy Policy was last updated on January 15, 2025.</p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-navy-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-teal-bright flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                <ul className="text-mist space-y-1 ml-4">
                  <li>• Name and contact information (email address)</li>
                  <li>• CTF registration details and team information</li>
                  <li>• Competition participation and performance data</li>
                  <li>• Communication preferences and feedback</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Technical Information</h3>
                <ul className="text-mist space-y-1 ml-4">
                  <li>• IP addresses and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Operating system and platform</li>
                  <li>• Usage patterns and analytics data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Competition Data</h3>
                <ul className="text-mist space-y-1 ml-4">
                  <li>• Challenge submissions and solutions</li>
                  <li>• Scoreboard rankings and achievements</li>
                  <li>• Platform usage and interaction logs</li>
                  <li>• Team collaboration and communication data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="bg-navy-card border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-mint flex items-center">
                <Users className="w-5 h-5 mr-2" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-navy-deep rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Competition Management</h3>
                  <p className="text-mist text-sm">To organize and administer CTF competitions, manage registrations, and track participant progress.</p>
                </div>
                
                <div className="bg-navy-deep rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Communication</h3>
                  <p className="text-mist text-sm">To send important updates about competitions, rules changes, and event information.</p>
                </div>
                
                <div className="bg-navy-deep rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Analytics and Improvement</h3>
                  <p className="text-mist text-sm">To analyze competition performance, improve our platforms, and enhance user experience.</p>
                </div>
                
                <div className="bg-navy-deep rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Security and Compliance</h3>
                  <p className="text-mist text-sm">To ensure fair play, prevent cheating, and comply with legal obligations.</p>
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
              <p className="text-mist mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>
              
              <div className="space-y-3">
                <div className="bg-navy-deep rounded-lg p-3">
                  <h3 className="text-white font-semibold text-sm">Competition Partners</h3>
                  <p className="text-haze text-sm">With CTF platform providers and competition sponsors for competition administration.</p>
                </div>
                
                <div className="bg-navy-deep rounded-lg p-3">
                  <h3 className="text-white font-semibold text-sm">Legal Requirements</h3>
                  <p className="text-haze text-sm">When required by law or to protect our rights and safety.</p>
                </div>
                
                <div className="bg-navy-deep rounded-lg p-3">
                  <h3 className="text-white font-semibold text-sm">Consent</h3>
                  <p className="text-haze text-sm">With your explicit consent for specific purposes.</p>
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
                <p className="text-mist">We implement appropriate technical and organizational measures to protect your personal information:</p>
                
                <ul className="text-mist space-y-2 ml-4">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Access controls and authentication measures</li>
                  <li>• Secure hosting and infrastructure</li>
                  <li>• Employee training on data protection</li>
                </ul>
                
                <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <p className="text-gold text-sm">
                    <strong>Note:</strong> While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
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
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-mist">You have the following rights regarding your personal information:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-navy-deep rounded-lg p-3">
                    <h3 className="text-white font-semibold text-sm">Access</h3>
                    <p className="text-haze text-sm">Request access to your personal data</p>
                  </div>
                  
                  <div className="bg-navy-deep rounded-lg p-3">
                    <h3 className="text-white font-semibold text-sm">Correction</h3>
                    <p className="text-haze text-sm">Request correction of inaccurate data</p>
                  </div>
                  
                  <div className="bg-navy-deep rounded-lg p-3">
                    <h3 className="text-white font-semibold text-sm">Deletion</h3>
                    <p className="text-haze text-sm">Request deletion of your personal data</p>
                  </div>
                  
                  <div className="bg-navy-deep rounded-lg p-3">
                    <h3 className="text-white font-semibold text-sm">Portability</h3>
                    <p className="text-haze text-sm">Request data in a portable format</p>
                  </div>
                </div>
                
                <p className="text-mist text-sm">To exercise these rights, please contact us at privacy@blueteamvillage.org</p>
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
                <p className="text-mist">We use cookies and similar technologies to:</p>
                
                <ul className="text-mist space-y-1 ml-4">
                  <li>• Maintain your session and preferences</li>
                  <li>• Analyze website usage and performance</li>
                  <li>• Provide personalized content and features</li>
                  <li>• Ensure security and prevent fraud</li>
                </ul>
                
                <p className="text-mist text-sm">You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.</p>
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
                  <p className="text-mist">Email: privacy@blueteamvillage.org</p>
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
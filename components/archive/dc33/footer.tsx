import { Github, Twitter, ExternalLink, Linkedin, Link } from "lucide-react"
import Image from "next/image"
import NextLink from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <NextLink href="/archive/dc33">
                <Image
                  src="/obsidian.png"
                  alt="Project Obsidian Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </NextLink>
              <h3 className="text-xl font-bold text-cyan-300">BTV CTF</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Blue Team Village's premier cybersecurity competition at DEF CON 33.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/blueteamvillage" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/blueteamvillage/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/the-blue-team-village" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://bsky.app/profile/blueteamvillage.bsky.social" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/archive/dc33/challenges" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Challenges
                </a>
              </li>
              <li>
                <a href="https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/index.html" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Download Files
                </a>
              </li>
              <li>
                <a href="https://ctfd.dc33.blueteamvillage.org" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  CTFd
                </a>
              </li>
              <li>
                <a href="/archive/dc33/rules" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Rules
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/archive/dc33/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/archive/dc33/challenges" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Challenges
                </a>
              </li>
              <li>
                <a href="/past-winners" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Past CTF Winners
                </a>
              </li>
              <li>
                <a href="/archive/dc33/location" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Blue Team Village Logo */}
          <div className="flex justify-center mb-6">
            <a href="/archive/dc33">
              <Image
                src="/btv-logo.png"
                alt="Blue Team Village Logo"
                width={160}
                height={160}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://blueteamvillage.org"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center"
                >
                  blueteamvillage.org
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li className="text-gray-400 text-sm">Las Vegas, NV</li>
              <li className="text-gray-400 text-sm">DEF CON 33</li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-800 pt-8">          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Blue Team Village. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="/code-of-conduct" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            "Access Everywhere" - DEF CON 33 Theme • Built with ❤️ for the cybersecurity community
          </p>
        </div>
      </div>
    </footer>
  )
}

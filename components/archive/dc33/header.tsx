"use client"

import { useState } from "react"
import { Menu, X, Shield, Trophy, Files, MapPin, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArchiveBanner } from "@/components/archive/archive-banner"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { href: "/archive/dc33", label: "Home", icon: Shield },
    { href: "/archive/dc33/about", label: "About", icon: Users },
    { href: "/archive/dc33/challenges", label: "Challenges", icon: Trophy },
    { href: "/past-winners", label: "Past Winners", icon: Award },
    { href: "https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/index.html", label: "Download Files", icon: Files },
    { href: "/archive/dc33/location", label: "Location", icon: MapPin },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <ArchiveBanner />

      {/* Main Header Navigation */}
      <div className="bg-black/90 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/archive/dc33" className="flex items-center space-x-2">
              <Image
                src="/obsidian.png"
                alt="Project Obsidian Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BTV CTF
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <nav className="space-y-2">
                {navigationLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center space-x-2 px-2 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-900/50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

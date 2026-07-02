"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/challenges", label: "Challenges" },
  { href: "/setup", label: "Setup" },
  { href: "/rules", label: "Rules" },
  { href: "/faq", label: "FAQ" },
  { href: "/past-winners", label: "Past Winners" },
  { href: "/about", label: "About" },
]

export function Header({
  announcement,
  ctfPlatformName,
  ctfPlatformUrl,
}: {
  announcement?: { text: string; url?: string }
  ctfPlatformName: string
  ctfPlatformUrl: string
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {announcement && (
        <div className="border-b border-teal/30 bg-teal-dark">
          <div className="mx-auto max-w-6xl px-6 py-2 text-center text-sm font-bold text-white">
            {announcement.url ? (
              <a href={announcement.url} className="underline underline-offset-2 hover:text-mint">
                {announcement.text}
              </a>
            ) : (
              announcement.text
            )}
          </div>
        </div>
      )}

      <div className="border-b border-white/[0.06] bg-navy-deep/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/btv_logo.png"
              alt="Blue Team Village logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-lg font-black tracking-tight text-white">
              BTV CTF <span className="text-teal-bright">@</span> DC34
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-mist transition-colors hover:text-teal-bright"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm">
              <a href={ctfPlatformUrl} target="_blank" rel="noopener noreferrer">
                {ctfPlatformName}
                <ExternalLink aria-hidden />
              </a>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav
            className="border-t border-white/[0.06] px-6 py-4 lg:hidden"
            aria-label="Mobile"
          >
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-2 py-2 text-mist transition-colors hover:bg-white/[0.06] hover:text-teal-bright"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full">
                  <a href={ctfPlatformUrl} target="_blank" rel="noopener noreferrer">
                    Open {ctfPlatformName}
                    <ExternalLink aria-hidden />
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

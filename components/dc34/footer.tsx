import Link from "next/link"
import Image from "next/image"

import { GradientDivider } from "@/components/dc34/gradient-divider"
import type { SiteSettings } from "@/lib/contentful/types"

const siteLinks = [
  { href: "/challenges", label: "Challenges" },
  { href: "/setup", label: "Setup" },
  { href: "/rules", label: "Rules" },
  { href: "/faq", label: "FAQ" },
  { href: "/past-winners", label: "Past Winners" },
  { href: "/about", label: "About" },
  { href: "/archive/dc33", label: "DEF CON 33 Archive" },
]

const policyLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/code-of-conduct", label: "Code of Conduct" },
]

const socialLinks = [
  { href: "https://blueteamvillage.org", label: "blueteamvillage.org" },
  { href: "https://x.com/blueteamvillage", label: "X / Twitter" },
  { href: "https://bsky.app/profile/blueteamvillage.bsky.social", label: "Bluesky" },
  { href: "https://github.com/blueteamvillage/", label: "GitHub" },
  { href: "https://www.linkedin.com/company/the-blue-team-village", label: "LinkedIn" },
]

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="relative z-20 mt-24 border-t border-white/[0.06] bg-navy-deep">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/btv_logo.png"
                alt="Blue Team Village logo"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="font-black text-white">BTV CTF</span>
            </Link>
            <p className="text-sm leading-relaxed text-haze">
              Blue Team Village&apos;s defender-focused CTF at DEF CON 34 —
              Project Obsidian.
            </p>
          </div>

          <nav aria-label="Site">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-mint">Site</h2>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-teal-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Community">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-mint">Community</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href={settings.ctfPlatformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mist transition-colors hover:text-teal-bright"
                >
                  {settings.ctfPlatformName} platform
                </a>
              </li>
              {settings.discordUrl && (
                <li>
                  <a
                    href={settings.discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mist transition-colors hover:text-teal-bright"
                  >
                    Discord
                  </a>
                </li>
              )}
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mist transition-colors hover:text-teal-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-mint">Legal</h2>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-teal-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <GradientDivider className="my-8" />

        <p className="font-mono text-xs text-haze">
          © {new Date().getFullYear()} Blue Team Village · DEF CON 34 · Las Vegas
        </p>
      </div>
    </footer>
  )
}

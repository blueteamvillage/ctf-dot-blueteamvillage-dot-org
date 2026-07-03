import Image from "next/image"
import { Handshake } from "lucide-react"

import type { Sponsor, SponsorTier } from "@/lib/contentful/types"

const tierStyles: Record<SponsorTier, { label: string; accent: string }> = {
  blue: { label: "Blue", accent: "border-teal/40 text-teal-bright" },
  platinum: { label: "Platinum", accent: "border-fog/40 text-fog" },
  gold: { label: "Gold", accent: "border-gold/40 text-gold" },
  community: { label: "Community", accent: "border-mint/40 text-mint" },
}

/*
 * Contentful serves assets from images.ctfassets.net, which supports on-the-fly
 * resizing via query params — request a small webp instead of the original
 * (sponsor uploads can be several MB).
 */
function logoSrc(url: string): string {
  return url.includes("ctfassets.net") ? `${url}?w=320&fm=webp&q=90` : url
}

export function SponsorGrid({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {sponsors.map((sponsor) => {
        const tier = tierStyles[sponsor.tier]
        const card = (
          <div className="flex h-full flex-col items-center gap-3 rounded-lg border border-white/[0.06] bg-navy-card p-6 text-center">
            <span
              className={`inline-flex rounded-md border bg-white/[0.03] px-2.5 py-0.5 text-xs font-bold uppercase tracking-[0.15em] ${tier.accent}`}
            >
              {tier.label}
            </span>
            {sponsor.logo ? (
              // White chip so logos with dark wordmarks stay legible on navy
              <span className="flex h-20 w-full items-center justify-center rounded-md bg-white px-4 py-2.5">
                <Image
                  src={logoSrc(sponsor.logo.url)}
                  alt={sponsor.logo.alt || sponsor.name}
                  width={sponsor.logo.width}
                  height={sponsor.logo.height}
                  className="h-full w-auto max-w-full object-contain"
                />
              </span>
            ) : (
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-white/10 text-haze">
                <Handshake className="h-6 w-6" aria-hidden />
              </span>
            )}
            <p className="font-bold text-white">{sponsor.name}</p>
            {sponsor.blurb && <p className="text-xs text-haze">{sponsor.blurb}</p>}
          </div>
        )
        return sponsor.url ? (
          <a
            key={`${sponsor.tier}-${sponsor.order}`}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            {card}
          </a>
        ) : (
          <div key={`${sponsor.tier}-${sponsor.order}`}>{card}</div>
        )
      })}
    </div>
  )
}

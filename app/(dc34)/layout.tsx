import type React from "react"

import { Footer } from "@/components/dc34/footer"
import { Header } from "@/components/dc34/header"
import { ScanlineOverlay } from "@/components/dc34/scanline-overlay"
import { getSiteSettings } from "@/lib/contentful/queries"

/*
 * Build-time override for the announcement banner: "on"/"true"/"1" forces it
 * (text still required), "off"/"false"/"0" hides it, unset defers to the
 * Contentful toggle. The site is fully static, so a change only takes effect
 * on the next build.
 */
function announcementOverride(): boolean | undefined {
  const value = process.env.ANNOUNCEMENT_BANNER?.trim().toLowerCase()
  if (value === "on" || value === "true" || value === "1") return true
  if (value === "off" || value === "false" || value === "0") return false
  if (value) {
    console.warn(
      `[banner] ANNOUNCEMENT_BANNER="${value}" is not on/off — deferring to Contentful`
    )
  }
  return undefined
}

/*
 * Chrome for the DC34 site. The DC33 archive lives outside this group and
 * keeps its own header/footer.
 */
export default async function Dc34Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()
  const announcementEnabled =
    announcementOverride() ?? settings.announcementEnabled

  return (
    <div className="flex min-h-screen flex-col">
      <ScanlineOverlay />
      <Header
        announcement={
          announcementEnabled && settings.announcementText
            ? { text: settings.announcementText, url: settings.announcementUrl || undefined }
            : undefined
        }
        ctfPlatformName={settings.ctfPlatformName}
        ctfPlatformUrl={settings.ctfPlatformUrl}
      />
      <main className="relative z-20 flex-1">{children}</main>
      <Footer settings={settings} />
    </div>
  )
}

import type React from "react"

import { Footer } from "@/components/dc34/footer"
import { Header } from "@/components/dc34/header"
import { ScanlineOverlay } from "@/components/dc34/scanline-overlay"
import { getSiteSettings } from "@/lib/contentful/queries"

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

  return (
    <div className="flex min-h-screen flex-col">
      <ScanlineOverlay />
      <Header
        announcement={
          settings.announcementEnabled && settings.announcementText
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

import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "DEF CON 33 Archive | Blue Team Village CTF",
  description:
    "Archived Blue Team Village CTF site from DEF CON 33 (August 2025). Preserved for reference — see the current site for DEF CON 34.",
  robots: { index: false },
}

export default function ArchiveDc33Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

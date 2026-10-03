import type { Metadata } from "next";
import { Lato, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Team Village CTF",
  description:
    "Blue Team Village's capture-the-flag competitions — malware forensics, container and cloud investigation, and incident response. Next up: BTV CTF @ EkoParty 2026, BlueSpace Buenos Aires, October 7–9.",
  metadataBase: new URL("https://ctf.blueteamvillage.org"),
  applicationName: "Blue Team Village CTF",
  keywords: [
    "Blue Team Village",
    "BTV CTF",
    "DEF CON 34",
    "EkoParty 2026",
    "BlueSpace",
    "Project Obsidian",
    "capture the flag",
    "malware forensics",
    "container forensics",
    "Kubernetes",
    "incident response",
    "DFIR",
  ],
  authors: [{ name: "Blue Team Village", url: "https://blueteamvillage.org" }],
  creator: "Blue Team Village",
  publisher: "Blue Team Village",
  openGraph: {
    title: "Blue Team Village CTF",
    description:
      "Pull down a container, work out what the malware did, and prove it — flag by flag. Next: BTV CTF @ EkoParty 2026, Buenos Aires.",
    url: "https://ctf.blueteamvillage.org",
    siteName: "Blue Team Village CTF",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/obsidian.png",
        width: 400,
        height: 400,
        alt: "Project Obsidian — Blue Team Village CTF at DEF CON 34",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Team Village CTF",
    description:
      "Pull down a container, work out what the malware did, and prove it — flag by flag. Next: BTV CTF @ EkoParty 2026, Buenos Aires.",
    images: ["/obsidian.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // The real BTV mark. favicon.svg is btv_logo.svg with the artboard padding
  // cropped out of the viewBox — uncropped, the logo covers about half the
  // canvas and renders as a smudge in a browser tab. app/favicon.ico carries
  // the 16/32/48/256 raster fallback and is picked up by Next's file
  // convention. The Apple icon is pre-composited on navy because iOS drops
  // transparency and would otherwise flatten it onto white.
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-256.png', type: 'image/png', sizes: '256x256' },
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

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
  title: "BTV CTF @ DEF CON 34 | Blue Team Village",
  description:
    "Central hub for the forensic analysis of malware in containerized environments — Blue Team Village's Project Obsidian CTF at DEF CON 34, August 6–9, 2026, Las Vegas.",
  metadataBase: new URL("https://ctf.blueteamvillage.org"),
  openGraph: {
    title: "BTV CTF @ DEF CON 34",
    description:
      "Pull down a container, work out what the malware did, and prove it — flag by flag. Project Obsidian at DEF CON 34.",
    url: "https://ctf.blueteamvillage.org",
    siteName: "Blue Team Village CTF",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon-detailed.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon-detailed.svg',
    apple: '/favicon-detailed.svg',
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

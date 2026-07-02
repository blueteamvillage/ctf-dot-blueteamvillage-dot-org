import Link from "next/link"

// Temporary placeholder — replaced by the DC34 home page in the site refresh.
export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-teal-400">
        Blue Team Village · Project Obsidian
      </p>
      <h1 className="text-4xl md:text-6xl font-bold">
        BTV CTF <span className="text-cyan-400">@</span> DEF CON 34
      </h1>
      <p className="text-gray-400 max-w-xl">
        August 6–9, 2026 · Las Vegas. The new site is under construction.
      </p>
      <Link
        href="/archive/dc33"
        className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300 transition-colors"
      >
        Browse the DEF CON 33 archive →
      </Link>
    </main>
  )
}

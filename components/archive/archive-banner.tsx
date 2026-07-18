import Link from "next/link"

export function ArchiveBanner() {
  return (
    <div className="bg-linear-to-r from-slate-700 to-slate-600 border-b border-slate-500/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3">
        <div className="flex items-center justify-center space-x-2 text-center">
          <span className="text-white font-semibold text-sm md:text-base">
            📦 ARCHIVED — DEF CON 33 (Aug 2025).{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-cyan-300 transition-colors">
              Go to the current site
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

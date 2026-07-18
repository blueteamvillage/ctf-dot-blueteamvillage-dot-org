import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    // Baseline hardening applied to every route. (A Content-Security-Policy
    // is deliberately left out here — it needs tuning against Vercel
    // Analytics and inlined styles to avoid breaking the page.)
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
      },
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ]
    return [{ source: "/:path*", headers: securityHeaders }]
  },
  async redirects() {
    // Old DC33 URLs now live under the archive.
    const archived = [
      "/challenges/project-obsidian",
      "/challenges/venator-aurum",
      "/challenges/a-cyber-guru",
      "/challenges/cyberbit",
      "/challenges/ekoparty-2025-bluespace",
      "/location",
    ]
    return archived.map((source) => ({
      source,
      destination: `/archive/dc33${source}`,
      permanent: true,
    }))
  },
}

export default nextConfig

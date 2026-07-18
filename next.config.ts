import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
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

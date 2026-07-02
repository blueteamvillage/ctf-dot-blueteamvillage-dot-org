import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    // Old DC33 URLs now live under the archive.
    const archived = [
      '/challenges/project-obsidian',
      '/challenges/venator-aurum',
      '/challenges/a-cyber-guru',
      '/challenges/cyberbit',
      '/challenges/ekoparty-2025-bluespace',
      '/location',
    ]
    return archived.map((source) => ({
      source,
      destination: `/archive/dc33${source}`,
      permanent: true,
    }))
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)

import { createMDX } from 'fumadocs-mdx/next'
import type { NextConfig } from 'next'

const isProduction = process.env.NODE_ENV === 'production'
const withMDX = createMDX()

const nextConfig: NextConfig = {
  output: 'export',
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  logging: { fetches: { fullUrl: true } },
  typescript: { ignoreBuildErrors: isProduction },
}

export default withMDX(nextConfig)

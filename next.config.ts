import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://brianlai.dev/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

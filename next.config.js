/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["://githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "://githubusercontent.com",
        port: "",
        pathname: "/seyileo/testimage/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

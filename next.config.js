/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    BASE_URL: 'http://localhost:4200'
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env : {
    domain : 'http://localhost:3000'
  }
}

module.exports = nextConfig

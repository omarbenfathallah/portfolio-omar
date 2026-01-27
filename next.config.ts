/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // pour un site statique
  images: {
    unoptimized: true
  },
  eslint: {
    // Désactiver ESLint pendant le build (temporaire)
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

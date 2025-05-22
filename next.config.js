// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {  
  // Add React strict mode for better development experience
  reactStrictMode: true,
    images: { 
    // Using remotePatterns instead of the deprecated domains
    remotePatterns: [
      // Using Pexels for product images (reliable free image hosting)
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https', 
        hostname: '**.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      }
    ],
    // Allow data URL images (for SVG fallbacks)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Disable tracing to prevent EPERM errors
  outputFileTracingExcludes: {
    '*': ['**/*.js.map', '**/*.d.ts', '.next/trace']
  }
};

// Disable telemetry via environment variable instead
process.env.NEXT_TELEMETRY_DISABLED = '1';

module.exports = nextConfig;
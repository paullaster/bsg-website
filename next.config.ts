import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const assetCache = [
  { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      { source: '/images/:path*', headers: assetCache },
      { source: '/qsell/:path*', headers: assetCache },
    ];
  },
  // Lets the dev server be opened from another device on the local network
  // (for example a phone at http://192.168.100.197:3000). Dev only; no effect in production.
  allowedDevOrigins: ['192.168.100.197'],
};

export default nextConfig;

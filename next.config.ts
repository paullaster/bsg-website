import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets the dev server be opened from another device on the local network
  // (for example a phone at http://192.168.100.197:3000). Dev only; no effect in production.
  allowedDevOrigins: ['192.168.100.197'],
};

export default nextConfig;

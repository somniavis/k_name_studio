import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async headers() {
    // Get allowed origins from environment variable
    const allowedOrigins = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS
      ? process.env.NEXT_PUBLIC_ALLOWED_ORIGINS.split(',')
      : [
          'https://k-name-studio.vercel.app',
          'https://*.vercel.app', // Allow preview deployments
          ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : [])
        ];

    return [
      {
        // Apply CORS headers to API routes only
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: allowedOrigins.join(',')
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization'
          },
          {
            key: 'Access-Control-Max-Age',
            value: '86400' // 24 hours
          },
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
    ];
  },
};

export default nextConfig;

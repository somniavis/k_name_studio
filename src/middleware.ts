import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiter (for Vercel Edge)
// In production, consider using Vercel KV or Redis for distributed rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimit.entries()) {
    if (value.resetTime < now) {
      rateLimit.delete(key);
    }
  }
}, 60000); // Clean up every minute

export function middleware(request: NextRequest) {
  // Get client IP (fallback to 'anonymous' if not available)
  const ip = request.headers.get('x-forwarded-for') ||
             request.headers.get('x-real-ip') ||
             'anonymous';
  const now = Date.now();

  // Rate limit configuration
  const MAX_REQUESTS = 20; // 20 requests
  const WINDOW_MS = 60000; // per 1 minute

  const limit = rateLimit.get(ip);

  if (limit && limit.resetTime > now) {
    if (limit.count >= MAX_REQUESTS) {
      console.log(`[Rate Limit] Blocked ${ip} - ${limit.count} requests`);
      return new NextResponse(
        JSON.stringify({
          error: 'Too Many Requests',
          message: 'Please wait a moment before trying again.'
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(Math.ceil((limit.resetTime - now) / 1000))
          }
        }
      );
    }
    limit.count++;
  } else {
    rateLimit.set(ip, { count: 1, resetTime: now + WINDOW_MS });
  }

  return NextResponse.next();
}

// Apply middleware only to API routes
export const config = {
  matcher: '/api/:path*'
};

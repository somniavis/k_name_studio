/**
 * Server-only Environment Variables
 *
 * IMPORTANT: This file should ONLY be imported in server-side code (API routes, Server Components)
 * Never import this in client components or it will expose sensitive data
 */

// Validate required environment variables at build time
const requiredServerEnvVars = [
  'GUMROAD_LICENSE_KEY',
  'GUMROAD_PRODUCT_PERMALINK',
] as const;

// Validate each required variable
requiredServerEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`❌ Missing required server environment variable: ${envVar}`);
  }
});

// Server-only environment variables (NEVER exposed to client)
export const serverEnv = {
  gumroadLicenseKey: process.env.GUMROAD_LICENSE_KEY!,
  gumroadProductPermalink: process.env.GUMROAD_PRODUCT_PERMALINK!,
  nodeEnv: process.env.NODE_ENV || 'development',

  // Vercel KV (optional)
  kvRestApiUrl: process.env.KV_REST_API_URL,
  kvRestApiToken: process.env.KV_REST_API_TOKEN,

  // Gumroad Webhook Secret (optional, for signature verification)
  gumroadWebhookSecret: process.env.GUMROAD_WEBHOOK_SECRET,
} as const;

// Client-safe environment variables (can be exposed to browser)
export const clientEnv = {
  gumroadProductUrl: process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL!,
} as const;

// Type-safe access
export type ServerEnv = typeof serverEnv;
export type ClientEnv = typeof clientEnv;

// Log environment status (only in development)
if (serverEnv.nodeEnv === 'development') {
  console.log('[ENV] ✅ Server environment variables loaded');
  console.log('[ENV] 📋 Available:', Object.keys(serverEnv).join(', '));
}

# 🔒 Security Implementation Guide

## Overview
This document outlines the security measures implemented in K-Name Studio to protect sensitive data and prevent unauthorized access.

---

## ✅ Implemented Security Measures (Phase 1: 1-3)

### 1. **Rate Limiting**
**Status: ✅ Implemented**

- **Location**: `src/middleware.ts`
- **Configuration**:
  - 20 requests per minute per IP
  - Applied to all `/api/*` routes
  - Returns `429 Too Many Requests` when exceeded
  - Includes `Retry-After` header

**How it works**:
```typescript
// Blocks excessive API requests from same IP
const MAX_REQUESTS = 20; // per minute
const WINDOW_MS = 60000; // 1 minute
```

**Production Note**: Consider using Vercel KV or Redis for distributed rate limiting across multiple edge functions.

---

### 2. **Environment Variables (Server-Only)**
**Status: ✅ Implemented**

- **Location**: `src/lib/env.ts`
- **Protected Variables**:
  - `GUMROAD_LICENSE_KEY` - Server-only ❌ Never exposed to client
  - `GUMROAD_PRODUCT_PERMALINK` - Server-only ❌ Never exposed to client
  - `KV_REST_API_URL` - Server-only ❌ Never exposed to client
  - `KV_REST_API_TOKEN` - Server-only ❌ Never exposed to client

- **Client-Safe Variables**:
  - `NEXT_PUBLIC_GUMROAD_PRODUCT_URL` - ✅ Can be exposed to client

**Usage**:
```typescript
// ✅ Correct - In API routes
import { serverEnv } from '@/lib/env';
const { gumroadLicenseKey } = serverEnv;

// ❌ Wrong - Never import serverEnv in client components
```

**Updated Files**:
- ✅ `/api/gumroad/verify/route.ts`
- ✅ `/api/gumroad/webhook/route.ts`

---

### 3. **CORS & Security Headers**
**Status: ✅ Implemented**

- **Location**: `next.config.ts`
- **Allowed Origins**:
  - `https://k-name-studio.vercel.app` (Production)
  - `https://*.vercel.app` (Preview deployments)
  - `http://localhost:3000` (Development only)

**Security Headers**:
```typescript
- Access-Control-Allow-Origin: Controlled origins only
- Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
- X-Content-Type-Options: nosniff (Prevent MIME sniffing)
- X-Frame-Options: DENY (Prevent clickjacking)
- X-XSS-Protection: 1; mode=block (XSS protection)
- Referrer-Policy: strict-origin-when-cross-origin
```

**Configuration**:
- Add custom origins via `NEXT_PUBLIC_ALLOWED_ORIGINS` environment variable
- Example: `NEXT_PUBLIC_ALLOWED_ORIGINS=https://example.com,https://example2.com`

---

## ✅ Implemented Security Measures (Phase 2: 4)

### 4. **License Key Reuse Prevention** (Vercel KV)
**Status: ✅ Implemented**

- **Location**: `src/lib/kv.ts`
- **Configuration**:
  - License keys stored in Vercel KV
  - 24-hour expiration window
  - Tracks usage count and timestamps
  - Returns 403 Forbidden on reuse attempts

**How it works**:
```typescript
// Before verification: Check if license key was already used
const isReused = await isLicenseKeyReused(licenseKey);
if (isReused) {
  return 403 Forbidden; // Prevent reuse
}

// After successful verification: Store license key
await storeLicenseKeyRecord(licenseKey);
```

**Data Structure**:
```typescript
interface LicenseKeyRecord {
  licenseKey: string;
  firstUsedAt: string;
  usageCount: number;
  lastUsedAt: string;
}
```

**Graceful Fallback**: If Vercel KV is not configured, the system logs errors but allows requests to proceed (doesn't break functionality).

**Updated Files**:
- ✅ `src/lib/kv.ts` (NEW - KV utility functions)
- ✅ `src/app/api/gumroad/verify/route.ts` (Added reuse prevention logic)

---

## 🔜 Pending Security Measures (Optional Future Enhancements)

### 5. **API Authentication (JWT)** (Optional)
**Status: ⏳ Pending**

**Plan**:
- Generate signed JWT tokens for API access
- Verify token on each API request
- Short expiration time (1 hour)
- Refresh token mechanism

### 6. **Webhook Signature Verification** (Optional)
**Status: ⏳ Pending**

**Plan**:
- Verify Gumroad webhook signatures
- Use HMAC-SHA256 validation
- Reject unsigned/invalid webhooks
- Prevent webhook spoofing

---

## 🚀 Deployment Checklist

### Vercel Environment Variables
Make sure to set these in Vercel Dashboard:

**Server-Only (Settings → Environment Variables)**:
```bash
GUMROAD_LICENSE_KEY=your_license_key
GUMROAD_PRODUCT_PERMALINK=pay
KV_REST_API_URL=your_kv_url (when KV is setup)
KV_REST_API_TOKEN=your_kv_token (when KV is setup)
```

**Client-Safe (Can start with NEXT_PUBLIC_)**:
```bash
NEXT_PUBLIC_GUMROAD_PRODUCT_URL=https://knamestudio.gumroad.com/l/pay
NEXT_PUBLIC_ALLOWED_ORIGINS=https://k-name-studio.vercel.app
```

---

## 🔍 Testing Security

### 1. Test Rate Limiting
```bash
# Make 21+ requests rapidly
for i in {1..25}; do curl http://localhost:3000/api/gumroad/verify; done

# Should return 429 after 20 requests
```

### 2. Test Environment Variables
```bash
# Verify server env is NOT exposed
curl http://localhost:3000/api/test-env

# Should NOT see GUMROAD_LICENSE_KEY in response
```

### 3. Test CORS
```bash
# Request from unauthorized origin
curl -H "Origin: https://malicious-site.com" \
  http://localhost:3000/api/gumroad/verify

# Should be blocked
```

### 4. Test License Key Reuse Prevention
```bash
# First request with a license key (should succeed)
curl -X POST http://localhost:3000/api/gumroad/verify \
  -H "Content-Type: application/json" \
  -d '{"licenseKey": "TEST-KEY-123"}'

# Second request with same key (should return 403)
curl -X POST http://localhost:3000/api/gumroad/verify \
  -H "Content-Type: application/json" \
  -d '{"licenseKey": "TEST-KEY-123"}'

# Expected: Second request returns 403 Forbidden
```

---

## 📊 Security Monitoring

### Key Metrics to Monitor:
1. Rate limit violations (429 responses)
2. Failed authentication attempts
3. Invalid webhook signatures
4. Unusual API access patterns

### Recommended Tools:
- Vercel Analytics (built-in)
- Sentry (error tracking)
- LogRocket (session replay)

---

## 🔐 Best Practices

### Do's ✅
- Always use `serverEnv` for sensitive data
- Validate all user inputs
- Use HTTPS only in production
- Rotate secrets regularly
- Monitor API usage patterns
- Keep dependencies updated

### Don'ts ❌
- Never commit `.env.local` to git
- Never expose API keys to client
- Never skip rate limiting
- Never trust client-side validation alone
- Never log sensitive data

---

## 📞 Security Contacts

If you discover a security vulnerability:
1. DO NOT open a public issue
2. Email: [Your security email]
3. Include: Description, steps to reproduce, impact

---

**Last Updated**: 2025-10-10
**Security Level**: Phase 1 Complete (1-3) ✅ | Phase 2 Measure 4 Complete ✅
**Optional Enhancements**: Measures 5-6 (JWT Auth, Webhook Verification) ⏳

# Payment Integration Guide - Gumroad

## 📋 Overview

Korean Name Studio uses Gumroad's Overlay License for premium feature payments with webhook verification.

**Payment Method:** Overlay License (no redirect)
**Verification:** Server-side webhook + manual user confirmation
**Optimization:** User-triggered verification for minimal API calls

---

## 🏗️ Architecture

### Complete Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│  1. User clicks "Unlock Premium"                                │
│     ↓                                                            │
│  2. Frontend creates payment session                            │
│     POST /api/payment/session                                   │
│     Returns: { sessionId: "uuid-1234" }                        │
│     ↓                                                            │
│  3. Payment modal opens with Gumroad iframe                     │
│     URL: https://yourproduct.gumroad.com/l/xxx?session_id=...  │
│     ↓                                                            │
│  4. User completes payment on Gumroad                           │
│     (Opens in new tab/window)                                   │
│     ↓                                                            │
│  5. Gumroad sends webhook to server                             │
│     POST /api/gumroad/webhook                                   │
│     Payload: { sale_id, license_key, custom_fields: {...} }    │
│     ↓                                                            │
│  6. Server verifies webhook signature                           │
│     HMAC-SHA256(payload, GUMROAD_WEBHOOK_SECRET)               │
│     ↓                                                            │
│  7. Server updates payment session                              │
│     paymentSessions.set(sessionId, {                           │
│       completed: true,                                          │
│       licenseKey: "xxx-xxx-xxx"                                │
│     })                                                          │
│     ↓                                                            │
│  8. User clicks "Confirm Payment" button                        │
│     GET /api/payment/session?sessionId=uuid-1234               │
│     Manually triggered by user after completing payment        │
│     ↓                                                            │
│  9. On success: Premium names unlocked                          │
│     Zustand store: setIsPremiumUnlocked(true)                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔧 Setup Instructions

### 1. Gumroad Product Setup

1. **Create Product** on Gumroad dashboard
   - Product type: Digital product
   - Price: Set your premium price (e.g., $9.99)
   - Enable: "Generate a unique license key"

2. **Get Product URL**
   - Format: `https://yourname.gumroad.com/l/product-code`
   - Add to `.env.local`: `GUMROAD_PRODUCT_URL=https://...`

3. **Enable Webhooks**
   - Go to Settings → Advanced → Webhooks
   - Add webhook URL: `https://your-domain.vercel.app/api/gumroad/webhook`
   - Copy webhook secret
   - Add to `.env.local`: `GUMROAD_WEBHOOK_SECRET=your_secret`

4. **Configure Custom Fields**
   - Add custom field: `session_id` (required)
   - This links payment to user session

### 2. Environment Variables

Create `.env.local` (DO NOT commit to git):

```bash
# Gumroad Configuration
GUMROAD_PRODUCT_URL=https://yourname.gumroad.com/l/product-code
GUMROAD_WEBHOOK_SECRET=your_webhook_secret_from_gumroad

# Base URL (for webhook callbacks)
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app

# Optional: Test mode
GUMROAD_TEST_MODE=false
```

### 3. Deploy to Vercel

```bash
# Add environment variables in Vercel dashboard
vercel env add GUMROAD_PRODUCT_URL
vercel env add GUMROAD_WEBHOOK_SECRET
vercel env add NEXT_PUBLIC_BASE_URL

# Deploy
git push origin main  # Auto-deploys
```

---

## 📁 File Structure

### Frontend Components

#### `src/components/GumroadPaymentModal.tsx`

**Purpose:** Full-screen payment modal with Gumroad integration

**Key Features:**
- Full-screen responsive modal
- Opens Gumroad payment in new tab/window
- Manual "Confirm Payment" button for user-triggered verification
- Multi-language support (10 languages)
- Minimal API calls (user-controlled)

**Props:**
```typescript
interface GumroadPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  productUrl: string;      // Gumroad product URL
  sessionId: string;       // Unique session ID
  onPaymentComplete: () => void;
}
```

**Usage:**
```tsx
<GumroadPaymentModal
  isOpen={isPaymentModalOpen}
  onClose={() => setIsPaymentModalOpen(false)}
  productUrl={process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL!}
  sessionId={sessionId}
  onPaymentComplete={() => {
    // Unlock premium content
    unlockPremium(premiumNames);
  }}
/>
```

**Manual Verification:**
```typescript
// User clicks "Confirm Payment" button after completing payment
// Single API call per click - extremely Vercel free tier friendly!
// Prevents unnecessary polling and reduces API usage
```

---

### Backend API Routes

#### `POST /api/payment/session`

**Purpose:** Create new payment session

**Request:** None (auto-generates sessionId)

**Response:**
```json
{
  "sessionId": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Implementation:**
```typescript
// src/app/api/payment/session/route.ts
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// In-memory storage (for MVP)
export const paymentSessions = new Map<string, PaymentSession>();

export async function POST() {
  const sessionId = uuidv4();

  paymentSessions.set(sessionId, {
    completed: false,
    createdAt: Date.now(),
  });

  return NextResponse.json({ sessionId });
}
```

**Storage:** In-memory Map (1-hour auto-cleanup)

---

#### `GET /api/payment/session?sessionId=xxx`

**Purpose:** Check payment status

**Query Parameters:**
- `sessionId` (required): Session ID to check

**Response (Incomplete):**
```json
{
  "completed": false
}
```

**Response (Completed):**
```json
{
  "completed": true,
  "licenseKey": "ABCD-EFGH-1234-5678"
}
```

**Implementation:**
```typescript
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('sessionId');

  if (!sessionId) {
    return NextResponse.json(
      { error: 'sessionId required' },
      { status: 400 }
    );
  }

  const session = paymentSessions.get(sessionId);

  if (!session) {
    return NextResponse.json(
      { error: 'Session not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    completed: session.completed,
    licenseKey: session.licenseKey,
  });
}
```

---

#### `POST /api/gumroad/webhook`

**Purpose:** Receive and verify Gumroad webhooks

**Headers:**
- `X-Gumroad-Signature`: HMAC-SHA256 signature

**Payload:**
```json
{
  "seller_id": "your_seller_id",
  "product_id": "your_product_id",
  "sale_id": "unique_sale_id",
  "license_key": "ABCD-EFGH-1234-5678",
  "custom_fields": {
    "session_id": "550e8400-e29b-41d4-a716-446655440000"
  },
  "sale_timestamp": "2025-10-13T12:00:00Z"
}
```

**Implementation:**
```typescript
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  const signature = request.headers.get('X-Gumroad-Signature');
  const body = await request.text();

  // 1. Verify signature
  const secret = process.env.GUMROAD_WEBHOOK_SECRET!;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');

  if (signature !== expectedSignature) {
    console.error('[Webhook] Invalid signature');
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 401 }
    );
  }

  // 2. Parse payload
  const data = JSON.parse(body);
  const sessionId = data.custom_fields?.session_id;
  const licenseKey = data.license_key;

  if (!sessionId) {
    console.error('[Webhook] No session_id in custom_fields');
    return NextResponse.json(
      { error: 'Missing session_id' },
      { status: 400 }
    );
  }

  // 3. Update session
  const session = paymentSessions.get(sessionId);
  if (session) {
    session.completed = true;
    session.licenseKey = licenseKey;
    paymentSessions.set(sessionId, session);

    console.log(`[Webhook] Payment completed for session: ${sessionId}`);
  }

  return NextResponse.json({ success: true });
}
```

**Security Notes:**
- **Always verify signature** - Prevent fake webhooks
- **Use HTTPS** - Webhook URLs must be HTTPS in production
- **Log errors** - For debugging failed payments

---

## 🔍 Testing Guide

### Local Development

**Problem:** Webhooks don't work on localhost

**Solutions:**

#### Option 1: ngrok (Recommended)

```bash
# 1. Start local server
npm run dev

# 2. Start ngrok tunnel
ngrok http 3000

# 3. Update Gumroad webhook URL
# Use ngrok URL: https://abc123.ngrok.io/api/gumroad/webhook

# 4. Test payment flow
```

#### Option 2: Vercel Preview Deployment

```bash
# 1. Push to feature branch
git checkout -b test-payment
git push origin test-payment

# 2. Get preview URL from Vercel dashboard
# Example: https://korean-name-studio-git-test-payment.vercel.app

# 3. Update Gumroad webhook temporarily
# Use preview URL: https://...vercel.app/api/gumroad/webhook
```

#### Option 3: Manual API Testing

Skip webhook and directly call API:

```bash
# 1. Create session
curl -X POST http://localhost:3000/api/payment/session

# Returns: {"sessionId":"xxx"}

# 2. Manually mark as completed (for testing)
# In browser console:
fetch('/api/payment/session', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    sessionId: 'xxx',
    completed: true,
    licenseKey: 'TEST-KEY-1234'
  })
})

# 3. Check status
curl http://localhost:3000/api/payment/session?sessionId=xxx
```

---

### Test Scenarios

#### 1. Successful Payment

1. Click "Unlock Premium"
2. Payment modal opens
3. Click "Pay on Gumroad" → Opens Gumroad page in new tab
4. Complete test payment (use Gumroad test card)
5. Webhook received → Session updated
6. User clicks "Confirm Payment" button
7. Premium names unlocked immediately

**Expected Result:** All premium content visible

#### 2. Failed Payment

1. Click "Unlock Premium"
2. Payment modal opens
3. Close Gumroad payment page without completing
4. User clicks "Confirm Payment" button
5. Error message shown: "Payment not confirmed yet"

**Expected Result:** Premium still locked, error message shown

#### 3. Normal Payment Flow

1. Click "Unlock Premium"
2. Payment modal opens
3. Complete payment in new tab
4. Click "Confirm Payment" button
5. Immediate verification and unlock

**Expected Result:** Premium unlocks immediately after clicking button

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Webhook Not Received

**Symptoms:**
- Payment completed on Gumroad
- Frontend keeps polling
- Never unlocks premium

**Solutions:**
- ✅ Check Gumroad webhook URL is correct
- ✅ Ensure URL is HTTPS (not HTTP)
- ✅ Verify webhook secret in `.env.local`
- ✅ Check Vercel function logs for errors
- ✅ Test signature verification locally

**Debug:**
```bash
# View Vercel function logs
vercel logs --follow

# Check for webhook errors
grep "Webhook" logs.txt
```

---

#### 2. Invalid Signature Error

**Symptoms:**
- Webhook received
- Returns 401 Unauthorized
- Logs show "Invalid signature"

**Solutions:**
- ✅ Verify `GUMROAD_WEBHOOK_SECRET` matches Gumroad dashboard
- ✅ Check for extra whitespace in secret
- ✅ Ensure using raw request body (not parsed JSON)

**Code Check:**
```typescript
// ❌ Wrong - Don't parse body first
const data = await request.json();
const body = JSON.stringify(data);

// ✅ Correct - Use raw body
const body = await request.text();
```

---

#### 3. Session Not Found

**Symptoms:**
- Webhook received
- Returns 404 Not Found
- Logs show "Session not found"

**Solutions:**
- ✅ Check `session_id` in Gumroad custom fields
- ✅ Ensure sessionId passed to Gumroad URL
- ✅ Verify in-memory storage hasn't been cleared (server restart)

**Debug:**
```typescript
// Add logging in webhook handler
console.log('[Webhook] Received sessionId:', sessionId);
console.log('[Webhook] Available sessions:', Array.from(paymentSessions.keys()));
```

---

#### 4. User Doesn't Click "Confirm Payment"

**Symptoms:**
- Payment completed
- Webhook received successfully
- Premium doesn't unlock

**Solutions:**
- ✅ Ensure clear instructions in payment modal
- ✅ Add notification to click "Confirm Payment" button
- ✅ Consider adding webhook-triggered notification (future enhancement)

**Manual Test:**
```bash
# Check session status manually
curl "https://your-domain.vercel.app/api/payment/session?sessionId=xxx"
```

---

## 🚀 Production Checklist

### Pre-Launch

- [ ] Gumroad product created and published
- [ ] Webhook URL configured in Gumroad dashboard
- [ ] Environment variables set in Vercel
- [ ] Test payment flow end-to-end on staging
- [ ] Verify webhook signature validation
- [ ] Test with real payment (then refund)
- [ ] Check error handling (network failures, timeouts)
- [ ] Verify premium content unlocking
- [ ] Test on mobile devices
- [ ] Verify "Confirm Payment" button works correctly

### Post-Launch Monitoring

- [ ] Monitor Vercel function logs daily
- [ ] Check Gumroad webhook delivery logs
- [ ] Track payment completion rate
- [ ] Monitor API error rates
- [ ] Set up alerts for failed webhooks
- [ ] Review customer support tickets

---

## 📊 Performance Optimization

### Current Implementation

```
Manual User Verification:
- User clicks "Confirm Payment" button after completing payment
- Single API call per button click
- Total requests: 1-3 average (extremely efficient)
- Cost: Minimal (Vercel free tier friendly)
```

### Why Manual Instead of Auto-Polling?

**Auto-Polling (Previous Approach):**
```
- Interval: 10 seconds
- Max checks: 6
- Total requests: 6 over 1 minute
- Cost: Higher (6x more API calls)
```

**Manual Verification (Current):**
```
- User-triggered: Click button when ready
- Average requests: 1-2 per payment
- Total requests: ~1 per successful payment
- Cost: Extremely low (minimal API usage)
```

**Rationale:**
- Gumroad webhook is typically fast (<5 seconds)
- Users know when they complete payment
- Manual button gives users control
- Eliminates unnecessary polling
- Significantly reduces API calls
- Better for Vercel free tier limits
- Clearer UX - user knows exactly when to verify

---

## 🔮 Future Enhancements

### Planned Improvements

1. **Persistent Storage**
   - Migrate from in-memory Map to Redis/Planetscale
   - Enables server restarts without losing sessions
   - Better for production scale

2. **Webhook Retry Logic**
   - Handle transient failures
   - Exponential backoff
   - Dead letter queue for failed webhooks

3. **Payment History**
   - Store completed payments in database
   - Allow users to re-download premium content
   - Requires user authentication

4. **Alternative Payment Methods**
   - Stripe integration
   - PayPal direct
   - Cryptocurrency options

5. **Real-Time Updates**
   - WebSocket connection for instant unlock
   - Eliminate polling entirely
   - Better UX, lower API costs

---

## 📚 Related Documentation

- [Security Best Practices](./SECURITY.md)
- [API Reference](./API_REFERENCE.md)
- [Gumroad Test Guide](./GUMROAD_TEST_GUIDE.md)
- [Project Architecture](./PROJECT_ARCHITECTURE.md)

---

## 🆘 Support

### Gumroad Issues
- Gumroad Help Center: https://help.gumroad.com
- Webhook Documentation: https://help.gumroad.com/article/264-webhooks

### Our Support
- GitHub Issues: [Your repo issues]
- Email: support@your-domain.com

---

**Last Updated:** 2025-10-13
**Version:** 2.0.0 (Updated with recent optimizations)
**Changelog:**
- Reduced polling from 40 to 6 checks
- Added manual check button
- Added multi-language support to payment modal
- Improved error handling

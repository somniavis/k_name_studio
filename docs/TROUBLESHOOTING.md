# Troubleshooting Guide - Korean Name Studio

## 📋 Overview

Common issues and solutions for Korean Name Studio development and deployment.

---

## 🔴 Critical Issues

### 1. Application Won't Start

#### Symptoms
```bash
npm run dev
# Error: Cannot find module 'next'
```

#### Solutions

**A. Missing Dependencies**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Verify Next.js version
npm list next
# Should show: next@15.5.4
```

**B. Node Version Mismatch**
```bash
# Check Node version
node --version
# Should be >= 18.17.0

# Use nvm to switch
nvm use 18
```

**C. Port Already in Use**
```bash
# Error: Port 3000 is already in use

# Find and kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

---

### 2. Build Failures

#### Symptoms
```bash
npm run build
# Error: Type error in src/components/...
```

#### Solutions

**A. TypeScript Errors**
```bash
# Check all type errors
npx tsc --noEmit

# Common fixes:
# - Add missing type imports
# - Fix any types to specific types
# - Ensure props are properly typed
```

**B. ESLint Errors**
```bash
# Run linter
npm run lint

# Auto-fix where possible
npm run lint -- --fix
```

**C. Missing Environment Variables**
```bash
# Error: GUMROAD_PRODUCT_URL is not defined

# Add to .env.local
echo "GUMROAD_PRODUCT_URL=https://..." >> .env.local

# Restart dev server
npm run dev
```

---

### 3. White Screen / Blank Page

#### Symptoms
- Application loads but shows blank page
- No errors in console
- Network tab shows 200 OK

#### Solutions

**A. Check Browser Console**
```javascript
// Look for React errors
// Common: "Cannot read property 'x' of undefined"

// Fix: Add null checks
const name = userData?.firstName || '';
```

**B. Verify State Initialization**
```typescript
// Check Zustand store initialization
// Clear LocalStorage if corrupted
localStorage.removeItem('korean-name-studio-storage');
```

**C. Check Suspense Boundaries**
```tsx
// Ensure page.tsx has Suspense wrapper
<Suspense fallback={<div>Loading...</div>}>
  <HomeContent />
</Suspense>
```

---

## 💳 Payment Issues

### 1. Webhook Not Received

#### Symptoms
- Payment completed on Gumroad
- Frontend keeps polling
- Premium never unlocks

#### Debug Steps

**Step 1: Verify Webhook URL**
```bash
# Check Gumroad dashboard
# Webhook URL should be:
https://your-domain.vercel.app/api/gumroad/webhook

# NOT:
http://localhost:3000/api/gumroad/webhook  ❌
https://your-domain.vercel.app/webhook     ❌
```

**Step 2: Check Webhook Logs**
```bash
# View Vercel function logs
vercel logs --follow

# Filter for webhook calls
vercel logs | grep "webhook"
```

**Step 3: Test Webhook Manually**
```bash
# Send test webhook
curl -X POST https://your-domain.vercel.app/api/gumroad/webhook \
  -H "Content-Type: application/json" \
  -H "X-Gumroad-Signature: test" \
  -d '{
    "sale_id": "test",
    "license_key": "TEST-KEY",
    "custom_fields": {
      "session_id": "test-session-123"
    }
  }'

# Should return: {"success":true} or signature error
```

**Step 4: Verify Environment Variable**
```bash
# Check secret is set
vercel env ls

# Should show:
# GUMROAD_WEBHOOK_SECRET  production

# If missing:
vercel env add GUMROAD_WEBHOOK_SECRET
```

#### Solutions

**A. Invalid Signature**
```typescript
// Error: "Invalid signature"

// Fix: Check secret matches Gumroad dashboard
// .env.local
GUMROAD_WEBHOOK_SECRET=abc123  ❌ (has spaces)
GUMROAD_WEBHOOK_SECRET=abc123  ✅ (no spaces)
```

**B. HTTPS Required**
```
// Error: Webhook URL must be HTTPS

// Fix: Deploy to Vercel (not localhost)
git push origin main
```

**C. Webhook Timeout**
```typescript
// Error: Webhook timed out

// Fix: Ensure handler is fast (<10s)
// Don't do heavy processing in webhook
// Just update session and return
```

---

### 2. Payment Polling Times Out

#### Symptoms
- Webhook received successfully
- Session marked as completed
- Frontend doesn't detect it

#### Debug Steps

**Step 1: Check Session API**
```bash
# Get session ID from network tab
# Then check manually:
curl "https://your-domain.vercel.app/api/payment/session?sessionId=xxx"

# Should return:
# {"completed":true,"licenseKey":"ABC-123"}
```

**Step 2: Verify Polling Logic**
```typescript
// Check GumroadPaymentModal.tsx
const maxChecks = 6;         // Should be 6
const checkInterval = 10000; // Should be 10000 (10s)

// Verify polling is running
console.log('[Poll] Checking session...', checkCount);
```

**Step 3: Check CORS**
```bash
# If deployed on custom domain
# Verify CORS headers allow your domain
```

#### Solutions

**A. Session Expired**
```typescript
// Sessions expire after 1 hour

// Fix: Create new session if expired
if (Date.now() - session.createdAt > 3600000) {
  // Session expired, create new one
}
```

**B. Server Restarted**
```typescript
// In-memory Map cleared on restart

// Fix: Migrate to persistent storage (Redis)
// Or: Use Vercel KV for sessions
```

**C. sessionId Mismatch**
```typescript
// Webhook receives different sessionId

// Fix: Verify custom_fields.session_id in Gumroad
console.log('[Webhook] sessionId:', data.custom_fields?.session_id);
console.log('[Modal] sessionId:', sessionId);
// Should match!
```

---

### 3. Premium Not Unlocking

#### Symptoms
- Payment successful
- Polling returns `completed: true`
- Premium names still blurred

#### Solutions

**A. Check Store Update**
```typescript
// Verify onPaymentComplete is called
const onPaymentComplete = () => {
  console.log('[Payment] Complete!');
  unlockPremium(premiumNames);  // Should be called
};

// Check Zustand store
const isPremiumUnlocked = useAppStore(state => state.isPremiumUnlocked);
console.log('Premium unlocked?', isPremiumUnlocked);  // Should be true
```

**B. Verify Premium Names Exist**
```typescript
// Check if premium names were generated
const premiumNames = useAppStore(state => state.premiumNames);
console.log('Premium names:', premiumNames.length);  // Should be > 0

// If 0, check name generation logic
```

**C. Clear LocalStorage**
```typescript
// Corrupted state in LocalStorage
localStorage.removeItem('korean-name-studio-storage');
// Refresh page
```

---

### 4. Gumroad Shows "Test Purchase" Message

#### Symptoms
- When trying to pay, the Gumroad modal shows the message: "This will be a test purchase as you are the creator of at least one of the products."
- The payment form does not ask for real payment details.

#### Cause

This is a standard feature of Gumroad and not a bug in the application. It occurs when the browser you are using is logged into the same Gumroad account that owns the product being sold.

#### Solutions

To see the real payment flow as a customer would, you must not be logged in as the product creator. 

**A. Use Incognito/Private Mode (Recommended)**
   - Open a new Incognito (Chrome) or Private (Safari/Firefox) window.
   - Navigate to the site and try the purchase flow.

**B. Use a Different Browser**
   - Use a completely different web browser where you are not logged into your Gumroad account.

**C. Log Out of Gumroad**
   - Go to `gumroad.com` in your current browser.
   - Log out of your account.
   - Return to the application and try the purchase again.

---

## 🌍 Internationalization Issues

### 1. Translations Not Loading

#### Symptoms
- UI shows English only
- Changing language has no effect
- Console: "Missing translation key"

#### Solutions

**A. Check Translation Files Exist**
```bash
# Verify all 10 languages
ls public/locales/
# Should show: en, ko, ja, fr, de, it, pt, es, th, id

# Check file structure
ls public/locales/ko/
# Should show: common.json, results.json
```

**B. Verify JSON Syntax**
```bash
# Test JSON validity
node -e "require('./public/locales/ko/common.json')"
# No output = valid
# Error = syntax error (missing comma, etc.)
```

**C. Check Translation Keys**
```typescript
// Ensure key exists in all languages
// common.json
{
  "welcome": {
    "title": "Welcome"  // ✅
  }
}

// Usage
t('welcome.title')  // ✅
t('welcome')        // ❌ Missing .title
```

---

### 2. Wrong Language Displayed

#### Symptoms
- Selected Korean, shows English
- Locale in store is correct
- Translations exist

#### Solutions

**A. Check Locale Format**
```typescript
// Zustand store
const locale = useAppStore(state => state.locale);
console.log('Locale:', locale);  // Should be: 'ko', not 'kr'

// Fix locale codes:
'ko' ✅  // Korean
'kr' ❌  // Not a valid code

'ja' ✅  // Japanese
'jp' ❌  // Not a valid code
```

**B. Verify i18n Initialization**
```typescript
// Check i18n is initialized
import i18n from 'i18next';

console.log('i18n languages:', i18n.languages);
console.log('i18n current:', i18n.language);
```

**C. Clear Browser Cache**
```bash
# Hard refresh
Cmd+Shift+R (Mac)
Ctrl+Shift+R (Windows)

# Or clear cache manually
# Browser → Settings → Clear browsing data
```

---

## 🗄️ Data Issues

### 1. Name Generation Fails

#### Symptoms
```
Error: No names found matching criteria
```

#### Solutions

**A. Check Filter Criteria**
```typescript
// Too restrictive filters = no results
const names = koreanNames.filter(n =>
  n.element === 'fire' &&      // ✅
  n.gender === 'female' &&     // ✅
  n.style === 'kpop' &&        // ✅
  n.popularity > 95            // ❌ Too restrictive!
);

// Fix: Relax filters or expand database
```

**B. Verify Data Files**
```bash
# Check data files exist
ls src/data/
# Should show: koreanNames.ts, nameStories.ts, nameHarmonies.ts

# Check export syntax
node -e "const {koreanNames} = require('./src/data/koreanNames'); console.log(koreanNames.length);"
```

**C. Check Birth Date Parsing**
```typescript
// Invalid date = Saju calculation fails
const birthDate = new Date('invalid');
console.log(birthDate);  // Invalid Date

// Fix: Validate before calculation
if (isNaN(birthDate.getTime())) {
  throw new Error('Invalid birth date');
}
```

---

### 2. Fortune Reading Missing

#### Symptoms
- Names generated successfully
- Fortune tabs show "No data"

#### Solutions

**A. Check Fortune Data Structure**
```typescript
// src/data/fortuneData.ts
export const fortuneMatrix = {
  career: {
    wood: {
      strong: { ko: "...", en: "..." },
      balanced: { ... },
      weak: { ... }
    },
    // ... other elements
  },
  // ... other topics
};

// Ensure all elements × strengths are defined
```

**B. Verify Element Calculation**
```typescript
// Check Saju calculation returns valid element
const saju = calculateSaju(birthDate, birthTime);
console.log('Element:', saju.recommendedElement);
// Should be: 'wood' | 'fire' | 'earth' | 'metal' | 'water'

// Not: undefined, null, or other value
```

---

## 🔐 Security Issues

### 1. Environment Variable Exposure

#### Symptoms
```
Warning: GUMROAD_WEBHOOK_SECRET is exposed to client
```

#### Solutions

**A. Use Correct Prefix**
```bash
# ❌ Exposed to client (has NEXT_PUBLIC_)
NEXT_PUBLIC_GUMROAD_WEBHOOK_SECRET=secret

# ✅ Server-only (no prefix)
GUMROAD_WEBHOOK_SECRET=secret

# ✅ Client-safe (intentionally public)
NEXT_PUBLIC_BASE_URL=https://...
```

**B. Check .gitignore**
```bash
# Verify .env.local is ignored
cat .gitignore | grep ".env.local"
# Should show: .env.local

# If not:
echo ".env.local" >> .gitignore
```

---

### 2. CORS Errors

#### Symptoms
```
Access to fetch at '...' from origin '...' has been blocked by CORS policy
```

#### Solutions

**A. Add CORS Headers (API Routes)**
```typescript
// src/app/api/some-route/route.ts
export async function GET(request: Request) {
  const response = NextResponse.json({ data: '...' });

  // Add CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST');

  return response;
}
```

**B. Use Same Domain**
```bash
# ❌ Different domains
Frontend: https://app.example.com
API: https://api.example.com

# ✅ Same domain
Frontend: https://example.com
API: https://example.com/api
```

---

## 📱 Mobile Issues

### 1. Layout Broken on Mobile

#### Symptoms
- Desktop looks fine
- Mobile layout overflows or breaks

#### Solutions

**A. Add Viewport Meta Tag**
```html
<!-- src/app/layout.tsx -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

**B. Use Responsive Units**
```css
/* ❌ Fixed pixels */
.container {
  width: 1200px;
}

/* ✅ Responsive */
.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
}
```

**C. Test with Chrome DevTools**
```
Cmd+Opt+I → Toggle device toolbar
Test: iPhone 12, iPad, Galaxy S20
```

---

### 2. Date/Time Picker Not Working on iOS

#### Symptoms
- Android works fine
- iOS shows text input instead of picker

#### Solutions

**A. Use Native Input Types**
```tsx
// ✅ Works on iOS
<input type="date" />
<input type="time" />

// ❌ Custom pickers may not work
<CustomDatePicker />
```

**B. Add iOS-Specific Styling**
```css
input[type="date"],
input[type="time"] {
  -webkit-appearance: none;
  appearance: none;
}
```

---

## 🚀 Deployment Issues

### 1. Vercel Build Fails

#### Symptoms
```
Error: Build exceeded maximum duration of 45s
```

#### Solutions

**A. Optimize Build**
```typescript
// next.config.ts
export default {
  // Disable source maps in production
  productionBrowserSourceMaps: false,

  // Optimize images
  images: {
    unoptimized: false,
  },
};
```

**B. Check Build Logs**
```bash
# View build logs in Vercel dashboard
# Look for errors or warnings

# Test locally
npm run build
# Should complete in <30s
```

---

### 2. Environment Variables Not Working

#### Symptoms
- Works locally
- Fails in production
- Error: "GUMROAD_PRODUCT_URL is not defined"

#### Solutions

**A. Add to Vercel Dashboard**
```bash
# Vercel Dashboard → Settings → Environment Variables
# Add all variables:
GUMROAD_PRODUCT_URL
GUMROAD_WEBHOOK_SECRET
NEXT_PUBLIC_BASE_URL

# Select environment: Production
```

**B. Redeploy**
```bash
# Changing env vars requires redeploy
vercel --prod
# Or: git push (triggers auto-deploy)
```

---

## 🧪 Development Workflow

### Clear All Caches

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules package-lock.json

# Clear browser cache
# Cmd+Shift+Delete (Chrome)

# Clear LocalStorage
localStorage.clear()

# Fresh install
npm install
npm run dev
```

### Reset Application State

```bash
# Clear Zustand store
localStorage.removeItem('korean-name-studio-storage')

# Clear all LocalStorage
localStorage.clear()

# Hard refresh
Cmd+Shift+R
```

### Debug Production Build Locally

```bash
# Build production
npm run build

# Serve production build
npm run start

# Open http://localhost:3000
# Test as if in production
```

---

## 📞 Getting Help

### Check Logs

**Browser Console:**
```
Cmd+Opt+J (Mac)
Ctrl+Shift+J (Windows)
```

**Vercel Logs:**
```bash
vercel logs --follow
vercel logs --since 1h
```

**Server Logs:**
```bash
npm run dev
# Watch terminal for errors
```

### Report Issues

When reporting issues, include:

1. **Environment:**
   - OS: macOS / Windows / Linux
   - Node version: `node --version`
   - Browser: Chrome 120 / Safari 17 / etc.

2. **Steps to Reproduce:**
   - Exact steps to trigger the issue

3. **Expected vs Actual:**
   - What should happen
   - What actually happens

4. **Logs:**
   - Browser console errors
   - Server logs
   - Network tab (for API errors)

5. **Screenshots:**
   - Visual bugs or unexpected UI

---

## 📚 Related Documentation

- [Project Architecture](./PROJECT_ARCHITECTURE.md)
- [Payment Integration](./PAYMENT_INTEGRATION.md)
- [API Reference](./API_REFERENCE.md)
- [Component Reference](./COMPONENT_REFERENCE.md)

---

**Last Updated:** 2025-10-13
**Version:** 1.0.0
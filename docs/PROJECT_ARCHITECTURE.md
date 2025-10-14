# Project Architecture - Korean Name Studio

## 📋 Overview

Korean Name Studio is a Next.js 15.5.4 application that generates Korean names based on traditional Saju (사주) astrology, user preferences, and phonetic matching.

**Tech Stack:**
- **Framework:** Next.js 15.5.4 (App Router)
- **Language:** TypeScript
- **State Management:** Zustand with persist middleware
- **Payment:** Gumroad integration with webhooks
- **Deployment:** Vercel (Free tier optimized)
- **Styling:** CSS + Tailwind CSS

---

## 🏗️ Directory Structure

```
korean-name-studio/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API Routes
│   │   │   ├── auth/            # Authentication endpoints
│   │   │   ├── payment/         # Payment session management
│   │   │   ├── gumroad/         # Gumroad webhook & verification
│   │   │   └── share/           # Share functionality
│   │   ├── generate/            # Name Input Page
│   │   ├── result/              # Result Page
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Welcome/Home page
│   │   ├── privacy/             # Privacy Policy page
│   │   └── terms/               # Terms of Service page
│   │
│   ├── components/
│   │   ├── screens/             # Main screen components
│   │   │   ├── WelcomeScreen.tsx
│   │   │   ├── NameInputScreen.tsx
│   │   │   └── ResultScreen.tsx
│   │   ├── common/              # Shared components
│   │   │   ├── ProgressBar.tsx
│   │   │   └── AppFooter.tsx
│   │   ├── ui/                  # UI components
│   │   │   ├── DatePicker.tsx
│   │   │   ├── TimePicker.tsx
│   │   │   └── LanguageSelector.tsx
│   │   ├── GumroadPaymentModal.tsx
│   │   └── StructuredData.tsx   # SEO structured data
│   │
│   ├── store/
│   │   └── useAppStore.ts       # Zustand global state
│   │
│   ├── data/
│   │   ├── koreanNames.ts       # Korean name database
│   │   ├── nameStories.ts       # Name story translations
│   │   ├── nameHarmonies.ts     # Name harmony descriptions
│   │   └── fortuneData.ts       # Fortune reading data
│   │
│   ├── utils/
│   │   ├── nameGenerator.ts     # Core name generation logic
│   │   ├── saju.ts              # Saju calculation
│   │   └── phoneticMatcher.ts   # Phonetic matching
│   │
│   └── types/
│       └── index.ts             # TypeScript type definitions
│
├── public/
│   └── locales/                 # i18n translation files
│       ├── en/
│       ├── ko/
│       ├── ja/
│       ├── fr/
│       ├── de/
│       ├── it/
│       ├── pt/
│       ├── es/
│       ├── th/
│       └── id/
│
└── docs/                        # Documentation
    ├── API_REFERENCE.md
    ├── PAYMENT_INTEGRATION.md
    ├── SUPPORTED_LANGUAGES.md
    └── TOKEN_OPTIMIZATION.md
```

---

## 🔄 Application Flow

### 1. **Welcome Screen** (`/`)
- Renders `WelcomeScreen.tsx`.
- Entry point with language selection.
- When the user decides to start, they are navigated to `/generate`.

### 2. **Name Input Screen** (`/generate`)
- Renders `NameInputScreen.tsx`.
- This component manages its own internal steps for collecting user data (Name, Birth Info, Gender).
- On completion, the user is navigated to `/result`.

### 3. **Results Screen** (`/result`)
- Renders `ResultScreen.tsx`.
- Displays free and premium names based on the data provided in the previous step.
- Handles the premium unlock flow via the Gumroad payment modal.

### 4. **Payment Flow** (`GumroadPaymentModal.tsx`)
- Full-screen modal with Gumroad iframe
- User completes payment on Gumroad
- Webhook verifies payment server-side
- Auto-polling: 6 checks over 1 minute (10s intervals)
- Manual "Check Payment" button available
- Premium names unlocked upon success

---

## 🗄️ State Management (Zustand)

**File:** `src/store/useAppStore.ts`

### State Structure

```typescript
interface AppState {
  // User data
  userData: Partial<UserData>;

  // Name generation
  freeNames: NameResult[];
  premiumNames: NameResult[];
  additionalPremiumNames: NameResult[];
  oppositeGenderNames: NameResult[];
  isGenerating: boolean;

  // Payment
  isPremiumUnlocked: boolean;
  paymentStatus: 'idle' | 'processing' | 'success' | 'error' | 'cancelled';

  // UI State
  isPaymentModalOpen: boolean;

  // Locale
  locale: string; // One of: en, ko, ja, fr, de, it, pt, es, th, id
}
```

### Key Actions

- `updateUserData(data)` - Update user input
- `startNameGeneration()` - Begin name generation
- `completeNameGeneration(freeNames, premiumNames)` - Finish generation
- `unlockPremium(names)` - Unlock premium content after payment
- `setLocale(locale)` - Change language
- `resetForNewName()` - Clears user data and results for a new session

### Persistence

- **Storage:** LocalStorage via Zustand persist middleware
- **Key:** `korean-name-studio-storage`
- **Date Handling:** Custom serializer converts Date objects to/from strings

---

## 🌐 URL Routing

The application has been refactored to use a path-based routing system, which is more conventional for Next.js and provides clearer navigation.

- `/` - The welcome screen (`WelcomeScreen`)
- `/generate` - The multi-step name input screen (`NameInputScreen`)
- `/result` - The results screen (`ResultScreen`)

This structure replaces the previous query parameter-based system (`/?screen=...`). It improves SEO, link sharing, and provides a more robust user experience.

---

## 💳 Payment Integration

**Provider:** Gumroad
**Method:** Overlay license + Webhook verification

### Flow

1. User clicks "Unlock Premium"
2. Payment modal opens with Gumroad product iframe
3. User completes payment on Gumroad (opens in new tab/window)
4. Gumroad sends webhook to `/api/gumroad/webhook`
5. Webhook verifies signature and updates payment session
6. Frontend auto-polls `/api/payment/session` (6 times, 10s intervals)
7. On success: Premium names revealed

### API Endpoints

#### `POST /api/payment/session`
- Creates new payment session
- Returns `sessionId` for tracking
- **Storage:** In-memory Map (1-hour cleanup)

#### `GET /api/payment/session?sessionId=xxx`
- Checks payment status
- Returns: `{ completed: boolean, licenseKey?: string }`

#### `POST /api/gumroad/webhook`
- Receives Gumroad webhook
- Verifies signature
- Updates session with license key
- **Important:** Requires valid webhook signature

#### Optimizations

- **Minimal polling:** Only 6 requests total (Vercel free tier friendly)
- **Manual check:** User can trigger immediate verification
- **Timeout:** Auto-polling stops after 1 minute

**See:** `docs/PAYMENT_INTEGRATION.md` for detailed guide

---

## 🌍 Internationalization (i18n)

**Supported Languages:** 10 total

1. en - English
2. ko - Korean (한국어)
3. ja - Japanese (日本語)
4. fr - French (Français)
5. de - German (Deutsch)
6. it - Italian (Italiano)
7. pt - Portuguese (Português)
8. es - Spanish (Español)
9. th - Thai (ไทย)
10. id - Indonesian (Bahasa Indonesia)

**Translation Files:**
- `public/locales/{locale}/common.json` - UI translations
- `public/locales/{locale}/results.json` - Results page translations

**In-Code Translations:**
- `GumroadPaymentModal.tsx` - Payment modal (embedded translations object)
- `src/data/fortuneData.ts` - Fortune readings
- `src/data/nameStories.ts` - Name stories
- `src/data/nameHarmonies.ts` - Name harmonies

**Locale Detection:**
- Auto-detect browser language on first visit
- Fallback to English if unsupported
- User can manually select via LanguageSelector

**See:** `docs/SUPPORTED_LANGUAGES.md`

---

## 📊 Data Layer

### Korean Names Database

**File:** `src/data/koreanNames.ts`

```typescript
interface KoreanName {
  nameKey: string;            // Unique identifier
  korean: string;             // '민준'
  hanja?: string;             // '敏俊'
  romanization: string;       // 'Min-jun'
  pronunciation: string;      // 'min-joon'
  element: Element;           // 'wood' | 'fire' | 'earth' | 'metal' | 'water'
  gender: Gender;             // 'male' | 'female' | 'neutral'
  popularity: number;         // 0-100
  style: NameStyle;          // 'traditional' | 'modern' | 'kpop'
  meanings: Record<string, string>;  // Multi-language meanings
  kpopMember?: {
    group: string;
    memberName: string;
  };
}
```

**Current Size:** ~100 names across all elements and genders

### Fortune Data

**File:** `src/data/fortuneData.ts`

Contains Saju-based fortune readings for 4 topics:
- **Career** (직업)
- **Love** (사랑)
- **Health** (건강)
- **Wealth** (재물)

Each topic has 5 elements × 3 strengths = 15 variations per topic

---

## 🔐 Security Considerations

### Environment Variables

```bash
# .env.local (NEVER commit to git)
GUMROAD_PRODUCT_URL=https://yourproduct.gumroad.com/l/xxx
GUMROAD_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

### Webhook Verification

- **Signature validation:** HMAC-SHA256 with secret
- **Replay protection:** Process each webhook only once
- **Session expiry:** 1-hour timeout for payment sessions

**See:** `docs/SECURITY.md`

---

## ⚡ Performance Optimizations

### Vercel Free Tier

**Limits:**
- 100GB bandwidth/month
- Serverless function: 10s timeout
- No persistent storage (use in-memory or external DB)

**Our Optimizations:**
1. **Minimal API calls:** 6 payment checks max (vs 40+ originally)
2. **Static data:** All names/fortunes are static JSON (no DB)
3. **Client-side generation:** Name generation logic runs in browser
4. **LocalStorage:** Persist state client-side (no server sessions)

### Code Splitting

- Next.js automatic code splitting per route
- Dynamic imports for heavy components (if needed)

### Bundle Size

- Use `next/bundle-analyzer` to monitor
- Keep dependencies minimal
- Tree-shaking enabled by default

**See:** `docs/TOKEN_OPTIMIZATION.md` for Claude Code best practices

---

## 🧪 Testing

### Local Development

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

### Payment Testing

**Important:** Webhook won't work on localhost

**Options:**
1. Use ngrok to expose local server
2. Deploy to Vercel preview branch
3. Test with direct API calls (bypass webhook)

**See:** `docs/GUMROAD_TEST_GUIDE.md`

---

## 🚀 Deployment

**Platform:** Vercel

**Commands:**
```bash
git push origin main  # Auto-deploy to production
```

**Environment Variables:** Set in Vercel dashboard
- `GUMROAD_PRODUCT_URL`
- `GUMROAD_WEBHOOK_SECRET`
- `NEXT_PUBLIC_BASE_URL`

**See:** `docs/DEPLOYMENT.md`

---

## 📝 Key Design Decisions

### Why Zustand?

- Lightweight (~1KB gzipped)
- No boilerplate (vs Redux)
- Built-in persistence middleware
- TypeScript-first

### Why Client-Side Name Generation?

- Reduces server costs
- Instant results (no API latency)
- Works offline (after initial load)
- Scales infinitely

### Why In-Memory Payment Sessions?

- MVP simplicity
- Vercel free tier has no DB
- Sessions expire in 1 hour (acceptable)
- Can migrate to Redis/DB later if needed

### Why URL-Based Routing?

- SEO friendly
- Share-able links
- Better UX (refresh doesn't lose progress)
- Enables future deep linking

---

## 🔮 Future Enhancements

### Planned Features

1. **Database Migration:** Move from in-memory to Redis/Planetscale
2. **Advanced Saju:** Add more detailed astrology calculations
3. **Social Sharing:** Pre-filled share cards with results
4. **Name History:** Save favorite names (requires auth)
5. **Mobile App:** React Native version

### Performance

1. **CDN Caching:** Cache static name data
2. **Edge Functions:** Move API routes to edge for lower latency
3. **Image Optimization:** Add fortune icons/illustrations

### Analytics

1. **Mixpanel/GA4:** Track user journey
2. **A/B Testing:** Optimize conversion funnel
3. **Error Tracking:** Sentry integration

---

## 📚 Related Documentation

- [API Reference](./API_REFERENCE.md) - All functions and data structures
- [Payment Integration](./PAYMENT_INTEGRATION.md) - Gumroad setup guide
- [Supported Languages](./SUPPORTED_LANGUAGES.md) - Translation guidelines
- [Token Optimization](./TOKEN_OPTIMIZATION.md) - Claude Code best practices
- [Korean Name System](./KOREAN_NAME_SYSTEM.md) - Saju theory background
- [Security](./SECURITY.md) - Security best practices
- [Deployment](./DEPLOYMENT.md) - Deployment checklist

---

**Last Updated:** 2025-10-13
**Version:** 1.0.0
**Maintained by:** Korean Name Studio Team

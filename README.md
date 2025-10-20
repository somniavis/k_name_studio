# Korean Name Studio 🇰🇷

Generate your perfect Korean name based on traditional Saju (사주) astrology, phonetic matching, and personal preferences.

**Live Demo:** [https://k-name-studio.vercel.app](https://k-name-studio.vercel.app)

---

## ✨ Features

- 🎯 **AI-Powered Name Generation** - Based on traditional Saju (사주팔자) astrology
- 🔊 **Phonetic Matching** - Names that sound similar to your given name
- 🌍 **10 Languages** - Full i18n support (EN, KO, JA, FR, DE, IT, PT, ES, TH, ID)
- 🎤 **K-POP References** - Names inspired by popular K-POP idols
- 💎 **Premium Features** - Unlock additional names and detailed fortune readings
- 📱 **Mobile Friendly** - Responsive design for all devices
- 🔒 **Secure Payments** - Gumroad integration with webhook verification

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/somniavis/k_name_studio.git
cd k_name_studio/korean-name-studio

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4 (App Router)
- **Language:** TypeScript
- **State Management:** Zustand with persist
- **Styling:** CSS + Tailwind CSS
- **Payment:** Gumroad (Overlay License + Webhooks)
- **Deployment:** Vercel
- **i18n:** next-i18next

---

## 📁 Project Structure

```
korean-name-studio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── screens/           # Main screens
│   │   ├── common/            # Shared components
│   │   ├── ui/                # UI components
│   │   └── GumroadPaymentModal.tsx
│   ├── store/
│   │   └── useAppStore.ts     # Zustand store
│   ├── data/
│   │   ├── koreanNames.ts     # Name database
│   │   ├── fortuneData.ts     # Fortune readings
│   │   └── ...
│   └── utils/
│       ├── nameGenerator.ts   # Core logic
│       └── saju.ts            # Saju calculations
├── public/
│   └── locales/               # i18n translations
└── docs/                      # Documentation
```

---

## 🎮 Usage

### 1. Enter Your Information

- **Step 1:** First name, birth date & time
- **Step 2:** Gender, style preference (Traditional/Modern/K-POP)
- **Step 3:** Desired meaning (Strength/Wisdom/Beauty/etc.)

### 2. View Results

- 3 free Korean names with full details
- Phonetic match scores
- Traditional meanings
- K-POP references (if applicable)

### 3. Unlock Premium (Optional)

- Additional premium names
- Detailed fortune readings (Career/Love/Health/Wealth)
- Names for opposite gender
- Full Hanja breakdown

---

## 🔧 Environment Variables

Create `.env.local` file:

```bash
# Gumroad Configuration
GUMROAD_PRODUCT_URL=https://yourname.gumroad.com/l/product-code
GUMROAD_WEBHOOK_SECRET=your_webhook_secret_from_gumroad

# Base URL (for webhooks)
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app

# Optional
NODE_ENV=development
```

**⚠️ Important:** Never commit `.env.local` to git!

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix linting issues

# Type Checking
npx tsc --noEmit     # Check TypeScript types
```

---

## 🌍 Supported Languages

Korean Name Studio supports 10 languages:

1. 🇺🇸 English (en)
2. 🇰🇷 한국어 (ko)
3. 🇯🇵 日本語 (ja)
4. 🇫🇷 Français (fr)
5. 🇩🇪 Deutsch (de)
6. 🇮🇹 Italiano (it)
7. 🇵🇹 Português (pt)
8. 🇪🇸 Español (es)
9. 🇹🇭 ไทย (th)
10. 🇮🇩 Bahasa Indonesia (id)

Translation files: `public/locales/{locale}/common.json`

---

## 💳 Payment Integration

### Gumroad Setup

1. Create product on Gumroad
2. Enable "Generate unique license key"
3. Add webhook: `https://your-domain.vercel.app/api/gumroad/webhook`
4. Copy webhook secret to `.env.local`

### Payment Flow

```
User clicks "Unlock Premium"
  ↓
Payment modal opens
  ↓
User completes payment on Gumroad
  ↓
Webhook verifies payment
  ↓
User clicks "Confirm Payment" button
  ↓
Premium content unlocked instantly
```

**See:** [docs/PAYMENT_INTEGRATION.md](docs/PAYMENT_INTEGRATION.md) for details

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

**Or:** Connect GitHub repo in Vercel dashboard for auto-deploy.

### Environment Variables in Vercel

Add via dashboard:
- Settings → Environment Variables
- Add `GUMROAD_PRODUCT_URL`, `GUMROAD_WEBHOOK_SECRET`, `NEXT_PUBLIC_BASE_URL`
- Select "Production" environment
- Redeploy after adding

---

## 📚 Documentation

Comprehensive documentation available in `/docs`:

- **[Project Architecture](docs/PROJECT_ARCHITECTURE.md)** - System design and structure
- **[Payment Integration](docs/PAYMENT_INTEGRATION.md)** - Gumroad setup and troubleshooting
- **[Component Reference](docs/COMPONENT_REFERENCE.md)** - All React components
- **[API Reference](docs/API_REFERENCE.md)** - Functions and data structures
- **[Troubleshooting](docs/TROUBLESHOOTING.md)** - Common issues and solutions
- **[Supported Languages](docs/SUPPORTED_LANGUAGES.md)** - i18n guidelines
- **[Token Optimization](docs/TOKEN_OPTIMIZATION.md)** - Claude Code best practices
- **[Korean Name System](docs/KOREAN_NAME_SYSTEM.md)** - Saju theory background
- **[Security](docs/SECURITY.md)** - Security best practices
- **[Deployment](docs/DEPLOYMENT.md)** - Deployment checklist

---

## 🧪 Testing

### Local Development

```bash
# Start dev server
npm run dev

# Test payment flow (requires ngrok or Vercel preview)
ngrok http 3000
# Update Gumroad webhook to ngrok URL
```

### Production Testing

```bash
# Build locally
npm run build
npm run start

# Test at http://localhost:3000
```

**See:** [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) for common issues

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Zustand for state management
- Add translations for all new UI text (10 languages)
- Write meaningful commit messages
- Test on mobile devices

---

## 🐛 Bug Reports & Feature Requests

**Found a bug?** Open an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/OS info

**Have an idea?** We'd love to hear it! Open an issue with:
- Feature description
- Use case / motivation
- Proposed implementation (optional)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Saju Theory:** Traditional Korean astrology (명리학)
- **K-POP Data:** Name references from popular K-POP groups
- **Gumroad:** Payment processing platform
- **Vercel:** Deployment and hosting
- **Next.js Team:** Amazing framework

---

## 📞 Support

- **Documentation:** See `/docs` folder
- **Issues:** [GitHub Issues](https://github.com/somniavis/k_name_studio/issues)
- **Email:** support@k-name-studio.com (if available)

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you find your perfect Korean name!

---

**Built with 💜 by the Korean Name Studio Team**

**Last Updated:** 2025-10-13

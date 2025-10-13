# Component Reference - Korean Name Studio

## 📋 Overview

Complete reference for all React components in the Korean Name Studio application.

**Component Categories:**
- **Screens:** Main navigation screens
- **Common:** Shared UI components
- **UI:** Reusable form inputs
- **Modals:** Overlay components
- **SEO:** Structured data components

---

## 🖥️ Screen Components

### `WelcomeScreen.tsx`

**Path:** `src/components/screens/WelcomeScreen.tsx`

**Purpose:** Entry point of the application with language selection

**Features:**
- Welcome message in current language
- "Get Started" button → Navigate to NameInputScreen
- LanguageSelector dropdown
- SEO structured data injection
- Responsive layout

**Props:** None (uses Zustand store)

**Store Dependencies:**
```typescript
const locale = useAppStore(state => state.locale);
const setCurrentScreen = useAppStore(state => state.setCurrentScreen);
```

**Usage:**
```tsx
{currentScreen === 'welcome' && <WelcomeScreen />}
```

**Translations Used:**
- `common.json`: `welcome.title`, `welcome.subtitle`, `welcome.getStarted`

---

### `NameInputScreen.tsx`

**Path:** `src/components/screens/NameInputScreen.tsx`

**Purpose:** Multi-step form for collecting user data

**Features:**
- 3-step progressive form
- ProgressBar integration
- Date/Time pickers
- Form validation
- LocalStorage persistence (via Zustand)

**Props:** None (uses Zustand store)

**Store Dependencies:**
```typescript
const inputStep = useAppStore(state => state.inputStep);
const userData = useAppStore(state => state.userData);
const updateUserData = useAppStore(state => state.updateUserData);
const nextInputStep = useAppStore(state => state.nextInputStep);
const prevInputStep = useAppStore(state => state.prevInputStep);
const startNameGeneration = useAppStore(state => state.startNameGeneration);
```

**Form Steps:**

#### Step 1: Basic Info
```tsx
<input
  type="text"
  placeholder="First Name"
  value={userData.firstName || ''}
  onChange={(e) => updateUserData({ firstName: e.target.value })}
/>

<DatePicker
  value={userData.birthDate}
  onChange={(date) => updateUserData({ birthDate: date })}
/>

<TimePicker
  value={userData.birthTime}
  onChange={(time) => updateUserData({ birthTime: time })}
/>
```

**Validation:**
- First name: Required, min 1 character
- Birth date: Required, not in future
- Birth time: Optional

#### Step 2: Personal Preferences
```tsx
<select onChange={(e) => updateUserData({ gender: e.target.value })}>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="neutral">Neutral</option>
</select>

<select onChange={(e) => updateUserData({ style: e.target.value })}>
  <option value="traditional">Traditional</option>
  <option value="modern">Modern</option>
  <option value="kpop">K-POP</option>
  <option value="mixed">Mixed</option>
</select>
```

#### Step 3: Desired Meaning
```tsx
<select onChange={(e) => updateUserData({ meaning: e.target.value })}>
  <option value="strength">Strength</option>
  <option value="wisdom">Wisdom</option>
  <option value="beauty">Beauty</option>
  <option value="success">Success</option>
  <option value="happiness">Happiness</option>
  <option value="peace">Peace</option>
  <option value="creativity">Creativity</option>
  <option value="leadership">Leadership</option>
  <option value="compassion">Compassion</option>
  <option value="freedom">Freedom</option>
</select>
```

**Submit Flow:**
```typescript
const handleSubmit = () => {
  if (!isValid()) return;

  // Start name generation
  startNameGeneration(); // Sets currentScreen to 'results'

  // Generate names (async)
  const { freeNames, premiumNames } = await generateKoreanNames({
    userData,
    locale
  });

  completeNameGeneration(freeNames, premiumNames);
};
```

**Translations Used:**
- `common.json`: `input.step1.title`, `input.step2.title`, `input.step3.title`, etc.

---

### `ResultScreen.tsx`

**Path:** `src/components/screens/ResultScreen.tsx`

**Purpose:** Display generated Korean names with premium upsell

**Features:**
- Shows 3 free names (full details)
- Shows 2 blurred premium names
- "Unlock Premium" button
- Fortune reading tabs (Career, Love, Health, Wealth)
- Share functionality
- Responsive grid layout

**Props:** None (uses Zustand store)

**Store Dependencies:**
```typescript
const freeNames = useAppStore(state => state.freeNames);
const premiumNames = useAppStore(state => state.premiumNames);
const isPremiumUnlocked = useAppStore(state => state.isPremiumUnlocked);
const setIsPaymentModalOpen = useAppStore(state => state.setIsPaymentModalOpen);
const locale = useAppStore(state => state.locale);
```

**Layout Structure:**
```
┌─────────────────────────────────────────┐
│  Your Korean Names                       │
│  ┌───────────┐ ┌───────────┐ ┌────────┐│
│  │ Free #1   │ │ Free #2   │ │ Free #3││
│  │ 민준      │ │ 서연      │ │ 지훈   ││
│  │ Full      │ │ Full      │ │ Full   ││
│  │ Details   │ │ Details   │ │ Details││
│  └───────────┘ └───────────┘ └────────┘│
│                                          │
│  Premium Names (Locked)                  │
│  ┌───────────┐ ┌───────────┐           │
│  │ [BLURRED] │ │ [BLURRED] │ [Unlock] │
│  └───────────┘ └───────────┘           │
│                                          │
│  Fortune Reading                         │
│  [Career] [Love] [Health] [Wealth]      │
│  ┌─────────────────────────────────┐   │
│  │ Your fortune content here...     │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Name Card Component:**
```tsx
interface NameCardProps {
  name: NameResult;
  isBlurred?: boolean;
  isPremium?: boolean;
}

const NameCard: React.FC<NameCardProps> = ({ name, isBlurred, isPremium }) => (
  <div className={`name-card ${isBlurred ? 'blurred' : ''}`}>
    <h3>{name.korean}</h3>
    {name.hanja && <p className="hanja">{name.hanja}</p>}
    <p className="pronunciation">{name.pronunciation}</p>
    <p className="meaning">{name.meaning}</p>
    {name.fortune && <p className="fortune">{name.fortune}</p>}
    {name.kpopMember && (
      <div className="kpop-badge">
        🎤 {name.kpopMember.group} - {name.kpopMember.memberName}
      </div>
    )}
  </div>
);
```

**Fortune Tabs:**
```typescript
const topics = ['career', 'love', 'health', 'wealth'] as const;
const [activeTopic, setActiveTopic] = useState<typeof topics[number]>('career');

const fortuneContent = getFortune(userData.birthDate, activeTopic, locale);
```

**Premium Unlock:**
```tsx
<button onClick={() => setIsPaymentModalOpen(true)}>
  Unlock Premium - $9.99
</button>
```

**Translations Used:**
- `results.json`: `freeNames`, `premiumNames`, `unlockButton`, fortune topic titles

---

## 🧩 Common Components

### `ProgressBar.tsx`

**Path:** `src/components/common/ProgressBar.tsx`

**Purpose:** Visual indicator for multi-step forms

**Props:**
```typescript
interface ProgressBarProps {
  currentStep: number;  // 1, 2, or 3
  totalSteps: number;   // Usually 3
}
```

**Usage:**
```tsx
<ProgressBar currentStep={inputStep} totalSteps={3} />
```

**Rendering:**
```
Step 1: [████████░░░░░░░░] 33%
Step 2: [████████████████░░] 66%
Step 3: [████████████████████] 100%
```

**Styling:**
```css
.progress-bar {
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
}
```

---

### `AppFooter.tsx`

**Path:** `src/components/common/AppFooter.tsx`

**Purpose:** Persistent footer with links and copyright

**Features:**
- Terms of Service link
- Privacy Policy link
- Copyright notice
- Language-aware text color (#cacaca)

**Props:** None

**Usage:**
```tsx
<AppFooter />
```

**Layout:**
```
┌─────────────────────────────────────────┐
│  Terms of Service  |  Privacy Policy    │
│  © 2025 Korean Name Studio              │
└─────────────────────────────────────────┘
```

**Translations Used:**
- `common.json`: `footer.terms`, `footer.privacy`, `footer.copyright`

---

## 🎨 UI Components

### `DatePicker.tsx`

**Path:** `src/components/ui/DatePicker.tsx`

**Purpose:** Date input with browser-native picker

**Props:**
```typescript
interface DatePickerProps {
  value?: Date;
  onChange: (date: Date) => void;
  min?: Date;    // Optional minimum date
  max?: Date;    // Optional maximum date
  required?: boolean;
}
```

**Usage:**
```tsx
<DatePicker
  value={userData.birthDate}
  onChange={(date) => updateUserData({ birthDate: date })}
  max={new Date()} // No future dates
  required
/>
```

**Implementation:**
```tsx
export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  min,
  max,
  required
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    onChange(date);
  };

  return (
    <input
      type="date"
      value={value ? value.toISOString().split('T')[0] : ''}
      onChange={handleChange}
      min={min?.toISOString().split('T')[0]}
      max={max?.toISOString().split('T')[0]}
      required={required}
    />
  );
};
```

---

### `TimePicker.tsx`

**Path:** `src/components/ui/TimePicker.tsx`

**Purpose:** Time input (optional birth time)

**Props:**
```typescript
interface TimePickerProps {
  value?: string;    // "HH:MM" format
  onChange: (time: string) => void;
  required?: boolean;
}
```

**Usage:**
```tsx
<TimePicker
  value={userData.birthTime}
  onChange={(time) => updateUserData({ birthTime: time })}
/>
```

**Format:** 24-hour format (e.g., "14:30")

---

### `LanguageSelector.tsx`

**Path:** `src/components/ui/LanguageSelector.tsx`

**Purpose:** Dropdown for language selection

**Features:**
- Shows all 10 supported languages
- Displays native language names
- Updates Zustand locale state
- Flag emojis for visual clarity

**Props:** None (uses Zustand store)

**Store Dependencies:**
```typescript
const locale = useAppStore(state => state.locale);
const setLocale = useAppStore(state => state.setLocale);
```

**Implementation:**
```tsx
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
];

export const LanguageSelector: React.FC = () => (
  <select value={locale} onChange={(e) => setLocale(e.target.value)}>
    {languages.map(lang => (
      <option key={lang.code} value={lang.code}>
        {lang.flag} {lang.name}
      </option>
    ))}
  </select>
);
```

---

## 🪟 Modal Components

### `GumroadPaymentModal.tsx`

**Path:** `src/components/GumroadPaymentModal.tsx`

**Purpose:** Full-screen payment modal with Gumroad integration

**Features:**
- Full-screen responsive overlay
- Gumroad iframe embedding
- Auto-polling (6 checks, 10s intervals)
- Manual "Check Payment" button
- Multi-language support (10 languages)
- Close confirmation dialog

**Props:**
```typescript
interface GumroadPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  productUrl: string;      // Gumroad product URL
  sessionId: string;       // Unique payment session ID
  onPaymentComplete: () => void;
}
```

**Usage:**
```tsx
const [sessionId, setSessionId] = useState<string>('');

// Create session when opening modal
const handleOpenPayment = async () => {
  const res = await fetch('/api/payment/session', { method: 'POST' });
  const { sessionId } = await res.json();
  setSessionId(sessionId);
  setIsPaymentModalOpen(true);
};

<GumroadPaymentModal
  isOpen={isPaymentModalOpen}
  onClose={() => setIsPaymentModalOpen(false)}
  productUrl={process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL!}
  sessionId={sessionId}
  onPaymentComplete={() => {
    unlockPremium(premiumNames);
  }}
/>
```

**Layout:**
```
┌─────────────────────────────────────────┐
│  Payment                            [✕] │
│  ────────────────────────────────────── │
│                                          │
│  💳 Premium Payment                      │
│                                          │
│  Proceed to secure Gumroad payment...   │
│                                          │
│  [🔒 Pay on Gumroad]                    │
│                                          │
│  [✓ Confirm Payment]                    │
│                                          │
│  ✅ Credit Card, PayPal supported       │
│  🔒 Secure payment (SSL encrypted)      │
│  ⚡ Auto-check (6 times in 1 min)       │
│                                          │
│  💡 Payment will be automatically...    │
│                                          │
│  Status: Checking... (3/6)              │
└─────────────────────────────────────────┘
```

**Auto-Polling Logic:**
```typescript
const [checkCount, setCheckCount] = useState(0);
const maxChecks = 6;
const checkInterval = 10000; // 10s

useEffect(() => {
  if (!isOpen || checkCount >= maxChecks) return;

  const timer = setTimeout(async () => {
    const res = await fetch(`/api/payment/session?sessionId=${sessionId}`);
    const data = await res.json();

    if (data.completed) {
      onPaymentComplete();
    } else {
      setCheckCount(prev => prev + 1);
    }
  }, checkInterval);

  return () => clearTimeout(timer);
}, [isOpen, checkCount, sessionId]);
```

**Translations:**
- Embedded in component (not in JSON files)
- All 10 languages supported
- Falls back to English if locale not found

**Close Confirmation:**
```typescript
const handleClose = () => {
  const confirmClose = window.confirm(t('closeConfirm'));
  if (!confirmClose) return;
  onClose();
};
```

---

## 🔍 SEO Components

### `StructuredData.tsx`

**Path:** `src/components/StructuredData.tsx`

**Purpose:** Inject JSON-LD structured data for SEO

**Features:**
- Google-compatible structured data
- WebSite schema
- Organization schema
- Language-aware

**Props:**
```typescript
interface StructuredDataProps {
  locale: string;
}
```

**Usage:**
```tsx
<StructuredData locale={locale} />
```

**Output:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Korean Name Studio",
  "url": "https://k-name-studio.vercel.app",
  "description": "Generate your perfect Korean name...",
  "inLanguage": "en"
}
</script>
```

---

## 🔧 Utility Components

### `TestLicenseInput.tsx` (Dev Only)

**Path:** `src/components/TestLicenseInput.tsx`

**Purpose:** Test premium unlock without payment (dev mode)

**Features:**
- Only visible in development
- Direct license key input
- Bypasses payment flow

**Props:** None

**Usage (Dev Only):**
```tsx
{process.env.NODE_ENV === 'development' && <TestLicenseInput />}
```

**Implementation:**
```tsx
export const TestLicenseInput: React.FC = () => {
  const [licenseKey, setLicenseKey] = useState('');
  const unlockPremium = useAppStore(state => state.unlockPremium);

  const handleSubmit = () => {
    if (licenseKey === 'TEST-KEY-1234') {
      unlockPremium([/* mock premium names */]);
    }
  };

  return (
    <div className="test-license-input">
      <input
        type="text"
        placeholder="Test License Key"
        value={licenseKey}
        onChange={(e) => setLicenseKey(e.target.value)}
      />
      <button onClick={handleSubmit}>Unlock (Test)</button>
    </div>
  );
};
```

---

## 📚 Component Best Practices

### 1. **Use Zustand Store**

All components should use Zustand for global state:

```tsx
// ✅ Good
const locale = useAppStore(state => state.locale);

// ❌ Avoid
const [locale, setLocale] = useState('en');
```

### 2. **Prop Drilling Minimization**

Prefer Zustand store over prop drilling:

```tsx
// ✅ Good - Direct store access
const ChildComponent = () => {
  const userData = useAppStore(state => state.userData);
  return <div>{userData.firstName}</div>;
};

// ❌ Avoid - Prop drilling
const Parent = () => {
  const userData = useAppStore(state => state.userData);
  return <Child userData={userData} />;
};
```

### 3. **TypeScript Typing**

Always type props and state:

```tsx
// ✅ Good
interface MyComponentProps {
  name: string;
  age?: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  return <div>{name} - {age || 'Unknown'}</div>;
};

// ❌ Avoid
const MyComponent = (props) => {
  return <div>{props.name}</div>;
};
```

### 4. **Accessibility**

Include ARIA labels and semantic HTML:

```tsx
// ✅ Good
<button aria-label="Close modal" onClick={onClose}>
  ✕
</button>

// ❌ Avoid
<div onClick={onClose}>✕</div>
```

### 5. **Responsive Design**

Use mobile-first CSS:

```css
/* ✅ Good - Mobile first */
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* ❌ Avoid - Desktop first */
.container {
  width: 1200px;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
```

---

## 🧪 Testing Components

### Unit Testing Example

```typescript
import { render, screen } from '@testing-library/react';
import { ProgressBar } from '@/components/common/ProgressBar';

describe('ProgressBar', () => {
  it('renders correct progress percentage', () => {
    render(<ProgressBar currentStep={2} totalSteps={3} />);
    expect(screen.getByText('66%')).toBeInTheDocument();
  });
});
```

### Integration Testing Example

```typescript
import { render, fireEvent } from '@testing-library/react';
import { NameInputScreen } from '@/components/screens/NameInputScreen';

describe('NameInputScreen', () => {
  it('advances to next step on valid input', () => {
    const { getByText, getByPlaceholderText } = render(<NameInputScreen />);

    const input = getByPlaceholderText('First Name');
    fireEvent.change(input, { target: { value: 'Sarah' } });

    const nextButton = getByText('Next');
    fireEvent.click(nextButton);

    // Check if step 2 is shown
    expect(getByText('Personal Preferences')).toBeInTheDocument();
  });
});
```

---

## 📚 Related Documentation

- [Project Architecture](./PROJECT_ARCHITECTURE.md)
- [State Management Guide](./STATE_MANAGEMENT.md)
- [API Reference](./API_REFERENCE.md)
- [Supported Languages](./SUPPORTED_LANGUAGES.md)

---

**Last Updated:** 2025-10-13
**Version:** 1.0.0

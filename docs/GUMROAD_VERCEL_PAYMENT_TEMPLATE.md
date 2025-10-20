# 🚀 Gumroad + Vercel 결제 시스템 완벽 가이드

> **실제 프로덕션 검증 완료** - Korean Name Studio 프로젝트에서 실제 운영 중인 결제 시스템입니다.
>
> 이 문서는 다른 프로젝트에서도 그대로 적용할 수 있도록 실제 코드를 기반으로 작성되었습니다.

---

## 📋 목차

1. [시스템 개요](#-시스템-개요)
2. [완전한 결제 플로우](#-완전한-결제-플로우)
3. [필수 파일 및 코드](#-필수-파일-및-코드)
4. [Gumroad 설정 가이드](#-gumroad-설정-가이드)
5. [Vercel 설정 가이드](#-vercel-설정-가이드)
6. [환경 변수 설정](#-환경-변수-설정)
7. [다른 프로젝트 적용 방법](#-다른-프로젝트-적용-방법)
8. [테스트 가이드](#-테스트-가이드)
9. [트러블슈팅](#-트러블슈팅)

---

## 🎯 시스템 개요

### 핵심 특징

✅ **Vercel 무료 티어 최적화**
- 수동 확인 방식으로 API 호출 최소화 (결제당 평균 1-2회)
- 자동 폴링 없음 (이전 6회 → 현재 1-2회)

✅ **보안**
- HMAC-SHA256 웹훅 서명 검증
- 서버-클라이언트 환경 변수 분리
- 세션 기반 결제 추적

✅ **확장성**
- Upstash Redis 지원 (프로덕션)
- In-memory fallback (로컬 개발)
- 세션 자동 만료 (1시간)

### 기술 스택

```
Frontend:  Next.js 15 + React + Zustand
Backend:   Next.js API Routes (App Router)
Payment:   Gumroad (Overlay License)
Storage:   Upstash Redis / In-memory Map
Deploy:    Vercel
```

---

## 🔄 완전한 결제 플로우

### 사용자 관점 플로우

```
1. 사용자가 "Unlock Premium" 버튼 클릭
   ↓
2. 결제 모달 팝업 오픈
   ↓
3. "Pay on Gumroad" 버튼 클릭
   ↓
4. 새 탭에서 Gumroad 결제 페이지 열림
   ↓
5. Gumroad에서 결제 완료 (카드/PayPal)
   ↓
6. 결제 완료 후 사용자가 "Confirm Payment" 버튼 클릭
   ↓
7. 즉시 프리미엄 콘텐츠 잠금 해제
   ↓
8. 모달 닫기 + 성공 알림
```

### 시스템 관점 플로우

```
┌─────────────────────────────────────────────────────────────────┐
│ STEP 1: Payment Session Creation                                │
│─────────────────────────────────────────────────────────────────│
│ Frontend                                                         │
│   → POST /api/payment/session                                   │
│                                                                  │
│ Backend (API Route)                                             │
│   → Generate unique sessionId (nanoid)                          │
│   → Store in Redis/Memory: {                                    │
│        sessionId: "abc123...",                                  │
│        status: "pending",                                       │
│        createdAt: timestamp                                     │
│      }                                                           │
│   → Return: { sessionId }                                       │
│                                                                  │
│ Frontend                                                         │
│   → Store sessionId in state                                    │
│   → Open payment modal                                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ STEP 2: Gumroad Payment                                         │
│─────────────────────────────────────────────────────────────────│
│ Frontend                                                         │
│   → Build Gumroad URL with sessionId:                           │
│     https://yourname.gumroad.com/l/product?session_id=abc123    │
│   → window.open(gumroadUrl, '_blank')                           │
│                                                                  │
│ User (Gumroad Page)                                             │
│   → Enter payment details                                       │
│   → Complete purchase                                           │
│   → Gumroad processes payment                                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ STEP 3: Webhook Notification (Instant)                          │
│─────────────────────────────────────────────────────────────────│
│ Gumroad                                                          │
│   → POST /api/gumroad/webhook                                   │
│   → Headers: {                                                  │
│        X-Gumroad-Signature: "hmac_signature"                    │
│      }                                                           │
│   → Body (form-urlencoded): {                                   │
│        sale_id: "xxx",                                          │
│        license_key: "ABCD-1234-EFGH-5678",                      │
│        session_id: "abc123...",                                 │
│        email: "user@example.com",                               │
│        ...                                                       │
│      }                                                           │
│                                                                  │
│ Backend (Webhook Handler)                                       │
│   → Extract signature from headers                              │
│   → Verify HMAC-SHA256 signature                                │
│   → Parse webhook payload                                       │
│   → Extract sessionId from custom fields                        │
│   → PUT /api/payment/session                                    │
│      Body: {                                                    │
│        sessionId: "abc123...",                                  │
│        status: "completed",                                     │
│        licenseKey: "ABCD-1234-EFGH-5678"                        │
│      }                                                           │
│   → Update Redis/Memory storage                                 │
│   → Return 200 OK to Gumroad                                    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ STEP 4: User Verification (Manual)                              │
│─────────────────────────────────────────────────────────────────│
│ User (Payment Modal)                                            │
│   → Clicks "Confirm Payment" button                             │
│                                                                  │
│ Frontend                                                         │
│   → GET /api/payment/session?sessionId=abc123                   │
│                                                                  │
│ Backend (API Route)                                             │
│   → Fetch session from Redis/Memory                             │
│   → Return: {                                                   │
│        sessionId: "abc123...",                                  │
│        status: "completed",                                     │
│        licenseKey: "ABCD-1234-EFGH-5678"                        │
│      }                                                           │
│                                                                  │
│ Frontend                                                         │
│   → Check if status === "completed"                             │
│   → If yes:                                                     │
│      - Call unlockPremium() (Zustand action)                    │
│      - Generate premium content                                 │
│      - Close payment modal                                      │
│      - Show success message                                     │
│   → If no:                                                      │
│      - Show "Please wait..." message                            │
│      - User can retry after 10 seconds                          │
└─────────────────────────────────────────────────────────────────┘
```

### 시퀀스 다이어그램

```
User          Frontend        API Routes      Gumroad       Redis/Memory
 |               |                |              |               |
 |--Click------->|                |              |               |
 |  "Premium"    |                |              |               |
 |               |                |              |               |
 |               |--POST--------->|              |               |
 |               | /payment/      |              |               |
 |               |  session       |              |               |
 |               |                |              |               |
 |               |                |--Create----->|               |
 |               |                | sessionId    |               |
 |               |                |              |               |
 |               |                |--Store------>|-------------->|
 |               |                | session      |   SET key     |
 |               |                |<-------------|<--------------|
 |               |<--sessionId----|              |               |
 |               |                |              |               |
 |<--Open Modal--|                |              |               |
 |               |                |              |               |
 |--Click------->|                |              |               |
 | "Pay on       |                |              |               |
 |  Gumroad"     |                |              |               |
 |               |                |              |               |
 |---------------|-Open New Tab----------------->|               |
 |               |                |              |               |
 |<--------------|-Gumroad Page------------------|               |
 |               |                |              |               |
 |--Enter Card-->|                |              |               |
 |  Info         |                |              |               |
 |               |                |              |               |
 |--Complete---->|                |              |               |
 |  Payment      |                |              |               |
 |               |                |              |               |
 |               |                |<--Webhook----|               |
 |               |                | POST         |               |
 |               |                | /webhook     |               |
 |               |                |              |               |
 |               |                |--Verify------|               |
 |               |                | Signature    |               |
 |               |                |              |               |
 |               |                |--Update----->|-------------->|
 |               |                | session      |   PUT key     |
 |               |                |<-------------|<--------------|
 |               |                |              |               |
 |               |                |--200 OK----->|               |
 |               |                |              |               |
 |--Click------->|                |              |               |
 | "Confirm      |                |              |               |
 |  Payment"     |                |              |               |
 |               |                |              |               |
 |               |--GET---------->|              |               |
 |               | /payment/      |              |               |
 |               |  session       |              |               |
 |               |                |              |               |
 |               |                |--Fetch------>|-------------->|
 |               |                | session      |   GET key     |
 |               |                |<-------------|<--------------|
 |               |                |              |               |
 |               |<--status-------|              |               |
 |               | "completed"    |              |               |
 |               |                |              |               |
 |<--Unlock------|                |              |               |
 |  Premium      |                |              |               |
 |               |                |              |               |
 |<--Success-----|                |              |               |
 |  Message      |                |              |               |
```

---

## 📁 필수 파일 및 코드

### 디렉토리 구조

```
your-project/
├── src/
│   ├── app/
│   │   └── api/
│   │       ├── payment/
│   │       │   └── session/
│   │       │       └── route.ts          # 결제 세션 관리
│   │       └── gumroad/
│   │           └── webhook/
│   │               └── route.ts          # Gumroad 웹훅 핸들러
│   ├── components/
│   │   └── GumroadPaymentModal.tsx       # 결제 모달 UI
│   ├── store/
│   │   └── useAppStore.ts                # Zustand 스토어
│   └── lib/
│       ├── storage.ts                    # Redis/Memory 스토리지
│       ├── webhookSignature.ts           # 웹훅 서명 검증
│       └── env.ts                        # 환경 변수 관리
├── .env.local                            # 로컬 환경 변수
└── package.json
```

---

### 1. 결제 세션 API (`src/app/api/payment/session/route.ts`)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { storageClient } from '@/lib/storage';

interface PaymentSession {
  sessionId: string;
  status: 'pending' | 'completed' | 'failed';
  licenseKey?: string;
  createdAt: number;
}

// POST: 새로운 결제 세션 생성
export async function POST(request: NextRequest) {
  try {
    const sessionId = nanoid(32);
    const session: PaymentSession = {
      sessionId,
      status: 'pending',
      createdAt: Date.now(),
    };

    await storageClient.set(`session:${sessionId}`, session, { ex: 3600 }); // 1시간 만료

    console.log('[Payment Session] Created session:', sessionId);
    return NextResponse.json({ sessionId, status: 'pending' });
  } catch (error) {
    console.error('[Payment Session] Error creating session:', error);
    return NextResponse.json({ error: 'Failed to create payment session' }, { status: 500 });
  }
}

// GET: 결제 세션 상태 확인
export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get('sessionId');
    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    const session = await storageClient.get<PaymentSession>(`session:${sessionId}`);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    console.log('[Payment Session] Status check:', sessionId, session.status);
    return NextResponse.json(session);
  } catch (error) {
    console.error('[Payment Session] Error checking session:', error);
    return NextResponse.json({ error: 'Failed to check payment session' }, { status: 500 });
  }
}

// PUT: 결제 세션 업데이트 (웹훅에서 호출)
export async function PUT(request: NextRequest) {
  try {
    const { sessionId, status, licenseKey } = await request.json();
    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    const session = await storageClient.get<PaymentSession>(`session:${sessionId}`);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    const updatedSession: PaymentSession = { ...session, status, licenseKey };
    await storageClient.set(`session:${sessionId}`, updatedSession, { ex: 3600 });

    console.log('[Payment Session] Updated session:', sessionId, status);
    return NextResponse.json({ success: true, sessionId, status });
  } catch (error) {
    console.error('[Payment Session] Error updating session:', error);
    return NextResponse.json({ error: 'Failed to update payment session' }, { status: 500 });
  }
}
```

**핵심 포인트:**
- ✅ `nanoid`로 고유한 세션 ID 생성 (32자)
- ✅ Redis에 1시간 TTL로 저장 (자동 만료)
- ✅ GET/POST/PUT 모두 구현
- ✅ 에러 핸들링 포함

---

### 2. Gumroad 웹훅 핸들러 (`src/app/api/gumroad/webhook/route.ts`)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { serverEnv } from '@/lib/env';
import {
  verifyGumroadSignature,
  extractSignature,
} from '@/lib/webhookSignature';

export async function POST(request: NextRequest) {
  try {
    // 원본 body 추출 (서명 검증용)
    const rawBody = await request.text();

    // 🔒 보안: 웹훅 서명 검증
    const { gumroadWebhookSecret } = serverEnv;
    if (gumroadWebhookSecret) {
      const signature = extractSignature(request.headers);
      const isValid = verifyGumroadSignature(rawBody, signature, gumroadWebhookSecret);

      if (!isValid) {
        console.error('[Gumroad Webhook] Invalid signature');
        return NextResponse.json(
          { error: 'Invalid webhook signature' },
          { status: 401 }
        );
      }

      console.log('[Gumroad Webhook] ✅ Signature verified');
    }

    // Form data 파싱
    const formData = new URLSearchParams(rawBody);

    // Gumroad 데이터 추출
    const saleId = formData.get('sale_id') as string;
    const email = formData.get('email') as string;
    const productPermalink = formData.get('product_permalink') as string;
    const licenseKey = formData.get('license_key') as string;
    const sessionId = formData.get('session_id') as string; // 커스텀 필드

    console.log('[Gumroad Webhook] Purchase received:', {
      saleId,
      email,
      productPermalink,
      licenseKey,
      sessionId,
    });

    // 제품 검증
    const { gumroadProductPermalink } = serverEnv;
    if (productPermalink !== gumroadProductPermalink) {
      console.error('[Gumroad Webhook] Invalid product:', productPermalink);
      return NextResponse.json(
        { error: 'Invalid product' },
        { status: 400 }
      );
    }

    // 결제 세션 업데이트
    if (sessionId) {
      try {
        const updateResponse = await fetch(
          `${request.nextUrl.origin}/api/payment/session`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sessionId,
              status: 'completed',
              licenseKey,
            }),
          }
        );

        if (updateResponse.ok) {
          console.log('[Gumroad Webhook] ✅ Payment session updated:', sessionId);
        } else {
          console.warn('[Gumroad Webhook] ⚠️ Failed to update session:', sessionId);
        }
      } catch (error) {
        console.error('[Gumroad Webhook] Error updating session:', error);
      }
    }

    // Gumroad에 성공 응답
    return NextResponse.json(
      {
        success: true,
        saleId,
        licenseKey,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[Gumroad Webhook] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**핵심 포인트:**
- ✅ HMAC-SHA256 서명 검증으로 보안 강화
- ✅ Form-urlencoded 데이터 파싱
- ✅ 커스텀 필드 `session_id` 추출
- ✅ 내부 API 호출로 세션 업데이트

---

### 3. 웹훅 서명 검증 유틸리티 (`src/lib/webhookSignature.ts`)

```typescript
import crypto from 'crypto';

/**
 * Gumroad 웹훅 서명 검증
 */
export function verifyGumroadSignature(
  payload: string,
  signature: string | null,
  secret: string
): boolean {
  if (!signature || !secret) {
    return false;
  }

  try {
    // HMAC-SHA256 해시 생성
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(payload);
    const expectedSignature = hmac.digest('hex');

    // Timing-safe 비교
    const isValid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );

    return isValid;
  } catch (error) {
    console.error('[Webhook] Signature verification error:', error);
    return false;
  }
}

/**
 * 헤더에서 서명 추출
 */
export function extractSignature(headers: Headers): string | null {
  return headers.get('x-gumroad-signature') ||
         headers.get('X-Gumroad-Signature');
}
```

**핵심 포인트:**
- ✅ HMAC-SHA256으로 서명 검증
- ✅ Timing attack 방지 (`timingSafeEqual`)
- ✅ 대소문자 무관 헤더 추출

---

### 4. 스토리지 클라이언트 (`src/lib/storage.ts`)

```typescript
import { Redis } from '@upstash/redis';

interface StorageClient {
  get<T>(key: string): Promise<T | null>;
  set(key: string, value: any, options?: { ex: number }): Promise<any>;
  del(key: string): Promise<any>;
}

declare global {
  var devStorage: Map<string, string> | undefined;
  var storageInitialized: boolean | undefined;
}

let storageClient: StorageClient;

// Upstash Redis (프로덕션)
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  if (!globalThis.storageInitialized) {
    console.log('[Storage] Initializing Upstash Redis');
    globalThis.storageInitialized = true;
  }
  const redis = Redis.fromEnv();

  storageClient = {
    get: async <T>(key: string): Promise<T | null> => {
      const value = await redis.get<string>(key);
      if (value) {
        try {
          return JSON.parse(value) as T;
        } catch {
          return value as T;
        }
      }
      return null;
    },
    set: async (key: string, value: any, options?: { ex: number }): Promise<any> => {
      const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
      return redis.set(key, stringValue, options);
    },
    del: async (key: string): Promise<any> => {
      return redis.del(key);
    },
  };
} else {
  // In-memory Map (로컬 개발)
  if (!globalThis.devStorage) {
    console.log('[Storage] Initializing in-memory Map for development');
    globalThis.devStorage = new Map<string, string>();
  }
  const devStorage = globalThis.devStorage;

  storageClient = {
    get: async <T>(key: string): Promise<T | null> => {
      const value = devStorage.get(key);
      if (value) {
        try {
          return JSON.parse(value) as T;
        } catch {
          return value as T;
        }
      }
      return null;
    },
    set: async (key: string, value: any, options?: { ex: number }): Promise<any> => {
      const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
      devStorage.set(key, stringValue);
      return 'OK';
    },
    del: async (key: string): Promise<any> => {
      devStorage.delete(key);
      return 1;
    },
  };
}

export { storageClient };
```

**핵심 포인트:**
- ✅ 프로덕션: Upstash Redis 자동 감지
- ✅ 개발: In-memory Map fallback
- ✅ Hot reload 대응 (`globalThis`)
- ✅ TTL 지원 (`ex` 옵션)

---

### 5. 환경 변수 관리 (`src/lib/env.ts`)

```typescript
// 서버 전용 환경 변수 (절대 클라이언트에 노출 금지!)
export const serverEnv = {
  gumroadLicenseKey: process.env.GUMROAD_LICENSE_KEY!,
  gumroadProductPermalink: process.env.GUMROAD_PRODUCT_PERMALINK!,
  nodeEnv: process.env.NODE_ENV || 'development',
  kvRestApiUrl: process.env.KV_REST_API_URL,
  kvRestApiToken: process.env.KV_REST_API_TOKEN,
  gumroadWebhookSecret: process.env.GUMROAD_WEBHOOK_SECRET,
} as const;

// 클라이언트 안전 환경 변수
export const clientEnv = {
  gumroadProductUrl: process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL!,
} as const;
```

**핵심 포인트:**
- ✅ 서버/클라이언트 환경 변수 분리
- ✅ TypeScript 타입 안전성
- ✅ `NEXT_PUBLIC_` 접두사로 클라이언트 노출 제어

---

### 6. Zustand 스토어 (`src/store/useAppStore.ts`)

```typescript
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface AppState {
  // Payment
  isPremiumUnlocked: boolean;
  paymentStatus: 'idle' | 'processing' | 'success' | 'error' | 'cancelled';
  isPaymentModalOpen: boolean;
}

export interface AppActions {
  // Payment
  setIsPremiumUnlocked: (unlocked: boolean) => void;
  setPaymentStatus: (status: AppState['paymentStatus']) => void;
  setIsPaymentModalOpen: (open: boolean) => void;
  unlockPremium: (premiumData: any[]) => void;
}

export const useAppStore = create<AppState & AppActions>()(
  devtools(
    persist(
      (set) => ({
        isPremiumUnlocked: false,
        paymentStatus: 'idle',
        isPaymentModalOpen: false,

        setIsPremiumUnlocked: (unlocked) => set({ isPremiumUnlocked: unlocked }),
        setPaymentStatus: (status) => set({ paymentStatus: status }),
        setIsPaymentModalOpen: (open) => set({ isPaymentModalOpen: open }),

        unlockPremium: (premiumData) => set({
          isPremiumUnlocked: true,
          paymentStatus: 'success',
          isPaymentModalOpen: false,
        }),
      }),
      {
        name: 'app-storage',
      }
    )
  )
);
```

**핵심 포인트:**
- ✅ Zustand로 전역 상태 관리
- ✅ `persist` 미들웨어로 localStorage 저장
- ✅ DevTools 지원

---

### 7. 결제 모달 컴포넌트 (`src/components/GumroadPaymentModal.tsx`)

```typescript
'use client';

import React, { useState } from 'react';
import { useAppStore } from '@/store/useAppStore';

interface GumroadPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionId: string;
  productUrl: string;
  onPaymentComplete: () => void;
}

export const GumroadPaymentModal: React.FC<GumroadPaymentModalProps> = ({
  isOpen,
  onClose,
  sessionId,
  productUrl,
  onPaymentComplete,
}) => {
  const [isChecking, setIsChecking] = useState(false);

  // Gumroad URL에 sessionId 추가
  const gumroadUrl = `${productUrl}?session_id=${sessionId}`;

  // 수동 결제 확인
  const handleCheckPayment = async () => {
    setIsChecking(true);
    try {
      const response = await fetch(`/api/payment/session?sessionId=${sessionId}`);

      if (!response.ok) {
        alert('Failed to check payment status');
        return;
      }

      const data = await response.json();

      if (data.status === 'completed' && data.licenseKey) {
        console.log('✅ Payment completed!', data.licenseKey);
        onPaymentComplete();
      } else {
        alert('Payment not confirmed yet. Please wait and try again.');
      }
    } catch (error) {
      console.error('Error checking payment:', error);
      alert('Error checking payment status');
    } finally {
      setIsChecking(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Payment</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <h3>💳 Premium Payment</h3>

          {/* Gumroad 결제 버튼 */}
          <button
            className="payment-button"
            onClick={() => window.open(gumroadUrl, '_blank')}
          >
            🔒 Pay on Gumroad
          </button>

          {/* 결제 확인 버튼 */}
          <button
            className="check-button"
            onClick={handleCheckPayment}
            disabled={isChecking}
          >
            {isChecking ? '⏳ Checking...' : '✓ Confirm Payment'}
          </button>

          <p className="note">
            💡 After completing payment on Gumroad, click "Confirm Payment" button.
          </p>

          <div className="features">
            <div className="feature">
              <span>✅</span>
              <span>Credit Card, PayPal supported</span>
            </div>
            <div className="feature">
              <span>🔒</span>
              <span>Secure payment (SSL encrypted)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

**핵심 포인트:**
- ✅ `sessionId`를 URL 파라미터로 전달
- ✅ `window.open()`으로 새 탭에서 Gumroad 열기
- ✅ 수동 확인 버튼으로 API 호출 최소화
- ✅ 로딩 상태 관리 (`isChecking`)

---

### 8. 결제 플로우 통합 코드 (예시: ResultScreen.tsx)

```typescript
'use client';

import React, { useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { GumroadPaymentModal } from '@/components/GumroadPaymentModal';

export const ResultScreen: React.FC = () => {
  const isPremiumUnlocked = useAppStore((state) => state.isPremiumUnlocked);
  const isPaymentModalOpen = useAppStore((state) => state.isPaymentModalOpen);
  const setIsPaymentModalOpen = useAppStore((state) => state.setIsPaymentModalOpen);
  const unlockPremium = useAppStore((state) => state.unlockPremium);

  const [paymentSessionId, setPaymentSessionId] = useState<string | null>(null);

  // "Unlock Premium" 버튼 클릭
  const handleUnlockPremium = async () => {
    console.log('[Payment] Creating payment session...');

    try {
      // 1. 결제 세션 생성
      const sessionResponse = await fetch('/api/payment/session', {
        method: 'POST',
      });

      if (!sessionResponse.ok) {
        throw new Error('Failed to create payment session');
      }

      const { sessionId } = await sessionResponse.json();
      console.log('[Payment] Session created:', sessionId);

      // 2. 세션 ID 저장 & 모달 열기
      setPaymentSessionId(sessionId);
      setIsPaymentModalOpen(true);

    } catch (error) {
      console.error('[Payment] Error:', error);
      alert('Failed to start payment process. Please try again.');
    }
  };

  // 결제 완료 콜백
  const handlePaymentComplete = () => {
    console.log('[Payment] Payment completed!');

    // 프리미엄 콘텐츠 잠금 해제
    unlockPremium([/* premium data */]);

    // 모달 닫기
    setIsPaymentModalOpen(false);

    // 성공 메시지
    alert('🎉 Payment successful! Premium content unlocked.');
  };

  return (
    <div>
      {/* 프리미엄 CTA */}
      {!isPremiumUnlocked && (
        <button onClick={handleUnlockPremium}>
          🚀 Unlock Premium
        </button>
      )}

      {/* 결제 모달 */}
      {isPaymentModalOpen && paymentSessionId && (
        <GumroadPaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          sessionId={paymentSessionId}
          productUrl={process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL || ''}
          onPaymentComplete={handlePaymentComplete}
        />
      )}
    </div>
  );
};
```

**핵심 포인트:**
- ✅ 버튼 클릭 → 세션 생성 → 모달 열기
- ✅ 결제 완료 → `unlockPremium()` 호출
- ✅ 환경 변수에서 Gumroad URL 가져오기

---

## 🛠️ Gumroad 설정 가이드

### STEP 1: Gumroad 계정 생성

1. https://gumroad.com 접속
2. "Sign up" 클릭
3. 이메일로 계정 생성

---

### STEP 2: 제품 생성

1. Gumroad 대시보드 → "Products" → "New Product"
2. 제품 정보 입력:
   ```
   Product Name: Premium Access (또는 원하는 이름)
   Price: $2.99 (원하는 가격)
   Product Type: Digital Product
   ```
3. "Publish" 클릭

---

### STEP 3: 라이선스 키 활성화 ⭐

**매우 중요!**

1. 제품 페이지 → "Settings" 탭
2. "Generate a unique license key for each purchase" **체크**
3. "Save" 클릭

> ⚠️ 이 설정이 없으면 라이선스 키를 받을 수 없습니다!

---

### STEP 4: 커스텀 필드 추가 ⭐

**매우 중요!**

1. 제품 페이지 → "Customize" 탭
2. Scroll down to "Custom Fields"
3. "Add custom field" 클릭
4. 필드 설정:
   ```
   Field name: session_id
   Type: Text
   Required: No (선택사항)
   ```
5. "Save" 클릭

> ⚠️ 이 필드가 없으면 결제와 사용자를 연결할 수 없습니다!

---

### STEP 5: 제품 URL 복사

1. 제품 페이지 → "Share" 탭
2. Product URL 복사:
   ```
   https://yourname.gumroad.com/l/product-code
   ```
3. `.env.local`에 저장:
   ```bash
   NEXT_PUBLIC_GUMROAD_PRODUCT_URL=https://yourname.gumroad.com/l/product-code
   ```

---

### STEP 6: Product Permalink 확인

1. 제품 페이지 → URL 확인
2. URL 마지막 부분이 permalink:
   ```
   https://yourname.gumroad.com/l/my-product
                                      ^^^^^^^^^^
                                      이 부분이 permalink
   ```
3. `.env.local`에 저장:
   ```bash
   GUMROAD_PRODUCT_PERMALINK=my-product
   ```

---

### STEP 7: 웹훅 설정 ⭐

**매우 중요!**

1. Gumroad 대시보드 → "Settings" → "Advanced" → "Webhooks"
2. "Add webhook URL" 클릭
3. 웹훅 URL 입력:
   ```
   https://your-domain.com/api/gumroad/webhook
   ```

   **주의:**
   - ✅ HTTPS 필수! (HTTP는 작동 안 함)
   - ✅ 도메인은 Vercel 배포 후 주소 사용
   - ✅ 로컬 테스트는 ngrok 사용

4. "Ping" 버튼으로 테스트
5. Webhook Secret 복사:
   ```
   예: wh_sec_abc123def456...
   ```
6. `.env.local`에 저장:
   ```bash
   GUMROAD_WEBHOOK_SECRET=wh_sec_abc123def456...
   ```

---

### STEP 8: 테스트 모드 → 라이브 모드 전환

**프로덕션 배포 전 필수!**

1. 제품 페이지 → "Publish" 탭
2. "Test mode" 토글 확인
3. **Test mode OFF** (Live mode로 전환)
4. "Save" 클릭

> ⚠️ Test mode가 켜져 있으면 실제 결제가 되지 않습니다!

---

## ☁️ Vercel 설정 가이드

### STEP 1: Vercel 프로젝트 생성

1. https://vercel.com 접속
2. GitHub 계정 연결
3. "New Project" 클릭
4. GitHub 저장소 선택
5. "Deploy" 클릭

---

### STEP 2: 환경 변수 설정

1. Vercel 대시보드 → 프로젝트 선택
2. "Settings" → "Environment Variables"
3. 다음 변수 추가:

```bash
# Gumroad 제품 URL (클라이언트에서 접근 가능)
NEXT_PUBLIC_GUMROAD_PRODUCT_URL=https://yourname.gumroad.com/l/product-code

# Gumroad Product Permalink (서버 전용)
GUMROAD_PRODUCT_PERMALINK=product-code

# Gumroad License Key (서버 전용)
# Gumroad Settings → Advanced → API에서 복사
GUMROAD_LICENSE_KEY=your_license_key_here

# Gumroad Webhook Secret (서버 전용)
GUMROAD_WEBHOOK_SECRET=wh_sec_abc123def456...

# Base URL (웹훅용)
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

4. Environment: **Production** 선택
5. "Save" 클릭

---

### STEP 3: Upstash Redis 설정 (선택사항이지만 권장)

**로컬 개발은 In-memory Map 사용, 프로덕션은 Redis 권장**

1. https://upstash.com 접속
2. "Create Database" 클릭
3. Database 이름 입력 (예: `payment-sessions`)
4. Region 선택 (가장 가까운 지역)
5. "Create" 클릭
6. "REST API" 탭 클릭
7. 환경 변수 복사:
   ```bash
   UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
   UPSTASH_REDIS_REST_TOKEN=AxxxYyyyZzzz...
   ```
8. Vercel 환경 변수에 추가

---

### STEP 4: 배포 확인

1. 환경 변수 설정 완료 후
2. "Deployments" → 최신 배포 선택
3. "Redeploy" 클릭 (환경 변수 적용)
4. 배포 완료 대기 (1-2분)
5. 배포된 URL 확인:
   ```
   https://your-project.vercel.app
   ```

---

### STEP 5: 웹훅 엔드포인트 테스트

1. 브라우저에서 접속:
   ```
   https://your-project.vercel.app/api/payment/session
   ```

   **예상 응답:**
   ```json
   {"error":"Method not allowed"} 또는 {"error":"Session ID is required"}
   ```
   (GET 요청이므로 에러가 정상)

2. Gumroad에서 웹훅 Ping 테스트:
   - Gumroad Settings → Webhooks
   - "Ping" 버튼 클릭
   - 성공 응답 확인

3. Vercel 로그 확인:
   - Vercel 대시보드 → "Logs"
   - `[Gumroad Webhook]` 로그 확인

---

## 🔐 환경 변수 설정

### `.env.local` (로컬 개발용)

```bash
# Gumroad Configuration
NEXT_PUBLIC_GUMROAD_PRODUCT_URL=https://yourname.gumroad.com/l/product-code
GUMROAD_PRODUCT_PERMALINK=product-code
GUMROAD_LICENSE_KEY=your_license_key_here
GUMROAD_WEBHOOK_SECRET=wh_sec_abc123def456...

# Base URL (for webhooks - use ngrok for local testing)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Upstash Redis (optional for local - will use in-memory fallback)
# UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
# UPSTASH_REDIS_REST_TOKEN=AxxxYyyyZzzz...
```

### Vercel 환경 변수 (프로덕션용)

```bash
# 클라이언트 노출 가능
NEXT_PUBLIC_GUMROAD_PRODUCT_URL=https://yourname.gumroad.com/l/product-code
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app

# 서버 전용 (절대 노출 금지!)
GUMROAD_PRODUCT_PERMALINK=product-code
GUMROAD_LICENSE_KEY=your_license_key_here
GUMROAD_WEBHOOK_SECRET=wh_sec_abc123def456...
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=AxxxYyyyZzzz...
```

---

## 📦 필수 NPM 패키지

```bash
npm install nanoid @upstash/redis zustand
```

**package.json:**
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.0",
    "nanoid": "^5.0.0",
    "@upstash/redis": "^1.28.0",
    "zustand": "^4.5.0"
  }
}
```

---

## 🔄 다른 프로젝트 적용 방법

### 1단계: 필수 파일 복사

다음 파일들을 새 프로젝트로 복사:

```
✅ src/app/api/payment/session/route.ts
✅ src/app/api/gumroad/webhook/route.ts
✅ src/lib/storage.ts
✅ src/lib/webhookSignature.ts
✅ src/lib/env.ts
✅ src/components/GumroadPaymentModal.tsx (UI는 커스터마이즈)
```

### 2단계: Zustand 스토어 통합

기존 스토어가 있다면 결제 관련 상태 추가:

```typescript
// src/store/useAppStore.ts
export interface AppState {
  // ... 기존 상태

  // Payment 상태 추가
  isPremiumUnlocked: boolean;
  isPaymentModalOpen: boolean;
  paymentStatus: 'idle' | 'processing' | 'success' | 'error';
}

export interface AppActions {
  // ... 기존 액션

  // Payment 액션 추가
  setIsPremiumUnlocked: (unlocked: boolean) => void;
  setIsPaymentModalOpen: (open: boolean) => void;
  unlockPremium: (data: any) => void;
}
```

### 3단계: 환경 변수 설정

1. `.env.local` 생성 (위 템플릿 참고)
2. Gumroad에서 값 복사
3. Vercel에 환경 변수 추가

### 4단계: UI 통합

결제 버튼 추가:

```tsx
import { useAppStore } from '@/store/useAppStore';
import { GumroadPaymentModal } from '@/components/GumroadPaymentModal';

export function YourComponent() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const isPaymentModalOpen = useAppStore((state) => state.isPaymentModalOpen);
  const setIsPaymentModalOpen = useAppStore((state) => state.setIsPaymentModalOpen);

  const handleUnlock = async () => {
    const res = await fetch('/api/payment/session', { method: 'POST' });
    const { sessionId } = await res.json();
    setSessionId(sessionId);
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <button onClick={handleUnlock}>Unlock Premium</button>

      {isPaymentModalOpen && sessionId && (
        <GumroadPaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          sessionId={sessionId}
          productUrl={process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL!}
          onPaymentComplete={() => {
            // 프리미엄 콘텐츠 활성화
          }}
        />
      )}
    </>
  );
}
```

### 5단계: 테스트

1. 로컬 개발 서버 실행: `npm run dev`
2. 결제 버튼 클릭 → 세션 생성 확인
3. Gumroad 모달 열리는지 확인
4. (프로덕션) Webhook 동작 확인

---

## 🧪 테스트 가이드

### 로컬 테스트

**문제:** Gumroad 웹훅은 localhost를 호출할 수 없습니다.

**해결:** ngrok 사용

```bash
# 1. ngrok 설치
brew install ngrok  # Mac
# 또는 https://ngrok.com/download

# 2. 로컬 서버 실행
npm run dev

# 3. ngrok 터널 생성
ngrok http 3000

# 4. ngrok URL 복사
# 예: https://abc123.ngrok.io

# 5. Gumroad 웹훅 URL 임시 변경
# https://abc123.ngrok.io/api/gumroad/webhook
```

### 테스트 시나리오

#### ✅ 정상 결제 플로우

1. "Unlock Premium" 클릭
2. 결제 모달 열림
3. "Pay on Gumroad" 클릭 → Gumroad 페이지 열림
4. 결제 완료 (테스트 카드 사용)
5. "Confirm Payment" 클릭
6. 프리미엄 잠금 해제 확인

**예상 결과:** ✅ 성공 메시지 + 프리미엄 콘텐츠 표시

#### ❌ 결제 미완료

1. "Unlock Premium" 클릭
2. 결제 모달 열림
3. "Pay on Gumroad" 클릭
4. Gumroad 페이지에서 결제 **안 함**
5. "Confirm Payment" 클릭

**예상 결과:** ⚠️ "Payment not confirmed yet" 메시지

#### 🔄 웹훅 테스트

1. Gumroad Settings → Webhooks
2. "Ping" 버튼 클릭
3. Vercel Logs 확인:
   ```
   [Gumroad Webhook] ✅ Signature verified
   [Gumroad Webhook] Purchase received
   ```

**예상 결과:** ✅ 200 OK 응답

---

## 🐛 트러블슈팅

### 1. "Test purchase" 메시지 표시

**증상:**
> "This will be a test purchase as you are the creator..."

**원인:**
- 당신이 제품 크리에이터이기 때문

**해결:**
- ✅ **정상 동작입니다!**
- 실제 고객이 구매하면 정상 결제됩니다
- 테스트하려면 다른 계정 사용

---

### 2. 웹훅이 호출되지 않음

**증상:**
- 결제 완료했지만 세션 상태가 `pending`

**원인:**
1. 웹훅 URL이 잘못됨
2. HTTPS가 아님
3. 서명 검증 실패

**해결:**
```bash
# 1. Gumroad 웹훅 URL 확인
https://your-domain.vercel.app/api/gumroad/webhook

# 2. Vercel Logs 확인
vercel logs --follow

# 3. 웹훅 Ping 테스트
Gumroad Settings → Webhooks → Ping

# 4. 서명 검증 비활성화 (임시 테스트용)
# webhookSignature.ts에서 항상 true 반환
```

---

### 3. "Session not found" 에러

**증상:**
- "Confirm Payment" 클릭 시 404 에러

**원인:**
1. 세션 만료 (1시간)
2. Redis 연결 문제
3. sessionId 전달 안 됨

**해결:**
```bash
# 1. 세션 생성 확인
console.log('Session created:', sessionId);

# 2. Redis 연결 확인
console.log('[Storage] Using:', process.env.UPSTASH_REDIS_REST_URL ? 'Redis' : 'Memory');

# 3. Gumroad URL 확인
console.log('Gumroad URL:', gumroadUrl);
# 예상: https://xxx.gumroad.com/l/product?session_id=abc123
```

---

### 4. 환경 변수가 적용되지 않음

**증상:**
- `process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL`이 undefined

**원인:**
1. Vercel에서 Redeploy 안 함
2. 환경 변수 이름 오타
3. `NEXT_PUBLIC_` 접두사 누락 (클라이언트)

**해결:**
```bash
# 1. Vercel 환경 변수 확인
Vercel Dashboard → Settings → Environment Variables

# 2. Redeploy
Vercel Dashboard → Deployments → Redeploy

# 3. 로컬에서 .env.local 재시작
# 서버 재시작 필요!
npm run dev
```

---

### 5. CORS 에러

**증상:**
```
Access to fetch at '...' from origin '...' has been blocked by CORS
```

**원인:**
- API Route가 CORS 헤더 없음 (Next.js는 기본적으로 해결)

**해결:**
```typescript
// 필요시 route.ts에 추가
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
```

---

## 📊 성능 최적화

### API 호출 횟수 비교

| 방식 | 평균 API 호출 | Vercel 무료 티어 친화도 |
|------|-------------|---------------------|
| 자동 폴링 (10초 × 6회) | 6회 | ⚠️ 보통 |
| **수동 확인 (현재)** | **1-2회** | **✅ 매우 좋음** |

### 스토리지 비용

| 스토리지 | 비용 | 세션 보관 |
|---------|------|----------|
| In-memory Map | 무료 | 서버 재시작시 삭제 |
| **Upstash Redis** | **무료 티어: 10,000 commands/day** | **영구 보관** |

---

## ✅ 배포 전 체크리스트

### Gumroad 설정
- [ ] 제품 생성 완료
- [ ] 라이선스 키 활성화
- [ ] 커스텀 필드 `session_id` 추가
- [ ] 웹훅 URL 설정
- [ ] 웹훅 Secret 복사
- [ ] **Test mode OFF** (Live mode)

### Vercel 설정
- [ ] 프로젝트 배포 완료
- [ ] 모든 환경 변수 설정
- [ ] Upstash Redis 연결 (선택)
- [ ] Redeploy 실행
- [ ] 배포 URL 확인

### 코드 통합
- [ ] 필수 파일 모두 복사
- [ ] Zustand 스토어 통합
- [ ] UI 컴포넌트 통합
- [ ] 환경 변수 참조 확인
- [ ] TypeScript 에러 없음

### 테스트
- [ ] 로컬 결제 플로우 테스트
- [ ] 프로덕션 결제 플로우 테스트
- [ ] 웹훅 Ping 테스트 성공
- [ ] 실제 결제 → 환불 테스트

---

## 🎓 핵심 요약

### 왜 이 방식인가?

✅ **Vercel 무료 티어 최적화**
- 수동 확인으로 API 호출 최소화
- Redis 대신 In-memory 사용 가능

✅ **보안**
- HMAC-SHA256 서명 검증
- 서버/클라이언트 환경 변수 분리

✅ **확장 가능**
- Redis로 쉽게 마이그레이션
- 다른 프로젝트에 재사용 가능

### 핵심 코드 3줄

```typescript
// 1. 세션 생성
const { sessionId } = await fetch('/api/payment/session', { method: 'POST' }).then(r => r.json());

// 2. Gumroad 결제
window.open(`${productUrl}?session_id=${sessionId}`, '_blank');

// 3. 결제 확인
const { status } = await fetch(`/api/payment/session?sessionId=${sessionId}`).then(r => r.json());
if (status === 'completed') unlockPremium();
```

---

## 📚 추가 리소스

- [Gumroad Webhooks 문서](https://help.gumroad.com/article/264-webhooks)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Upstash Redis](https://upstash.com/docs/redis/overall/getstarted)
- [Zustand 문서](https://zustand-demo.pmnd.rs/)

---

**마지막 업데이트:** 2025-10-20
**검증 완료:** Korean Name Studio (https://www.k-name-studio.com)
**버전:** 2.0.0

---

**이 문서는 실제 프로덕션 코드를 기반으로 작성되었습니다.**
**복사-붙여넣기로 바로 사용 가능합니다!** 🚀

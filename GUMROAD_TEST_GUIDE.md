# Gumroad 결제 테스트 가이드

## 🧪 로컬 서버 테스트

### 방법 1: 라이센스 키 직접 입력 (추천)

개발 모드에서만 표시되는 테스트 입력창을 사용합니다.

**테스트 순서:**
1. `npm run dev`로 개발 서버 실행
2. 브라우저에서 http://localhost:3000 접속
3. 이름 생성 후 ResultScreen으로 이동
4. **화면 오른쪽 하단의 "🧪 테스트: 라이센스 입력" 패널 확인**
5. 라이센스 키 입력:
   ```
   (Gumroad에서 테스트 결제 후 받은 라이센스 키)
   ```
6. "검증하기" 버튼 클릭
7. ✅ 검증 성공 시 프리미엄 자동 잠금 해제

**장점:**
- Webhook 없이도 테스트 가능
- 빠른 테스트
- 운영 환경에서는 자동으로 숨겨짐 (`NODE_ENV=development`만 표시)

---

### 방법 2: Gumroad Overlay 전체 플로우 테스트

실제 결제 흐름을 테스트합니다.

**준비사항:**
- Gumroad에서 테스트 모드 활성화
- 신용카드: `4242 4242 4242 4242` (Stripe 테스트 카드)

**테스트 순서:**
1. ResultScreen에서 "Unlock Premium Experience" 버튼 클릭
2. Gumroad Overlay 팝업이 열림
3. 테스트 결제 진행 (이메일 입력, 카드 정보 입력)
4. 결제 완료 후 자동으로 프리미엄 잠금 해제
5. 브라우저 콘솔에서 로그 확인:
   ```
   [ResultScreen] Purchase successful: { license_key: "..." }
   [ResultScreen] Generated premium content: {...}
   ```

---

## 🚀 운영 서버 테스트 (Vercel)

### 1단계: Vercel 환경 변수 설정

Vercel Dashboard > Settings > Environment Variables에 추가:

```env
NEXT_PUBLIC_GUMROAD_PRODUCT_URL=https://knamestudio.gumroad.com/l/pay
GUMROAD_PRODUCT_PERMALINK=pay
GUMROAD_LICENSE_KEY=6F0E4C97-B72A4E69-A11BF6C4-AF6517E7
NODE_ENV=production
```

### 2단계: Git Push 및 자동 배포

```bash
git add .
git commit -m "Add Gumroad payment integration"
git push
```

Vercel이 자동으로 빌드 및 배포합니다.

### 3단계: 배포 URL에서 테스트

1. https://k-name-studio.vercel.app 접속
2. "Unlock Premium Experience" 버튼 클릭
3. Gumroad Overlay에서 실제/테스트 결제 진행
4. 결제 완료 후 프리미엄 확인

---

## 🔍 API 엔드포인트 테스트

### Webhook 테스트

Gumroad가 결제 완료 시 호출하는 엔드포인트:

```
POST https://k-name-studio.vercel.app/api/gumroad/webhook
```

**수동 테스트 (curl):**
```bash
curl -X POST https://k-name-studio.vercel.app/api/gumroad/webhook \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "sale_id=test-123" \
  -d "email=test@example.com" \
  -d "product_permalink=pay" \
  -d "license_key=TEST-KEY-123" \
  -d "purchaser_name=Test User" \
  -d "price=2.99" \
  -d "currency=USD"
```

### License Verification 테스트

```bash
curl -X POST https://k-name-studio.vercel.app/api/gumroad/verify \
  -H "Content-Type: application/json" \
  -d '{"licenseKey":"실제-라이센스-키"}'
```

**응답 예시:**
```json
{
  "valid": true,
  "purchase": {
    "email": "user@example.com",
    "productName": "Korean Name Studio Premium",
    "saleTimestamp": "2025-10-09T12:00:00Z"
  }
}
```

---

## 📝 Gumroad 테스트 모드

### 테스트 결제 카드

Gumroad는 Stripe 테스트 카드를 사용합니다:

- **카드 번호:** `4242 4242 4242 4242`
- **만료일:** 미래의 임의 날짜 (예: `12/25`)
- **CVC:** 임의의 3자리 숫자 (예: `123`)
- **ZIP:** 임의의 우편번호 (예: `12345`)

### 실제 결제 vs 테스트 결제

- **테스트 모드:** Gumroad Dashboard에서 "Test Mode" 활성화
- **실제 모드:** 실제 신용카드 사용, 실제 결제 발생

---

## 🐛 문제 해결

### 1. Gumroad Overlay가 열리지 않음

**원인:** Gumroad 스크립트가 로드되지 않음

**해결:**
1. 브라우저 콘솔에서 확인:
   ```javascript
   console.log(window.Gumroad);
   ```
2. `layout.tsx`에 스크립트가 있는지 확인:
   ```html
   <script src="https://gumroad.com/js/gumroad.js" async />
   ```
3. 페이지 새로고침

### 2. 라이센스 검증 실패

**원인:** 잘못된 라이센스 키 또는 API 설정 오류

**해결:**
1. `.env.local` 확인:
   ```env
   GUMROAD_LICENSE_KEY=6F0E4C97-B72A4E69-A11BF6C4-AF6517E7
   GUMROAD_PRODUCT_PERMALINK=pay
   ```
2. 개발 서버 재시작
3. Gumroad API 직접 테스트:
   ```bash
   curl -X POST https://api.gumroad.com/v2/licenses/verify \
     -d "product_permalink=pay" \
     -d "license_key=테스트-키"
   ```

### 3. Webhook이 호출되지 않음

**원인:** Gumroad에 Webhook URL이 설정되지 않음

**해결:**
1. Gumroad Dashboard > Product > Webhooks
2. Ping URL 추가:
   ```
   https://k-name-studio.vercel.app/api/gumroad/webhook
   ```
3. "Test" 버튼으로 테스트

### 4. 개발 모드 테스트 패널이 보이지 않음

**원인:** `NODE_ENV`가 production으로 설정됨

**해결:**
1. `.env.local` 확인:
   ```env
   NODE_ENV=development
   ```
2. 개발 서버 재시작

---

## 📊 로그 확인

### 브라우저 콘솔

- `F12` 또는 `Cmd+Option+I` (Mac)
- Console 탭에서 다음 로그 확인:
  ```
  [ResultScreen] Opening Gumroad payment...
  [ResultScreen] Purchase successful: {...}
  [Gumroad Verify] Verifying license: ...
  ```

### Vercel 로그

- Vercel Dashboard > Deployments > [최신 배포] > Functions
- API 호출 로그 확인

---

## ✅ 체크리스트

### 배포 전 확인사항

- [ ] `.env.local`에 모든 환경 변수 설정
- [ ] Vercel에 환경 변수 추가
- [ ] Gumroad Webhook URL 설정
- [ ] 로컬에서 라이센스 검증 테스트 완료
- [ ] 개발 모드 테스트 패널 작동 확인

### 배포 후 확인사항

- [ ] Vercel 배포 성공
- [ ] 운영 서버에서 Gumroad Overlay 열림 확인
- [ ] 테스트 결제 진행 및 프리미엄 잠금 해제 확인
- [ ] Webhook API 정상 작동 확인
- [ ] License Verification API 정상 작동 확인

# PayPal Payment System - Production Deployment Guide

## 🚀 Vercel 배포 환경 변수 설정

### 1. Vercel Dashboard 접속
1. [Vercel Dashboard](https://vercel.com/dashboard) 로그인
2. 프로젝트 선택 (k_name_studio)
3. **Settings** 탭 클릭
4. **Environment Variables** 섹션 이동

### 2. 환경 변수 추가

다음 환경 변수들을 **Production** 환경에 추가:

```bash
# PayPal Production Settings
NODE_ENV=production
NEXT_PUBLIC_PAYPAL_CLIENT_ID_LIVE=AT2nZMAQSzJM3mDvkB1jQn69oRZO9HwxKYwVRwkYGekK9LTgaW7KtcIjy7LNi_NVq9L6LsIhwIm1ZXOk
PAYPAL_CLIENT_SECRET_LIVE=EOxtB8n_VEXipVAHR3gbfhqcfxx75oQcP98imbnA5tNJp2e-cKzE0rFMUTnLD-xF8B87kyUMOH6N5kxT

# PayPal Sandbox Settings (for Preview/Development deployments)
NEXT_PUBLIC_PAYPAL_CLIENT_ID_SANDBOX=AfLfYrtFVIVfBqtE9e0HfnJ6HDfpxh7ma-mM8FtKKkjl3pYyY6OclA1mg9ZsVYXkW8jZc7M0duVOo0xS
PAYPAL_CLIENT_SECRET_SANDBOX=EKZJnkR5ulf_UY0rV8kpFDM61Dck2SFMt_x-cIt0wmOsfa50Uxp1Upv-2D_bSCK1a2TQqdxtubFvXk3a

# Vercel KV (if needed)
# KV_REST_API_URL=your_kv_rest_api_url
# KV_REST_API_TOKEN=your_kv_rest_api_token
```

### 3. 환경별 설정

#### Production (실제 운영 환경)
- `NODE_ENV=production`
- PayPal Live API 사용
- 실제 결제 처리

#### Preview/Development (미리보기 환경)
- `NODE_ENV=development` (기본값)
- PayPal Sandbox API 사용
- 테스트 결제만 가능

### 4. 재배포
환경 변수 설정 후 **Deployments** 탭에서 **Redeploy** 실행

## 🔧 결제 시스템 동작 방식

### 개발 환경 (localhost)
- PayPal Sandbox 사용
- 테스트 결제 가능
- 실제 금액 청구 없음

### 운영 환경 (production)
- PayPal Live API 사용
- 실제 결제 처리
- 고객에게 실제 금액 청구

## ✅ 배포 완료 체크리스트

- [ ] Vercel 환경 변수 설정 완료
- [ ] `NODE_ENV=production` 설정 확인
- [ ] PayPal Live 계정 정보 입력 확인
- [ ] 재배포 완료
- [ ] 운영 사이트에서 결제 테스트 (실제 결제 주의!)

## 🚨 주의사항

1. **운영 환경에서는 실제 결제가 발생합니다**
2. 테스트 시 소액으로 진행하세요
3. PayPal 계정에 실제 결제가 들어오는지 확인하세요
4. 환경 변수가 올바르게 설정되었는지 반드시 확인하세요

## 📞 문제 발생 시

1. Vercel 배포 로그 확인
2. PayPal Developer Dashboard에서 API 호출 로그 확인
3. 브라우저 개발자 도구에서 네트워크 탭 확인
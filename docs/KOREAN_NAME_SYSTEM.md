# Korean Name Generation System Documentation

## 🎯 Overview

한국 이름 스튜디오는 전통 사주명리학과 현대적인 다국어 지원을 결합한 개인맞춤형 한국 이름 추천 시스템입니다.

## 📊 System Architecture

### Core Components
- **사주 계산 시스템** (`sajuCalculator.ts`) - 전통 사주팔자 알고리즘
- **이름 데이터베이스** (`koreanNames.ts`) - 다국어 지원 한국 이름 DB
- **이름 생성 엔진** (`nameGenerator.ts`) - AI 기반 추천 로직
- **결과 화면** (`ResultScreen.tsx`) - 사용자 인터페이스

## 🗃️ Name Database Structure

### KoreanName Interface
```typescript
interface KoreanName {
  korean: string;              // 한국어 이름 (예: '민준')
  hanja?: string;              // 한자 표기 (예: '敏俊')
  romanization: string;        // 로마자 표기 (예: 'Min-jun')
  pronunciation: string;       // 발음 (예: 'min-joon')
  meaning: {                   // 다국어 의미
    [locale: string]: string;  // en, ko, ja, fr, de, es, it, pt, th, id
  };
  story: {                     // 다국어 문화적 배경 이야기
    [locale: string]: string;
  };
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';  // 오행
  gender: 'male' | 'female' | 'neutral';                   // 성별
  popularity: number;          // 인기도 (0-100)
  kpopMember?: {              // K-POP 멤버 연관성 (선택사항)
    group: string;
    memberName: string;
  };
  style: 'traditional' | 'modern' | 'kpop' | 'mixed';     // 스타일
}
```

### 지원 언어 (10개)
- 🇰🇷 한국어 (ko)
- 🇺🇸 영어 (en)
- 🇯🇵 일본어 (ja)
- 🇫🇷 프랑스어 (fr)
- 🇩🇪 독일어 (de)
- 🇪🇸 스페인어 (es)
- 🇮🇹 이탈리아어 (it)
- 🇵🇹 포르투갈어 (pt)
- 🇹🇭 태국어 (th)
- 🇮🇩 인도네시아어 (id)

### Current Name Collection
현재 데이터베이스에는 다음과 같은 이름들이 포함되어 있습니다:

#### 목(木) 오행 - 남성
- **민준** (敏俊) - "민첩하고 준수한"
  - 인기도: 95점
  - 스타일: modern
  - 발음: min-joon

- **태형** (泰亨) - "큰 덕"
  - 인기도: 85점
  - 스타일: kpop
  - K-POP: BTS V
  - 발음: tay-hyung

#### 목(木) 오행 - 여성
- **서연** (瑞蓮) - "서쪽의 아름다운 연꽃"
  - 인기도: 95점
  - 스타일: modern
  - 발음: suh-yun

#### 화(火) 오행 - 남성
- **지훈** (智勳) - "지혜로운 공훈"
  - 인기도: 88점
  - 스타일: traditional
  - 발음: jee-hoon

*Note: 현재는 샘플 데이터로 운영되며, 추후 확장 예정*

## ⚖️ Saju (Four Pillars) Calculation System

### Traditional Algorithm
전통 사주명리학 기반의 정확한 계산 시스템:

#### Core Calculations
1. **천간(天干) 계산**
   - 10개 천간: 갑을병정무기경신임계
   - 각각 5행(목화토금수) × 2극성(음양)

2. **지지(地支) 계산**
   - 12개 지지: 자축인묘진사오미신유술해
   - 12지신 (쥐, 소, 호랑이 등)
   - 절기 고려한 정확한 월 계산

3. **사주팔자 구성**
   ```
   년주 | 월주 | 일주 | 시주
   천간 | 천간 | 천간 | 천간
   지지 | 지지 | 지지 | 지지
   ```

#### Element Balance Analysis
```typescript
interface ElementBalance {
  wood: number;   // 목
  fire: number;   // 화
  earth: number;  // 토
  metal: number;  // 금
  water: number;  // 수
}
```

#### Day Master Strength
일간의 강약 판단 (5단계):
- `very-strong` - 매우 강함
- `strong` - 강함
- `moderate` - 보통
- `weak` - 약함
- `very-weak` - 매우 약함

### Recommendation Logic
```typescript
// 일간이 약한 경우 - 생조하는 오행 사용
if (dayMasterStrength === 'weak' || dayMasterStrength === 'very-weak') {
  return supportiveElement; // 상생 오행
}

// 일간이 너무 강한 경우 - 설기하는 오행 사용
if (dayMasterStrength === 'very-strong') {
  return destructiveElement; // 상극 오행
}

// 균형잡힌 경우 - 부족한 오행 보완
return weakestElement;
```

## 🎯 Name Generation Algorithm

### Scoring System (가중치 기반)

#### 1. Saju Compatibility (40% 가중치)
```typescript
// 오행 일치도 계산
if (name.element === recommendedElement) {
  score += 3; // 완벽한 일치
} else if (isCompatible(name.element, recommendedElement)) {
  score += 2; // 상생 관계
} else if (isNeutral(name.element, recommendedElement)) {
  score += 1; // 중립 관계
}
// 상극 관계는 0점
```

#### 2. Phonetic Similarity (30% 가중치)
```typescript
// 영어 이름과 한국어 발음 유사성
function getPhoneticScore(englishName: string, koreanPronunciation: string): number {
  let score = 0;

  // 첫 글자 일치
  if (english[0] === korean[0]) score += 2;

  // 모음 패턴 유사성
  const commonVowels = findCommonVowels(english, korean);
  score += commonVowels.length * 0.5;

  // 길이 유사성
  const lengthSimilarity = calculateLengthSimilarity(english, korean);
  score += lengthSimilarity;

  return score;
}
```

#### 3. Style Preference (20% 가중치)
- `traditional` - 전통적인 한자 의미 중심
- `modern` - 현대적이고 세련된 느낌
- `kpop` - K-POP 스타와 연관성
- `mixed` - 혼합 스타일

#### 4. Popularity (10% 가중치)
- 0-100점 인기도 스코어
- 최신 한국 이름 트렌드 반영

### Result Categories

#### Free Names (무료 이름)
- 상위 5개 추천 이름
- 기본 정보 제공 (이름, 의미, 궁합도)

#### Premium Names (프리미엄 이름)
- 추가 10-15개 이름
- 상세한 문화적 배경 이야기
- 유사한 이름 추천
- 상세 운세 정보

## 🔮 Fortune Analysis

### Multilingual Fortune Readings
각 이름에 대해 다국어로 제공되는 운세 정보:

```typescript
interface FortuneReading {
  overall: string;    // 종합 운세
  career: string;     // 직업 운세
  love: string;       // 연애 운세
  health: string;     // 건강 운세
  wealth: string;     // 재물 운세
  advice: string;     // 조언
}
```

### Compatibility Ratings
이름과 사주의 궁합도:
- 🟢 `excellent` - 최고 궁합 (4점 이상)
- 🔵 `good` - 좋은 궁합 (3점 이상)
- 🟡 `fair` - 보통 궁합 (2점 이상)
- 🔴 `poor` - 신중히 고려 (2점 미만)

## 🎨 UI/UX Features

### ResultScreen Components

#### Loading Animation
```typescript
// 3단계 로딩 프로세스
steps: [
  "사주팔자 계산 중",      // Calculating Four Pillars
  "오행 균형 분석 중",     // Analyzing Element Balance
  "완벽한 이름 찾는 중"    // Finding Perfect Names
]
```

#### Saju Visualization
- 사주팔자 시각적 표시 (년월일시)
- 오행 균형 차트
- 일간 강약 표시

#### Name Cards
- 한국어 이름 + 한자
- 로마자 발음 표기
- 궁합도 컬러 코딩
- 문화적 스토리
- 운세 요약

#### Interactive Features
- 이름 선택 시 상세 정보 표시
- 프리미엄 이름 잠금/해제
- 소셜 공유 기능

## 🔧 Technical Implementation

### File Structure
```
src/
├── data/
│   └── koreanNames.ts          # 이름 데이터베이스
├── utils/
│   ├── sajuCalculator.ts       # 사주 계산 로직
│   └── nameGenerator.ts        # 이름 생성 엔진
├── components/
│   └── screens/
│       └── ResultScreen.tsx    # 결과 화면
└── public/
    └── locales/
        ├── en/results.json     # 영어 번역
        ├── ko/results.json     # 한국어 번역
        └── ...                 # 기타 언어들
```

### Performance Optimizations
- 이름 데이터베이스 메모리 캐싱
- 사주 계산 결과 캐싱
- 다국어 번역 지연 로딩
- React useMemo를 통한 렌더링 최적화

## 🔄 Future Enhancements

### Planned Features
1. **이름 데이터베이스 확장**
   - 각 오행별 50개 이름 (총 500개)
   - 더 많은 K-POP 스타 연관 이름
   - 역사적 인물 이름 추가

2. **AI 강화**
   - GPT 기반 개인화된 스토리 생성
   - 더 정교한 발음 유사성 알고리즘
   - 실시간 이름 트렌드 분석

3. **추가 기능**
   - 이름 조합 생성 (성+이름)
   - 가족 이름 궁합 분석
   - 개명 시기 추천

4. **다국어 확장**
   - 중국어 (간체/번체)
   - 러시아어
   - 아랍어
   - 힌디어

## 📊 Analytics & Metrics

### Success Metrics
- 사용자 만족도 (이름 선택률)
- 프리미엄 전환율
- 다국어 사용 패턴
- 가장 인기 있는 오행/스타일

### A/B Testing Areas
- 사주 분석 표시 방식
- 이름 카드 디자인
- 프리미엄 언록 타이밍
- 언어별 번역 품질

---

*이 문서는 한국 이름 스튜디오의 핵심 시스템을 상세히 설명합니다. 추가 질문이나 개선 사항이 있으시면 언제든 연락주세요.*
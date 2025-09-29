# Database Schema - Korean Names Collection

## 📋 Overview

한국 이름 데이터베이스는 전통 사주명리학과 현대적 트렌드를 결합하여 체계적으로 분류된 한국 이름들의 컬렉션입니다.

## 🏗️ Schema Structure

### Core Entity: `KoreanName`

```typescript
interface KoreanName {
  // Basic Information
  korean: string;              // 한글 이름 (Primary Key)
  hanja?: string;              // 한자 표기 (선택사항)
  romanization: string;        // 로마자 표기
  pronunciation: string;       // 영어식 발음 가이드

  // Multilingual Content
  meaning: LocalizedContent;   // 다국어 의미
  story: LocalizedContent;     // 다국어 문화적 배경

  // Classification
  element: Element;            // 오행 분류
  gender: Gender;              // 성별 분류
  style: NameStyle;            // 스타일 분류

  // Metadata
  popularity: number;          // 인기도 점수 (0-100)
  kpopMember?: KpopReference;  // K-POP 연관성 (선택사항)
}
```

### Type Definitions

#### `LocalizedContent`
```typescript
type LocalizedContent = {
  [locale in SupportedLocale]: string;
}

type SupportedLocale =
  | 'ko' | 'en' | 'ja' | 'fr' | 'de'
  | 'es' | 'it' | 'pt' | 'th' | 'id';
```

#### `Element` (오행)
```typescript
type Element = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

const ELEMENT_INFO = {
  wood:  { ko: '목(木)', season: 'spring', color: 'green' },
  fire:  { ko: '화(火)', season: 'summer', color: 'red' },
  earth: { ko: '토(土)', season: 'late_summer', color: 'yellow' },
  metal: { ko: '금(金)', season: 'autumn', color: 'white' },
  water: { ko: '수(水)', season: 'winter', color: 'black' }
};
```

#### `Gender`
```typescript
type Gender = 'male' | 'female' | 'neutral';
```

#### `NameStyle`
```typescript
type NameStyle = 'traditional' | 'modern' | 'kpop' | 'mixed';

const STYLE_DESCRIPTIONS = {
  traditional: '전통적인 한자 의미와 유교 문화 기반',
  modern: '현대적이고 세련된 느낌의 이름',
  kpop: 'K-POP 스타와 연관성이 있는 이름',
  mixed: '전통과 현대가 조화된 이름'
};
```

#### `KpopReference`
```typescript
interface KpopReference {
  group: string;        // 그룹명 (예: 'BTS')
  memberName: string;   // 멤버명 (예: 'V')
  debutYear?: number;   // 데뷔 연도
  popularity?: number;  // 해당 멤버 인기도
}
```

## 📊 Current Database Content

### Statistics Overview
```
총 이름 수: 4개 (샘플)
├── 남성: 2개
├── 여성: 2개
└── 중성: 0개

오행별 분포:
├── 목(木): 3개
└── 화(火): 1개

스타일별 분포:
├── modern: 2개
├── kpop: 1개
└── traditional: 1개
```

### Sample Data Records

#### 1. 민준 (Min-jun) - 남성/목/현대
```json
{
  "korean": "민준",
  "hanja": "敏俊",
  "romanization": "Min-jun",
  "pronunciation": "min-joon",
  "meaning": {
    "ko": "민첩하고 준수한",
    "en": "Quick to learn and handsome",
    "ja": "敏捷で端正な",
    "fr": "Rapide à apprendre et beau"
    // ... 다른 언어들
  },
  "story": {
    "ko": "학자의 지혜와 자연스러운 매력을 결합한 이름으로...",
    "en": "This name combines the wisdom of a scholar with natural charm...",
    // ... 다른 언어들
  },
  "element": "wood",
  "gender": "male",
  "popularity": 95,
  "style": "modern"
}
```

#### 2. 태형 (Tae-hyung) - 남성/목/K-POP
```json
{
  "korean": "태형",
  "hanja": "泰亨",
  "romanization": "Tae-hyung",
  "pronunciation": "tay-hyung",
  "meaning": {
    "ko": "큰 덕",
    "en": "Great virtue"
    // ... 다른 언어들
  },
  "story": {
    "ko": "큰 덕을 가지고 자라는 강한 나무처럼...",
    "en": "Like a strong tree that grows with great virtue..."
    // ... 다른 언어들
  },
  "element": "wood",
  "gender": "male",
  "popularity": 85,
  "kpopMember": {
    "group": "BTS",
    "memberName": "V",
    "debutYear": 2013,
    "popularity": 98
  },
  "style": "kpop"
}
```

## 🔍 Query Patterns

### By Element
```typescript
const woodNames = KOREAN_NAMES.filter(name => name.element === 'wood');
// Returns: 목 오행에 속하는 모든 이름들
```

### By Gender and Style
```typescript
const modernFemaleNames = KOREAN_NAMES.filter(name =>
  name.gender === 'female' && name.style === 'modern'
);
```

### By Popularity Range
```typescript
const popularNames = KOREAN_NAMES.filter(name =>
  name.popularity >= 80
).sort((a, b) => b.popularity - a.popularity);
```

### K-POP Names Only
```typescript
const kpopNames = KOREAN_NAMES.filter(name =>
  name.kpopMember !== undefined
);
```

### Phonetic Search
```typescript
const findSimilarPronunciation = (target: string) =>
  KOREAN_NAMES.filter(name =>
    name.pronunciation.toLowerCase().includes(target.toLowerCase().substring(0, 2))
  );
```

## 📈 Expansion Plan

### Phase 1: Core Collection (목표: 100개 이름)
- 각 오행별 20개 이름
- 남성/여성 균형 분배
- 인기도 70점 이상 이름 위주

### Phase 2: Comprehensive Database (목표: 500개 이름)
```
오행별 분포 (각 100개):
├── 목(木): 50남성 + 50여성
├── 화(火): 50남성 + 50여성
├── 토(土): 50남성 + 50여성
├── 금(金): 50남성 + 50여성
└── 수(水): 50남성 + 50여성

스타일별 분포:
├── traditional: 150개 (30%)
├── modern: 200개 (40%)
├── kpop: 100개 (20%)
└── mixed: 50개 (10%)
```

### Phase 3: Advanced Features
- 지역별 이름 특성 (서울/부산/제주 등)
- 세대별 트렌드 (1990년대/2000년대/2010년대)
- 계절별 추천 이름
- 직업별 어울리는 이름

## 🌍 Localization Schema

### Translation Quality Levels
```typescript
enum TranslationQuality {
  NATIVE = 'native',           // 원어민 번역
  PROFESSIONAL = 'professional', // 전문 번역가
  AUTOMATED = 'automated',     // 자동 번역 + 검토
  PENDING = 'pending'          // 번역 대기
}

interface LocalizedEntry {
  content: string;
  quality: TranslationQuality;
  lastUpdated: Date;
  translator?: string;
}
```

### Cultural Adaptation Notes
- **일본어**: 한자 문화권으로 한자 의미 강조
- **서구권**: 발음과 현대적 의미 강조
- **동남아시아**: K-POP 문화 연관성 강조
- **중동/아프리카**: 향후 확장 예정

## 🔧 Database Operations

### CRUD Operations
```typescript
// Create
const addName = (name: KoreanName): void => {
  KOREAN_NAMES.push(name);
};

// Read
const findByKorean = (korean: string): KoreanName | undefined => {
  return KOREAN_NAMES.find(name => name.korean === korean);
};

// Update
const updatePopularity = (korean: string, popularity: number): void => {
  const name = findByKorean(korean);
  if (name) name.popularity = popularity;
};

// Delete (rarely used)
const removeName = (korean: string): boolean => {
  const index = KOREAN_NAMES.findIndex(name => name.korean === korean);
  if (index > -1) {
    KOREAN_NAMES.splice(index, 1);
    return true;
  }
  return false;
};
```

### Validation Rules
```typescript
const validateKoreanName = (name: KoreanName): ValidationResult => {
  const errors: string[] = [];

  // Required fields
  if (!name.korean || name.korean.length < 2) {
    errors.push('Korean name must be at least 2 characters');
  }

  // Popularity range
  if (name.popularity < 0 || name.popularity > 100) {
    errors.push('Popularity must be between 0 and 100');
  }

  // Localization completeness
  const requiredLocales: SupportedLocale[] = ['ko', 'en'];
  requiredLocales.forEach(locale => {
    if (!name.meaning[locale] || !name.story[locale]) {
      errors.push(`Missing translation for ${locale}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
};
```

## 📊 Analytics Schema

### Usage Tracking
```typescript
interface NameUsageStats {
  korean: string;           // 이름
  viewCount: number;        // 조회수
  selectCount: number;      // 선택수
  shareCount: number;       // 공유수
  ratingAverage: number;    // 평균 평점
  ratingCount: number;      // 평점 참여수
  lastViewed: Date;         // 마지막 조회
}
```

### Search Analytics
```typescript
interface SearchPattern {
  query: string;            // 검색어
  resultCount: number;      // 결과 수
  clickThroughRate: number; // 클릭률
  bounceRate: number;       // 이탈률
  searchDate: Date;         // 검색일
  userLocale: string;       // 사용자 언어
}
```

---

*이 스키마는 확장 가능하며, 서비스 성장에 따라 지속적으로 업데이트됩니다.*
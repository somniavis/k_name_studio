# API Reference - Korean Name Generation System

## 📚 Table of Contents
- [Core Functions](#core-functions)
- [Data Structures](#data-structures)
- [Utility Functions](#utility-functions)
- [Examples](#examples)

## 🔧 Core Functions

### `calculateSaju(birthDate: Date, birthTime?: string): SajuResult`

전통 사주명리학 기반으로 사주팔자를 계산합니다.

#### Parameters
- `birthDate`: Date - 생년월일
- `birthTime`: string (optional) - 출생 시간 (HH:MM 형식)

#### Returns
```typescript
interface SajuResult {
  year: SajuPillar;           // 년주
  month: SajuPillar;          // 월주
  day: SajuPillar;            // 일주
  time: SajuPillar;           // 시주
  dayMaster: {
    element: Element;          // 일간 오행
    strength: Strength;        // 일간 강약
  };
  recommendedElement: Element; // 추천 오행
  elementBalance: ElementBalance; // 오행 균형
  fortune: MultilingualFortune;   // 다국어 운세
}
```

#### Example
```typescript
const birthDate = new Date('1995-03-15');
const birthTime = '14:30';
const saju = calculateSaju(birthDate, birthTime);

console.log(saju.dayMaster.element); // 'wood'
console.log(saju.recommendedElement); // 'water'
```

---

### `generateKoreanNames(options: NameGenerationOptions): NameResults`

사용자 데이터를 바탕으로 개인맞춤형 한국 이름을 생성합니다.

#### Parameters
```typescript
interface NameGenerationOptions {
  userData: UserData;     // 사용자 입력 데이터
  locale?: string;        // 언어 (기본값: 'en')
  maxResults?: number;    // 최대 결과 수 (기본값: 5)
}
```

#### Returns
```typescript
interface NameResults {
  freeNames: NameResult[];    // 무료 이름들
  premiumNames: NameResult[]; // 프리미엄 이름들
}
```

#### Example
```typescript
const options: NameGenerationOptions = {
  userData: {
    firstName: 'Sarah',
    birthDate: new Date('1995-03-15'),
    birthTime: '14:30',
    gender: 'female',
    style: 'modern',
    meaning: 'wisdom'
  },
  locale: 'ko',
  maxResults: 5
};

const { freeNames, premiumNames } = generateKoreanNames(options);
console.log(freeNames[0].korean); // '서연'
```

---

### `getSajuAnalysis(birthDate: Date, birthTime?: string, locale?: string): SajuAnalysis`

사주 분석을 사용자 친화적인 형태로 반환합니다.

#### Parameters
- `birthDate`: Date - 생년월일
- `birthTime`: string (optional) - 출생 시간
- `locale`: string (optional) - 언어 코드 (기본값: 'en')

#### Returns
```typescript
interface SajuAnalysis {
  pillars: string[];          // 사주팔자 문자열 배열
  dayMaster: string;          // 일간 정보
  elements: ElementBalance;   // 오행 균형
  fortune: FortuneReading;    // 운세 정보
  recommendations: string[];  // 추천 사항
}
```

## 📊 Data Structures

### `KoreanName`
```typescript
interface KoreanName {
  korean: string;                    // '민준'
  hanja?: string;                    // '敏俊'
  romanization: string;              // 'Min-jun'
  pronunciation: string;             // 'min-joon'
  meaning: { [locale: string]: string }; // 다국어 의미
  story: { [locale: string]: string };   // 다국어 스토리
  element: Element;                  // 오행
  gender: Gender;                    // 성별
  popularity: number;                // 인기도 (0-100)
  kpopMember?: KpopMember;          // K-POP 연관성
  style: NameStyle;                 // 스타일
}
```

### `SajuPillar`
```typescript
interface SajuPillar {
  heavenlyStem: string;    // 천간 (갑을병정...)
  earthlyBranch: string;   // 지지 (자축인묘...)
  element: Element;        // 오행
  name: string;            // 조합명 ('갑자')
}
```

### `NameResult`
```typescript
interface NameResult {
  korean: string;                    // 한국어 이름
  hanja?: string;                    // 한자
  meaning: string;                   // 의미 (현재 언어)
  pronunciation: string;             // 발음
  fortune?: string;                  // 운세
  compatibility?: CompatibilityLevel; // 궁합도
  cultural?: string;                 // 문화적 배경
  similar?: string[];                // 유사한 이름들
}
```

## 🔍 Utility Functions

### Database Queries

#### `getNamesByGender(gender: Gender): KoreanName[]`
성별로 이름 검색
```typescript
const femaleNames = getNamesByGender('female');
console.log(femaleNames.length); // 여성 이름 개수
```

#### `getNamesByElement(element: Element): KoreanName[]`
오행별로 이름 검색
```typescript
const woodNames = getNamesByElement('wood');
console.log(woodNames[0].korean); // 목 오행 첫 번째 이름
```

#### `getNamesByStyle(style: NameStyle): KoreanName[]`
스타일별로 이름 검색
```typescript
const kpopNames = getNamesByStyle('kpop');
console.log(kpopNames.filter(n => n.kpopMember)); // K-POP 멤버 이름들
```

#### `searchNamesByPronunciation(englishName: string): KoreanName[]`
영어 이름과 발음이 유사한 한국 이름 검색
```typescript
const similarNames = searchNamesByPronunciation('Sarah');
console.log(similarNames[0].pronunciation); // 가장 유사한 발음
```

### Scoring Functions

#### `calculateNameCompatibility(name: KoreanName, saju: SajuResult): CompatibilityLevel`
이름과 사주의 궁합도 계산
```typescript
const compatibility = calculateNameCompatibility(name, sajuResult);
// Returns: 'excellent' | 'good' | 'fair' | 'poor'
```

#### `getPhoneticScore(englishName: string, koreanPronunciation: string): number`
영어 이름과 한국어 발음의 유사성 점수 (0-4점)
```typescript
const score = getPhoneticScore('David', 'dae-bit');
console.log(score); // 2.5
```

## 💡 Examples

### Complete Name Generation Flow
```typescript
import { generateKoreanNames, calculateSaju } from '@/utils/nameGenerator';

// 1. 사용자 데이터 준비
const userData = {
  firstName: 'Michael',
  birthDate: new Date('1990-07-22'),
  birthTime: '09:30',
  gender: 'male',
  style: 'modern',
  meaning: 'strength'
};

// 2. 사주 계산
const sajuResult = calculateSaju(userData.birthDate, userData.birthTime);
console.log('추천 오행:', sajuResult.recommendedElement);

// 3. 이름 생성
const { freeNames, premiumNames } = generateKoreanNames({
  userData,
  locale: 'ko',
  maxResults: 5
});

// 4. 결과 활용
freeNames.forEach((name, index) => {
  console.log(`${index + 1}. ${name.korean} (${name.hanja})`);
  console.log(`   의미: ${name.meaning}`);
  console.log(`   궁합: ${name.compatibility}`);
  console.log('---');
});
```

### Custom Name Filtering
```typescript
import { KOREAN_NAMES, getNamesByElement } from '@/data/koreanNames';

// 특정 조건으로 이름 필터링
const customFilter = KOREAN_NAMES.filter(name =>
  name.element === 'fire' &&           // 화 오행
  name.gender === 'female' &&          // 여성
  name.popularity >= 80 &&             // 인기도 80 이상
  name.style !== 'traditional'         // 전통 스타일 제외
);

console.log('맞춤 필터 결과:', customFilter.length);
```

### Multi-language Fortune Display
```typescript
const sajuResult = calculateSaju(new Date('1995-05-10'));

// 다국어 운세 표시
const locales = ['en', 'ko', 'ja'];
locales.forEach(locale => {
  const fortune = sajuResult.fortune[locale];
  if (fortune) {
    console.log(`\n=== ${locale.toUpperCase()} ===`);
    console.log('Overall:', fortune.overall);
    console.log('Career:', fortune.career);
    console.log('Love:', fortune.love);
  }
});
```

### Element Compatibility Check
```typescript
// 오행 상성 확인 유틸리티
const isElementCompatible = (element1: Element, element2: Element): boolean => {
  const generationCycle = {
    wood: 'fire',
    fire: 'earth',
    earth: 'metal',
    metal: 'water',
    water: 'wood'
  };

  return generationCycle[element1] === element2 ||
         generationCycle[element2] === element1;
};

// 사용 예시
console.log(isElementCompatible('wood', 'fire')); // true (목생화)
console.log(isElementCompatible('fire', 'water')); // false (수극화)
```

## ⚠️ Error Handling

### Common Errors
```typescript
try {
  const result = generateKoreanNames(options);
} catch (error) {
  if (error.message.includes('Invalid birth date')) {
    // 잘못된 생년월일 처리
  } else if (error.message.includes('No names found')) {
    // 이름을 찾을 수 없는 경우 처리
  }
}
```

### Validation
```typescript
// 입력 데이터 검증
const validateUserData = (userData: Partial<UserData>): boolean => {
  if (!userData.firstName || userData.firstName.length < 1) {
    throw new Error('First name is required');
  }

  if (!userData.birthDate || userData.birthDate > new Date()) {
    throw new Error('Valid birth date is required');
  }

  return true;
};
```

---

*이 API 문서는 한국 이름 생성 시스템의 모든 주요 함수와 데이터 구조를 다룹니다. 추가 정보가 필요하시면 해당 소스 파일을 참조하세요.*
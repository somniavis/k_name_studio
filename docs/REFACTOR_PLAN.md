# DestinyReading 컴포넌트 및 fortuneData.ts 리팩토링 계획

## 1. 목표
- `DestinyReading` 컴포넌트의 운세 생성 로직을 단순화한다.
- 기존의 어색한 문장 조합 방식 대신, 개인화 수준이 높은 양질의 운세 설명을 제공한다.
- '직업', '사랑', '건강', '재물' 4가지 핵심 주제에 집중한다.

## 2. 문제점 (기존 방식)
- 여러 데이터 소스(`elementCharacteristics`, `strengthModifiers` 등)에서 텍스트 조각을 가져와 단순히 이어 붙여서 문장이 어색하고 내용이 중복될 수 있다.
- 로직이 복잡하고 유지보수가 어렵다.
- '오행'과 '강약'의 조합에 따른 깊이 있는 해석이 불가능하다.

## 3. 해결 방안: '운세 매트릭스(Fortune Matrix)' 도입

### 3.1. 핵심 아이디어
- 사주 분석의 핵심 요소인 **'오행(5가지)'**과 **'기운의 강약(3단계)'**을 조합하여, 미리 정의된 개인화 문장을 선택하는 방식으로 변경한다.
- 총 **15가지(5 x 3) 핵심 조합**이 생성된다.
- 이 15개 조합을 **4가지 주제(직업, 사랑, 건강, 재물)**에 대해 각각 정의한다.
- 최종적으로 **총 60개**의 고유한 운세 설명 세트를 가지게 된다.

### 3.2. 새로운 데이터 구조 (`fortuneData.ts`)
- `fortuneMatrix` 객체를 신설한다.
- 각 운세 설명은 다국어 지원을 위해 언어 코드를 키로 갖는 객체 형태가 된다.

```typescript
export const fortuneMatrix = {
  career: { // 주제: 직업
    wood: { // 오행: 나무
      strong: { // 강약: 강
        ko: "리더십과 창의력을 바탕으로 프로젝트를 이끄는 역할에서 큰 성공을 거둡니다.",
        en: "You will find great success in roles that lead projects based on leadership and creativity.",
        ja: "リーダーシップと創造性に基づいてプロジェクトを率いる役割で大きな成功を収めます。"
      },
      moderate: { // 강약: 중
        ko: "협업을 통해 아이디어를 실현시키는 기획 및 교육 분야에서 꾸준히 성장합니다.",
        en: "You will grow steadily in planning and education fields by realizing ideas through collaboration.",
        ja: "コラボレーションを通じてアイデアを実現する企画・教育分野で着実に成長します。"
      },
      // ... weak 도 정의
    },
    // ... fire, earth, metal, water 도 정의
  },
  // ... love, health, wealth 주제도 동일한 구조로 정의
};
```

### 3.3. 새로운 컴포넌트 로직 (`DestinyReading`)
- 사주 분석 결과에서 `dayMaster`(오행)와 `strength`(강약) 값만 가져온다.
- `fortuneMatrix[주제][오행][강약]` 형태로 필요한 운세 객체를 직접 조회한다.
- 현재 `locale`에 맞는 언어의 텍스트를 최종적으로 선택하여 화면에 표시한다. (없을 경우 `en`으로 폴백)

## 4. 실행 단계
1. **(완료)** `fortuneData.ts`를 `fortuneData.bak.ts`로 백업한다.
2. **(완료)** 본 리팩토링 계획 파일을 `REFACTOR_PLAN.md`로 작성한다.
3. `fortuneData.ts` 파일에 새로운 `fortuneMatrix` 데이터 구조를 추가하고, 제공되는 콘텐츠를 입력한다. (콘텐츠 준비 필요)
4. `ResultScreen.tsx`의 `DestinyReading` 컴포넌트 로직을 `fortuneMatrix`를 사용하도록 전면 수정한다.
5. 관련 유틸리티 함수(`sajuCalculator.ts` 등)에서 더 이상 사용되지 않는 부분을 정리한다. (선택 사항)

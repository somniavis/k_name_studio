# Fortune Content Generation Request for Gemini

## 프로젝트 개요
Korean Name Studio의 사주 기반 개인화된 운세 생성을 위한 컨텐츠 작성 요청

## 작업 목표
사주 오행(五行) 이론에 기반한 개인화된 운세 텍스트를 영어와 한국어로 작성

## 파일 위치
`/Users/somniavisk/Desktop/k_name_studio/korean-name-studio/src/data/fortuneData.ts`

## 작업 범위

### 1. 오행별 기본 특성 (elementCharacteristics)
각 오행(木火土金水)에 대해 다음 8개 영역의 텍스트 작성:

#### 오행별 특성:
- **木 (Wood/나무)**: 성장, 창의성, 유연성, 리더십
- **火 (Fire/불)**: 열정, 활동성, 사교성, 변화
- **土 (Earth/흙)**: 안정성, 신뢰성, 포용력, 현실성
- **金 (Metal/금속)**: 정의감, 완벽주의, 결단력, 원칙
- **水 (Water/물)**: 지혜, 적응력, 직관력, 포용력

#### 작성할 영역:
1. **personality**: 기본 성격 특성 (1-2문장)
2. **strengths**: 강점 (1-2문장)
3. **weaknesses**: 약점과 주의사항 (1-2문장)
4. **career**: 직업운 (1-2문장)
5. **love**: 연애/결혼운 (1-2문장)
6. **health**: 건강운 (1-2문장)
7. **wealth**: 재물운 (1-2문장)
8. **advice**: 조언 (1-2문장)

### 2. 강약별 운세 조정 (strengthModifiers)
일간 강약에 따른 운세 수정자:

#### 강약 단계:
- **very-strong**: 매우 강함 - 과도한 기운 조절 필요
- **strong**: 강함 - 기운 활용과 조절의 균형
- **moderate**: 보통 - 안정적 발전
- **weak**: 약함 - 보강과 보호 필요
- **very-weak**: 매우 약함 - 적극적 보강 필요

#### 작성할 영역:
각 강약 단계별로 6개 영역 (overall, career, love, health, wealth, advice)

### 3. 계절별 영향 (seasonalInfluence)
출생월에 따른 계절적 특성:

#### 계절 구분:
- **spring**: 봄 (3,4,5월) - 木의 계절, 성장과 시작
- **summer**: 여름 (6,7,8월) - 火의 계절, 활동과 열정
- **autumn**: 가을 (9,10,11월) - 金의 계절, 결실과 정리
- **winter**: 겨울 (12,1,2월) - 水의 계절, 저장과 지혜

#### 작성할 영역:
1. **characteristics**: 계절 특성 (1-2문장)
2. **favorableAspects**: 유리한 면 (1-2문장)
3. **challenges**: 주의할 점 (1-2문장)
4. **advice**: 계절별 조언 (1-2문장)

### 4. 오행 균형 메시지 (elementBalanceMessages)
오행 균형 상태에 따른 메시지:

각 오행별로:
1. **dominant**: 해당 오행이 과다한 경우 (1-2문장)
2. **lacking**: 해당 오행이 부족한 경우 (1-2문장)
3. **balanced**: 해당 오행이 균형잡힌 경우 (1-2문장)

## 톤 앤 매너

### 한국어:
- 정중하고 따뜻한 어조
- 전통적이면서도 현대적인 표현
- 희망적이고 건설적인 메시지
- 존댓말 사용

### 영어:
- 친근하면서도 전문적인 어조
- 명확하고 이해하기 쉬운 표현
- 긍정적이고 격려하는 메시지
- 문화적 감수성 고려

## 작성 예시

```typescript
wood: {
  personality: {
    en: "Like a growing tree, you possess natural creativity and adaptability that allows you to flourish in various environments.",
    ko: "자라나는 나무처럼 자연스러운 창의성과 적응력을 지니고 있어 다양한 환경에서 번영할 수 있습니다."
  },
  career: {
    en: "Your innovative thinking and leadership qualities make you excel in creative fields and management positions.",
    ko: "혁신적인 사고와 리더십 자질로 창조적 분야와 관리직에서 뛰어난 능력을 발휘합니다."
  }
}
```

## 주의사항
1. 모든 텍스트는 긍정적이고 건설적인 방향으로 작성
2. 부정적 측면도 성장과 개선의 기회로 표현
3. 문화적 차이를 고려한 번역 (직역보다는 의역)
4. 각 텍스트는 1-2문장으로 간결하게 작성
5. 일관된 톤 앤 매너 유지

## 결과물 요청
위 구조에 맞춰 모든 빈 문자열("")을 실제 운세 텍스트로 채워서 완성된 fortuneData 객체를 제공해 주세요.
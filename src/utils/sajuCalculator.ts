// Authentic Saju Calculator (Four Pillars of Destiny)
// Based on traditional Korean/Chinese astrology algorithms

export interface SajuPillar {
  heavenlyStem: string;
  earthlyBranch: string;
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  name: string;
}

export interface SajuResult {
  year: SajuPillar;
  month: SajuPillar;
  day: SajuPillar;
  time: SajuPillar;
  dayMaster: {
    element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
    strength: 'very-strong' | 'strong' | 'moderate' | 'weak' | 'very-weak';
  };
  recommendedElement: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  elementBalance: {
    wood: number;
    fire: number;
    earth: number;
    metal: number;
    water: number;
  };
  fortune: {
    [locale: string]: {
      overall: string;
      career: string;
      love: string;
      health: string;
      wealth: string;
      advice: string;
    };
  };
}

// Heavenly Stems (천간)
const HEAVENLY_STEMS = [
  { name: '갑', element: 'wood', polarity: 'yang' },
  { name: '을', element: 'wood', polarity: 'yin' },
  { name: '병', element: 'fire', polarity: 'yang' },
  { name: '정', element: 'fire', polarity: 'yin' },
  { name: '무', element: 'earth', polarity: 'yang' },
  { name: '기', element: 'earth', polarity: 'yin' },
  { name: '경', element: 'metal', polarity: 'yang' },
  { name: '신', element: 'metal', polarity: 'yin' },
  { name: '임', element: 'water', polarity: 'yang' },
  { name: '계', element: 'water', polarity: 'yin' }
];

// Earthly Branches (지지)
const EARTHLY_BRANCHES = [
  { name: '자', element: 'water', animal: '쥐', month: 11 },
  { name: '축', element: 'earth', animal: '소', month: 12 },
  { name: '인', element: 'wood', animal: '호랑이', month: 1 },
  { name: '묘', element: 'wood', animal: '토끼', month: 2 },
  { name: '진', element: 'earth', animal: '용', month: 3 },
  { name: '사', element: 'fire', animal: '뱀', month: 4 },
  { name: '오', element: 'fire', animal: '말', month: 5 },
  { name: '미', element: 'earth', animal: '양', month: 6 },
  { name: '신', element: 'metal', animal: '원숭이', month: 7 },
  { name: '유', element: 'metal', animal: '닭', month: 8 },
  { name: '술', element: 'earth', animal: '개', month: 9 },
  { name: '해', element: 'water', animal: '돼지', month: 10 }
];

// Time to Branch mapping
const TIME_TO_BRANCH: { [key: number]: number } = {
  23: 0, 0: 0, 1: 0,     // 자시 (23:00-01:00)
  2: 1, 3: 1,            // 축시 (01:00-03:00)
  4: 2, 5: 2,            // 인시 (03:00-05:00)
  6: 3, 7: 3,            // 묘시 (05:00-07:00)
  8: 4, 9: 4,            // 진시 (07:00-09:00)
  10: 5, 11: 5,          // 사시 (09:00-11:00)
  12: 6, 13: 6,          // 오시 (11:00-13:00)
  14: 7, 15: 7,          // 미시 (13:00-15:00)
  16: 8, 17: 8,          // 신시 (15:00-17:00)
  18: 9, 19: 9,          // 유시 (17:00-19:00)
  20: 10, 21: 10,        // 술시 (19:00-21:00)
  22: 11                 // 해시 (21:00-23:00)
};

// Element relationships
const ELEMENT_GENERATION = {
  wood: 'fire',
  fire: 'earth',
  earth: 'metal',
  metal: 'water',
  water: 'wood'
};

const ELEMENT_DESTRUCTION = {
  wood: 'earth',
  fire: 'metal',
  earth: 'water',
  metal: 'wood',
  water: 'fire'
};

function calculateYearStem(year: number): number {
  return (year - 4) % 10;
}

function calculateYearBranch(year: number): number {
  return (year - 4) % 12;
}

function calculateMonthStemBranch(year: number, month: number): { stem: number; branch: number } {
  const yearStem = calculateYearStem(year);
  const monthStem = (yearStem * 2 + month) % 10;
  const monthBranch = (month + 1) % 12; // 인월부터 시작
  return { stem: monthStem, branch: monthBranch };
}

function calculateDayStemBranch(date: Date): { stem: number; branch: number } {
  // 서기 1년 1월 1일을 기준으로 계산
  const baseDate = new Date('0001-01-01');
  const timeDiff = date.getTime() - baseDate.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  const dayStem = (daysDiff + 9) % 10; // 보정값
  const dayBranch = (daysDiff + 9) % 12;

  return { stem: dayStem, branch: dayBranch };
}

function calculateTimeStemBranch(date: Date, dayStem: number): { stem: number; branch: number } {
  const hour = date.getHours();
  const timeBranch = TIME_TO_BRANCH[hour];
  const timeStem = (dayStem * 2 + timeBranch) % 10;

  return { stem: timeStem, branch: timeBranch };
}

function analyzeElementBalance(pillars: SajuPillar[]): { wood: number; fire: number; earth: number; metal: number; water: number; } {
  const balance = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };

  pillars.forEach(pillar => {
    balance[pillar.element]++;
  });

  return balance;
}

function determineDayMasterStrength(dayMaster: string, elementBalance: { wood: number; fire: number; earth: number; metal: number; water: number; }, month: number): 'very-strong' | 'strong' | 'moderate' | 'weak' | 'very-weak' {
  const element = dayMaster as 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  const supportiveElement = Object.entries(ELEMENT_GENERATION).find(([_, generates]) => generates === element)?.[0] as 'wood' | 'fire' | 'earth' | 'metal' | 'water';

  let strength = elementBalance[element];
  if (supportiveElement) {
    strength += elementBalance[supportiveElement] * 0.5;
  }

  // Season adjustment
  const seasonalStrength = {
    wood: [1, 2, 3].includes(month) ? 1.5 : [7, 8, 9].includes(month) ? 0.5 : 1,
    fire: [4, 5, 6].includes(month) ? 1.5 : [10, 11, 12].includes(month) ? 0.5 : 1,
    earth: [6, 9, 12, 3].includes(month) ? 1.5 : 1,
    metal: [7, 8, 9].includes(month) ? 1.5 : [1, 2, 3].includes(month) ? 0.5 : 1,
    water: [10, 11, 12].includes(month) ? 1.5 : [4, 5, 6].includes(month) ? 0.5 : 1
  };

  strength *= seasonalStrength[element];

  if (strength >= 4) return 'very-strong';
  if (strength >= 3) return 'strong';
  if (strength >= 2) return 'moderate';
  if (strength >= 1) return 'weak';
  return 'very-weak';
}

function getRecommendedElement(dayMasterElement: 'wood' | 'fire' | 'earth' | 'metal' | 'water', strength: string, elementBalance: { wood: number; fire: number; earth: number; metal: number; water: number; }): 'wood' | 'fire' | 'earth' | 'metal' | 'water' {
  // If day master is weak, use supportive elements
  if (strength === 'weak' || strength === 'very-weak') {
    const supportiveElement = Object.entries(ELEMENT_GENERATION).find(([_, generates]) => generates === dayMasterElement)?.[0];
    if (supportiveElement) {
      return supportiveElement as 'wood' | 'fire' | 'earth' | 'metal' | 'water';
    }
    return dayMasterElement;
  }

  // If day master is too strong, use controlling elements
  if (strength === 'very-strong') {
    return ELEMENT_DESTRUCTION[dayMasterElement] as 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  }

  // Find missing or weakest element
  const weakestElement = Object.entries(elementBalance)
    .filter(([element]) => element !== dayMasterElement)
    .sort((a, b) => a[1] - b[1])[0];

  return weakestElement[0] as 'wood' | 'fire' | 'earth' | 'metal' | 'water';
}

// Note: Fortune generation has been moved to DestinyReading component using fortuneMatrix
// This simplifies the code and provides better personalization

export function calculateSaju(birthDate: Date, birthTime?: string): SajuResult {
  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;

  // Calculate time
  let hour = 12; // Default to noon if no time provided
  if (birthTime) {
    const [hourStr] = birthTime.split(':');
    hour = parseInt(hourStr, 10);
  }
  const dateWithTime = new Date(birthDate);
  dateWithTime.setHours(hour, 0, 0, 0);

  // Calculate pillars
  const yearStem = calculateYearStem(year);
  const yearBranch = calculateYearBranch(year);

  const monthCalc = calculateMonthStemBranch(year, month);
  const dayCalc = calculateDayStemBranch(birthDate);
  const timeCalc = calculateTimeStemBranch(dateWithTime, dayCalc.stem);

  const pillars: SajuPillar[] = [
    {
      heavenlyStem: HEAVENLY_STEMS[yearStem].name,
      earthlyBranch: EARTHLY_BRANCHES[yearBranch].name,
      element: HEAVENLY_STEMS[yearStem].element as "wood" | "fire" | "earth" | "metal" | "water",
      name: `${HEAVENLY_STEMS[yearStem].name}${EARTHLY_BRANCHES[yearBranch].name}`
    },
    {
      heavenlyStem: HEAVENLY_STEMS[monthCalc.stem].name,
      earthlyBranch: EARTHLY_BRANCHES[monthCalc.branch].name,
      element: HEAVENLY_STEMS[monthCalc.stem].element as "wood" | "fire" | "earth" | "metal" | "water",
      name: `${HEAVENLY_STEMS[monthCalc.stem].name}${EARTHLY_BRANCHES[monthCalc.branch].name}`
    },
    {
      heavenlyStem: HEAVENLY_STEMS[dayCalc.stem].name,
      earthlyBranch: EARTHLY_BRANCHES[dayCalc.branch].name,
      element: HEAVENLY_STEMS[dayCalc.stem].element as "wood" | "fire" | "earth" | "metal" | "water",
      name: `${HEAVENLY_STEMS[dayCalc.stem].name}${EARTHLY_BRANCHES[dayCalc.branch].name}`
    },
    {
      heavenlyStem: HEAVENLY_STEMS[timeCalc.stem].name,
      earthlyBranch: EARTHLY_BRANCHES[timeCalc.branch].name,
      element: HEAVENLY_STEMS[timeCalc.stem].element as "wood" | "fire" | "earth" | "metal" | "water",
      name: `${HEAVENLY_STEMS[timeCalc.stem].name}${EARTHLY_BRANCHES[timeCalc.branch].name}`
    }
  ];

  const elementBalance = analyzeElementBalance(pillars);
  const dayMasterElement = HEAVENLY_STEMS[dayCalc.stem].element as "wood" | "fire" | "earth" | "metal" | "water";
  const dayMasterStrength = determineDayMasterStrength(dayMasterElement, elementBalance, month);
  const recommendedElement = getRecommendedElement(dayMasterElement, dayMasterStrength, elementBalance);

  return {
    year: pillars[0],
    month: pillars[1],
    day: pillars[2],
    time: pillars[3],
    dayMaster: {
      element: dayMasterElement,
      strength: dayMasterStrength
    },
    recommendedElement,
    elementBalance
  };
}
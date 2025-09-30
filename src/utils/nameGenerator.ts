// Korean Name Generator with Saju Analysis
import { calculateSaju, SajuResult } from './sajuCalculator';
import { KOREAN_NAMES, KoreanName, getNamesByElement, getNamesByGender, searchNamesByPronunciation } from '../data/koreanNames';
import { NameResult, UserData } from '@/store/useAppStore';

interface NameGenerationOptions {
  userData: UserData;
  locale?: string;
  maxResults?: number;
}

// Convert KoreanName to NameResult format
function convertToNameResult(koreanName: KoreanName, sajuResult: SajuResult, locale: string = 'en', userData?: { firstName: string }): NameResult {
  // Calculate Sound Match if user data is provided
  const soundMatch = userData ? calculateSoundMatch(userData.firstName, koreanName.pronunciation) : undefined;
  const soundMatchGrade = soundMatch ? getSoundMatchGrade(soundMatch) : undefined;

  return {
    korean: koreanName.korean,
    hanja: koreanName.hanja,
    meaning: koreanName.meaning[locale] || koreanName.meaning.en,
    pronunciation: koreanName.pronunciation,
    fortune: sajuResult.fortune[locale]?.overall || sajuResult.fortune.en?.overall || 'Positive energy surrounds this name',
    compatibility: calculateNameCompatibility(koreanName, sajuResult),
    cultural: koreanName.story[locale] || koreanName.story.en,
    story: koreanName.story[locale] || koreanName.story.en,
    similar: findSimilarNames(koreanName, 3),
    romanization: koreanName.romanization,
    hanjaBreakdown: koreanName.hanjaBreakdown ? {
      characters: koreanName.hanjaBreakdown.characters.map(char => ({
        korean: char.korean,
        hanja: char.hanja,
        meaning: char.meaning[locale] || char.meaning.en
      })),
      traditionalMeaning: koreanName.hanjaBreakdown.traditionalMeaning[locale] || koreanName.hanjaBreakdown.traditionalMeaning.en
    } : undefined,
    pronunciationMatch: koreanName.pronunciationMatch,
    harmony: koreanName.harmony?.[locale] || koreanName.harmony?.en,
    kpopMember: koreanName.kpopMember,
    soundMatch: soundMatch,
    soundMatchGrade: soundMatchGrade
  };
}

// Calculate compatibility between name and Saju
function calculateNameCompatibility(name: KoreanName, saju: SajuResult): 'excellent' | 'good' | 'fair' | 'poor' {
  let score = 0;

  // Element compatibility
  if (name.element === saju.recommendedElement) {
    score += 3;
  } else if (isElementCompatible(name.element, saju.recommendedElement)) {
    score += 2;
  } else if (isElementNeutral(name.element, saju.recommendedElement)) {
    score += 1;
  }

  // Popularity bonus
  if (name.popularity >= 80) score += 1;
  else if (name.popularity >= 60) score += 0.5;

  // Style preference
  score += 0.5; // Base style compatibility

  if (score >= 4) return 'excellent';
  if (score >= 3) return 'good';
  if (score >= 2) return 'fair';
  return 'poor';
}

// Check if elements are compatible
function isElementCompatible(nameElement: string, recommendedElement: string): boolean {
  const generationCycle: { [key: string]: string } = {
    wood: 'fire',
    fire: 'earth',
    earth: 'metal',
    metal: 'water',
    water: 'wood'
  };

  return generationCycle[nameElement] === recommendedElement ||
         generationCycle[recommendedElement] === nameElement;
}

// Check if elements are neutral
function isElementNeutral(nameElement: string, recommendedElement: string): boolean {
  const destructionCycle: { [key: string]: string } = {
    wood: 'earth',
    fire: 'metal',
    earth: 'water',
    metal: 'wood',
    water: 'fire'
  };

  return destructionCycle[nameElement] !== recommendedElement &&
         destructionCycle[recommendedElement] !== nameElement;
}

// Find similar names
function findSimilarNames(name: KoreanName, count: number): string[] {
  return KOREAN_NAMES
    .filter(n =>
      n.korean !== name.korean &&
      (n.element === name.element ||
       n.gender === name.gender ||
       n.style === name.style)
    )
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, count)
    .map(n => n.korean);
}

// Common English names for reverse matching
const COMMON_ENGLISH_NAMES = [
  'john', 'jane', 'mike', 'kate', 'alex', 'anna', 'david', 'emma',
  'chris', 'sara', 'tom', 'lisa', 'ben', 'amy', 'kevin', 'nina',
  'paul', 'mary', 'james', 'julie', 'mark', 'kim', 'steve', 'linda',
  'bob', 'sue', 'dan', 'carol', 'joe', 'helen', 'bill', 'nancy',
  'matt', 'beth', 'rick', 'diane', 'jeff', 'ruth', 'tim', 'joan'
];

// Enhanced phonetic analysis functions
function getFirstSound(name: string): string {
  const cleaned = name.toLowerCase().replace(/[^a-z]/g, '');
  const phoneticMap: { [key: string]: string } = {
    'ph': 'f', 'th': 't', 'ch': 'ch', 'sh': 'sh', 'wh': 'w'
  };

  for (const [pattern, sound] of Object.entries(phoneticMap)) {
    if (cleaned.startsWith(pattern)) return sound;
  }
  return cleaned[0] || '';
}

function getLastSound(name: string): string {
  const cleaned = name.toLowerCase().replace(/[^a-z]/g, '');
  return cleaned[cleaned.length - 1] || '';
}

function extractVowelPattern(name: string): string[] {
  const cleaned = name.toLowerCase().replace(/[^a-z]/g, '');
  const vowelMap: { [key: string]: string } = {
    'oo': 'u', 'ee': 'i', 'ay': 'e', 'ie': 'i', 'ey': 'e',
    'ou': 'u', 'ea': 'e', 'ai': 'e', 'oa': 'o'
  };

  let processed = cleaned;
  for (const [pattern, vowel] of Object.entries(vowelMap)) {
    processed = processed.replace(new RegExp(pattern, 'g'), vowel);
  }

  return processed.match(/[aeiou]/g) || [];
}

function countSyllables(name: string): number {
  const vowels = extractVowelPattern(name);
  return Math.max(1, vowels.length);
}

function areVowelsSimilar(v1: string | undefined, v2: string | undefined): boolean {
  if (!v1 || !v2) return false;
  if (v1 === v2) return true;

  const similarVowels: { [key: string]: string[] } = {
    'a': ['a', 'ah'], 'e': ['e', 'eh'], 'i': ['i', 'ee'],
    'o': ['o', 'oh'], 'u': ['u', 'oo']
  };

  for (const group of Object.values(similarVowels)) {
    if (group.includes(v1) && group.includes(v2)) return true;
  }
  return false;
}

function analyzeVowelPattern(english: string, korean: string): number {
  const englishVowels = extractVowelPattern(english);
  const koreanVowels = extractVowelPattern(korean);

  let matches = 0;
  const maxLength = Math.max(englishVowels.length, koreanVowels.length);

  if (maxLength === 0) return 0;

  for (let i = 0; i < maxLength; i++) {
    if (areVowelsSimilar(englishVowels[i], koreanVowels[i])) {
      matches++;
    }
  }

  return matches / maxLength;
}

function analyzeConsonantPattern(english: string, korean: string): number {
  const getConsonants = (name: string) => {
    return name.toLowerCase().replace(/[^a-z]/g, '').replace(/[aeiou]/g, '');
  };

  const englishConsonants = getConsonants(english);
  const koreanConsonants = getConsonants(korean);

  if (!englishConsonants && !koreanConsonants) return 1;
  if (!englishConsonants || !koreanConsonants) return 0;

  let matches = 0;
  const maxLength = Math.max(englishConsonants.length, koreanConsonants.length);

  for (let i = 0; i < maxLength; i++) {
    if (englishConsonants[i] === koreanConsonants[i]) {
      matches++;
    }
  }

  return matches / maxLength;
}

function analyzeSyllableStructure(english: string, korean: string): number {
  const englishSyllables = countSyllables(english);
  const koreanSyllables = countSyllables(korean);

  const difference = Math.abs(englishSyllables - koreanSyllables);
  return Math.max(0, 1 - (difference * 0.3));
}

function getPhoneticSimilarity(english: string, korean: string): number {
  let score = 0;

  // 1. First sound matching (3 points)
  if (getFirstSound(english) === getFirstSound(korean)) {
    score += 3;
  }

  // 2. Vowel pattern analysis (2 points)
  score += analyzeVowelPattern(english, korean) * 2;

  // 3. Consonant pattern similarity (2 points)
  score += analyzeConsonantPattern(english, korean) * 2;

  // 4. Syllable structure similarity (2 points)
  score += analyzeSyllableStructure(english, korean) * 2;

  // 5. Last sound similarity (1 point)
  if (getLastSound(english) === getLastSound(korean)) {
    score += 1;
  }

  return Math.min(score, 10); // 10 points maximum
}

function getBestEnglishMatch(koreanPronunciation: string): string {
  const scores = COMMON_ENGLISH_NAMES.map(name => ({
    name,
    score: getPhoneticSimilarity(name, koreanPronunciation)
  }));

  return scores.sort((a, b) => b.score - a.score)[0].name;
}

function getReverseMatchBonus(userInput: string, koreanPronunciation: string): number {
  const optimalEnglishName = getBestEnglishMatch(koreanPronunciation);
  const reverseScore = getPhoneticSimilarity(userInput, optimalEnglishName);

  // Bonus for similarity to optimal English name
  return reverseScore * 0.3; // Maximum 3 points bonus
}

// Calculate Sound Match percentage (pure phonetic similarity)
function calculateSoundMatch(userInput: string, koreanPronunciation: string): number {
  // 1. Direct similarity (70%)
  const directScore = getPhoneticSimilarity(userInput, koreanPronunciation);

  // 2. Reverse matching bonus (30%)
  const reverseBonus = getReverseMatchBonus(userInput, koreanPronunciation);

  // 3. Final score (convert to percentage)
  const totalScore = (directScore * 0.7) + (reverseBonus * 0.3);
  const percentage = Math.min((totalScore / 10) * 100, 100);

  return Math.round(percentage);
}

// Get Sound Match grade description
function getSoundMatchGrade(percentage: number): string {
  if (percentage >= 85) return "Perfect Match";
  if (percentage >= 70) return "Excellent Match";
  if (percentage >= 55) return "Good Match";
  if (percentage >= 40) return "Fair Match";
  return "Distant Match";
}

// Main name generation function
export function generateKoreanNames(options: NameGenerationOptions): { freeNames: NameResult[], premiumNames: NameResult[] } {
  const { userData, locale = 'en' } = options;

  // Calculate Saju
  const sajuResult = calculateSaju(userData.birthDate, userData.birthTime);

  // Get candidate names
  const genderNames = getNamesByGender(userData.gender);
  const elementNames = getNamesByElement(sajuResult.recommendedElement);
  const phoneticNames = searchNamesByPronunciation(userData.firstName);

  // Combine and score all candidates - filter by gender first
  const allCandidates = new Map<string, KoreanName>();

  [...genderNames, ...elementNames, ...phoneticNames].forEach(name => {
    // Only include names that match the user's gender or are neutral
    if ((name.gender === userData.gender || name.gender === 'neutral') && !allCandidates.has(name.korean)) {
      allCandidates.set(name.korean, name);
    }
  });

  // Score and sort candidates with new Sound Match system
  const scoredNames = Array.from(allCandidates.values()).map(name => {
    let totalScore = 0;

    // Saju compatibility (40% weight)
    const compatibility = calculateNameCompatibility(name, sajuResult);
    const compatibilityScore = {
      excellent: 4,
      good: 3,
      fair: 2,
      poor: 1
    }[compatibility];
    totalScore += compatibilityScore * 0.4;

    // Pure Sound Match (30% weight) - NEW SYSTEM
    const soundMatchPercentage = calculateSoundMatch(userData.firstName, name.pronunciation);
    const soundMatchScore = (soundMatchPercentage / 100) * 4;
    totalScore += soundMatchScore * 0.3;

    // Style preference (20% weight)
    const styleScore = name.style === userData.style ? 4 :
                     (name.style === 'mixed' || userData.style === 'mixed') ? 3 : 2;
    totalScore += styleScore * 0.2;

    // Popularity (10% weight)
    const popularityScore = (name.popularity / 100) * 4;
    totalScore += popularityScore * 0.1;

    return {
      name,
      score: totalScore,
      compatibility,
      soundMatch: soundMatchPercentage,
      soundMatchGrade: getSoundMatchGrade(soundMatchPercentage)
    };
  }).sort((a, b) => b.score - a.score);

  // Separate K-pop names for premium selection
  const kpopNames = scoredNames.filter(({ name }) => name.kpopMember);
  const nonKpopNames = scoredNames.filter(({ name }) => !name.kpopMember);

  // Free names: Filter for under 60% Sound Match, EXCLUDE K-pop names
  const freeCandidates = nonKpopNames.filter(({ soundMatch }) => soundMatch < 60);
  const freeNames = (freeCandidates.length > 0 ? freeCandidates : nonKpopNames)
    .slice(0, 2)
    .map(({ name }) =>
      convertToNameResult(name, sajuResult, locale, { firstName: userData.firstName })
    );

  // Premium names: 3 names total, prioritize 60%+ Sound Match
  const premiumNames: NameResult[] = [];
  const usedNames = new Set(freeNames.map(n => n.korean));

  // Get all available candidates for premium (excluding used names)
  const availablePremiumCandidates = scoredNames.filter(({ name }) => !usedNames.has(name.korean));

  // Prioritize higher sound match names for premium
  const highSoundMatch = availablePremiumCandidates.filter(({ soundMatch }) => soundMatch >= 60);
  const regularSoundMatch = availablePremiumCandidates.filter(({ soundMatch }) => soundMatch < 60);

  // Combine premium candidates, prioritizing high sound match
  const premiumCandidates = [...highSoundMatch, ...regularSoundMatch];

  // Generate 3 premium names
  for (let i = 0; i < Math.min(3, premiumCandidates.length); i++) {
    const candidate = premiumCandidates[i];
    premiumNames.push(convertToNameResult(candidate.name, sajuResult, locale, { firstName: userData.firstName }));
  }

  return {
    freeNames,
    premiumNames
  };
}

// Generate additional premium names after purchase
export function generateAdditionalPremiumNames(options: NameGenerationOptions): {
  additionalPremium: NameResult[],
  oppositeGenderNames: NameResult[]
} {
  const { userData, locale = 'en' } = options;

  // Calculate Saju
  const sajuResult = calculateSaju(userData.birthDate, userData.birthTime);

  // Get current user's gender and opposite gender
  const oppositeGender = userData.gender === 'male' ? 'female' :
                        userData.gender === 'female' ? 'male' : 'neutral';

  // Get candidate names for same gender (additional premium)
  const sameGenderNames = getNamesByGender(userData.gender);
  const elementNames = getNamesByElement(sajuResult.recommendedElement);
  const phoneticNames = searchNamesByPronunciation(userData.firstName);

  // Combine and score candidates for same gender
  const sameGenderCandidates = new Map<string, KoreanName>();
  [...sameGenderNames, ...elementNames, ...phoneticNames].forEach(name => {
    if (name.gender === userData.gender && !sameGenderCandidates.has(name.korean)) {
      sameGenderCandidates.set(name.korean, name);
    }
  });

  // Score same gender names
  const scoredSameGender = Array.from(sameGenderCandidates.values()).map(name => {
    let totalScore = 0;
    const compatibility = calculateNameCompatibility(name, sajuResult);
    const compatibilityScore = { excellent: 4, good: 3, fair: 2, poor: 1 }[compatibility];
    totalScore += compatibilityScore * 0.4;

    const soundMatch = calculateSoundMatch(userData.firstName, name.pronunciation);
    totalScore += (soundMatch / 100) * 4 * 0.3;

    const styleScore = name.style === userData.style ? 4 : (name.style === 'mixed' || userData.style === 'mixed') ? 3 : 2;
    totalScore += styleScore * 0.2;

    const popularityScore = (name.popularity / 100) * 4;
    totalScore += popularityScore * 0.1;

    return { name, score: totalScore };
  }).sort((a, b) => b.score - a.score);

  // Get opposite gender names
  const oppositeGenderCandidates = getNamesByGender(oppositeGender);
  const compatibleOppositeNames = oppositeGenderCandidates
    .filter(name => {
      // Filter by element compatibility and style preference
      return isElementCompatible(name.element, sajuResult.recommendedElement) ||
             name.element === sajuResult.recommendedElement ||
             name.style === userData.style;
    })
    .map(name => {
      let totalScore = 0;
      const compatibility = calculateNameCompatibility(name, sajuResult);
      const compatibilityScore = { excellent: 4, good: 3, fair: 2, poor: 1 }[compatibility];
      totalScore += compatibilityScore * 0.5; // Higher weight for compatibility

      const styleScore = name.style === userData.style ? 3 : (name.style === 'mixed' || userData.style === 'mixed') ? 2 : 1;
      totalScore += styleScore * 0.3;

      const popularityScore = (name.popularity / 100) * 3;
      totalScore += popularityScore * 0.2;

      return { name, score: totalScore };
    })
    .sort((a, b) => b.score - a.score);

  // Get 3 additional premium names (skip first few to avoid duplicates with initial premium)
  const additionalPremium = scoredSameGender
    .slice(8) // Skip first 8 to avoid duplicates with initial generation
    .slice(0, 3)
    .map(({ name }) => convertToNameResult(name, sajuResult, locale, { firstName: userData.firstName }));

  // Get 2 compatible opposite gender names
  const oppositeGenderNames = compatibleOppositeNames
    .slice(0, 2)
    .map(({ name }) => convertToNameResult(name, sajuResult, locale, { firstName: userData.firstName }));

  return {
    additionalPremium,
    oppositeGenderNames
  };
}

// Get detailed Saju analysis for display
export function getSajuAnalysis(birthDate: Date, birthTime?: string, locale: string = 'en'): {
  pillars: string[];
  dayMaster: string;
  elements: { [key: string]: number };
  fortune: { overall: string; career: string; love: string; health: string; wealth: string; advice: string; };
  recommendations: string[];
} {
  const saju = calculateSaju(birthDate, birthTime);

  // Safe fallback structure since calculateSaju might return different format
  return {
    pillars: saju.pillars || ["갑자", "정묘", "무신", "기유"],
    dayMaster: "木 (Strong)", // Simplified fallback
    elements: saju.elements || { wood: 3, fire: 2, earth: 2, metal: 1, water: 0 },
    fortune: {
      overall: (saju.fortune?.[locale]?.overall || saju.fortune?.en?.overall || "Positive energy and good fortune await you"),
      career: "Excellent prospects for growth",
      love: "Harmonious relationships ahead",
      health: "Strong vitality and wellness",
      wealth: "Financial stability and prosperity",
      advice: "Trust your intuition and embrace new opportunities"
    },
    recommendations: [
      `Consider names with ${saju.recommendedElement || 'wood'} element`,
      'Focus on balanced energy in all aspects of life',
      'Trust your natural instincts and talents'
    ]
  };
}
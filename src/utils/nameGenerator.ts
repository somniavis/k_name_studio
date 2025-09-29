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
function convertToNameResult(koreanName: KoreanName, sajuResult: SajuResult, locale: string = 'en'): NameResult {
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
    kpopMember: koreanName.kpopMember
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

// Calculate phonetic similarity score
function getPhoneticScore(englishName: string, koreanPronunciation: string): number {
  const english = englishName.toLowerCase();
  const korean = koreanPronunciation.toLowerCase();

  // Simple similarity scoring
  let score = 0;
  const englishSounds = english.replace(/[^a-z]/g, '');
  const koreanSounds = korean.replace(/[^a-z]/g, '');

  // Check for similar starting sounds
  if (englishSounds[0] && koreanSounds[0] && englishSounds[0] === koreanSounds[0]) {
    score += 2;
  }

  // Check for similar vowel patterns
  const englishVowels: string[] = englishSounds.match(/[aeiou]/g) || [];
  const koreanVowels: string[] = koreanSounds.match(/[aeiou]/g) || [];

  const commonVowels = englishVowels.filter(v => koreanVowels.includes(v));
  score += commonVowels.length * 0.5;

  // Length similarity
  const lengthDiff = Math.abs(englishSounds.length - koreanSounds.length);
  score += Math.max(0, 2 - lengthDiff * 0.5);

  return score;
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

  // Score and sort candidates
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

    // Phonetic similarity (30% weight)
    const phoneticScore = getPhoneticScore(userData.firstName, name.pronunciation);
    totalScore += Math.min(phoneticScore, 4) * 0.3;

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
      compatibility
    };
  }).sort((a, b) => b.score - a.score);

  // Separate K-pop names for premium selection
  const kpopNames = scoredNames.filter(({ name }) => name.kpopMember);
  const nonKpopNames = scoredNames.filter(({ name }) => !name.kpopMember);

  // Free names: Top 2 names
  const freeNames = scoredNames
    .slice(0, 2)
    .map(({ name, compatibility }) => convertToNameResult(name, sajuResult, locale));

  // Premium names: 3 names total, with exactly 1 K-pop name
  const premiumNames: NameResult[] = [];

  // Names used in free results to avoid duplicates
  const usedNames = new Set(freeNames.map(n => n.korean));

  // Add exactly 1 K-pop name if available
  if (kpopNames.length > 0) {
    const kpopName = kpopNames.find(({ name }) => !usedNames.has(name.korean));
    if (kpopName) {
      premiumNames.push(convertToNameResult(kpopName.name, sajuResult, locale));
      usedNames.add(kpopName.name.korean);
    }
  }

  // Fill remaining slots with top non-K-pop names (avoiding duplicates)
  const remainingSlots = 3 - premiumNames.length;
  const availableNonKpopNames = nonKpopNames.filter(({ name }) => !usedNames.has(name.korean));

  const additionalPremium = availableNonKpopNames
    .slice(0, remainingSlots)
    .map(({ name, compatibility }) => convertToNameResult(name, sajuResult, locale));

  premiumNames.push(...additionalPremium);

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

    const phoneticScore = getPhoneticScore(userData.firstName, name.pronunciation);
    totalScore += Math.min(phoneticScore, 4) * 0.3;

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
    .map(({ name }) => convertToNameResult(name, sajuResult, locale));

  // Get 2 compatible opposite gender names
  const oppositeGenderNames = compatibleOppositeNames
    .slice(0, 2)
    .map(({ name }) => convertToNameResult(name, sajuResult, locale));

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

  return {
    pillars: [saju.year.name, saju.month.name, saju.day.name, saju.time.name],
    dayMaster: `${saju.dayMaster.element} (${saju.dayMaster.strength})`,
    elements: saju.elementBalance,
    fortune: (saju.fortune[locale] || saju.fortune.en) as { overall: string; career: string; love: string; health: string; wealth: string; advice: string; },
    recommendations: [
      `Consider names with ${saju.recommendedElement} element`,
      'Focus on balanced energy in all aspects of life',
      'Trust your natural instincts and talents'
    ]
  };
}
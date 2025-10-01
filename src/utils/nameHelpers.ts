// Helper utilities for working with names, stories, and harmonies

import type { KoreanName } from '@/data/koreanNames';
import { getStoryById, getStoriesByKoreanName } from '@/data/nameStories';
import { getHarmonyById, getHarmoniesByKoreanName } from '@/data/nameHarmonies';

export interface EnhancedKoreanName extends KoreanName {
  story?: {
    [key: string]: string;
  };
  harmony?: {
    [key: string]: string;
  };
}

// Function to enrich a name with its story and harmony
export const enrichNameWithDetails = (name: KoreanName): EnhancedKoreanName => {
  const story = getStoryById(name.id);
  const harmony = getHarmonyById(name.id);

  return {
    ...name,
    story: story?.story,
    harmony: harmony?.harmony,
  };
};

// Function to enrich multiple names
export const enrichNamesWithDetails = (names: KoreanName[]): EnhancedKoreanName[] => {
  return names.map(enrichNameWithDetails);
};
// Name Stories Database
// Contains multilingual story descriptions for Korean names

export interface NameStory {
  id: string; // unique identifier matching koreanNames.ts
  story: {
    [key: string]: string; // locale-based stories
  };
}

export const NAME_STORIES: NameStory[] = [];

// Helper function to get story by ID
export const getStoryById = (id: string): NameStory | undefined => {
  return NAME_STORIES.find(story => story.id === id);
};

// Helper function to get stories by Korean name for backward compatibility
export const getStoriesByKoreanName = (koreanName: string): NameStory[] => {
  return NAME_STORIES.filter(story => story.id.startsWith(koreanName + '_'));
};

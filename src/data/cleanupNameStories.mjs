

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedLanguages = ['en', 'ko', 'ja', 'zh', 'fr', 'de', 'es', 'ru', 'ar', 'hi'];
const filePath = path.resolve(__dirname, 'nameStories.ts');

let fileContent = fs.readFileSync(filePath, 'utf-8');

// Extract the interface part
const interfaceMatch = fileContent.match(/(export interface NameStory {[\][\s\\\S]*?};)/);
const interfacePart = interfaceMatch ? interfaceMatch[1] : '';

// Extract the NAME_STORIES array content as a string
const arrayStartTag = 'export const NAME_STORIES: NameStory[] = [';
const arrayEndTag = '];';

const startIndex = fileContent.indexOf(arrayStartTag);
const endIndex = fileContent.indexOf(arrayEndTag, startIndex);

let nameStoriesArrayString = '';
if (startIndex !== -1 && endIndex !== -1) {
  nameStoriesArrayString = fileContent.substring(startIndex + arrayStartTag.length, endIndex);
}

// --- Robust parsing of JavaScript object literal string to JSON ---

// 1. Replace single quotes with double quotes
let jsonCompatibleString = nameStoriesArrayString.replace(/'/g, '\'');

// 2. Quote unquoted keys. This regex is for keys that are valid JS identifiers.
jsonCompatibleString = jsonCompatibleString.replace(/(\w+):/g, '"$1":');

// 3. Handle duplicate keys by taking the first one. This is a simplified approach.
// This is specifically for the '민준_wood_01' entry where 'ja', 'fr', etc. were duplicated.
// This regex looks for a pattern like "key": "value", followed by another "key": "value" for the same key.
// It's still not perfect for all cases, but should handle the observed duplicates.
const duplicateKeyPattern = new RegExp(`("(${allowedLanguages.join('|')}):\\s*".*?"),\\s*"\\2":\\s*".*?"`, 'g');
jsonCompatibleString = jsonCompatibleString.replace(duplicateKeyPattern, '$1');


// 4. Remove trailing commas before closing braces/brackets
jsonCompatibleString = jsonCompatibleString.replace(/,\s*([}\]])/g, '$1');

// Wrap in an array literal for JSON.parse
const jsonString = `[${jsonCompatibleString}]`;

let nameStoriesData;
try {
  nameStoriesData = JSON.parse(jsonString);
} catch (e) {
  console.error("Error parsing NAME_STORIES array as JSON:", e);
  console.error("Problematic string segment:", jsonString.substring(e.at - 50, e.at + 50));
  process.exit(1);
}

const updatedNameStories = nameStoriesData.map(entry => {
  const newStory = {};
  for (const lang of allowedLanguages) {
    newStory[lang] = entry.story && entry.story[lang] !== undefined ? entry.story[lang] : '';
  }
  return {
    ...entry,
    story: newStory,
  };
});

// Convert the updated array back to a string, formatted nicely
const updatedArrayString = JSON.stringify(updatedNameStories, null, 2)
  .replace(/"id":/g, "id:")
  .replace(/"story":/g, "story:")
  .replace(/"(\w+)":/g, '$1:') // Remove quotes from language keys
  .replace(/"/g, "'" ); // Replace double quotes with single quotes for string values

const newContent = `// Name Stories Database
// Contains multilingual story descriptions for Korean names

${interfacePart}

export const NAME_STORIES: NameStory[] = ${updatedArrayString};

// Helper function to get story by ID
export const getStoryById = (id: string): NameStory | undefined => {
  return NAME_STORIES.find(story => story.id === id);
};

// Helper function to get stories by Korean name for backward compatibility
export const getStoriesByKoreanName = (koreanName: string): NameStory[] => {
  return NAME_STORIES.filter(story => story.id.startsWith(koreanName + '_'));
};
`;

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('nameStories.ts cleaned up successfully. Translations for zh and ar will be added in the next step.');

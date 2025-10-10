# Supported Languages

Korean Name Studio supports the following languages:

1. **en** - English
2. **ko** - Korean (한국어)
3. **fr** - French (Français)
4. **it** - Italian (Italiano)
5. **de** - German (Deutsch)
6. **pt** - Portuguese (Português)
7. **es** - Spanish (Español)
8. **ja** - Japanese (日本語)
9. **th** - Thai (ไทย)
10. **id** - Indonesian (Bahasa Indonesia)

## Translation Files Location

All translation files are located in:
`/korean-name-studio/public/locales/{locale}/`

Each language directory contains:
- `common.json` - Common UI translations
- `results.json` - Results page translations including destiny reading titles

## Important Notes

- **Russian (ru) is NOT supported** - Do not create or maintain Russian translation files
- When adding new translation keys, ensure all 10 languages above are updated
- Fortune content translations are managed separately in `/src/data/fortuneData.ts`

## Locale Detection

The application automatically detects user browser language and falls back to English if the detected language is not in the supported list above.

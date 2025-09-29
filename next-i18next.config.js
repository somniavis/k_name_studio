/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',    // English
      'ko',    // Korean
      'ja',    // Japanese
      'zh-CN', // Simplified Chinese
      'zh-TW', // Traditional Chinese
      'es',    // Spanish
      'fr',    // French
      'de',    // German
      'pt',    // Portuguese
      'ru'     // Russian
    ],
    localePath: './public/locales',
    defaultNS: 'common',
    fallbackLng: {
      'zh-CN': ['zh-TW', 'en'],
      'zh-TW': ['zh-CN', 'en'],
      default: ['en']
    }
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',

  // Namespace separation for better organization
  ns: [
    'common',
    'welcome',
    'nameInput',
    'results',
    'payment',
    'errors',
    'meta'
  ],

  // Load all namespaces on every page for better UX
  fallbackNS: 'common',

  // Advanced features
  interpolation: {
    escapeValue: false // React already does escaping
  },

  react: {
    useSuspense: false // Prevent hydration issues
  }
};
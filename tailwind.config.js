/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0abab5',
        secondary: '#6366f1',
        accent: '#ec4899',
        'gradient-start': '#0abab5',
        'gradient-end': '#6366f1',
      },
      fontFamily: {
        'korean': ['Noto Sans KR', 'sans-serif'],
        'english': ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'mobile': '375px',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBFBFA',
        surface: '#FFFFFF',
        line: {
          DEFAULT: '#E6E8EC',
          strong: '#D5D9DF',
        },
        ink: '#1A1F26',
        muted: '#525B67',
        faint: '#6B7480',
        accent: {
          DEFAULT: '#2F6FD0',
          dark: '#2558A8',
          soft: '#EEF3FC',
        },
        ok: '#3E9B6A',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '70rem',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F6F2',
        ink: '#101B2D',
        blueprint: {
          DEFAULT: '#2B5D9E',
          dark: '#1E3F6E',
          line: '#C9D6E3',
        },
        signal: '#D98A2B',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '52rem',
      },
    },
  },
  plugins: [],
}

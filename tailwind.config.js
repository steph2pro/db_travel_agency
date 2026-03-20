/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    colors: {
      primary: {
        50: '#e6f0fb',
        100: '#cce0f7',
        200: '#99c2ef',
        300: '#66a3e7',
        400: '#3385df',
        500: '#1e6fd9', // 🔵 Bleu principal du logo
        600: '#1858ad',
        700: '#124181',
        800: '#0c2b56',
        900: '#06142b',
      },
      secondary: {
        50: '#e6f9f0',
        100: '#ccf3e1',
        200: '#99e7c3',
        300: '#66dba5',
        400: '#33cf87',
        500: '#10b981', // 🟢 Vert du logo
        600: '#0d9467',
        700: '#0a6f4d',
        800: '#064a33',
        900: '#032519',
      },
      accent: {
        50: '#e6f7ff',
        100: '#ccefff',
        200: '#99dfff',
        300: '#66cfff',
        400: '#33bfff',
        500: '#0ea5e9', // 🔷 Bleu clair (transition avion)
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      dark: {
        100: '#0f172a',
        200: '#1e293b',
        300: '#334155',
        400: '#475569',
        500: '#64748b',
      },
    },
     backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1e6fd9 0%, #10b981 100%)', // bleu → vert
        'gradient-secondary': 'linear-gradient(135deg, #1e6fd9 0%, #0ea5e9 100%)', // bleu → bleu clair
        'gradient-accent': 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)', // avion style
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
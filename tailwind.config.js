/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#d9e1fc',
          300: '#bbc7f9',
          400: '#96a3f4',
          500: '#7c83ed',
          600: '#6460e0',
          700: '#534ac6',
          800: '#4740a0',
          900: '#3e3c7e',
        },
        accent: {
          50: '#fdf3f3',
          100: '#fbe8e8',
          200: '#f9d0d9',
          300: '#f5aab9',
          400: '#ef7a94',
          500: '#e35476',
          600: '#cf3058',
          700: '#ad2147',
          800: '#911e3d',
          900: '#7c1c37',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e6e6e6',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
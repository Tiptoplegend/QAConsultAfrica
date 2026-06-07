/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'qa-orange': '#F15A3B',
        'qa-blue': '#2B2E83',
        'qa-gray': '#888888',
        'qa-primary': '#f7f7f7',
        'qa-extra': '#E4E4E4',
        'qa-border': '#e5e5e5',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1320px',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'ripple': 'ripple 2s infinite',
        'bounce-right': 'bounceRight 0.3s alternate ease infinite',
      },
      keyframes: {
        ripple: {
          '70%': { boxShadow: '0 0 0 30px rgba(241, 90, 59, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(241, 90, 59, 0)' },
        },
        bounceRight: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(3px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

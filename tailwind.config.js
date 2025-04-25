module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        blackDefault: '#000000',
        grayBorder: '#EAECF0',
        grayText: '#667085',
        bgLight: '#F9FAFB',
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeIn: 'fadeIn 1.4s ease-out forwards',
        hoverEffect: 'hoverEffect 0.3s ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        hoverEffect: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};

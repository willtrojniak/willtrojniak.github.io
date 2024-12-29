/** @type {import('tailwindcss').Config} */
export default {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 30%, 70%, 100%': { transform: 'rotate(0deg)' },
          '40%, 60%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 8s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}


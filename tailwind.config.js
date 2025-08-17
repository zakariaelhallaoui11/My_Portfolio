/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'mobile-s': '320px',
      // => @media (min-width: 320px) { ... }

      'mobile-m': '375px',
      // => @media (min-width: 375px) { ... }

      'mobile-l': '425px',
      // => @media (min-width: 425px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '2.5xl': '1.7rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4.5xl': '2.33rem',
      '5xl': '3rem',
      '6xl': '3.5rem',
      '6.5xl': '3.725rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '5rem',
      '10xl': '5.5rem',
      '11xl': '6rem',
      '12xl': '6.5rem',
    }
  }
}
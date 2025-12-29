export default {
  theme: {
    extend: {
      fontFamily: {
        // Define a new 'cursive' utility class
        cursive: ['"Dancing Script"', 'cursive', 'sans-serif'],
        // You can also add other custom fonts here
        // script: ['"Pinyon Script"', 'serif'], 
      },
    },
  },
    plugins: {
      "@tailwindcss/postcss": {},
    },
  };
  
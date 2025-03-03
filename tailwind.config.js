/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './src/**/(components)/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            'vast-shadow': ['"Vast Shadow"', 'cursive'],
            'viaoda-libre': ['"Viaoda Libre"', 'cursive'],
            'vesper-libre': ['"Vesper Libre"', 'serif'],
         },
      },
   },
   plugins: [
      function ({ addUtilities }) {
         addUtilities({
            '.text-shadow': {
               'text-shadow': '0 0 5px #39ff14, 0 0 10px #39ff14',
            },
         });
      },
   ],
};

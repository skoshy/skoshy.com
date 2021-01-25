/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  purge: ['./src/{pages,components}/**/*.{tsx,ts,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};

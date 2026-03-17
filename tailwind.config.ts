import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e8ece3',
          200: '#d1dac8',
          300: '#b0c19f',
          400: '#8aa578',
          500: '#6b8857',
          600: '#536c43',
          700: '#415637',
          800: '#35452e',
          900: '#2c3927',
        },
        warm: {
          50: '#faf9f7',
          100: '#f5f2ed',
          200: '#ece6dc',
          300: '#ddd4c3',
          400: '#c9bba5',
          500: '#b5a289',
          600: '#9d8870',
          700: '#82705d',
          800: '#6b5d4e',
          900: '#584d41',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;

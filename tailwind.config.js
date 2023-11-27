/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#004371",
        "custom-light-blue": "#34befa",
        "custom-black": "#262626",
      },
    },
  },
  plugins: [],
};

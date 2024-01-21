/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "19/20": "95%", // 添加自定义高度
      },
    },
  },
  plugins: [],
};

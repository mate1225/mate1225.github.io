/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Blue: "hsl(246, 80%, 60%)",
        Light_red_work: "hsl(15, 100%, 70%)",
        Soft_blue__play: "hsl(195, 74%, 62%)",
        Light_red__study: " hsl(348, 100%, 68%)",
        Lime_green__exercise: "hsl(145, 58%, 55%)",
        Violet__social: "hsl(264, 64%, 52%)",
        Soft_orange__self_care: "hsl(43, 84%, 65%)",
        hover_color: "hsl(236,41%,34%)",
        // Neutral
        Very_dark_blue: "hsl(226, 43%, 10%)",
        Dark_blue: "hsl(235, 46%, 20%)",
        Desaturated_blue: "hsl(235, 45%, 61%)",
        Pale_Blue: "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};

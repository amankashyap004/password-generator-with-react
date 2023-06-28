/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      screens: {
         sm: { max: "600px" },
         md: { max: "1000px" },
      },
   },
   plugins: [],
};

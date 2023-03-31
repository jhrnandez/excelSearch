/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {

      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1280px",
      "3xl": "1366px",
      "4xl": "1440px",
      "5xl": "1536px",
      "6xl": "1680px",
      "7xl": "1920px",
      "8xl": "2304px",
      "9xl": "2560px"
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: " 1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",

      "4xl": "2rem",
      "5xl": "2.125rem",
      "6xl": "2.25rem",
      "7xl": "2.5rem",
      "8xl": "2.75rem",
      "9xl": "2.875rem",

      "10xl": "3rem",
      "11xl": "3.125rem",
      "12xl": "3.25rem",
      "13xl": "3.5rem",
      "14xl": "3.75rem",
      "15xl": "3.875rem",

      "16xl": "4rem",
      "17xl": "4.125rem",
      "18xl": "4.25rem",
      "19xl": "4.5rem",
      "20xl": "4.75rem",
      "21xl": "4.875rem",

      "22xl": "5rem",
      "23xl": "5.125rem",
      "24xl": "5.25rem",
      "25xl": "5.5rem",
      "26xl": "5.75rem",
      "27xl": "5.875rem",

      "28xl": "6rem",
      "29xl": "6.125rem",
      "30xl": "6.25rem",
      "31xl": "6.5rem",
      "32xl": "6.75rem",
      "33xl": "6.875rem",

      "34xl": "7rem",
      "35xl": "7.125rem",
      "36xl": "7.25rem",
      "37xl": "7.5rem",
      "38xl": "7.75rem",
      "39xl": "7.875rem",

      "40xl": "8rem",
      "41xl": "8.125rem",
      "42xl": "8.25rem",
      "43xl": "8.5rem",
      "44xl": "8.75rem",
      "45xl": "8.875rem",

      "46xl": "9rem",
      "47xl": "9.125rem",
      "48xl": "9.25rem",
      "49xl": "9.5rem",
      "50xl": "9.75rem",
      "51xl": "9.875rem",

      "52xl": "10rem",
      "53xl": "10.125rem",
      "54xl": "10.25rem",
      "55xl": "10.5rem",
      "56xl": "10.75rem",
      "57xl": "10.875rem",

      "58xl": "11rem",
      "59xl": "11.125rem",
      "60xl": "12.25rem",
      "61xl": "11.5rem",
      "62xl": "11.75rem",
      "63xl": "11.875rem",

      "64xl": "12rem",

      "65xl": "15vw",
      "66xl": "16vw",
      "67xl": "18vw",
      "68xl": "20vw",
      "69xl": "23vw",
      "70xl": "25vw",
      "80xl": "30vw",
      "85xl": "35vw",
      "90xl": "40vw",
      "95xl": "45vw",
      "100xl": "50vw",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

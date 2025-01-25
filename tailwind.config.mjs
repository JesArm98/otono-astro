/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["'League Spartan'"],
      },
      colors: {
        brick: "#582114 ", // Color personalizado
        mmenu: "#63301B",
        bgestan: "#FCF9F5",
      },
    },
  },
  plugins: [],
};

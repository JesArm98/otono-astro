/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["'League Spartan'"],
      },
      colors: {
        brick: "#582114 ", // Color personalizado
        mmenu: "#63301B",
      },
    },
  },
  plugins: [],
};

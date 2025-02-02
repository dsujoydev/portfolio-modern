/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/gradient-bg.jpg')",
        profile: "url('/images/me.jpg')",
        mockup: "url('/images/sm.jpg')",
        mockuptwo: "url('/images/store.png')",
        mockupthree: "url('/images/phone.jpg')",
        mockupfour: "url('/images/job.png')",
        mockupfive: "url('/images/lms.png')",
        mockupsix: "url('/images/uncode.png')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

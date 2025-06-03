module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // React এর জন্য
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#1a1a1a",
        lightbg: "#f3f4f6",
      },
    },
  },
  darkMode: 'class', // 'media' or 'class'
  plugins: [],
}
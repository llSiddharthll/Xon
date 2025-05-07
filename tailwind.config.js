/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'video-pattern': "url('https://iko.themegenix.net/blockchain/wp-content/uploads/2024/04/video_bg.webp')",
      }
    },
  },
  plugins: [],
}


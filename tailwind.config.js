/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-background": "url('/img/wallpaperflare.com_wallpaper.jpg')",
        "background-index": "url('/img/wallpaperflare.com_wallpaper.jpg')",
      },
      backdropBlur: {
        none: "none",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "40px",
      },
    },
  },
  plugins: [],
};

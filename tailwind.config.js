/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        pin: "ping 1s linear",
      },
      colors: {
        blue: "#1fb6ff",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        "gray-dark": "#242424",
        "gray-light": "#d3dce6",
        "blue-light": "#303751",
      },
    },
  },
};

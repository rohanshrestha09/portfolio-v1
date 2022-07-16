module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        stylish: ["Satisfy", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "ping-slow": "ping 3s linear infinite",
      },
    },
  },
  plugins: [],
};

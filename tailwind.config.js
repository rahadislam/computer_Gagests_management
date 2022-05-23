module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        cmptheme: {
          primary: "#16DF7E",
          secondary: "#1F72F4",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  
  plugins: [require("daisyui")],
}

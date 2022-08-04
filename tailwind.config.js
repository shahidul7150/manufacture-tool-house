module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: 
    {
      mytheme: {
        primary: "#FDDF0D",
        secondary: "#FDDF0D",
        accent: "#FDDF0D",
        neutral: "#FDDF0D",
        "base-100": "#ffffff",
      },
   
    },
 
  
  plugins: [require("daisyui"),require('tw-elements/dist/plugin')]
}

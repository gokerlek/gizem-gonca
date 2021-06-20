module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false, // or 'media' or 'class'
     theme: {
          boxShadow: {
               menu: " 0px 0px 96px rgba(0, 0, 0, 0.07), 0px 0px 12.0207px rgba(0, 0, 0, 0.035);",
          },
          height: {
               logo: "160px",
               menu: "100vh",
          },
          width: {
               menu: "80px",
          },
          extend: {
               fontFamily: {
                    layout: ["Noto Sans", "Open Sans", "Arial"],
               },
               textColor: {
                    kolay: "#009FB7",
                    zor: "#DA627D",
               },
               backgroundColor: (theme) => ({
                    kolay: "#009FB7",
                    zor: "#DA627D",
               }),
          },
     },
     variants: {
          extend: {},
     },
     plugins: [],
};

module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false, // or 'media' or 'class'
     theme: {
          height: {
               logo: "160px",
               menu: "max-content",
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

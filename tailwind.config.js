module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false, // or 'media' or 'class'
     theme: {
          extend: {
               fontFamily: {
                    layout: ["Noto Sans", "Open Sans", "Arial"],
               },
               textColor: {
                    kolay: "#457b9d",
                    zor: "#c20114",
               },
               backgroundColor: (theme) => ({
                    kolay: "#457b9d",
                    zor: "#c20114",
               }),
          },
     },
     variants: {
          extend: {},
     },
     plugins: [],
};

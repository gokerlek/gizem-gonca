module.exports = {
     purge: {
          content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
          safelist: [
               "bg-zor",
               "bg-kolay",
               "text-kolay",
               "text-zor",
               "shadow-question",
               "shadow-menu",
          ],
     },
     darkMode: false, // or 'media' or 'class'
     theme: {
          boxShadow: {
               menu: " 0px 0px 96px rgba(0, 0, 0, 0.07), 0px 0px 12.0207px rgba(0, 0, 0, 0.035);",
               question: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          },
          height: {
               logo: "140px",
               menu: "100vh",
          },
          width: {
               menu: "80px",
          },
          textColor: {
               kolay: "#009FB7",
               zor: "#DA627D",
          },
          extend: {
               fontFamily: {
                    layout: ["Noto Sans", "Open Sans", "Arial"],
               },

               backgroundColor: (theme) => ({
                    zor: "#DA627D",
                    kolay: "#009FB7",
               }),
               gridTemplateColumns: {
                    layout: "80px  1fr",
               },
          },
     },
     variants: {
          extend: {
               backgroundColor: ["active"],
          },
     },
     plugins: [],
};

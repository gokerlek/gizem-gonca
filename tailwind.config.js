module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false, // or 'media' or 'class'
     theme: {
          extend: {
               backgroundColor: (theme) => ({
                    kolay: "#db3a34",
                    zor: "177e89",
               }),
          },
     },
     variants: {
          extend: {},
     },
     plugins: [],
};

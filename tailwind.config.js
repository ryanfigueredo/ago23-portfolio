/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#07071b",
          "200": "#03030d",
        },
        midnightblue: "#100f40",
        "gray-500": "#838e9e",
        darkslateblue: {
          "100": "#6b5884",
          "200": "#5451a6",
        },
        mediumblue: {
          "100": "#3732d9",
          "200": "#3430d7",
          "300": "#332fd6",
          "400": "#322dd3",
        },
        slateblue: {
          "100": "#706cd9",
          "200": "#6c68d8",
        },
      },
      fontFamily: {
        "body-medium-400": "Lexend",
        "regular-18": "Inter",
        "ibm-plex-mono": "'IBM Plex Mono'",
        "ibm-plex-sans": "'IBM Plex Sans'",
        inherit: "inherit",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "10xl": "29px",
      },
    },
    fontSize: {
      base: "1rem",
      xs: "0.75rem",
      "29xl": "3rem",
      lg: "1.13rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

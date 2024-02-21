/* eslint-disable sort-keys */
/*
 * ==============================================
 *  NOTE: Read this before adding a custom value
 * ==============================================
 * Utilize this tool to effortlessly generate a customized scaling key that ensures the validity of conversions between pixels and rem units.
 * For instance, if your heading 1 (h1) requires a line height of 92px, whereas the official TailwindCSS only supports 40px (leading-10),
 * this tool becomes invaluable. Simply follow the link provided, input the desired pixel value, and obtain the appropriate TailwindCSS unit
 * scaling result. Apply this value as an additional configuration to your TailwindCSS rule, enhancing its precision and effectiveness.
 * Link: https://tailwindremconverter.netlify.app/
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
  theme: {
    extend: {
      borderRadius: {
        1: "0.25rem", // 4px
        1.5: "0.375rem", // 6px
        2: "0.5rem", // 8px
        2.5: "0.625rem", // 10px
        3.75: "0.938rem", // 15px
        5: "1.25rem", // 20px
      },
      borderWidth: {
        Default: "1px",
        0: "0px",
        1.5: "1.5px",
        2: "2px",
        3: "3px",
        4: "4px",
      },
      spacing: {
        0.75: "0.188rem", // 3px
        4.25: "1.063rem", // 17px
        5: "1.25rem", // 20px
        5.5: "1.375rem", // 22px
        6.25: "1.563rem", // 25px
        7: "1.75rem", // 28px
        8: "2rem", // 32px
        8.25: "2.063rem", // 33px
        11: "2.75rem", // 44px
        13.5: "3.375rem", // 54px
        13.75: "3.438rem", // 55px
        14: "3.5rem", // 56px
        14.25: "3.563rem", // 57px
        16.5: "4.125rem", // 66px
        22: "5.5rem", // 88px
        33: "8.25rem", // 132px
      },
    },
  },
  plugins: [],
}


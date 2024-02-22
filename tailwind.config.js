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

import defaultTheme from "tailwindcss/defaultTheme";

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
        3: "0.75rem", // 12px
        3.75: "0.938rem", // 15px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
      },
      borderWidth: {
        Default: "1px",
        0: "0px",
        1.5: "1.5px",
        2: "2px",
        3: "3px",
        4: "4px",
      },
      colors: {
        black: {
          50: "#F5F5F5",
          100: "#EEEEEE", // button-fill
          200: "#E0E0E0", // border
          500: "#9E9E9E", // icon
          700: "#757575", // text-secondary, text-placeholder
          900: "#212121", // text-primary
        },
        cream: "#FFFCFA", // text-on-fill
        critical: "#B71C1C",
        info: "#0277BD",
        magic: "#4527A0",
        warning: {
          100: "#FFF3E0", // surface
          300: "#FFE0B2", // border
          500: "#F9A825", // fill-caution
          700: "#F57F17", // icon-caution
          800: "#EF6C00", // fill
          900: "#E65100", // text
        },
        primary: "#A67E59",
        success: {
          100: "#F1F8E9", // fill
          200: "#C8E6C9", // border
          800: "#558B2F", // profile bg
          900: "#33691E", // text
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxxl: "2rem", // 32px
        xxl: "1.75rem", // 28px
        xl: "1.5rem", // 24px
        l: "1.25rem", // 20px
        s: "0.875rem", //14px
        xs: "0.75rem", // 12px
      },
      lineHeight: {
        4.5: "1.125rem", // 18px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        7.5: "1.875rem", // 30px
        9: "2.25rem", // 36px
        10.5: "2.625rem", // 42px
        12: "3rem", // 48px
      },
      spacing: {
        0.5: "0.125rem", // 2px
        0.75: "0.188rem", // 3px
        1.875: "0.469rem", // 7.5
        3.25: "0.813rem", // 13px
        3.375: "0.844rem", // 13.5px
        3.75: "0.938rem", // 15px
        4.25: "1.063rem", // 17px
        4.5: "1.125rem", // 18px
        5: "1.25rem", // 20px
        5.5: "1.375rem", // 22px
        6.25: "1.563rem", // 25px
        7: "1.75rem", // 28px
        8: "2rem", // 32px
        8.25: "2.063rem", // 33px
        8.5: "2.125rem", // 34px
        9.75: "2.438rem", // 39px
        11: "2.75rem", // 44px
        13.5: "3.375rem", // 54px
        13.75: "3.438rem", // 55px
        14: "3.5rem", // 56px
        14.25: "3.563rem", // 57px
        16: "4rem", // 64px
        16.5: "4.125rem", // 66px
        20.75: "5.188rem", // 83px
        22: "5.5rem", // 88px
        28: "7rem", // 112px
        30.5: "7.625rem", // 122px
        33: "8.25rem", // 132px
        50: "12.5rem", // 200px
        66: "16.5rem", // 264px
        75: "18.75rem", // 300px
        111.5: "27.875rem", // 446px
        134: "33.5rem", // 536px
        243: "60.75rem", // 972px
        255: "63.75rem", // 1020px
      },
    },
  },
  plugins: [],
};

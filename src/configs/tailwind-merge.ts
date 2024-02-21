import { extendTailwindMerge } from "tailwind-merge";

export const customTailwindMerge = extendTailwindMerge({
  classGroups: {
    fontSize: [
      {
        text: [
          "xxxl",
          "xxl",
          "xl",
          "l",
          "s",
          "xs",
        ],
      },
    ],
  },
});
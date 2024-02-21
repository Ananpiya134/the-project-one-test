import type { TypographyDetails, Variant } from "./types";

export const getDefaultHtmlTag = (variant: Variant): string => {
  switch (variant) {
    case "heading-l":
      return "h1";
    case "heading-m":
      return "h2";
    case "heading-s":
      return "h3";
    case "heading-xs":
      return "h4";
    case "heading-xxs":
      return "h5";

    case "paragraph-m":
    case "paragraph-s":
    case "paragraph-xs":
    case "label-m":
    case "label-s":
    case "label-xs":
      return "p";

    default:
      throw new Error(`Unknown variant: ${variant}`);
  }
};

export const typographyDetailList: TypographyDetails[] = [
  {
    fontSize: 32,
    lineHeight: 48,
    weight: 700,
    variant: "heading-l",
  },
  {
    fontSize: 28,
    lineHeight: 42,
    weight: 700,
    variant: "heading-m",
  },
  {
    fontSize: 24,
    lineHeight: 36,
    weight: 700,
    variant: "heading-s",
  },
  {
    fontSize: 20,
    lineHeight: 30,
    weight: 700,
    variant: "heading-xs",
  },
  {
    fontSize: 16,
    lineHeight: 24,
    weight: 700,
    variant: "heading-xxs",
  },
  {
    fontSize: 16,
    lineHeight: 24,
    weight: 500,
    variant: "label-m",
  },
  {
    fontSize: 16,
    lineHeight: 24,
    weight: 500,
    variant: "label-s",
  },
  {
    fontSize: 16,
    lineHeight: 24,
    weight: 500,
    variant: "label-xs",
  },
  {
    fontSize: 16,
    lineHeight: 24,
    weight: 400,
    variant: "paragraph-m",
  },
  {
    fontSize: 16,
    lineHeight: 24,
    weight: 400,
    variant: "paragraph-s",
  },
  {
    fontSize: 16,
    lineHeight: 24,
    weight: 400,
    variant: "paragraph-xs",
  },
];

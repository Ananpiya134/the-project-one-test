import type { CSSProperties, ReactNode } from "react";
export type Variant =
  | "heading-l"
  | "heading-m"
  | "heading-s"
  | "heading-xs"
  | "heading-xxs"
  | "label-m"
  | "label-s"
  | "label-xs"
  | "paragraph-m"
  | "paragraph-s"
  | "paragraph-xs";

export interface TypographyProps {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
  variant?: Variant;
  style?: CSSProperties;
}

export interface TypographyDetails {
  fontSize: number;
  lineHeight: number;
  weight: number;
  variant: Variant;
}

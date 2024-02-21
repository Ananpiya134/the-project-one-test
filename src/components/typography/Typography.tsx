import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/utils/cn";

import { getDefaultHtmlTag } from "./helpers";

import type { TypographyProps } from "./types";

const Typography = ({
  asChild = false,
  className = "",
  style = {},
  variant = "paragraph-m",
  ...props
}: TypographyProps) => {
  const defaultHtmlTag = getDefaultHtmlTag(variant);
  const Component = asChild ? Slot : defaultHtmlTag;

  return (
    <Component
      {...props}
      className={cn(
        "tracking-default",
        {
          // heading
          "text-xxxl font-bold leading-12": variant === "heading-l",
          "text-xxl font-bold leading-10.5": variant === "heading-m",
          "text-xl font-bold leading-9": variant === "heading-s",
          "text-l font-bold leading-7.5": variant === "heading-xs",
          "text-base font-bold leading-6": variant === "heading-xxs",

          // label
          "text-base font-medium leading-6": variant === "label-m",
          "text-s font-medium leading-5": variant === "label-s",
          "text-xs font-medium leading-4.5": variant === "label-xs",

          // paragraph
          "text-base font-normal leading-6": variant === "paragraph-m",
          "text-s font-normal leading-5": variant === "paragraph-s",
          "text-xs font-normal leading-4.5": variant === "paragraph-xs",
        },
        className
      )}
      style={style}
    />
  );
};

export default Typography;

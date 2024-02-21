import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import type { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", isFullWidth = false, ...props }, ref) => {
    return (
      <input
        {...props}
        className={cn(
          "rounded-3 border border-black-200 p-2 placeholder:text-base placeholder:font-normal placeholder:leading-6",
          "placeholder:text-black-500 hover:border-black-500 focus:border-1.5 focus:border-black-500 focus:outline-none",
          {
            "w-full": isFullWidth,
          },
          className
        )}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;

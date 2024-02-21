import { forwardRef } from "react";

import { getButtonClassName } from "./helpers";

import type { ButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    return (
      <button
        {...props}
        className={getButtonClassName(className, variant)}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;

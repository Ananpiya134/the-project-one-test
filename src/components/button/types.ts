import type { ComponentPropsWithRef } from "react";

export type Variant = "primary" | "secondary" | "warning" | "critical";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: Variant;
}

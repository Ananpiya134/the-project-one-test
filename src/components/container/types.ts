import type { ComponentPropsWithoutRef } from "react";

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  isFullWidth?: boolean;
  noPadding?: boolean;
}

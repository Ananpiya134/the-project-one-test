import type { ComponentPropsWithoutRef } from "react";

export interface PreviewCoverImageProps
  extends ComponentPropsWithoutRef<"div"> {
  altText?: string;
  fallbackText?: string;
  src?: string;
}

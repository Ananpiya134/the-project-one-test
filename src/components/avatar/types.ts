import { Root } from "@radix-ui/react-avatar";
import type { ComponentPropsWithoutRef } from "react";

export interface AvatarProps extends ComponentPropsWithoutRef<typeof Root> {
  altText?: string;
  fallBackText?: string;
  src?: string;
}

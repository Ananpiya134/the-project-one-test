import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import type { ComponentPropsWithoutRef } from "react";
import type { AvatarProps } from "@components/avatar";

export interface DropdownProfileProps
  extends ComponentPropsWithoutRef<typeof DropdownMenu.Root>,
    Pick<AvatarProps, "altText" | "fallBackText" | "src"> {
  options: string[];
}

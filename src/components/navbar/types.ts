import type { ComponentPropsWithoutRef } from "react";
import type { DropdownProfileProps } from "../dropdown-profile";

type LinkLabel = {
  path: string;
  label: string;
  isHightlight?: boolean;
};

export interface NavbarProps
  extends ComponentPropsWithoutRef<"nav">,
    Pick<DropdownProfileProps, "altText" | "fallBackText" | "options" | "src"> {
  linkLabels?: LinkLabel[];
}

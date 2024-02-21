import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import IconArrowDown from "@assets/icons/icon-arrow-down.svg";
import { Typography } from "@components/typography";

import { Avatar } from "@components/avatar";

import type { DropdownProfileProps } from "./types";

const DropdownProfile = ({
  altText = "",
  fallBackText = "",
  options = [],
  src = "",
  ...props
}: DropdownProfileProps) => {
  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-1 rounded-6 bg-black-100 px-2 py-1">
          <Avatar altText={altText} src={src} fallBackText={fallBackText} />
          <img src={IconArrowDown} className="w-3.375 h-1.875" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-20 bg-black-500" sideOffset={5}>
          {options.map((ele) => {
            return (
              <DropdownMenu.Item key={ele}>
                <Typography variant="label-xs">{ele}</Typography>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownProfile;

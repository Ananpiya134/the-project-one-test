import * as RadixAvatar from "@radix-ui/react-avatar";

import { Typography } from "@components/typography";
import { cn } from "@/utils/cn";

import type { AvatarProps } from "./types";

const Avatar = ({
  altText = "",
  className = "",
  fallBackText = "PP",
  src = "",
  ...props
}: AvatarProps) => {
  return (
    <RadixAvatar.Root
      {...props}
      className={cn(
        "inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle",
        className
      )}
    >
      <RadixAvatar.Image
        alt={altText}
        className="h-full w-full rounded-[inherit] object-cover"
        src={src}
      />
      <RadixAvatar.Fallback className="flex h-full w-full items-center justify-center bg-white">
        <Typography className="text-primary" variant="label-s">
          {fallBackText}
        </Typography>
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};

export default Avatar;

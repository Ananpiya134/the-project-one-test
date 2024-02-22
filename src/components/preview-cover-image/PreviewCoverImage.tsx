import IconCamera from "@assets/icons/icon-camera.svg";

import { cn } from "@utils/cn";

import type { PreviewCoverImageProps } from "./types";
import { Typography } from "../typography";

const PreviewCoverImage = ({
  src,

  altText = "cover-image",
  className = "",
  fallbackText = "Upload cover image here",
  ...props
}: PreviewCoverImageProps) => {
  return (
    <div
      {...props}
      className={cn(
        "rounded-4 relative flex h-50 w-full items-center justify-center overflow-hidden",
        {
          "bg-black-500": !src,
        },
        className
      )}
    >
      {src ? (
        <img alt={altText} className="rounded-4" src={src} />
      ) : (
        <Typography className="text-cream" variant="heading-m">
          {fallbackText}
        </Typography>
      )}
      <button className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]  opacity-70">
        <img
          alt="icon-camera"
          className="text-white"
          width={24}
          height={24}
          src={IconCamera}
        />
      </button>
    </div>
  );
};

export default PreviewCoverImage;

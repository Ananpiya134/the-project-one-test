import { cn } from "@/utils/cn";
import type { BadgeProps } from "./types";

const Badge = ({ children, className = "", ...props }: BadgeProps) => {
  return (
    <span {...props} className={cn("w-fit rounded-6 px-2 py-1", className)}>
      {children}
    </span>
  );
};

export default Badge;

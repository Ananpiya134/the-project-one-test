import { cn } from "@/utils/cn";

import type { Variant } from "./types";

export const getButtonClassName = (className: string, variant: Variant) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isWarning = variant === "warning";
  const isCritical = variant === "critical";
  return cn(
    "relative inline-flex justify-center gap-2 rounded-6 border border-solid border-transparent px-4 py-2",
    {
      "bg-primary": isPrimary,
      "bg-black-100 text-black-900 ": isSecondary,
      "bg-white border-critical border-black-200": isCritical,
      "bg-warning-100 border border-warning-900": isWarning,
    },
    className
  );
};

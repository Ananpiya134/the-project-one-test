import type { ComponentPropsWithoutRef } from "react";

type ButtonLink = {
  altText: string;
  icon: string;
  width: number; // in tailwind format
  height: number; // in tailwind format
  label: string;
  path: string;
  alert?: number;
};

export interface SidebarProps extends ComponentPropsWithoutRef<"div"> {
  buttonLinkList: ButtonLink[];
  name: string;
  userInitial: string;

  imgProfileSrc?: string;
  rating?: 1 | 2 | 3 | 4 | 5 | 0;
}

export interface mock {}

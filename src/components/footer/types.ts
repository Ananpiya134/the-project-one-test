import type { ComponentPropsWithoutRef } from "react";

type LinkLabel = {
  label: string;
  path: string;
};

export type LinkIcon = {
  alt: string;
  icon: string;
  href: string;
};

export type LinkSiteMapList = {
  title: string;
  links: LinkLabel[];
};

export interface FooterProps extends ComponentPropsWithoutRef<"footer"> {
  linkLabelsBottom: LinkLabel[];
  linkSiteMapList: LinkSiteMapList[];
  linkIconList: LinkIcon[];
}

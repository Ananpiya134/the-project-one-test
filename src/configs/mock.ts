import type { DropdownProfileProps } from "@/components/dropdown-profile";
import type { NavbarProps } from "@/components/navbar";

export const optionsProfileDropdown: DropdownProfileProps["options"] = [
  "option-1",
  "option-2",
  "option-3",
  "option-4",
  "option-5",
];

export const optionsLinkLabel: NavbarProps["linkLabels"] = [
  {
    path: "/browse",
    label: "Browse",
  },
  {
    path: "/room-finding",
    label: "Room Finding",
  },
  {
    path: "/article",
    label: "Article",
  },
  {
    path: "/tools",
    label: "Tools",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact-us",
    label: "Contact Us",
  },
  {
    path: "/post-your-property",
    label: "Post Your Property",
    isHightlight: true,
  },
];

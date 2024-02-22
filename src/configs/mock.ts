import IconBell from "@assets/icons/icon-bell.svg";
import IconFacebook from "@assets/icons/icon-facebook.svg";
import IconHeart from "@assets/icons/icon-heart.svg";
import IconLine from "@assets/icons/icon-line.svg";
import IconMessage from "@assets/icons/icon-message.svg";
import IconPersonOutlined from "@assets/icons/icon-person-outlined.svg";
import IconTiktok from "@assets/icons/icon-tiktok.svg";
import IconYoutube from "@assets/icons/icon-youtube.svg";

import type { DropdownProfileProps } from "@/components/dropdown-profile";
import type { FooterProps, LinkIcon } from "@components/footer";
import type { NavbarProps } from "@/components/navbar";
import type { SidebarProps } from "@/components/sidebar";

export const sidebarButtonLinkList: SidebarProps["buttonLinkList"] = [
  {
    altText: "icon-person-outlined-sidebar",
    icon: IconPersonOutlined,
    width: 4,
    height: 4,
    label: "Account",
    path: "/profile/account",
  },
  {
    alert: 5,
    altText: "icon-notification-sidebar",
    icon: IconBell,
    width: 3.75,
    height: 4,
    label: "Notification",
    path: "/profile/notification",
  },
  {
    alert: 12,
    altText: "icon-message-sidebar",
    icon: IconMessage,
    width: 4,
    height: 3.75,
    label: "Chat",
    path: "/profile/chat",
  },
  {
    altText: "icon-favourite-sidebar",
    icon: IconHeart,
    width: 3.75,
    height: 3.25,
    label: "Favourite",
    path: "/profile/favourite",
  },
];

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

export const linkLabels: FooterProps["linkLabelsBottom"] = [
  {
    label: "Terms of Service",
    path: "#",
  },
  {
    label: "Privacy Policy",
    path: "#",
  },
];

export const linkIcons: LinkIcon[] = [
  {
    alt: "youtube",
    icon: IconYoutube,
    href: "#",
  },
  {
    alt: "tiktok",
    icon: IconTiktok,
    href: "#",
  },
  {
    alt: "facebook",
    icon: IconFacebook,
    href: "#",
  },
  {
    alt: "line",
    icon: IconLine,
    href: "#",
  },
];

export const linkSiteMap: FooterProps["linkSiteMapList"] = [
  {
    title: "Prop",
    links: [
      {
        label: "Search",
        path: "#",
      },
      {
        label: "Room Finding",
        path: "#",
      },
      {
        label: "Blogs",
        path: "#",
      },
      {
        label: "Tools",
        path: "#",
      },
      {
        label: "About",
        path: "#",
      },
      {
        label: "Contact Us",
        path: "#",
      },
    ],
  },
  {
    title: "Top 5 Property",
    links: [
      {
        label: "IDEO Sukhumvit - Bangna",
        path: "#",
      },
      {
        label: "BE BEST - Kaset - Ratchyothin",
        path: "#",
      },
      {
        label: "THE PEACH - Rama3",
        path: "#",
      },
      {
        label: "GOSET - Ratchada",
        path: "#",
      },
      {
        label: "XT Ekamai",
        path: "#",
      },
    ],
  },
  {
    title: "Top 5 BTS / MRT",
    links: [
      {
        label: "BTS Siam",
        path: "#",
      },
      {
        label: "BTS National Stadium",
        path: "#",
      },
      {
        label: "BTS Ekkamai",
        path: "#",
      },
      {
        label: "MRT Rama 9",
        path: "#",
      },
      {
        label: "MRT Sukhummvit",
        path: "#",
      },
    ],
  },
  {
    title: "Condo for Rent",
    links: [
      {
        label: "Less than ฿5,000",
        path: "#",
      },
      {
        label: "฿5,000 - ฿10,000",
        path: "#",
      },
      {
        label: "฿10,000 - ฿20,000",
        path: "#",
      },
      {
        label: "฿20,000 - ฿30,000",
        path: "#",
      },
      {
        label: "More than ฿30,000",
        path: "#",
      },
    ],
  },
];

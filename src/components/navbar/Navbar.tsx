import IconBell from "@assets/icons/icon-bell.svg";
import IconGlobal from "@assets/icons/icon-global.svg";
import IconLogo from "@assets/icons/icon-logo-primary.svg";
import IconMessage from "@assets/icons/icon-message.svg";

import { Container } from "@components/container";
import { DropdownProfile } from "@components/dropdown-profile";
import { Typography } from "@components/typography";

import { cn } from "@/utils/cn";

import type { NavbarProps } from "./types";

const Navbar = ({
  altText = "",
  className = "",
  fallBackText = "",
  linkLabels = [],
  options = [],
  src = "",
  ...props
}: NavbarProps) => {
  return (
    <nav
      {...props}
      className={cn("border-b border-black-200 bg-white py-4", className)}
    >
      <Container>
        <div className="flex items-center justify-between gap-20.75">
          <a href="https://flowbite.com/" className="flex items-center gap-2.5">
            <img src={IconLogo} className="h-8 w-8" alt="Flowbite Logo" />
            <Typography className="text-primary" variant="heading-l">
              Prop
            </Typography>
          </a>

          <div>
            <ul className="flex">
              {linkLabels.map(({ isHightlight, label, path }) => {
                return (
                  <li
                    className={cn("px-4 py-2", {
                      "rounded-6 border border-critical": isHightlight,
                    })}
                    key={label}
                  >
                    <a href={path}>
                      <Typography
                        className={cn("text-black-900", {
                          "text-critical": isHightlight,
                        })}
                        variant={isHightlight ? "label-s" : "label-m"}
                      >
                        {label}
                      </Typography>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-3">
            <ul className="flex items-center">
              <li className="h-12 w-12 p-3">
                <a href="/chat">
                  <img src={IconMessage} alt="icon-message" />
                </a>
              </li>
              <li className="h-12 w-12 p-3">
                <a href="/notification">
                  <img src={IconBell} alt="icon-bell" />
                </a>
              </li>
              <li className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black-200 p-2">
                <a href="/lang">
                  <img src={IconGlobal} alt="icon-global" />
                </a>
              </li>
            </ul>

            <DropdownProfile
              altText={altText}
              fallBackText={fallBackText}
              options={options}
              src={src}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

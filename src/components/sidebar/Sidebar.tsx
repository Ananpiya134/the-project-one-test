import { useNavigate } from "react-router-dom";

import IconStarSeleted from "@assets/icons/icon-star-selected.svg";
import IconStarUnselected from "@assets/icons/icon-star-unselect.svg";
import IconVerify from "@assets/icons/icon-verify.svg";

import { Avatar } from "@components/avatar";
import { Badge } from "@components/badge";
import { Button } from "@components/button";
import { Typography } from "../typography";

import { cn } from "@utils/cn";

import type { SidebarProps } from "./types";

const Sidebar = ({
  name,
  userInitial,
  buttonLinkList = [],
  className = "",
  imgProfileSrc = "",
  rating = 0,
  ...props
}: SidebarProps) => {
  const navigate = useNavigate();
  return (
    <div
      {...props}
      className={cn(
        "h-fit w-75 rounded-5 border border-black-200 bg-white px-6 py-8 shadow-xl",
        className
      )}
    >
      <div className="mb-4 flex w-full flex-col items-center justify-center border-b border-black-200 pb-4">
        <div className="relative mb-1 h-20 w-20">
          <Avatar
            altText="image-profile-sidebar"
            className="h-full w-full"
            src={imgProfileSrc}
            fallBackText={userInitial}
          />
          <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border border-white bg-success-800 ">
            <img
              alt="icon-verify-profile-sidebar"
              src={IconVerify}
              className="absolute h-3 w-3"
            />
          </div>
        </div>
        <Typography className="mb-1" variant="heading-s">
          {name}
        </Typography>
        <div className="mb-2 flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((ele, index) => {
            return ele <= rating ? (
              <img
                alt="selected-star"
                src={IconStarSeleted}
                className="w-3.75 h-3.75"
                key={`star-selected-${index}`}
              />
            ) : (
              <img
                alt="unselected-star"
                src={IconStarUnselected}
                className="w-3.75 h-3.75"
                key={`star-unselected-${index}`}
              />
            );
          })}
          <Typography variant="label-s">{rating.toFixed(1)}</Typography>
        </div>
        <div className="flex items-center gap-1">
          <Badge className="bg-info px-2 py-1">
            <Typography className="text-[#E1F5FE]" variant="label-xs">
              Agent
            </Typography>
          </Badge>
          <Badge className="bg-magic px-2 py-1">
            <Typography className="text-[#EDE7F6]" variant="label-xs">
              Owner
            </Typography>
          </Badge>
          <Badge className="bg-warning-500 px-2 py-1">
            <Typography className="text-[#FFFDE7]" variant="label-xs">
              Owner
            </Typography>
          </Badge>
        </div>
      </div>
      <div>
        <Typography className="mb-1 pl-3 text-black-700" variant="paragraph-xs">
          General
        </Typography>
        <div className="flex flex-col gap-1">
          {buttonLinkList.map(
            ({ alert, altText, width, height, icon, label, path }) => {
              const isActive = window.location.pathname === path;
              return isActive ? (
                <Button
                  className="inline-flex items-center justify-between px-3 py-2"
                  key={`sidebar-button-${altText}`}
                  onClick={() => navigate(path)}
                  variant="primary"
                >
                  <span className="flex gap-2">
                    <img
                      alt={altText}
                      className={`w-${width} h-${height}`}
                      src={icon}
                    />
                    <Typography className="text-cream" variant="label-s">
                      {label}
                    </Typography>
                  </span>
                  {alert && (
                    <span className="flex h-6 w-6 items-center justify-center bg-cream px-2">
                      <Typography className="text-primary" variant="label-m">
                        {alert}
                      </Typography>
                    </span>
                  )}
                </Button>
              ) : (
                <Button
                  className="inline-flex items-center justify-between bg-white px-3 py-2"
                  onClick={() => navigate(path)}
                  key={`sidebar-button-${altText}`}
                >
                  <span className="flex gap-2">
                    <img
                      alt={altText}
                      className={`w-${width} h-${height}`}
                      src={icon}
                    />
                    <Typography className="text-black-900" variant="label-s">
                      {label}
                    </Typography>
                  </span>
                  {alert && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-warning-800 px-2">
                      <Typography className="text-cream" variant="label-m">
                        {alert}
                      </Typography>
                    </span>
                  )}
                </Button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

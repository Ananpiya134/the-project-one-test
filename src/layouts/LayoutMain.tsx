import { Outlet } from "react-router-dom";

import { Container } from "@/components/container";
import { Navbar } from "@components/navbar";
import { Footer } from "@/components/footer";

import {
  optionsProfileDropdown,
  optionsLinkLabel,
  linkIcons,
  linkLabels,
  linkSiteMap,
} from "@/configs/mock";

import type { ComponentPropsWithoutRef } from "react";

interface LayoutMainProps extends ComponentPropsWithoutRef<"div"> {}

const LayoutMain = ({ ...props }: LayoutMainProps) => {
  return (
    <div {...props}>
      <Navbar
        altText="profile-img"
        fallBackText="AP"
        linkLabels={optionsLinkLabel}
        options={optionsProfileDropdown}
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
      <Container>
        <Outlet />
      </Container>
      <Footer
        linkIconList={linkIcons}
        linkLabelsBottom={linkLabels}
        linkSiteMapList={linkSiteMap}
      />
    </div>
  );
};

export default LayoutMain;

import IconGlobal from "@assets/icons/icon-global-primary.svg";
import IconLogo from "@assets/icons/icon-logo-secondary.svg";

import { Badge } from "@/components/badge";
import { Container } from "@components/container";
import { Typography } from "@components/typography";

import { cn } from "@/utils/cn";

import type { FooterProps } from "./types";

const Footer = ({
  className = "",
  linkIconList = [],
  linkLabelsBottom = [],
  linkSiteMapList = [],
  ...props
}: FooterProps) => {
  return (
    <footer {...props} className={cn("bg-primary", className)}>
      {/* site map */}
      <Container>
        <div className="mb-8 flex justify-center  pt-12">
          {linkSiteMapList.map(({ title, links }) => {
            return (
              <div className="w-66" key={`sitemap-${title}`}>
                <Typography className="mb-3 text-cream" variant="heading-xxs">
                  {title}
                </Typography>
                {links.map(({ label, path }) => {
                  return (
                    <a href={path} key={`site-map-${title}-${label}`}>
                      <Typography className="mb-2 text-cream" variant="label-s">
                        {label}
                      </Typography>
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Container>

      {/* social */}
      <Container>
        <div className="flex items-center justify-between  py-8">
          <div className="flex items-center gap-6">
            <img
              alt="logo-footer-secondary"
              className="h-9 w-9"
              src={IconLogo}
            />
            {linkLabelsBottom.map(({ label, path }) => {
              return (
                <a href={path} key={`label-bottom-${label}`}>
                  <Typography className="text-cream" variant="label-s">
                    {label}
                  </Typography>
                </a>
              );
            })}
            <Typography className="text-cream" variant="label-s">
              © 2023 Prop
            </Typography>
          </div>
          <div className="flex items-center gap-10">
            <Badge className="flex items-center gap-1 rounded-6 bg-cream px-4 py-2">
              <img
                alt="currency"
                className="h-4.25 w-4.25 text-primary"
                src={IconGlobal}
              />
              <Typography className="text-primary" variant="label-s">
                English - THB
              </Typography>
            </Badge>
            <div className="flex items-center gap-4">
              {linkIconList.map(({ alt, icon, href }) => {
                return (
                  <a href={href} key={`alt-href-${alt}`}>
                    <img alt={alt} src={icon} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

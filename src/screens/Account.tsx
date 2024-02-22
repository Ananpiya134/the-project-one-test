import IconCard from "@assets/icons/icon-card.svg";
import IconCaution from "@assets/icons/icon-caution.svg";
import IconLock from "@assets/icons/icon-lock.svg";
import IconMail from "@assets/icons/icon-email.svg";
import IconPerson from "@assets/icons/icon-person.svg";
import IconPicture from "@assets/icons/icon-picture.svg";
import IconVerifyOutlined from "@assets/icons/icon-verify-outlined.svg";

import { Badge } from "@components/badge";
import { Button } from "@components/button";
import { PreviewCoverImage } from "@/components/preview-cover-image";
import { Typography } from "@components/typography";

import { COVER_IMAGE_URL } from "@/configs/constants";

import { useUserStore } from "@/stores/user";

import { cn } from "@utils/cn";

const PageAccount = () => {
  const { user } = useUserStore((state) => state);

  const coverImgSrc = COVER_IMAGE_URL;

  // user.isVerifyEmail = true;
  return (
    <div className="h-243 w-255 bg-white">
      <div className="mb-8">
        <Typography className="mb-1" variant="heading-m">
          Account
        </Typography>
        <Typography className="text-black-700" variant="paragraph-m">
          Edit account details and preferences
        </Typography>
      </div>
      <div className="border-b border-black-200 pb-4">
        <Typography className="mb-2 text-black-900" variant="heading-xs">
          General
        </Typography>
        <div className="flex items-center gap-6 py-4">
          <img
            alt="icon-cover"
            className="h-4.5 w-4.5 text-black-700"
            src={IconPicture}
          />
          <span>
            <Typography className="mb-1" variant="paragraph-m">
              Cover Photo
            </Typography>
            <Typography className="text-black-700" variant="paragraph-s">
              Recommended size: 1500x400px
            </Typography>
          </span>
        </div>
        <PreviewCoverImage src={coverImgSrc} />
      </div>
      <div className="mb-8 flex items-center justify-between border-b border-black-200 py-4">
        <div className="flex items-center gap-6 ">
          <img alt="icon-person" className="h-5 w-3.5" src={IconPerson} />
          <span>
            <Typography className="mb-1 text-black-900" variant="paragraph-m">
              Name
            </Typography>
            <Typography
              className="text-black-700"
              variant="paragraph-s"
            >{`${user.firstName} ${user.lastName}`}</Typography>
          </span>
        </div>
        <Button variant="secondary">
          <Typography className="text-black-900" variant="label-s">
            Edit
          </Typography>
        </Button>
      </div>
      <div>
        <Typography className="mb-2 text-black-900" variant="heading-xs">
          Verification
        </Typography>
        <div className="mb-2 flex items-center justify-between border-b border-black-200 py-4">
          <div className="flex items-center gap-6">
            <img alt="icon-email" className="h-4 w-5" src={IconMail} />
            <span>
              <Typography className="mb-1 text-black-900" variant="paragraph-m">
                Email
              </Typography>
              <div className="flex items-center gap-1">
                {!user.isVerifyEmail && (
                  <img
                    alt="icon-caution-email"
                    className="h-4 w-4"
                    src={IconCaution}
                  />
                )}
                <Typography className="text-black-700" variant="paragraph-s">
                  {!user.isVerifyEmail ? "Add an email address" : user.email}
                </Typography>
                {user.isVerifyEmail && (
                  <Badge className="flex items-center gap-0.5 border border-success-200 bg-success-100 px-2 py-0.5">
                    <img
                      alt="icon-verify-outlined"
                      className="h-3 w-3 text-success-200"
                      src={IconVerifyOutlined}
                    />
                    <Typography className="text-success-900" variant="label-xs">
                      Verified
                    </Typography>
                  </Badge>
                )}
              </div>
            </span>
          </div>
          <Button variant={!user.isVerifyEmail ? "warning" : "secondary"}>
            <Typography
              className={cn("text-black-900", {
                "text-warning-900": !user.isVerifyEmail,
              })}
              variant="label-s"
            >
              {!user.isVerifyEmail ? "Verify Now" : "Change"}
            </Typography>
          </Button>
        </div>
        <div className="mb-8 flex items-center justify-between border-b border-black-200 py-4">
          <div className="flex items-center gap-6">
            <img alt="icon-card" className="h-6 w-6" src={IconCard} />
            <span>
              <Typography className="mb-1 text-black-900" variant="paragraph-m">
                Thai National ID
              </Typography>
              <div className="flex items-center gap-1">
                {!user.isVerifyThaiNationalId && (
                  <img
                    alt="icon-caution-email"
                    className="h-4 w-4"
                    src={IconCaution}
                  />
                )}
                <Typography className="text-black-700" variant="paragraph-s">
                  {!user.isVerifyThaiNationalId
                    ? "Add an email address"
                    : user.email}
                </Typography>
                {user.isVerifyThaiNationalId && (
                  <Badge className="flex items-center gap-0.5 border border-success-200 bg-success-100 px-2 py-0.5">
                    <img
                      alt="icon-verify-outlined"
                      className="h-3 w-3 text-success-200"
                      src={IconVerifyOutlined}
                    />
                    <Typography className="text-success-900" variant="label-xs">
                      Verified
                    </Typography>
                  </Badge>
                )}
              </div>
            </span>
          </div>
          <Button
            variant={!user.isVerifyThaiNationalId ? "warning" : "secondary"}
          >
            <Typography
              className={cn("text-black-900", {
                "text-warning-900": !user.isVerifyThaiNationalId,
              })}
              variant="label-s"
            >
              {!user.isVerifyThaiNationalId ? "Verify Now" : "Change"}
            </Typography>
          </Button>
        </div>
        <div className="mb-8">
          <Typography className="mb-2 text-black-900" variant="heading-xs">
            Password
          </Typography>
          <div className="flex items-center justify-between border-b border-black-200 py-4">
            <div className="flex items-center gap-6">
              <img alt="icon-lock" className="h-6 w-6" src={IconLock} />
              <span>
                <Typography
                  className="mb-1 text-black-900"
                  variant="paragraph-m"
                >
                  Change Password
                </Typography>
                <Typography className="text-black-900" variant="paragraph-s">
                  •••••••••••
                </Typography>
              </span>
            </div>
            <Button variant="secondary">
              <Typography className="text-black-900" variant="label-s">
                Edit
              </Typography>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button className="border-none px-4 py-2" variant="critical">
            <Typography className="text-critical" variant="label-s">
              Delete Account
            </Typography>
          </Button>
          <Button
            className="rounded-6 border border-black-200 px-4 py-2"
            variant="critical"
          >
            <Typography className="text-critical" variant="label-s">
              Deactivate Account
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageAccount;

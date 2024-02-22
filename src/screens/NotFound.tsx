import { useNavigate } from "react-router-dom";

import { Button } from "@components/button";
import { Typography } from "@/components/typography";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-255 flex-col items-center justify-center pb-52 pt-36">
      <Typography className="mb-3 text-primary" variant="heading-l">
        Not Found
      </Typography>
      <Typography className="mb-4 text-black-900" variant="heading-m">
        Return to Profile page
      </Typography>
      <Button onClick={() => navigate("/profile/account")} variant="primary">
        <Typography className="text-cream" variant="label-s">
          To Profile Page
        </Typography>
      </Button>
    </div>
  );
};

export default PageNotFound;

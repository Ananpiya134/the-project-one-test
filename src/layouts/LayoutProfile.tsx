import { Outlet } from "react-router-dom";

import { Container } from "@components/container";

const LayoutProfile = () => {
  return (
    <Container className="pb-30.5 pt-8">
      <div className="flex gap-10">
        <div className="w-75 h-111.5 bg-black-500" />
        <Outlet />
      </div>
    </Container>
  );
};

export default LayoutProfile;

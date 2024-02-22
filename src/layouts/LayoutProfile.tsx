import { Outlet } from "react-router-dom";

import { Container } from "@components/container";
import { Sidebar } from "@components/sidebar";

import { sidebarButtonLinkList } from "@configs/mock";

import { useUserStore } from "@/stores/user";

const LayoutProfile = () => {
  const { user } = useUserStore((state) => state);

  const name = `${user.firstName} ${user.lastName}`;
  const userInitial = `${user.firstName?.substring(0, 1).toUpperCase()}${user.lastName?.substring(0, 1).toUpperCase()}`;

  // mock data since api does not satisfy the value
  const rating = 4;
  return (
    <Container className="pb-30.5 pt-8">
      <div className="flex gap-10">
        <Sidebar
          buttonLinkList={sidebarButtonLinkList}
          name={name}
          rating={rating}
          userInitial={userInitial}
        />
        <Outlet />
      </div>
    </Container>
  );
};

export default LayoutProfile;

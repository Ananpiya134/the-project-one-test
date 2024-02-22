import { Navigate, Route, Routes } from "react-router-dom";

import LayoutMain from "@layouts/LayoutMain";
import LayoutProfile from "@layouts/LayoutProfile";

import PageAccount from "@/screens/Account";
import PageNotFound from "@/screens/NotFound";

const RouteConfig = () => {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route element={<LayoutProfile />}>
          <Route path="/profile/account" element={<PageAccount />} />
        </Route>
        <Route path="/not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
};

export default RouteConfig;

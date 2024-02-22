import { useEffect } from "react";

import RouteConfig from "@routes/RouteConfig";
import { useUserStore } from "@/stores/user";

function App() {
  const { fetchUser } = useUserStore((state) => state);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RouteConfig />;
}

export default App;

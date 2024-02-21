import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    const response = await axios.get("/users/me");
    console.log(`response`);
    console.log(response.data);
    if (response) {
      setUser(response);
    }
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* <p className="text-red-500">something</p> */}
      {user}
    </div>
  );
}

export default App;

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { notification, deleteToken } from "../utils/notification";

const Home: NextPage = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    notification()
      .then((e) => {
        const tk = e || ""
        setToken(tk);
      })
      .catch(console.log);
  }, []);
  return (
    <div className="col">
      <h2>
        Firebase token: {token} 
      </h2>
      <button onClick={deleteToken}>Delete Token</button>
    </div>
  );
};

export default Home;

import { useState } from "react";
import "./App.css";
import { UserContext } from "./Components/Context/AuthContext";
import Rotas from "./routes";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Rotas />
    </UserContext.Provider>
  );
}

export default App;

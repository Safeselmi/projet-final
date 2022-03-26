import { useState } from "react";

import { Usercontext } from "./contexts/UserContext";
import { ClientContext } from "./contexts/ClientContext";
import MainRouter from "./MainRouter";

function App() {
  const [user, setuser] = useState();
  const [PrenomClient, setPrenomClient] = useState();

  return (
    <div className="App">
      <Usercontext.Provider value={{ user, setuser }}>
        <ClientContext.Provider value={{ PrenomClient, setPrenomClient }}>
          <MainRouter />
        </ClientContext.Provider>
      </Usercontext.Provider>
    </div>
  );
}

export default App;

import React from "react";
import Routing from "./Routes/Routing";
import { StoreProvider } from "./Context/store";
const App = () => {
  return (
    <StoreProvider>
      <Routing />
    </StoreProvider>
  );
};

export default App;

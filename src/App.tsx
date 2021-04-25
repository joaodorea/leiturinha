import React from "react";

import { AppContextProvider } from "./state/context";
import Route from "./Route";
import "@/assets/styles/index.scss";

const App: React.FC = () => (
  <AppContextProvider>
    <Route />
  </AppContextProvider>
);

export default App;

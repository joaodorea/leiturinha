import React from "react";
import Orders from "./modules/orders/views"

import "@/assets/styles/index.scss";
import { AppContextProvider } from "./state/context";

const App: React.FC = () => (
  <AppContextProvider>
    <Orders />
  </AppContextProvider>
);

export default App;

import React, { useContext } from "react";

import { AppContext } from "./state/context";
import Orders from "./modules/orders/views"
import Billing from "./modules/billing/views";
import "@/assets/styles/index.scss";

const App: React.FC = () => {
  const context = useContext(AppContext)

  return (
    <>
      { context && context[0].step === 'payment' ? <Billing /> : <Orders /> }
    </>
  );
}

export default App;

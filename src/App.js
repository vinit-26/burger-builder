import React from "react";
import { Route, Switch } from "react-router-dom";

import { Layout } from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBUilder/BurgerBuilder";
import { Checkout } from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
        </Switch>
        {/* <BurgerBuilder />
        <Checkout /> */}
      </Layout>
    </div>
  );
}

export default App;

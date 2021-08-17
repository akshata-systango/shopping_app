import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import Header from "../components/Headers/Index";
import Cart from "../shared/components/cart/CartComponent";

const ShowAllProducts = React.lazy(() => import("../components/Product/Index"));
// const Cart = React.lazy(() =>
//   import("../shared/components/cart/CartComponent")
// );

const Routes = () => {
  const [showcartItem, setShowCartItem] = useState(false);
  const ShowCartDetails = () => {
    setShowCartItem(true);
  };
  const HideCartDetails = () => {
    setShowCartItem(false);
  };
  return (
    <>
      <Header onCartIconClick={ShowCartDetails} />
      {showcartItem && <Cart onClose={HideCartDetails} />}
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={ShowAllProducts} />
        </Suspense>
      </Switch>
    </>
  );
};

export default Routes;

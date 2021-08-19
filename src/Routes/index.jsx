import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import Header from "../components/Headers/Index";
import Cart from "../shared/components/cart";
import Breadcrumbss from "../utils/Breadcrumbs/BreadCrumbsComponent";

const Products = React.lazy(() => import("../components/Product/Index"));


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
      <Breadcrumbss/>
      {showcartItem && <Cart onClose={HideCartDetails} />}
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Products} />
        </Suspense>
      </Switch>
    </>
  );
};

export default Routes;

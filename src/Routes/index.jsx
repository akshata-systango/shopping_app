import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import Header from "../layout/Headers/Index";
import Cart from "../shared/components/cart";

const AboutUsPage = React.lazy(() => import("../layout/Headers/AboutUsPage"));

const UserAuthentication = React.lazy(() =>
  import("../components/Authentication/UserAuthenticationcomponent")
);
const Products = React.lazy(() => import("../components/Product/Index"));
const ContactUsPage = React.lazy(() =>
  import("../layout/Headers/ContactUsPage")
);
// const SearchComponent = React.lazy(() =>
//   import("../layout/Headers/SearchComponent")
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
          <Route exact path="/" component={Products} />
          <Route path="/authentication" component={UserAuthentication} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/about" component={AboutUsPage} />
          {/* <Route path="/search" component={SearchComponent} /> */}
        </Suspense>
      </Switch>
    </>
  );
};

export default Routes;

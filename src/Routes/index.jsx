import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import Header from "../layout/Headers/Index";
import Cart from "../shared/components/cart";
import MyDocument from "../layout/Headers/MyDocument";


const ProductDetail = React.lazy(() =>
  import("../layout/Headers/ProductDetail")
);
const AboutUsPage = React.lazy(() => import("../layout/Headers/AboutUsPage"));

const UserAuthentication = React.lazy(() =>
  import("../components/Authentication/UserAuthenticationcomponent")
);
const Products = React.lazy(() => import("../components/Product/Index"));
const ContactUsPage = React.lazy(() =>
  import("../layout/Headers/ContactUsPage")
);

const Routes = () => {
  const [showcartItem, setShowCartItem] = useState(false);
  const [searchedResult, setSearchedResult] = useState([]);

  const ShowCartDetails = () => {
    setShowCartItem(true);
  };
  const HideCartDetails = () => {
    setShowCartItem(false);
  };
  return (
    <>
      <Header
        onCartIconClick={ShowCartDetails}
        setSearchedResult={setSearchedResult}
      />
      {showcartItem && <Cart onClose={HideCartDetails} />}

      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Products} />
          <Route path="/shop" component={Products} />
          <Route path="/authentication" component={UserAuthentication} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/about" component={AboutUsPage} />
          <Route
            path="/productDetail/:id"
            component={(props) => (
              <ProductDetail {...props} searchedResult={searchedResult} />
            )}
          />
          <Route path="/mydocument" component={MyDocument} />
        </Suspense>
      </Switch>
    </>
  );
};

export default Routes;

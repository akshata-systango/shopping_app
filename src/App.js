import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import CartProvider from "./store/CartProvider";
import Routes from "./Routes/RouterComponent";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <Routes />
          <ToastContainer />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

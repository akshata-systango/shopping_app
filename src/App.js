import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import Routes from './Routes/index';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <Routes />  
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
};


export default App;
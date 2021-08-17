import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import CartProvider from './store/CartProvider';
import Routes from './Routes/RouterComponent';
// import Contact from './components/Headers/Contact/Contact';
// import About from './components/Headers/aboutUs/About';
// import OurStore from './components/Headers/ourStore/OurStore';


const App = () => {
  return (
      <CartProvider>
        <BrowserRouter>
          <Switch>
            <Routes />
          </Switch>
        </BrowserRouter>
   

      {/* <Switch> */}
        {/* <Route path="/contact" component={Contact} /> */}
        {/* <Route path="/about" component={AboutUs} /> */}
        {/* <Route path="/store" component={OurStore} /> */}
      {/* </Switch> */}

      </CartProvider>

  )

}

export default App;
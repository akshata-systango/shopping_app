import  React from 'react';
import Header from './Component/Headers/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Refferal from './Component/Headers/Refferal';
import ProductCount from './Component/Headers/ProductCount';
import Filter from './Component/filter/Filter';
import Product from './Component/Headers/Product';

const App = () => {
  return  (
   <Router>
     <Header/>
     <Refferal/>
     <ProductCount/>
     <Filter />
     <Product/>
    </Router>
    
    
  )

}

export default App;
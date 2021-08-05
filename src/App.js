import React from 'react';
import Header from './components/Headers/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Refferal from './components/Headers/Refferal';
import ProductCount from './components/Headers/ProductCount';
import Filter from './components/filter/Filter';
import UrlLine from './components/Headers/UrlLine';
import Product from './components/Headers/Product';
import Contact from './components/Headers/Contact';

const App = () => {
  return (
    <Router>
      <Header>
        <Route path="/contact" component={Contact} />
      </Header>
          <Refferal />
          <UrlLine />
          <ProductCount />
          <Filter />
          <Product />
      </Router>


  )

}

export default App;
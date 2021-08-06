import React from 'react';
import Header from './components/Headers/Header';
import Refferal from './components/RefferalLine/Refferal';
import UrlLine from './components/UrlLine/UrlLine';
import ProductCount from './components/ProductCount/ProductCount';
import Filter from './components/filter/Filter';
import Product from './components/Product/Product';

const Main = () => {

    return (
        <React.Fragment>
            <Header />
            <Refferal />
            <UrlLine />
            <ProductCount />
            <Filter />
            <Product />
        </React.Fragment>
    )
}

export default Main;
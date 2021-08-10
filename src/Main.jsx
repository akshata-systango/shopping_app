import React, { useState } from 'react';
import Header from './components/Headers/Header';
import Refferal from './components/RefferalLine/Refferal';
import UrlLine from './components/UrlLine/UrlLine';
import ProductCount from './components/ProductCount/ProductCount';
import Filter from './components/filter/Filter';
import Product from './components/Product/Product';
import data from './constants/data';
import MapCard from './components/Card/MapCard';
import CartItem from './components/Headers/cart/CartItem';
// import CartContext from './store/CartContext';
import CartProvider from './store/CartProvider';

const Main = (props) => {
    const [showFullData, setShowFullData] = useState(true);
    // const [count,setCount] = useState(0);
    const [showcartItem, setShowCartItem] = useState(true);
    const hideInitialData = () => {
        setShowFullData(false);
    }

    const ShowCartItem = () => {
        setShowCartItem(true)
    }
    const HideCartItem = () => {
        setShowCartItem(false)
    }

 
    return (
        <React.Fragment>
            <CartProvider>
                {showcartItem && <CartItem onClose={HideCartItem} />}
                <Header onShow={ShowCartItem} />
                <Filter onPush={hideInitialData} />
                {showFullData && <div className="displayCard">{data.map(MapCard)}</div>}
                <Product />
            </CartProvider>

            <Refferal />
            <UrlLine />
            <ProductCount />
        </React.Fragment>
    )
}

export default Main;
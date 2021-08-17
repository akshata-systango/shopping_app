import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../components/Headers/Index';

const ShowAllProducts = React.lazy(() => import('../components/Product/Index'));
const Cart = React.lazy(() => import('../shared/components/cart/CartComponent'))


const Routers = () => {
    const [showcartItem, setShowCartItem] = useState(false);
    const ShowCartItem = () => { setShowCartItem(true) }
    const HideCartItem = () => { setShowCartItem(false) }
    return (
        <>
            <Header onShow={ShowCartItem} />
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path='/allproducts' component={ShowAllProducts} />
                    <Route path='/allproducts/cartitem'>
                        {showcartItem && <Cart onClose={HideCartItem} />}
                    </Route>
                </Suspense>
            </Switch>
        </>)
}

export default Routers;
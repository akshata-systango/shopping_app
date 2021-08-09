import { useReducer } from 'react';
import React from 'react';
import CartContext from './CartContext';

const defaultCartState ={
items : [],
totalAmount : 0
};

const cartReducer = (state,action) => {
    if( action.type === 'Add'){
        const UpdateItem = state.items.concat(action.item);
        const UpdataeTotalAmount = state.totalAmount + action.item.price;
        return {
            items : UpdateItem,
            totalAmount : UpdataeTotalAmount
        };

    }
    return defaultCartState;
}

const CartProvider = (props) => {

const [cartState, dispetchCartAction] = useReducer(cartReducer,defaultCartState);

const AddItemToCartHandler = (item) => {
    dispetchCartAction({type : 'Add', item : item});
}
const RemoveItemFromCartHandler = (id) => {
    dispetchCartAction({type: 'Remove', id: id})
}

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        AddItem: AddItemToCartHandler,
        RemoveItem:  RemoveItemFromCartHandler,
    };
    return(
    <CartContext.Provider value={cartContext}>
       {props.children}
    </CartContext.Provider>)
}


export default CartProvider;
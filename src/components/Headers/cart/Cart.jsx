import React, { useContext } from 'react'; 
import verctor1Logo from '../../../assets/images/Vector1.svg';
import './cart.css';
import CartContext from '../../../store/CartContext';

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItem = cartCtx.items.length;
       
    
    return (
        <React.Fragment>
           <div className="cart"><img src={verctor1Logo} /><span className="itemCount"> {numberOfCartItem}</span></div> 
            
        </React.Fragment>
    )
}

export default Cart;
import React, { useContext } from 'react'; 
import verctor1Logo from '../../../assets/images/Vector1.svg';
import './cart.css';
import CartContext from '../../../store/CartContext';

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);
     
       
    
    return (
        <React.Fragment>
           <div className="cart"><img src={verctor1Logo} alt="can't load"/>
           <span className="itemCount"> {numberOfCartItems}</span></div>      
        </React.Fragment>
    )
}

export default Cart;
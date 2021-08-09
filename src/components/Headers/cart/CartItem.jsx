import React, { useContext } from 'react';
import Modal from '../../UI/Modal';
import './cartItem.css';
import CartContext from '../../../store/CartContext';

const CartItem = (props) => {
const cartCtx = useContext(CartContext);
const cartItem = (
<ul className="cart-items"> {cartCtx.items.map((item) => <li>{item.brand}</li>)}</ul>);
const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
const hasItems = cartCtx.items.length > 0;

    return(
        <React.Fragment>
            <Modal onClose={props.onClose}>
                {cartItem}
                <div className="total">
                <div><span className="amount">Amount</span>
                <span className="price">{totalAmount}</span></div>
                <div className="actions">
                    <button className="button--alt" onClick={props.onClose}>Close</button>
                    {hasItems && <button className="button">Order</button>}
                </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}
export default CartItem;
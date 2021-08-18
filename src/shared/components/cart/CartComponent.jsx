import React, { useContext, useState } from 'react';
import Modal from '../../../components/UI/Modal';
import './style/cart.css';
// import 'bootstrap/dist/css/bootstrap.css';
import CartItems from './ShowCartComponent';
import CartContext from '../../../store/CartContext';
import CheckOutDetailForm from '../../../components/CartCheckout/CheckoutForm';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.AddItem(item);
  }
  const cartItemRemoveHandler = (id) => {
    cartCtx.RemoveItem(id)
  }

  const OrderButtonHandler = () => {
    setOrderPlaced(true)
  }

  const cartItem = (
    <ul className="cart-items">
      {cartCtx.items.map((item) =>

        <CartItems
          key={item.id}
          // id={item.id}
          imgsrc={item.imgsrc}
          brand={item.brand}
          amount={item.amount}
          detail={item.detail}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />)}</ul>);

        const hideButtons = <div className="actions">
        <button className="button--alt" onClick={props.onClose}>Close</button>
        {hasItems && <button className="button" onClick={OrderButtonHandler}>Place Order</button>}
      </div>

  return (
    <React.Fragment>
      <Modal onClose={props.onClose}>
        {cartItem}

        <div className="total">
          <div className="final">
            <span className="amount">Amount</span>
            <span className="price">{totalAmount}</span>
          </div>
          {orderPlaced && <CheckOutDetailForm onCancel={props.onClose}/>}
          {!orderPlaced && hideButtons}
          
        </div>
      </Modal>
    </React.Fragment>
  )
}
export default Cart;
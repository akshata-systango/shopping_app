import React, { useContext } from 'react';
import Modal from '../../UI/Modal';
import './cartItem.css';
// import 'bootstrap/dist/css/bootstrap.css';
import ShowCart from './ShowCart';
import CartContext from '../../../store/CartContext';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CartItem = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.AddItem(item);
  }
  const cartItemRemoveHandler = (id) => {
    cartCtx.RemoveItem(id)
  }



  const cartItem = (
    <ul className="cart-items">
      {cartCtx.items.map((item) =>
        <ShowCart
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


  return (
    <React.Fragment>
      <Modal onClose={props.onClose}>
        {cartItem}

        <div className="total">
          <div><span className="amount">Amount</span>
            <span className="price">{totalAmount}</span></div>
          <div className="actions">
            <button className="button--alt" onClick={props.onClose}>Close</button>
            {hasItems && <button className="button">Place Order</button>}


          </div> </div>
      </Modal>
    </React.Fragment>
  )
}
export default CartItem;
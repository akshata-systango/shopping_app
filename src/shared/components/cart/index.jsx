import React, { useContext, useState } from "react";
import Modal from "../../../components/UI/Modal";
import "./style/cart.css";
import CartItems from "./CartItem";
import CartContext from "../../../store/CartContext";
import CheckOutDetailForm from "../../../components/CartCheckout";
import pt from "prop-types";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const OrderButtonHandler = () => {
    setOrderPlaced(true);
    const hide = document.getElementById("cartItem");
    if (hide.style.display === "none") {
      hide.style.display = "block";
    } else {
      hide.style.display = "none";
    }
  };

  const SubmitOrderHandler = async (userData) => {
    setOrderSubmitted(true);
    await fetch(
      "https://shopping-app-5c89b-default-rtdb.firebaseio.com/orderDetail.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setOrderSubmitted(false);
    setIsSuccessful(true);
    cartCtx.clearCart();
  };

  const cartItem = (
    <ul className="cart-items" id="cartItem" title="cart-item">
      {cartCtx.items.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          size={item.size}
          imgsrc={item.imgsrc}
          brand={item.brand}
          amount={item.amount}
          detail={item.detail}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const hideButtons = (
    <div className="actions">
      <button className="button--alt" onClick={props.onClose}>
        Close
      </button>

      {hasItems && (
        <button className="button" onClick={OrderButtonHandler}>
          Place Order
        </button>
      )}
    </div>
  );

  const cartModal = (
    <React.Fragment>
      <div id="cartItem">{cartItem}</div>

      <div className="total">
        <div className="final">
          <span className="amount">Amount</span>
          <span className="price">{totalAmount}</span>
        </div>

        {orderPlaced && (
          <CheckOutDetailForm
            onConfirm={SubmitOrderHandler}
            onCancel={props.onClose}
          />
        )}

        {!orderPlaced && hideButtons}
      </div>
    </React.Fragment>
  );
  const submittingModelData = <p>Sending the data</p>;
  const dataSubmissionMessage = (
    <React.Fragment>
      <p>Order Submitted Successfully....</p>
      <div className="actions">
        <button className="button" onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!orderSubmitted && !isSuccessful && cartModal}
      {orderSubmitted && submittingModelData}
      {!orderSubmitted && isSuccessful && dataSubmissionMessage}
    </Modal>
  );
};

Cart.propTypes = {
  onClose: pt.bool,
};
export default Cart;

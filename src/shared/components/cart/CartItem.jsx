import "./style/cart.css";

const CartItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="cart-item">
      <div>
        <h5>{props.detail}</h5>
        <p>{props.brand}</p>
        <p className="sizeStyling">Size {props.size}</p>
        <div className="summary">
          <span className="price">{price}</span>
          <span className="amount">x {props.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItems;

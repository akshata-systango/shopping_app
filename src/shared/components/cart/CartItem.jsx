import "./style/cart.css";
import pt from 'prop-types';

const CartItems = (props) => {
  console.log("propss", props);
  const price = `$${props.price?.toFixed(2)}`;
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

CartItems.propTypes = {
  price : pt.number,
  detail : pt.string,
  brand : pt.string,
  size : pt.string,
  amount : pt.number,
  onRemove : pt.func,
  onAdd : pt.func
}

export default CartItems;

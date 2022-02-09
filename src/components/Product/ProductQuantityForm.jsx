import { useRef, useState } from 'react';
import './style/product.css';
import Input from '../UI/Input';
import pt from 'prop-types';


const AddProductQuantity = (props) => {
  console.log('props', props)
  const {id, onAddToCart} = props
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

   onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className="form" title="form">
        <Input
          ref={amountInputRef}
          label='Quantity'
          input={{
            id: 'amount_' + id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            className: 'stylingInput',
            defaultValue: '1',
          }}
        />
      <button className="cartButton">Add To Cart</button>
      {!amountIsValid && <p data-testid="para">Please enter a valid amount (1-5).</p>}
    </form>
  );
};

AddProductQuantity.propTypes = {
  onAddToCart : pt.func,
  id : pt.number
}

export default AddProductQuantity;
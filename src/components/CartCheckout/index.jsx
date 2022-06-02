import { useState } from "react";
import classes from "./style/checkoutForm.module.css";
import pt from "prop-types";

const Checkout = (props) => {
  const { onConfirm, onCancel } = props;
  const [userCheckoutDetail, setUserCheckoutDetail] = useState({});

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setUserCheckoutDetail({ ...userCheckoutDetail, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    onConfirm({
      name: userCheckoutDetail.name,
      street: userCheckoutDetail.street,
      city: userCheckoutDetail.city,
      postalCode: userCheckoutDetail.postalCode,
    });
  };

  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="street">Address</label>
        <input
          type="text"
          id="street"
          name="street"
          placeholder="Enter Your Address"
          onChange={handleChange}
        />

      </div>
      <div>
        <label htmlFor="postal">Pin Code</label>
        <input
          type="text"
          id="postal"
          name="postalCode"
          placeholder="Enter Your postal-code"
          onChange={handleChange}
        />

      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Enter Your City"
          onChange={handleChange}
        />

      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit} onClick={submitHandler}>
          Confirm
        </button>
      </div>
    </form>
  );
};

Checkout.propTypes = {
  onConfirm: pt.func,
  onCancel: pt.func,
};
export default Checkout;

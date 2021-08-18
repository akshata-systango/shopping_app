import React, { useRef, useState } from "react";
import "./style/checkoutForm.css";

const CheckOutDetailForm = (props) => {
  const [checkInputValidity, setCheckInputValidity] = useState({
    name: true,
    address: true,
    pinCode: true,
    contactInfo: true,
    city: true,
  });

  const userNameRef = useRef();
  const addressRef = useRef();
  const pinCodeRef = useRef();
  const contactRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredUserName = userNameRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredPinCode = pinCodeRef.current.value;
    const enteredContactInfo = contactRef.current.value;
    const enteredCity = cityRef.current.value;

    if (
      enteredUserName.trim() !== "" ||
      enteredAddress.trim() !== "" ||
      enteredPinCode.trim() !== "" || enteredPinCode.trim().length === 6 ||
      enteredContactInfo.trim() !== "" ||
      enteredCity.trim() !== ""
    ) {
      return setCheckInputValidity({
        name: enteredUserName,
        address: enteredAddress,
        pinCode: enteredPinCode,
        contactInfo: enteredContactInfo,
        city: enteredCity,
      });
    }
  };

  return (
    <>
      <form onSubmit={confirmHandler} className="detailform">
        <div className="username">
          <label htmlFor="uname">Name:-</label>
          <input
            type="text"
            name="uname"
            placeholder="Enter name"
            className="uname"
            ref={userNameRef}
          />
          {!checkInputValidity.name && <p>Please enter a valid UserName!</p>}
        </div>
        <div className="address">
          <label htmlFor="address">Address:-</label>
          <input
            type="text"
            className="address"
            placeholder="Enter address"
            ref={addressRef}
          />
          {!checkInputValidity.address && <p>Please enter a valid Address!</p>}
        </div>
        <div className="pinCode">
          <label htmlFor="pCode">Pin-Code:-</label>
          <input
            type="text"
            className="pcode"
            placeholder="Enter Pin-Code"
            ref={pinCodeRef}
          />
          {!checkInputValidity.pinCode && (
            <p>PinCode should not be empty and less than 6 characters!</p>
          )}
        </div>
        <div className="PhoneNumber">
          <label htmlFor="pNumber">Contact:-</label>
          <input
            type="text"
            className="contact"
            placeholder="Enter contact number"
            ref={contactRef}
          />
          {!checkInputValidity.contactInfo && (
            <p>Please enter a valid Contact number!</p>
          )}
        </div>
        <div className="city">
          <label htmlFor="city">City:-</label>
          <input
            type="text"
            className="city"
            placeholder="Enter city"
            ref={cityRef}
          />
          {!checkInputValidity.city && <p>Please enter a valid City!</p>}
        </div>
        <button type="submit">Done</button>
        <button onClick={props.onCancel}>Cancel</button>
      </form>
    </>
  );
};



export default CheckOutDetailForm;

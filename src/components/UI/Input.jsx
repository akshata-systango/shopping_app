import React from 'react';
import './style/Modal.css';
import pt from 'prop-types';
const Input = React.forwardRef((props, ref) => {
    return (
      <div className="input">
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref}{...props.input} />
      </div>
    );
  });

Input.propTypes = {
label : pt.element.isRequired,
input : pt.element.isRequired
}
  
  export default Input;
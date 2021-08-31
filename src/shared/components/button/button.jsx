import React from 'react';
import './button.css';
import pt from 'prop-types';

const Button = ({filter,button}) =>{
    return <>
    {button.map((cat,i) => {return <button type='button' className='btns' onClick={() => filter(cat)} key={i}>{cat}</button>}) }
    </>
//  return <button type={props.type} className={props.className} onClick={props.clickHandler}>{props.children}</button>
}
Button.propTypes = {
filter : pt.func.isRequired,
button : pt.array.isRequired
}
export default Button;
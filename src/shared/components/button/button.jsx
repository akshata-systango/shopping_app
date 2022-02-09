import React from 'react';
import './button.css';
import pt from 'prop-types';

const Button = ({filter,button}) =>{
    return <>
    {button?.map((cat,i) => {return <button type='button' className='btns' onClick={() => filter(cat)} key={i}>{cat}</button>}) }
    </>
}
Button.propTypes = {
filter : pt.func,
button : pt.array
}
export default Button;
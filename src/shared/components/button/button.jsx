import React from 'react';

const Button = ({filter,button}) =>{
    return <>
    {button.map((cat,i) => {return <button type='button' onClick={() => filter(cat)} key={i}>{cat}</button>}) }
    </>
//  return <button type={props.type} className={props.className} onClick={props.clickHandler}>{props.children}</button>
}

export default Button;
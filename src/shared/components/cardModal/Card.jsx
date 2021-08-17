import React, { useState, useContext } from 'react';
import './style/card.css';
import CartItemForm from '../cart/CartItemForm';
import CartContext from '../../../store/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const Card = (props) => {
    const cartCtx = useContext(CartContext);
    const [showButton, setShowButton] = useState(false);
    const [showSize, setShowSize] = useState(false)

    toast.configure();

    const onToggleHandler = () => {
        setShowSize(true)
        setTimeout(() => { setShowSize(false) }, 3000)
    }

    const showAddToCartButton = () => {
        setShowButton(true);

    }

    const addToCartHandler = (amount) => {

        setTimeout(() => { toast("item added 😎") }, 300);
        cartCtx.AddItem({
            id: props.id,
            brand: props.brand,
            amount: amount,
            detail: props.detail,
            category: props.category,
            price: props.price,
        })
    }

    return (
        <React.Fragment>
            <div className="card" onMouseOver={onToggleHandler}>
                <div className="card-body" >

                    <img className="card-img-top" src={props.imgsrc} alt="Cant load" />
                    <h6 className="card-text">{props.brand}</h6>
                    <p className="category">{props.category}</p>
                    <p className="card-title title1">{props.detail}</p>
                    <p className="card-title">${props.price}</p>


                    {showSize &&
                        <div>
                            {showButton ? <div><CartItemForm id={props.id} onAddToCart={addToCartHandler} /></div> :
                                <div> <p>Select size</p>
                                    <div className="size">
                                        <input type="button" value="38" onClick={showAddToCartButton} className="size" />

                                        <input type="button" value="39" onClick={showAddToCartButton} className="size" />
                                        <input type="button" value="40" onClick={showAddToCartButton} className="size" />
                                        <input type="button" value="42" onClick={showAddToCartButton} className="size" />
                                        <input type="button" value="44" onClick={showAddToCartButton} className="size" /></div></div>}
                            <div className="availabilityMessage"> Sizes: XS,S,M,L,XL,XXL </div></div>}

                </div>
            </div>
        </React.Fragment>
    )
};

export default Card;
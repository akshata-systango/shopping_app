import React, { useState, useContext } from "react";
import "./style/card.css";
import AddProductQuantity from "../../../components/Product/ProductQuantityForm";
import CartContext from "../../../store/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ProductSize from "../../../utils/Constant";
import Input from "../button/Input";
import pt from "prop-types";

const Card = (props) => {
  const cartCtx = useContext(CartContext);
  const [showButton, setShowButton] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [size, setSize] = useState(38);

  toast.configure();
  const onToggleHandler = () => {
    setShowSize(true);
    setTimeout(() => {
      setShowSize(false);
    }, 3000);
  };

  const showAddToCartButton = (event) => {
    setShowButton(true);
    setSize(event.target.value);
  };

  const addToCartHandler = (amount) => {
    toast.success("Item added to cart !", {
      position: toast.POSITION.BOTTOM_CENTER,
      draggablePercent: 60,
    });

    cartCtx.addItem({
      id: props.id,
      brand: props.brand,
      size: size,
      amount: amount,
      detail: props.detail,
      category: props.category,
      price: props.price,
    });
    console.log("size:- ", size);
  };

  return (
    <React.Fragment>
      <div className="card" onMouseOver={onToggleHandler}>
        <div className="card-body">
          <img className="card-img-top" src={props.imgsrc} alt="Cant load" />
          <h6 className="card-text">{props.brand}</h6>
          <p className="category">{props.category}</p>
          <p className="card-title title1">{props.detail}</p>
          <p className="card-title">${props.price}</p>

          {showSize && (
            <div>
              {showButton ? (
                <div>
                  <AddProductQuantity
                    id={props.id}
                    onAddToCart={addToCartHandler}
                  />
                </div>
              ) : (
                <div>
                  <p>Select size</p>
                  <div className="size">
                    <Input
                      type="button"
                      id="size"
                      value={ProductSize[0]}
                      onClick={showAddToCartButton}
                      className="size"
                    />
                    <Input
                      type="button"
                      id="size"
                      value={ProductSize[1]}
                      onClick={showAddToCartButton}
                      className="size"
                    />
                    <Input
                      type="button"
                      id="size"
                      value={ProductSize[2]}
                      onClick={showAddToCartButton}
                      className="size"
                    />
                    <Input
                      type="button"
                      id="size"
                      value={ProductSize[3]}
                      onClick={showAddToCartButton}
                      className="size"
                    />
                    <Input
                      type="button"
                      id="size"
                      value={ProductSize[4]}
                      onClick={showAddToCartButton}
                      className="size"
                    />
                  </div>
                </div>
              )}
              <div className="availabilityMessage">Sizes: XS,S,M,L,XL,XXL</div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
Card.propTypes = {
  id: pt.string.isRequired,
  brand: pt.string.isRequired,
  size: pt.number.isRequired,
  amount: pt.number.isRequired,
  detail: pt.string.isRequired,
  category: pt.string.isRequired,
  price: pt.number.isRequired,
};
export default Card;

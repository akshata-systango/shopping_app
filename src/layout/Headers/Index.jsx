<<<<<<< HEAD
import React, { useState, useContext } from "react";
=======
import React, { useState, useContext, useRef } from "react";
>>>>>>> initial search option
import "./style/Header.css";
import pt from 'prop-types';
import systangoLogo from "../../assets/images/Rectangle.svg";
import { Link } from "react-router-dom";
import searchImage from "../../assets/images/Vector2.svg";
import cartImage from "../../assets/images/Vector1.svg";
import profileImage from "../../assets/images/Vector.svg";
import CartContext from "../../store/CartContext";

<<<<<<< HEAD
import SearchComponent from "./SearchComponent";

const Header = (props) => {
  const [showInput, setShowInput] = useState(false);
  const searchHandler = () => {
    setShowInput(true);
  };
=======
const Header = (props) => {
  const [showInput, setShowInput] = useState(false);
  const SearchInputRef = useRef()
  const searchHandler = () => {
    setShowInput(true);
  };
  const Searching = (event) => {
    event.preventDefault();
    const enteredSearch = SearchInputRef.current.value;
    console.log('entered search is:-',enteredSearch)
    // if(product.brand === enteredSearch){
    //   product.map(item => {<Card 
    //     imgsrc={item.imgsrc}
    //     key={item.id}
    //     id={item.id}
    //     brand={item.brand}
    //     category={item.category}
    //     detail={item.detail}
    //     price={item.price}/>})
    // }

  }
   
>>>>>>> initial search option
  const InstallButtonHandler = () => {
    <Link to="/newPage" />;
  };
  // cartImage and counting the items
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <React.Fragment>
    
        <div>
          <img src={systangoLogo} alt="can't load" className="sysImage" />
          <div >
            <Link to="/shop">
              <span className="shop">Shop</span>
            </Link>
          </div>
          <div >
            <Link to="/about">
              <span className="aboutUs">About us </span>
            </Link>
          </div>
          <div >
            <Link to="/contact">
              <span className="contactUs">Contact Us</span>
            </Link>
          </div>
          <div >
            <Link to="/store">
              <span className="ourStore"> Our Store </span>
            </Link>
          </div>

          <div className="vector1" onClick={props.onCartIconClick}>
            <div className="cart">
              <img src={cartImage} alt="can't load" />
              <span className="itemCount"> {numberOfCartItems}</span>
            </div>
          </div>
          {/* user profile section*/}
          <div className="vector">
            <div className="userProfile">
              <Link to="/authentication">
                <img src={profileImage} alt="can't load" />
              </Link>
            </div>
          </div>

          {/* searching item */}
          <div className="vector2">
            <img src={searchImage} onClick={searchHandler} alt="can't load" />
            {showInput && (
              <div className="searchInput">
<<<<<<< HEAD
               <SearchComponent />
=======
                <button
                  type="button"
                  className="btn-primary"
                  onClick={Searching}
                >
                  Go
                </button>
                <input type="search" placeholder="search" className="close" ref={SearchInputRef}/>
>>>>>>> initial search option
              </div>
            )}
          </div>

          <div className="ractangle">
            <p className="inviteLine">
              Invite Friends To Friends Festival And Get Up To $150 Bonus For
              Every Referral
            </p>
            <button
              type="button"
              className="inviteNow"
              onClick={InstallButtonHandler}
            >
              Install now
            </button>
          </div>
        </div>
    </React.Fragment>
  );
};

Header.propTypes = {
  onCartIconClick : pt.func.isRequired
}

export default Header;

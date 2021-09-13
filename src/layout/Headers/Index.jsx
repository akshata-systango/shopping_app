import React, { useContext } from "react";
import "./style/Header.css";
import pt from "prop-types";
import systangoLogo from "../../assets/images/Rectangle.svg";
import { Link } from "react-router-dom";
import searchImage from "../../assets/images/Vector2.svg";
import cartImage from "../../assets/images/Vector1.svg";
import profileImage from "../../assets/images/Vector.svg";
import CartContext from "../../store/CartContext";

const Header = (props) => {
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
      <div className="w3-row">
        <div className="w3-third w3-container">
          <img src={systangoLogo} alt="can't load" className="sysImage" />
        </div>
        <div className="w3-third w3-container">
          <div>
            <Link to="/shop">
              <span className="shop">Shop</span>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <span className="aboutUs">About us </span>
            </Link>
          </div>
          <div>
            <Link to="/contact">
              <span className="contactUs">Contact Us</span>
            </Link>
          </div>
          <div>
            <Link to="/store">
              <span className="ourStore"> Our Store </span>
            </Link>
          </div>
        </div>
        <div className="w3-third w3-container">
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
          <Link to="/search">
            <img src={searchImage} alt="can't load" />
            
            
               
                {/* <SearchComponent /> */}
              </Link>
          </div>
        </div>
      </div>
      <div className="ractangle">
        <p className="inviteLine">
          Invite Friends To Friends Festival And Get Up To $150 Bonus For Every
          Referral
        </p>
        <button
          type="button"
          className="inviteNow"
          onClick={InstallButtonHandler}
        >
          Install now
        </button>
      </div>
    </React.Fragment>
  );
};

Header.propTypes = {
  onCartIconClick: pt.func.isRequired,
};

export default Header;

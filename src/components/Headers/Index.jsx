import React, { useState, useContext } from "react";
import "./style/Header.css";
import systangoLogo from "../../assets/images/Rectangle.svg";
import { Link } from "react-router-dom";
import searchImage from "../../assets/images/Vector2.svg";
import cartImage from "../../assets/images/Vector1.svg";
import CartContext from "../../store/CartContext";

const Header = (props) => {
  const [showInput, setShowInput] = useState(false);
  const searchHandler = () => {
    setShowInput(true);
  };
  const colseHandler = () => {
    setShowInput(false);
  };
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <img src={systangoLogo} alt="can't load" className="sysImage" />
          <div className="shop">
            <div className="dropdown">
              <a
                className="btn btn-light dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Mens
                </a>
                <a className="dropdown-item" href="#">
                  Womens
                </a>
                <a className="dropdown-item" href="#">
                  Kids
                </a>
              </div>
            </div>
          </div>
          <div className="aboutUs">
            <Link to="/about">
              {" "}
              <span>About us </span>
            </Link>
          </div>
          <div className="contactUs">
            <Link to="/contact">
              {" "}
              <span>Contact Us</span>
            </Link>
          </div>
          <div className="ourStore">
            <Link to="/store">
              <span> Our Store </span>
            </Link>
          </div>

          {/* <div className="vector"><Account/></div> */}
          {/* cart image and counter */}
          <div className="vector1" onClick={props.onCartIconClick}>
            <div className="cart">
              <img src={cartImage} alt="can't load" />
              <span className="itemCount"> {numberOfCartItems}</span>
            </div>
          </div>

          {/* searching item */}
          <div className="vector2">
            <img src={searchImage} onClick={searchHandler} alt="can't load" />
            {showInput && (
              <div class="searchInput">
                <button
                  type="button"
                  class="btn-primary"
                  onClick={colseHandler}
                >
                  Go
                </button>
                <input type="search" placeholder="search" className="close" />
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
      </nav>
    </React.Fragment>
  );
};

export default Header;

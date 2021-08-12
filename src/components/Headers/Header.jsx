import React from 'react';
import './Header.css';
import systangoLogo from '../../assets/images/Rectangle.svg';
import { Link } from 'react-router-dom';
import Search from './Icons/Search';
import Cart from './cart/Cart';
import Account from './accounts/Accounts';


const Header = (props) => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div >
                    <img src={systangoLogo} alt="can't load" className="sysImage" />
                    <div className="shop">
                        <div className="dropdown">
                            <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Shop
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Mens</a>
                                <a className="dropdown-item" href="#">Womens</a>
                                <a className="dropdown-item" href="#">Kids</a>
                            </div>
                        </div></div>
                    <div className="aboutUs"><Link to="/about"> <span>About us </span></Link></div>
                    <div className="contactUs"><Link to="/contact"> <span>Contact Us</span></Link></div>
                    <div className="ourStore"><Link to="/store"><span> Our Store </span></Link></div>


                    <div className="vector"><Account/></div>
                    <div className="vector1" onClick={props.onShow}><Cart/></div>
                    <div className="vector2"><Search/></div>
                </div>

            </nav>

        </React.Fragment>
    )
};

export default Header;
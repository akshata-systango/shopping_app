import React from 'react';
import './Header.css';
import systangoLogo from '../../assets/images/Rectangle.svg';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div>
                    <img src={systangoLogo} alt="can't load" />
                </div>

                <div>
                    <ul>
                        <li>
                            <select id="cars" name="cars">
                            <option value="volvo">Shop</option>
                                <option value="volvo">Mens</option>
                                <option value="saab">Womens</option>
                                <option value="fiat">Kids</option>
                            </select></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Stores</a></li>
                        <li><Link to="/">Contact Us</Link></li>

                    </ul>
                </div>

                <div className="icon">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </nav>

        </React.Fragment>
    )
};

export default Header;
import React from 'react';
import './Header.css';
import systangoLogo from '../../assets/images/Rectangle.svg';
import verctorLogo from '../../assets/images/Vector.svg';
import verctor1Logo from '../../assets/images/Vector1.svg';
import verctor2Logo from '../../assets/images/Vector2.svg';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               
                <div >
                    <img src={systangoLogo} alt="can't load" className="sysImage"/>

                    <ul>
                        <li className="shop">
                            <select>
                            <option value="volvo">Shop</option>
                                <option value="volvo">Mens</option>
                                <option value="saab">Womens</option>
                                <option value="fiat">Kids</option>
                            </select></li>
                        <li className="aboutUs"><a href="#">About Us</a></li>
                        <li className="ourStore"><a href="#">Our Stores</a></li>
                        <li className="contactUs"><Link to="/contact">Contact Us</Link></li>

                    </ul>
                    <button className="vector"><img src={verctorLogo}/></button> 
                 <button className="vector1"><img src={verctor1Logo}/></button>
                    <button className="vector2"><img src={verctor2Logo}/></button> 
                </div>
               
            </nav>

        </React.Fragment>
    )
};

export default Header;
import React from 'react';
import './Header.css';
import systangoLogo from '../../assets/images/Rectangle.svg';
import verctorLogo from '../../assets/images/Vector.svg';
import verctor1Logo from '../../assets/images/Vector1.svg';
import verctor2Logo from '../../assets/images/Vector2.svg';


const Header = () => {

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
                    <div className="aboutUs"><a href="#">About Us</a></div>
                    <div className="contactUs"><a href="#">Contact Us</a></div>
                    <div className="ourStore"><a href="#">Our Store</a></div>


                    <button className="vector"><img src={verctorLogo} /></button>
                    <button className="vector1"><img src={verctor1Logo} /></button>
                    <button className="vector2"><img src={verctor2Logo} /></button>
                </div>

            </nav>

        </React.Fragment>
    )
};

export default Header;
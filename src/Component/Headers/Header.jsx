import React from 'react';
import './Header.css';
import Filter from '../filter/Filter';
import MapCard from '../Card/MapCard';
import data from '../Card/data';

const Header = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="sys-logo">
                    <img src="./assets/sys.png" alt="can't load" />

                </div>
                <div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Shop
                                    <span class="sr-only">(current)</span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact us </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Our stores</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="icon">
                    <i class="fa fa-search" aria-hidden="true">Search</i>
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </nav>
            <div className="heading-three">
                <p>Invite Friends To Friends Festival And Get Up To $150 Bonus For Every Referral  </p>
                <button type="button" class="btn btn-light btn-xs">Install now</button>
            </div>

            <div className="productCount">All Products</div>
            <Filter />
            <div className="displayCard">{data.map(MapCard)}</div>






        </React.Fragment>
    )
};

export default Header;
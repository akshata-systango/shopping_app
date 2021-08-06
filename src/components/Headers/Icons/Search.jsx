import React, { useState } from 'react';
import verctor2Logo from '../../../assets/images/Vector2.svg';
import './search.css';

const Search = () => {
    const [showInput, setShowInput] = useState(false);
    const searchHandler = () => {
        setShowInput(true)
    }
const colseHandler = () => {
    setShowInput(false)
}
    return (
        <React.Fragment>
            <img src={verctor2Logo} onClick={searchHandler} />
            {showInput && 
            
                <div class="searchInput">
                    <button type="button" class="btn-primary" onClick={colseHandler}>Go</button>  
                    <input type="search" placeholder="search" className="close"/>
                      
                </div>
                
               
            }
        </React.Fragment>
    )
}

export default Search;

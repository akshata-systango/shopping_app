import React from 'react';
import './style/Header.css';

const Search = ({handleSearch}) => {
    const onChange = (e) => {
        handleSearch(e.target.value)
        // console.log('lets see',e.target.value)

    }
    return (
        <div className="searching">
             <button type="submit" className="searchbtn">Search</button>
             <input type="search" name="search" className="close" placeholder="Search..." onChange={onChange}/>
             
        </div>
    );
};

export default Search;
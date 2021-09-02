import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [ProductList, setProductList] = useState();

  const fetchData = async () => {
    return await fetch('https://shopping-app-5c89b-default-rtdb.firebaseio.com/clothes.json')
      .then(response => response.json())
      .then(data => {
         setProductList(data) 
         setCountryListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setProductList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Country List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <ProductList ProductList={ProductList}/>
    </>
   );
}

export default SearchPage
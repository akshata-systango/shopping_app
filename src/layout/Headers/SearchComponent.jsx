import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Select from "react-select";
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';

const SearchComponent = ({setSearchedResult},props) => {
const history  = useHistory()
const location = useLocation()
  const cartCtx = useContext(CartContext);
  const [Data, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log('something',queryString.parse(location.search));

console.log('props', props)
  const onInputChange = (value) => {
    console.log("value:- ", value);
    setInputValue(value);
    console.log("inputValue:- ", value);
    const FilteredData = cartCtx.products.filter((item) => {
      return item.detail?.toUpperCase().includes(value.toUpperCase());
    });
    setFilterData(FilteredData);
  };
  const option = Data.map((item) => ({
    label: item.detail,
    id:item.id,
    value: `${item.detail} ${item.brand}`,
  }));

  const onChange = (value) => {
    console.log("selected value is = ", value);
    const searchedResult = Data.filter((item) =>
      item.id === value.id
    );
    console.log("searched result is:-", searchedResult);
    setSearchedResult(searchedResult)
    // ProductDetail(searchedResult);
    return history.push("/productDetail?id=" + value.id.id);
  };

  return (
    <>
      <div>
        <Select
          placeholder="Search..."
          isSearchable={true}
          onInputChange={onInputChange}
          onChange={onChange}
          options={option}
          inputValue={inputValue}
          closeMenuOnSelect={true}
        />
      </div>
    </>
  );
};

export default SearchComponent;

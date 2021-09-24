import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Select from "react-select";
import { useHistory } from "react-router-dom";
// import ProductDetail from "./ProductDetail";

const SearchComponent = ({setSearchedResult}) => {
const history  = useHistory()
  const cartCtx = useContext(CartContext);
  const [Data, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");


  const onInputChange = (value) => {
    console.log("value:- ", value);
    setInputValue(value);
    console.log("inputValue:- ", value);
    const FilteredData = cartCtx.products.filter((item) => {
      return item.detail.toLowerCase().includes(value.toLowerCase());
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
    return history.push("/productDetail");
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
      {/* <div>
        {Data.map((item) => (
          <Card
            imgsrc={item.imgsrc}
            price={item.detail}
            brand={item.brand} 
          />
        ))}
      </div> */}
    </>
  );
};

export default SearchComponent;

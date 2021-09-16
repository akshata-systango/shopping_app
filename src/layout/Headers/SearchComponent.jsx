import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Select from "react-select";
// import { Link } from "react-router-dom";
// import Card from "../../shared/components/ProductCard/Index";
const SearchComponent = () => {
  const cartCtx = useContext(CartContext);
  const [Data, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (value) => {
    console.log("value:- ", value);
    setInputValue(value);
    console.log("inputValue:- ", inputValue);
    const FilteredData = cartCtx.products.filter((item) => {
      // console.log(
      //   "brand",
      //   item.brand.toLowerCase(),
      //   value.toLowerCase(),
      //   item.brand.toLowerCase().includes(value.toLowerCase())
      // );
      return item.brand.toLowerCase().includes(value.toLowerCase());
    });

    // console.log(
    //   "Filtering the data based on the brand name entered by the user:-",
    //   FilteredData
    // );
    setFilterData(FilteredData);
  };
  const option = Data.map((item) => ({
    label: item.detail,
    value: `${item.detail} ${item.brand}`,
  }));

  return (
    <>
      <div>
        <Select
          placeholder="Search..."
          isSearchable={true}
          onInputChange={onInputChange}
          options={option}
          inputValue={inputValue}
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

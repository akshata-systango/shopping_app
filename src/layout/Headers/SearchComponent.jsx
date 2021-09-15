import React, { useContext, useState, useRef } from "react";
// import { FormControl, InputGroup } from "react-bootstrap";
import CartContext from "../../store/CartContext";
import Select from "react-select";


const SearchComponent = () => {
  const inputBrandRef = useRef();
  const cartCtx = useContext(CartContext);
  const [Data, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  console.log("Items for the search component", cartCtx.products);

  const handleFilter = (event) => {
    // const searchBrand = event.target.value;
    event.preventDefault();
    const enteredInputBrandRef = inputBrandRef.current.value;
    console.log("Entered brand name is:-", enteredInputBrandRef);

    const FilteredData = cartCtx.products.filter((item) => {
      return item.brand.toLowerCase().includes(enteredInputBrandRef.toLowerCase());
    });

    console.log(
      "Filtering the data based on the brand name entered by the user:-",
      FilteredData
    );
    setFilterData(FilteredData);
  };
  const r = Data.map((item) => item.detail);

  return (
    <>
      <div>
        {/* <input
          onChange={handleFilter}
          options={Data.map((item) => item.detail)}
        /> */}
        {/* <div className="">
          <InputGroup className="mb-3-s">
            <FormControl
              placeholder="search..."
              onChange={handleFilter}
              aria-describedby="basic-addon2"
            />
          </InputGroup>
        </div>
        <div className="">
          {Data.map((item) => (
            <li className="listingProductsDetails">{item.detail}</li>
          ))}
        </div> */}
        <Select
          ref={inputBrandRef}
          placeholder="Search..."
          inputValue={inputValue}
          onInputChange={handleFilter}
          options={r}
        />
      </div>
    </>
  );
};

export default SearchComponent;

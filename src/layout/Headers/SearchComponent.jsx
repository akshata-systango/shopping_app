import React, { useContext, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const SearchComponent = () => {
  const cartCtx = useContext(CartContext);

  console.log("items==", cartCtx.products);

  const [filterData, setFilterData] = useState([]);
  const handleFilter = (event) => {
    const searchBrand = event.target.value;
    const newFilter = cartCtx.products.filter((item) => {
      return item.category.toLowerCase().includes(searchBrand.toLowerCase());
    });
    console.log("lets see", newFilter);
    setFilterData(newFilter);
  };
  return (
    <>
      <div>
        <div className="searching">
          <InputGroup className="mb-3-s">
            <FormControl
              placeholder="search..."
              onChange={handleFilter}
              aria-describedby="basic-addon2"
            />
          </InputGroup>
        </div>
        <div className="listing">
          {filterData.map((item) => (
            <li className="listingProductsDetails">{item.detail}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchComponent;

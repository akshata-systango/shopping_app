import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
const SearchComponent = () => {
  const cartCtx = useContext(CartContext);

  console.log("items==", cartCtx.products);

  const [filterData, setFilterData] = useState([]);
  const handleFilter = (event) => {
    const searchBrand = event.target.value;
    const newFilter = cartCtx.products.filter((item) => {
      return item.brand.toLowerCase().includes(searchBrand.toLowerCase());
    });
    console.log("lets see", newFilter);
    setFilterData(newFilter);
  };
  return (
    <>
      <div className="searching">
        <input
          className="close"
          onChange={handleFilter}
          placeholder="search..."
        />
      </div>
      <div className="listing">
        {filterData.map((item) => (
          <li>
            {item.detail}
          </li>
        ))}
      </div>
    </>
  );
};

export default SearchComponent;

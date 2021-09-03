import React, { useState } from "react";

const SearchComponent =  ({product}) => {
  const [filterData, setFilterData] = useState([])
  console.log(
    "test",
    product?.map((item) => item)
  );
  const handleFilter = (event) => {
    const searchBrand = event.target.value;
    const newFilter = product?.filter(item => {return item.detail.toLowerCase().includes(searchBrand.toLowerCase())})
    setFilterData(newFilter ?? [])


  }
  return (
    <div className="searching">
      <button type="submit" className="searchbtn">
        Search
      </button>
      <input
        type="search"
        name="search"
        className="close"
        placeholder="Search..."
        onChange={handleFilter}
      />

      {filterData.map((item) => (
        <li key={item.id}>{item.brand}</li>
      ))}
    </div>
  );
};

export default SearchComponent;

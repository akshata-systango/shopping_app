import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Select from "react-select";
import { useHistory } from "react-router-dom";

const SearchComponent = ({ setSearchedResult }) => {
  const history = useHistory();
  const cartCtx = useContext(CartContext);
  const [Data, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (value) => {
    setInputValue(value);
    const FilteredData = cartCtx.products.filter((item) => {
      return item.detail?.toUpperCase().includes(value.toUpperCase());
    });
    setFilterData(FilteredData);
  };
  const option = Data.map((item) => ({
    label: item.detail,
    id: item.id,
    value: `${item.detail} ${item.brand}`,
  }));

  const onChange = (value) => {
    const searchedResult = Data.filter((item) => item.id === value.id);
    setSearchedResult(searchedResult);
    return history.push("/productDetail/" + value.id);
  };

  return (
    <><form data-testid="select">

      <div title="searching">
        <Select
          id="select-elements"
          title="react-select"
          placeholder="Search..."
          isSearchable={true}
          onInputChange={onInputChange}
          onChange={onChange}
          options={option}
          inputValue={inputValue}
          closeMenuOnSelect={true}
        />
      </div>
      </form>
    </>
  );
};

export default SearchComponent;

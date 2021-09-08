import React from "react";
import Creatable from "react-select/creatable";
//import filtered data and add it to coloroption's place

const reactSelect = (props) => {
  //   const handleChange = (newValue, actionMeta) => {
  //     console.group("Value Changed");
  //     console.log(newValue);
  //     console.log(`action: ${actionMeta.action}`);
  //     console.groupEnd();
  //   };
  //   const handleInputChange = (inputValue, actionMeta) => {
  //     console.group("Input Changed");
  //     console.log(inputValue);
  //     console.log(`action: ${actionMeta.action}`);
  //     console.groupEnd();
  //   };
  return (
    <Creatable
      {...props}
    />
  );
};

export default reactSelect;

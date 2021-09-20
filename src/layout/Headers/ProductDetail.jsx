import React from "react";
import Card from "../../shared/components/ProductCard/Index";

const ProductDetail = (props) => {
  const { searchedResult } = props
  console.log("results is:-", searchedResult);
  console.log('props are:-', props)
  return (
    <div className="displayCard">
      {searchedResult?.map((item) => (
        <Card
          key={item.id}
          imgsrc={item.imgsrc}
          brand={item.brand}
          category={item.category}
          detail={item.detail}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductDetail;

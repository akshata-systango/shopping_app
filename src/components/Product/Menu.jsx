import React, { useState } from "react";
import Card from "../../shared/components/ProductCard/Index";
import Button from "../../shared/components/button/button";

const Buttoncategories = [
  "All",
  ...new Set(product.map((item) => item.category)),
];
function Index() {
  const [menudata, setMenuData] = useState(product);
  const [buttons, setButton] = useState(Buttoncategories);

  const filter = (category) => {
    if (button === "All") {
      setButton(product);
      return;
    }
    const filterData = product.filter((item) => {
      return item.category === category;
    });
    setMenuData(filterData);
  };
  return (
    <div>
      <Button button={buttons} filter={filter} />
      {menudata.map((value) => {
        return (
          <Card
            imgsrc={value.imgsrc}
            key={value.id}
            id={value.id}
            brand={value.brand}
            category={value.category}
            detail={value.detail}
            price={value.price}
          />
        );
      })}
    </div>
  );
}

export default Index;

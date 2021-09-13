import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import Card from "../../shared/components/ProductCard/Index";

const AllProducts = () => {
  const cartCtx = useContext(CartContext);
  const Products = cartCtx.products;
  return (
    <div className="displayCard">
      {Products.map((item) => (
        <Card
          imgsrc={item.imgsrc}
          key={item.id}
          id={item.id}
          brand={item.brand}
          category={item.category}
          detail={item.detail}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default AllProducts;

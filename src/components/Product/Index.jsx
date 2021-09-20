import React, { useState, useContext } from "react";
import "./style/product.css";
import Button from "../../shared/components/button/button";
import Helper from "../../utils/Helper";
import Card from "../../shared/components/ProductCard/Index";
import CartContext from "../../store/CartContext";

const Products = (props) => {
  const cartCtx = useContext(CartContext);
  const Product = cartCtx.products;
  // setTimeout( () => console.log("lets check",Product.length), 3000);
  const Buttoncategories = [
    "All",
    "tshirt",
    "shirt",
    "hoodie",
    "sweatShirt",
    "tees",
  ];
  const [menudata, setMenuData] = useState(Product);
  const [mapData, setMapData] = useState(true);
  const buttons = Buttoncategories;
  const [sortingOrder, setSortingOrder] = useState("Ascending");
  let [count, setCount] = useState(30);

  const filter = (category) => {
    let prodCount;
    if (category === "All") {
      setMenuData(Product);
      prodCount = Product.length;
      setMapData(false);
      setCount(prodCount);

      return;
    }
    const filterData = Product.filter((item) => {
      return item.category === category;
    });
    setMenuData(filterData);
    prodCount = filterData.length;
    setMapData(false);
    setCount(prodCount);
  };
  const PriceHighToLowHandler = () => {
    setSortingOrder("Descending");
  };
  const PriceLowToHighHandler = () => {
    setSortingOrder("Ascending");
  };
  return (
    <div>
      <div className="flexContainer">
        <p className="filters"> FILTERS: </p>
        <div className="buttons">
          <Button button={buttons} filter={filter} />
        </div>
        <label className="dropdown">
          <div className="dd-button">
            <span className="filterText">Filter: Price</span>
          </div>
          <input type="checkbox" className="dd-input" id="test" />

          <ul className="dd-menu">
            <li>
              <div onClick={PriceHighToLowHandler}>High To Low</div>
            </li>

            <li>
              <div onClick={PriceLowToHighHandler}>Low To High</div>
            </li>
          </ul>
        </label>
      </div>
      <div className="displayCard">
        {mapData
          ? Product.map((item) => (
              <Card
                imgsrc={item.imgsrc}
                key={item.id}
                id={item.id}
                brand={item.brand}
                category={item.category}
                detail={item.detail}
                price={item.price}
              />
            ))
          : Helper(menudata, sortingOrder).map((item) => {
              return (
                <Card
                  imgsrc={item.imgsrc}
                  key={item.id}
                  id={item.id}
                  brand={item.brand}
                  category={item.category}
                  detail={item.detail}
                  price={item.price}
                />
              );
            })}
      </div>
      <div className="productCount">
        <p className="productStyling">All Products</p>
        {count && <h6 className="pCount">({count} Product)</h6>}
      </div>

      <p className="gap"></p>
    </div>
  );
};

export default Products;

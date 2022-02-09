import React, { useState, useContext } from "react";
import "./style/product.css";
import Button from "../../shared/components/button/button";
import {Helper} from "../../utils/Helper";
import Card from "../../shared/components/ProductCard/Index";
import CartContext from "../../store/CartContext";

const Products = () => {
  const cartCtx = useContext(CartContext);
  const Product = cartCtx.products;
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
        <p className="filters" data-testid="filteringCategory">
          FILTERS:
        </p>
        <div className="buttons">
          <Button button={buttons} filter={filter}  data-testid = "useState"/>
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
      <div className="displayCard" title="products">
        {mapData
          ? Product.map((item, index) => (
              <div >
                <Card
                title="title3"
                  imgsrc={item.imgsrc}
                  key={index}
                  id={item.id}
                  brand={item.brand}
                  category={item.category}
                  detail={item.detail}
                  price={item.price}
                />
              </div>
            ))
          : Helper(menudata, sortingOrder).map((item, index) => {
              return (
                <Card
                  imgsrc={item.imgsrc}
                  key={index}
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
        {count && (
          <h6 className="pCount" title="count">
            ({count} Product)
          </h6>
        )}
      </div>

      <p className="gap"></p>
    </div>
  );
};

export default Products;

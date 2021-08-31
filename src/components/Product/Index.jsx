import React, { useState, useEffect } from "react";
import "./style/product.css";
import Button from "../../shared/components/button/button";
import Helper from "../../utils/Helper";
import Card from "../../shared/components/ProductCard/Index";

const Products = () => {
  const [product, setProduct] = useState([]);

  let [count, setCount] = useState(30);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://shopping-app-5c89b-default-rtdb.firebaseio.com/clothes.json"
      );
      const responseData = await response.json();
      const fetchProducts = [];

      Object.values(responseData).map((item) => {
        return fetchProducts.push({
          id: item,
          imgsrc: item.imgsrc,
          brand: item.brand,
          category: item.category,
          detail: item.detail,
          price: item.price,
        });
      });

      setProduct(fetchProducts);
    };
    fetchProducts();
  }, []);

  // const Allcategory = [ ...new Set(product.map(item => item.category))]
  // console.log("products", product);

  const Buttoncategories = [
    "All",
    "tshirt",
    "shirt",
    "hoodie",
    "sweatShirt",
    "tees",
  ];
  const [menudata, setMenuData] = useState(product);
  const [mapCard, setMapCard] = useState(true)
  const buttons = Buttoncategories;
  const [sortingOrder, setSortingOrder] = useState("Ascending");

  const filter = (category) => {
    let prodCount;
    if (category === "All") {
      setMenuData(product);
      prodCount = product.length;
      setCount(prodCount);
      setMapCard(false)
      return;
    }
    const filterData = product.filter((item) => {
      return item.category === category;
    });
    setMenuData(filterData);
    prodCount = filterData.length;
    setCount(prodCount);
    setMapCard(false)
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
              <div onClick={PriceHighToLowHandler}>High To Low</div></li>

            <li>
              <div onClick={PriceLowToHighHandler}>Low To High</div>
            </li>
          </ul>
        </label>
        <div className="displayCard">
          {Helper(menudata, sortingOrder).map((value) => {
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
          {mapCard && product.map((value) => {
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
          <div className="productCount">
            <p className="productStyling">All Products</p>
            {count && <h6 className="pCount">({count} Product)</h6>}
          </div>
        </div>
      </div>
      <p className="gap"></p>
    </div>
  );
};

export default Products;

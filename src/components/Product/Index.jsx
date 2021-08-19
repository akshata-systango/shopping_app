import React, { useState, useEffect } from "react";
import "./style/product.css";
import Button from "../../shared/components/button/button";
import Helper from "../../utils/Helper";
import Card from "../../shared/components/ProductCard/Index";

const Products = () => {
  const [product, setProduct] = useState([]);

  // const initialProductCount = Object.keys(product).length;
  // console.log("productCount=", initialProductCount);

  let [count, setCount] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://shopping-app-5c89b-default-rtdb.firebaseio.com/clothes.json"
      );
      const responseData = await response.json();
      const fetchProducts = [];
      console.log("ghj", Object.keys(responseData));
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
      console.log("ghjkk", fetchProducts);
      setProduct(fetchProducts);
    };
    fetchProducts();
  }, []);

  // const Allcategory = [ ...new Set(product.map(item => item.category))]
  console.log("products", product);

  const Buttoncategories = [
    "All",
    "tshirt",
    "shirt",
    "hoodie",
    "sweatShirt",
    "tees",
  ];
  const [menudata, setMenuData] = useState(product);
  const [buttons, setButton] = useState(Buttoncategories);
  const [sortingOrder, setSortingOrder] = useState("Ascending");

  const filter = (category) => {
    if (category === "All") {
      setMenuData(product);
      return;
    }
    const filterData = product.filter((item) => {
      return item.category === category;
    });
    setMenuData(filterData);
    const prodCount = filterData.length;
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
        <div className="displayCard">
          {Helper(menudata,sortingOrder).map((value) => {
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

//   const showAllItemHandler = (Allcategory) => {
//     const filterProduct = product.filter((item) => {
//       return (
//         item.category ===  Allcategory
//         // item.category === "hoodie" ||
//         // item.category === "sweatShirt" ||
//         // item.category === "tees" ||
//         // item.category === "shirt"
//       );
//     });
//     setProduct(filterProduct);
//     const prodCount = filterProduct.length;
//     setCount(prodCount);
//     // console.log("all product:-", filterProduct);
//   };

//   const showTshirtHandler = () => {
//     const filterProduct = product.filter((item) => {
//       return item.category === "tshirt";
//     });
//     setProduct(filterProduct);
//     const prodCount = filterProduct.length;
//     setCount(prodCount);
//     // console.log("T-shirts:-", filterProduct);
//   };
//   const showDenimHandler = () => {
//     const filterProduct = product.filter((item) => {
//       return item.category === "hoodie";
//     });
//     setProduct(filterProduct);
//     const prodCount = filterProduct.length;
//     setCount(prodCount);
//     // console.log("Denim:-", filterProduct);
//   };

//   const showSsHandler = () => {
//     const filterProduct = product.filter((item) => {
//       return item.category === "sweatShirt";
//     });
//     setProduct(filterProduct);
//     const prodCount = filterProduct.length;
//     setCount(prodCount);
//     // console.log("Sweat-Shirt:-", filterProduct);
//   };

//   const showTeesHandler = () => {
//     const filterProduct = product.filter((item) => {
//       return item.category === "tees";
//     });
//     setProduct(filterProduct);
//     const prodCount = filterProduct.length;
//     setCount(prodCount);

//     // console.log("Polo-Tees:-", filterProduct);
//   };

//   const showShirtHandler = () => {
//     const filterProduct = product.filter((item) => {
//       return item.category === "shirt";
//     });
//     setProduct(filterProduct);
//     const prodCount = filterProduct.length;
//     setCount(prodCount);
//     // console.log("Shirts:-", filterProduct);
//   };

//   const PriceHighToLowHandler = () => {
//     const sortHighToLow = [
//       ...product.sort((a, b) => {
//         return b.price - a.price;
//       }),
//     ];
//     setProduct(sortHighToLow);
//     // setAllProduct(props.sortingchoice="Ascending");
//     //     console.log("After sorting product price High to Low:- ", allProduct);
//   };
//   const PriceLowToHighHandler = () => {
//     const sortLowToHigh = [
//       ...product.sort((a, b) => {
//         return a.price - b.price;
//       }),
//     ];
//     setProduct(sortLowToHigh);
//     // setAllProduct(props.sortingchoice="Descending");
//     // console.log("After sorting product price Low to High", allProduct);
//   };

//   return (
//     <React.Fragment>
//       <div className="flexContainer">
//         <p className="filters"> FILTERS: </p>
//         <Button
//           type="button"
//           className="btn7"
//           clickHandler={showAllItemHandler}
//         >
//           All Products
//         </Button>

//         <Button type="button" className="btn1" clickHandler={showAllItemHandler}>
//           T-Shirt
//         </Button>

//         <Button type="button" className="btn2" clickHandler={showDenimHandler}>
//           Denim
//         </Button>

//         <Button type="button" className="btn3" clickHandler={showSsHandler}>
//           Sweatshirts
//         </Button>

//         <Button type="button" className="btn4" clickHandler={showTeesHandler}>
//           Polo Tees
//         </Button>

//         <Button type="button" className="btn5" clickHandler={showShirtHandler}>
//           Shirt
//         </Button>

//         <label className="dropdown">
//           <div className="dd-button">
//             <span className="filterText">Filter: Price</span>
//           </div>
//           <input type="checkbox" className="dd-input" id="test" />

//           <ul className="dd-menu">
//             <li>
//               <div onClick={PriceHighToLowHandler}>High To Low</div>
//             </li>
//             <li>
//               <div onClick={PriceLowToHighHandler}>Low To High</div>
//             </li>
//           </ul>
//         </label>

//         {product && (
//           <div className="displayCard">
//             {product.map((value) => {
//               return (
//                 <>
//                   <Card
//                     imgsrc={value.imgsrc}
//                     key={value.id}
//                     id={value.id}
//                     brand={value.brand}
//                     category={value.category}
//                     detail={value.detail}
//                     price={value.price}
//                   />
//                 </>
//               );
//             })}
//           </div>
//         )}
//         <div className="productCount">
//           <p className="productStyling">All Products</p>
//           {count && <h6 className="pCount">({count} Product)</h6>}
//         </div>
//       </div>
//       <p className="gap"></p>
//       {/* <ProductSorting data={product}/> */}
//     </React.Fragment>
//   );
// };

export default Products;

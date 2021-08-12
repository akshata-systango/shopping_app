import React, { useState } from 'react';
// import Card from '../Card/Card';
import data from '../../constants/data';
import './filter.css';
import MapCard from '../Card/MapCard';
// import Product from '../Product/Product';
import ProductCount from '../ProductCount/ProductCount';

const Filter = (props) => {
    const initialCount = data.length;
    let [allProduct, setAllProduct] = useState([]);
    let [count, setCount] = useState(initialCount);
    let [sortPrice, setSortPrice] = useState([])
    let [sortPriceA, setSortPriceA] = useState([])

    const showAllItemHandler = () => {

        setAllProduct(
            allProduct = data.filter((item) => {
                return (item.category === 'tshirt' || item.category === 'hoodie' || item.category === 'sweatShirt' || item.category === 'tees' || item.category === 'shirt')
            })

        )
        setCount(
            count = allProduct.length
        )
    }
    const showTshirtHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
                return item.category === 'tshirt'
            }))
        setCount(
            count = allProduct.length
        )
        console.log("T-shirts", allProduct)

    }
    const showDenimHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
                return item.category === 'hoodie'
            }))
        setCount(
            count = allProduct.length
        )
        console.log("Denim", allProduct)
    }
    // console.log(text)

    const showSsHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
                return item.category === 'sweatShirt'
            })
        )
        setCount(
            count = allProduct.length
        )

        console.log("Sweat-Shirt", allProduct)

    }
    // console.log(text)

    const showTeesHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
                return item.category === 'tees'
            }))
        setCount(
            count = allProduct.length
        )

        console.log("Polo-Tees", allProduct)

    }
    // console.log(text)

    const showShirtHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
                return item.category === 'shirt'
            })
        )
        setCount(
            count = allProduct.length
        )
        console.log("Shirts", allProduct)

    }

    const PriceHighToLowHandler = () => {
        setSortPrice(
        allProduct =  allProduct.sort(
                (a,b) => {
                    return b.price - a.price
                }
            )
        )
        console.log('product detail', allProduct)

    }
    const PriceLowToHighHandler = () => {
        setSortPriceA(
         allProduct=  allProduct.sort(
                (a, b) => {
                    return a.price - b.price
                }
            )
        )
        console.log('products', allProduct)


    }

    const Product = () => {
        return (
            <React.Fragment>
                {/* {sortPrice && <div className="displayCard">{sortPrice.map(MapCard)}</div>} */}
                {allProduct && sortPrice && sortPriceA && <div className="displayCard">{allProduct.map(MapCard)}</div>}

            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="flexContainer" onClick={props.onPush}>

                <p className="filters">  FILTERS: </p>
                <button type="button" className="btn7" onClick={showAllItemHandler} onHiding={props.onHide}>All Products</button>

                <button type="button" className="btn1" onClick={showTshirtHandler}>T-Shirt</button>

                <button type="button" className="btn2" onClick={showDenimHandler}>Denim</button>

                <button type="button" className="btn3" onClick={showSsHandler}>Sweatshirts</button>

                <button type="button" className="btn4" onClick={showTeesHandler}>Polo Tees</button>

                <button type="button" className="btn5" onClick={showShirtHandler}> Shirt </button>

                <label class="dropdown">

                    <div class="dd-button">
                        <span className="filterText">Filter: Price</span>
                    </div>
                    <input type="checkbox" class="dd-input" id="test" />


                    <ul class="dd-menu">
                        <li ><div onClick={PriceHighToLowHandler}>High To Low</div></li>
                        <li ><div onClick={PriceLowToHighHandler}>Low To High</div></li>
                    </ul>
                </label>

       <Product/>
                {count && <ProductCount>({count} Product)</ProductCount>}
                {/* {sortPrice && <Product>{allProduct.map(MapCard)}</Product>} */}

            </div>
            <p className="gap"></p>
        </React.Fragment>
    )

};

export default Filter;
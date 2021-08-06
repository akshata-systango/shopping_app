import React, { useState } from 'react';
// import Card from '../Card/Card';
import data from '../../constants/data';
import './filter.css';
import MapCard from '../Card/MapCard';
import Product from '../Product/Product';
import ProductCount from '../ProductCount/ProductCount';




const Filter = () => {
    let [allProduct, setAllProduct] = useState([]);
    let [count,setCount] = useState(0);
    const showAllItemHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
                return (item.category === 'tshirt' || item.category === 'hoodie' || item.category === 'sweatShirt' || item.category === 'tees' || item.category === 'shirt')
            })
        )
        setCount(
            count = allProduct.length
        )

        console.log('All Product', allProduct)
    }

    const showTshirtHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
                return item.category === 'tshirt'
            }))

        console.log("T-shirts", allProduct)

    }


    const showDenimHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
            return item.category === 'hoodie'
        }))

        console.log("Denim", allProduct)


    }
    // console.log(text)

    const showSsHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
                return item.category === 'sweatShirt'
            })
        )

        console.log("Sweat-Shirt", allProduct)

    }
    // console.log(text)

    const showTeesHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
                return item.category === 'tees'
            }))

        console.log("Polo-Tees", allProduct)

    }
    // console.log(text)

    const showShirtHandler = () => {
        setAllProduct(
            allProduct = data.filter((item) => {
                return item.category === 'shirt'
            })
        )

        console.log("Shirts", allProduct)


    }
    // console.log(text)
    return (
        <React.Fragment>
            <div className="flexContainer">
                <div id="filtering">
                    <p className="filters">  FILTERS: </p>
                    <button type="button" className="btn7" onClick={showAllItemHandler}>All Products</button>
                   
                    <button type="button" className="btn1" onClick={showTshirtHandler}>T-Shirt</button>
                    
                    <button type="button" className="btn2" onClick={showDenimHandler}>Denim</button>
    
                    <button type="button" className="btn3" onClick={showSsHandler}>Sweatshirts</button>
                
                    <button type="button" className="btn4" onClick={showTeesHandler}>Polo Tees</button>
                    
                    <button type="button" className="btn5" onClick={showShirtHandler}> Shirt </button>
                    {allProduct && <Product>{allProduct.map(MapCard)}</Product>}
                    {count && <ProductCount>{count}</ProductCount>}
                  



                    <button type="button" class="btn6" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">sort By : High To Low</button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" >High To Low</a>
                        <a className="dropdown-item" >Low To High</a>
                        <a className="dropdown-item" >Between 5000-2000</a>
                    </div>
                </div>
            </div>
            <p className="gap"></p>
        </React.Fragment>
    )

};

export default Filter;


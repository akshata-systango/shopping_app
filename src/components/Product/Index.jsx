import React, { useState, useEffect } from 'react';
// import data from '../../constants/data';
import './style/product.css';
import Card from '../../shared/components/ProductCard/Card';
const ShowAllProducts = (props) => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://shopping-app-5c89b-default-rtdb.firebaseio.com/clothes.json')
            const responseData = await response.json();
            const fetchProducts = [];
            for (let key in responseData) {
                fetchProducts.push({
                    id: key,
                    imgsrc: responseData[key].imgsrc,
                    brand: responseData[key].brand,
                    category: responseData[key].category,
                    detail: responseData[key].detail,
                    price: responseData[key].price
                })
            }
            setProduct(fetchProducts)
        }
        fetchProducts()
    }, []);

    // console.log('All Products are:-', product)

    let [allProduct, setAllProduct] = useState([]);
    let [count, setCount] = useState();

    const showAllItemHandler = () => {
        const filterProduct = product.filter((item) => {
            return (item.category === 'tshirt' || item.category === 'hoodie' || item.category === 'sweatShirt' || item.category === 'tees' || item.category === 'shirt')
        })
        setAllProduct(filterProduct)
        const prodCount = filterProduct.length
        setCount(prodCount)
        console.log('all product:-', filterProduct)
    }
    const showTshirtHandler = () => {
        const filterProduct = product.filter((item) => {
            return item.category === 'tshirt'
        })
        setAllProduct(filterProduct)
        const prodCount = filterProduct.length
        setCount(prodCount)
        console.log("T-shirts:-", filterProduct)

    }
    const showDenimHandler = () => {
        const filterProduct = product.filter((item) => {
            return item.category === 'hoodie'
        })
        setAllProduct(filterProduct)
        const prodCount = filterProduct.length
        setCount(prodCount)
        console.log("Denim:-", filterProduct)
    }
    const showSsHandler = () => {
        const filterProduct = product.filter((item) => {
            return item.category === 'sweatShirt'
        })
        setAllProduct(filterProduct)
        const prodCount = filterProduct.length
        setCount(prodCount)
        console.log("Sweat-Shirt:-", filterProduct)

    }
    // console.log(text)

    const showTeesHandler = () => {
        const filterProduct = product.filter((item) => {
            return item.category === 'tees'
        })
        setAllProduct(filterProduct)
        const prodCount = filterProduct.length
        setCount(prodCount)

        console.log("Polo-Tees:-", filterProduct)

    }
    const showShirtHandler = () => {
        const filterProduct = product.filter((item) => {
            return item.category === 'shirt'
        })
        setAllProduct(filterProduct)
        const prodCount = filterProduct.length
        setCount(prodCount)
        console.log("Shirts:-", filterProduct)

    }

    const PriceHighToLowHandler = () => {
        const sortHighToLow = [...allProduct.sort((a, b) => { return b.price - a.price })]
        setAllProduct(sortHighToLow)
        console.log('After sorting product price High to Low:- ', allProduct)

    }
    const PriceLowToHighHandler = () => {
        const sortLowToHigh = [...allProduct.sort((a, b) => { return a.price - b.price })]
        setAllProduct(sortLowToHigh)
        console.log('After sorting product price Low to High', allProduct)
    }

    return (
        <React.Fragment>
            <div className="flexContainer">

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

                {allProduct && <div className="displayCard">{allProduct.map((value) => {
                    return (
                        <>
                            <Card
                                imgsrc={value.imgsrc}
                                key={value.id}
                                id={value.id}
                                brand={value.brand}
                                category={value.category}
                                detail={value.detail}
                                price={value.price}
                            />
                        </>
                    )
                })}</div>}

                <div className="productCount">
                    <p className="productStyling">All Products</p>
                   {count && <h6 className="pCount">({count} Product)</h6>}
                </div>

            </div>
            <p className="gap"></p>
        </React.Fragment>
    )

};

export default ShowAllProducts;
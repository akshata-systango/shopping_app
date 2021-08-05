import React from 'react';
// import Card from '../Card/Card';
import data from '../Card/data';
import './filter.css';
// import MapCard from '../Card/MapCard';
// import Product from '../Headers/Product';



let text = [];
const Filter = (props) => {
    var i;


    const showAllItemHandler = () => {
        console.log("abc",data)
    }

    const showTshirtHandler = (props) => {
        // console.log("tshirt Handler", data);
        for (let i in data) {
            if (data[i].category === 'tshirt') {
                text.push(
                    {
                        imgsrc: data[i].imgsrc,
                        brand: data[i].brand,
                        category: data[i].category,
                        detail: data[i].detail,
                        price: data[i].price

                    })

            }

        }
        console.log(text)

    }


    const showDenimHandler = () => {
        console.log("denim Handler");
        text.length = 0
        for (let i in data) {
          
            if (data[i].category === 'hoodie') {
                //  console.log(data[i].detail,data[i].imgsrc,data[i].brand)
                text.push(
                    {
                        imgsrc: data[i].imgsrc,
                        brand: data[i].brand,
                        category: data[i].category,
                        detail: data[i].detail,
                        price: data[i].price

                    })
            }
        }
        console.log(text)
    }
    const showSsHandler = () => {
        text.length = 0
        console.log("sweatshirt Handler");
        for (let i in data) {
            if (data[i].category === 'sweatShirt') {
                // 
                text.push(
                    {
                        imgsrc: data[i].imgsrc,
                        brand: data[i].brand,
                        category: data[i].category,
                        detail: data[i].detail,
                        price: data[i].price

                    })
            }
        }
        console.log(text)
    }
    const showTeesHandler = () => {
        text.length = 0
        console.log("t Handler");
        for (let i in data) {
            if (data[i].category === 'tees') {
                // 
                text.push(
                    {
                        imgsrc: data[i].imgsrc,
                        brand: data[i].brand,
                        category: data[i].category,
                        detail: data[i].detail,
                        price: data[i].price

                    })
            }
        }
        console.log(text)
    }
    const showShirtHandler = () => {
        text.length = 0
        console.log("shirt Handler");
        for (let i in data) {
            if (data[i].category === 'shirt') {
                // 
                text.push(
                    {
                        imgsrc: data[i].imgsrc,
                        brand: data[i].brand,
                        category: data[i].category,
                        detail: data[i].detail,
                        price: data[i].price

                    })
            }
        }
        console.log(text)
    }

    return (
        <React.Fragment>
            <div className="flexContainer">
                <div id="filtering">
                    <p className="filters">  FILTERS: </p>
                    <button type="button" className="btn7" onClick={showAllItemHandler}>All Products</button>
                    <button type="button" className="btn1" onClick={showTshirtHandler}>Tee Shirt</button>

                    <button type="button" className="btn2" onClick={showDenimHandler}>Denim</button>
                    <button type="button" className="btn3" onClick={showSsHandler}>Sweatshirts</button>
                    <button type="button" className="btn4" onClick={showTeesHandler}>Polo Tees</button>
                    <button type="button" className="btn5" onClick={showShirtHandler}> Shirt </button>

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
export { text };

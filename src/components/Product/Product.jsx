import React, {useEffect,useState} from 'react';
import { Card } from 'reactstrap';



const Products = () => {
  const [product, setProduct] = useState([]);
  // console.log("testing", value.Id)
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://shopping-app-5c89b-default-rtdb.firebaseio.com/clothes.json')
      const responseData = await response.json();
      const fetchProducts = [];
      for (let key in responseData) {
        fetchProducts.push({
          id: key,
          // imgsrc: responseData[key].imgsrc,
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
console.log('sdf',product)
const something = product.map((value) => {
  return (<Card
    // imgsrc={value.imgsrc}
    
    id={value.id}
    brand={value.brand}
    category={value.category}
    detail={value.detail}
    price={value.price}/>
)})
return <div>{something}</div>
}
export default Products;
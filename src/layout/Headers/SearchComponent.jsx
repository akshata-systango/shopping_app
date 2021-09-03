import React,{useState, useEffect} from 'react';
import Search from './Search';

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredData, setFilteredData] = useState("")
    const [product, setProduct] = useState([]);

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

    const diaplayData = product.map((data) => {
    return (<li>{data.detail}</li>)
})

const handleSearch = (newSearch) => {
    setSearchQuery(newSearch)
    product.map((data) => {
        if(data.include(searchQuery)){
            setFilteredData(data)
        }
    })

}
    return (
        <div>
            <Search handleSearch={handleSearch}/>
            <h1>searched for</h1>
            <p>{filteredData}</p>
            <ul>{diaplayData}</ul>
            
        </div>
    );
};

export default SearchComponent;
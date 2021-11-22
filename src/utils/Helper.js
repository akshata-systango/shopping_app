export  function Helper(ProductArray, sortingType) {

  if (sortingType === "Ascending") {

    ProductArray.sort((a, b) => {
      return a.price - b.price;
    });
  }
  else if (sortingType === "Descending") {

    ProductArray.sort((a, b) => {
      return b.price - a.price;
    });
  }
  // console.log("propsproduct = ", ProductArray);
  return ProductArray;
}



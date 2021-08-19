const Helper = (ProductArray,sortingType) => {

  if (sortingType === "Ascending") {
    const sortLowToHigh = [
      ProductArray.sort((a, b) => {
        return a.price - b.price;
      }),
    ];

  }
  else if (sortingType === "Descending") {
    const sortHighToLow = [
      ProductArray.sort((a, b) => {
        return b.price - a.price;
      }),
    ];
  }
  console.log("propsproduct = ", ProductArray);
return ProductArray
}

export default Helper;

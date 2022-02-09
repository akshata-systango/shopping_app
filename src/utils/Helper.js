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

// export const setupServerResponseForPostStep = (props) => {
//   const {
//     json,
//     stepName,
//     statusCode = 200
//   } = props

//   server.use(
//     rest.post(config.apiURL + `https://shopping-app-5c89b-default-rtdb.firebaseio.com/${stepName}`, (req, res, ctx) => {
//       return res(
//         ctx.status(statusCode),
//         ctx.json(json)
//       )
//     })
//   )
// }


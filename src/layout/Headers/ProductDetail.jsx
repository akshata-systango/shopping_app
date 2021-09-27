import React, { useState, useContext, useRef, useEffect } from "react";
import CartContext from "../../store/CartContext";
import "./style/ProductDetail.css";
import ProductSize from "../../utils/Constant";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import AddProductQuantity from "../../components/Product/ProductQuantityForm";
import { Link } from "react-router-dom";
import Select from "react-select";
import ReactTooltip from "react-tooltip";

const ProductDetail = (props) => {
  const cartCtx = useContext(CartContext);
  const [disable, setDisable] = useState(true);
  const [size, setSize] = useState();
  let [values, setValues] = useState([]);
  const [product, setProduct] = useState([]);

  const nameInputRef = useRef();
  const reviewInputRef = useRef();

  toast.configure();
  const { searchedResult } = props;
  console.log("results is:-", searchedResult);

  const showAddToCartButton = (event) => {
    setSize(event.target.value);
  };
  const AddToCartHandler = (amount) => {
    toast.success("Item added to cart !", {
      position: toast.POSITION.BOTTOM_CENTER,
      draggablePercent: 60,
    });
    console.log("qwer", searchedResult.id);

    searchedResult.map((item) =>
      cartCtx.addItem({
        id: item.id,
        brand: item.brand,
        size: size,
        amount: amount,
        detail: item.detail,
        category: item.category,
        price: item.price,
      })
    );
  };

  const AddReview = async (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredReview = reviewInputRef.current.value;
    const reviewers = {
      name: enteredName,
      review: enteredReview,
    };
    let newValues = values.concat(reviewers);
    setValues(newValues);
    alert("Review added successfully");
    document.getElementById("form").reset();
    console.log("list is", newValues);
    await fetch(
      "https://shopping-app-5c89b-default-rtdb.firebaseio.com/clothes/review.json",
      {
        method: "POST",
        body: JSON.stringify({
         
            name: enteredName,
            message: enteredReview,
          
        }),
      }
    );
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://shopping-app-5c89b-default-rtdb.firebaseio.com/clothes/review.json"
      );
      const responseData = await response.json();
      console.log("responsedata",responseData)
      const fetchReviews = [];
      Object.values(responseData).map((item) => {
        return fetchReviews.push({
          message:item.message,
          name:item.name
        });
      });
      setProduct(fetchReviews);
    };
    fetchProducts();
  }, []);
  const option = [
    { value: ProductSize[0], onclick: { showAddToCartButton }, label: 38 },
    { value: ProductSize[1], onclick: { showAddToCartButton }, label: 39 },
    { value: ProductSize[2], onclick: { showAddToCartButton }, label: 40 },
    { value: ProductSize[3], onclick: { showAddToCartButton }, label: 42 },
    { value: ProductSize[4], onclick: { showAddToCartButton }, label: 44 },
  ];

  return (
    <div className="col-sm-12 col-md-12 col-lg-12">
      {searchedResult?.map((item) => (
        <div className="product-content product-wrap clearfix product-deatil">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="product-image">
                <div id="myCarousel-2" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="item active">
                      <img
                        src={item.imgsrc}
                        className="img-responsive"
                        alt="can not show"
                      />
                    </div>
                  </div>
                  <a
                    className="left carousel-control"
                    href="#myCarousel-2"
                    data-slide="prev"
                  >
                    <span className="glyphicon glyphicon-chevron-left"></span>
                  </a>
                  <a
                    className="right carousel-control"
                    href="#myCarousel-2"
                    data-slide="next"
                  >
                    <span className="glyphicon glyphicon-chevron-right"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
              <h2 className="name">
                {item.detail}
                <small>
                  Product by <Link to="#">Adeline</Link>
                </small>
                <i className="fa fa-star fa-2x text-primary"></i>
                <i className="fa fa-star fa-2x text-primary"></i>
                <i className="fa fa-star fa-2x text-primary"></i>
                <i className="fa fa-star fa-2x text-primary"></i>
                <i className="fa fa-star fa-2x text-muted"></i>
                <span className="fa fa-2x">
                  <h5>(109) Votes</h5>
                </span>
                <Link>109 customer reviews</Link>
                <h4>{item.category.toUpperCase()}</h4>
              </h2>
              <hr />
              <h3 className="price-container">
                ${item.price}
                <small>*includes tax</small>
              </h3>
              <span className="price-span">$1650 </span>

              <br />
              <div>
                <Select
                  options={option}
                  onChange={() => setDisable(false)}
                  className="sizeSelection"
                  placeholder="Select Size"
                />
              </div>
              <div className="certified">
                <ul>
                  <li>
                    <Link to="#">
                      Delivery time<span>7 Working Days</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Certified<span>Quality Assured</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="description description-tabs">
                <ul id="myTab" className="nav nav-pills">
                  <li className="active">
                    <a
                      href="#more-information"
                      data-toggle="tab"
                      className="no-margin"
                    >
                      <button className="pdButton"> Product Description</button>
                    </a>
                  </li>
                  <li className="">
                    <a href="#specifications" data-toggle="tab">
                      <button className="pdButton"> Specifications</button>
                    </a>
                  </li>
                  <li className="">
                    <a href="#reviews" data-toggle="tab">
                      <button className="pdButton"> Reviews</button>
                    </a>
                  </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                  <div
                    className="tab-pane fade active in"
                    id="more-information"
                  >
                    <br />
                    <strong>{item.brand}</strong>
                    <p>
                      polyester Super combed Cotton Rich fabric Ribbed round
                      neck to prevent sagging Regular fit Label free for all day
                      comfort Delivery : USA Europe
                    </p>
                  </div>
                  <div className="tab-pane fade" id="specifications">
                    <br />
                    <dl className="">
                      <dt>Quality:-</dt>
                      <dd>Style Number:2714 </dd>
                      <dd>Material composition:80%</dd>
                      <dd>cotton, 20%</dd>
                    </dl>
                  </div>
                  <div className="tab-pane fade" id="reviews">
                    <br />
                    <form className="well padding-bottom-10" id="form">
                      <input
                        type="text"
                        placeholder="enter your name"
                        className="form-control"
                        ref={nameInputRef}
                      />
                      <br />
                      <textarea
                        rows="2"
                        className="form-control"
                        placeholder="Write a review"
                        ref={reviewInputRef}
                      ></textarea>
                      <div className="margin-top-10">
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary pull-right"
                          onClick={AddReview}
                        >
                          Submit Review
                        </button>
                        <Link
                          to="#"
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="Add Location"
                        >
                          <i className="fa fa-location-arrow"></i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="Add Voice"
                        >
                          <i className="fa fa-microphone"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="Add Photo"
                        >
                          <i className="fa fa-camera"></i>
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="Add File"
                        >
                          <i className="fa fa-file"></i>
                        </Link>
                      </div>
                    </form>
                    <div className="chat-body no-padding profile-message">
                      {product.map((key) => {
                        return (
                          <ul>
                            <li className="message">
                              <span className="message-text">
                                <b className="username">{key.name}</b>
                                <span className="badge">Purchase Verified</span>
                                <span className="pull-right">
                                  <i className="fa fa-star fa-2x text-primary"></i>
                                  <i className="fa fa-star fa-2x text-primary"></i>
                                  <i className="fa fa-star fa-2x text-primary"></i>
                                  <i className="fa fa-star fa-2x text-primary"></i>
                                  <i className="fa fa-star fa-2x text-primary"></i>
                                </span>
                                <p>{key.message}</p>
                              </span>
                            </li>
                            <ul className="list-inline font-xs">
                              <li>
                                <Link to="#" className="text-info">
                                  <i className="fa fa-thumbs-up"></i> This was
                                  helpful (22)
                                </Link>
                              </li>
                              <li className="pull-right">
                                <small className="text-muted pull-right ultra-light">
                                  Posted 1 year ago
                                </small>
                              </li>
                            </ul>
                          </ul>
                        );
                      })}
                    </div>

                    <div >
                      {values.map((key) => {
                        return (
                          <ul>
                            <li className="message">
                              <span className="message-text">
                                <b className="username">{key.name}</b>
                                <span className="badge">Purchase Verified</span>
                                <span className="pull-right">
                                  <i className="fa fa-star fa-2x text-primary"></i>
                                  <i className="fa fa-star fa-2x text-primary"></i>
                                  <i className="fa fa-star fa-2x text-primary"></i>
                                  <i className="fa fa-star fa-2x text-primary"></i>
                                  <i className="fa fa-star fa-2x text-primary"></i>
                                </span>
                                <p>{key.review}</p>
                              </span>
                            </li>
                            <ul className="list-inline font-xs">
                              <li>
                                <Link to="#" className="text-info">
                                  <i className="fa fa-thumbs-up"></i> This was
                                  helpful (22)
                                </Link>
                              </li>
                              <li className="pull-right">
                                <small className="text-muted pull-right ultra-light">
                                  Posted 1 year ago
                                </small>
                              </li>
                            </ul>
                          </ul>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div
                  className="col-sm-12 col-md-6 col-lg-6"
                  data-tip
                  data-for="registerTip"
                >
                  <button className="btn btn-light btn-lg" disabled={disable}>
                    <AddProductQuantity
                      id={item.id}
                      onAddToCart={AddToCartHandler}
                    />
                  </button>
                  {disable === true && (
                    <ReactTooltip id="registerTip" place="top" effect="solid">
                      Select size first
                    </ReactTooltip>
                  )}
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="btn-group pull-right">
                    <button className="btn btn-white btn-default">
                      <i className="fa fa-star"></i> Add to wishlist
                    </button>
                    <button className="btn btn-white btn-default">
                      <i className="fa fa-envelope"></i> Contact Seller
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;

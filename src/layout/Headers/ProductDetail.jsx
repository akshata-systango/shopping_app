import React, { useState, useContext } from "react";
import CartContext from "../../store/CartContext";
import "./style/ProductDetail.css";
import ProductSize from "../../utils/Constant";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import AddProductQuantity from "../../components/Product/ProductQuantityForm";

const ProductDetail = (props) => {
  const cartCtx = useContext(CartContext);
  // document.getElementById('atcButton').disabled="true"
  const [size, setSize] = useState(38);
  toast.configure();
  const { searchedResult } = props;
  console.log("results is:-", searchedResult);

  const showAddToCartButton = (event) => {
    setSize(event.target.value);
    document.getElementById("atcButton").disabled = "false";
  };
  const AddToCartHandler = (amount) => {
    toast.success("Item added to cart !", {
      position: toast.POSITION.BOTTOM_CENTER,
      draggablePercent: 60,
    });
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
                  Product by <a href="javascript:void(0);">Adeline</a>
                </small>
                <i className="fa fa-star fa-2x text-primary"></i>
                <i className="fa fa-star fa-2x text-primary"></i>
                <i className="fa fa-star fa-2x text-primary"></i>
                <i className="fa fa-star fa-2x text-primary"></i>
                <i className="fa fa-star fa-2x text-muted"></i>
                <span className="fa fa-2x">
                  <h5>(109) Votes</h5>
                </span>
                <a href="javascript:void(0);">109 customer reviews</a>
                <h4>{item.category.toUpperCase()}</h4>
              </h2>
              <hr />
              <h3 className="price-container">
                ${item.price}
                <small>*includes tax</small>
              </h3>
              <br />
              <div>
                <label for="size">Select Size:</label>
                <select name="size" id="size">
                  <option value={ProductSize[0]} onClick={showAddToCartButton}>
                    38
                  </option>
                  <option value={ProductSize[1]} onClick={showAddToCartButton}>
                    39
                  </option>
                  <option value={ProductSize[2]} onClick={showAddToCartButton}>
                    40
                  </option>
                  <option value={ProductSize[3]} onClick={showAddToCartButton}>
                    42
                  </option>
                  <option value={ProductSize[4]} onClick={showAddToCartButton}>
                    44
                  </option>
                </select>
              </div>
              <div className="certified">
                <ul>
                  <li>
                    <a href="javascript:void(0);">
                      Delivery time<span>7 Working Days</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      Certified<span>Quality Assured</span>
                    </a>
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
                      comfort
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
                    <form
                      method="post"
                      className="well padding-bottom-10"
                      onsubmit="return false;"
                    >
                      <textarea
                        rows="2"
                        className="form-control"
                        placeholder="Write a review"
                      ></textarea>
                      <div className="margin-top-10">
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary pull-right"
                        >
                          Submit Review
                        </button>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="Add Location"
                        >
                          <i className="fa fa-location-arrow"></i>
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="Add Voice"
                        >
                          <i className="fa fa-microphone"></i>
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="Add Photo"
                        >
                          <i className="fa fa-camera"></i>
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="Add File"
                        >
                          <i className="fa fa-file"></i>
                        </a>
                      </div>
                    </form>

                    <div className="chat-body no-padding profile-message">
                      <ul>
                        <li className="message">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            className="online"
                          />
                          <span className="message-text">
                            <a href="javascript:void(0);" className="username">
                              Alisha Molly
                              <span className="badge">Purchase Verified</span>
                              <span className="pull-right">
                                <i className="fa fa-star fa-2x text-primary"></i>
                                <i className="fa fa-star fa-2x text-primary"></i>
                                <i className="fa fa-star fa-2x text-primary"></i>
                                <i className="fa fa-star fa-2x text-primary"></i>
                                <i className="fa fa-star fa-2x text-muted"></i>
                              </span>
                            </a>
                            Can't divide were divide fish forth fish to. Was
                            can't form the, living life grass darkness very
                            image let unto fowl isn't in blessed fill life
                            yielding above all moved
                          </span>
                          <ul className="list-inline font-xs">
                            <li>
                              <a
                                href="javascript:void(0);"
                                className="text-info"
                              >
                                <i className="fa fa-thumbs-up"></i> This was
                                helpful (22)
                              </a>
                            </li>
                            <li className="pull-right">
                              <small className="text-muted pull-right ultra-light">
                                Posted 1 year ago
                              </small>
                            </li>
                          </ul>
                        </li>
                        <li className="message">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            className="online"
                          />
                          <span className="message-text">
                            <a href="javascript:void(0);" className="username">
                              Aragon Zarko
                              <span className="badge">Purchase Verified</span>
                              <span className="pull-right">
                                <i className="fa fa-star fa-2x text-primary"></i>
                                <i className="fa fa-star fa-2x text-primary"></i>
                                <i className="fa fa-star fa-2x text-primary"></i>
                                <i className="fa fa-star fa-2x text-primary"></i>
                                <i className="fa fa-star fa-2x text-primary"></i>
                              </span>
                            </a>
                            Excellent product, love it!
                          </span>
                          <ul className="list-inline font-xs">
                            <li>
                              <a
                                href="javascript:void(0);"
                                className="text-info"
                              >
                                <i className="fa fa-thumbs-up"></i> This was
                                helpful (22)
                              </a>
                            </li>
                            <li className="pull-right">
                              <small className="text-muted pull-right ultra-light">
                                Posted 1 year ago
                              </small>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <button
                    href="javascript:void(0);"
                    className="btn btn-light btn-lg"
                    id="atcButton"
                  >
                    <AddProductQuantity
                      id={item.id}
                      onAddToCart={AddToCartHandler}
                    />
                  </button>
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

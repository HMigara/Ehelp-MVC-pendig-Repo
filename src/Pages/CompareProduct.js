import React from 'react'
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import Colors from '../Components/Colors';

const CompareProduct = () => {
  return (
    <>
      <BreadCrum title="Compare Product" />
      <Meta title={"Compare Product"} />

      <div className="compare-produt-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="titel">
                    Honer T1 1GB Ram 8GB Rom 7inc full HD 4G
                  </h5>
                  <h6 className="price mb-3">$ 125</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand :</h5>
                      <p>Honor</p>
                    </div>
                  </div>

                  <div>
                    <div className="product-details">
                      <h5>Type :</h5>
                      <p>Smart Watch</p>
                    </div>
                  </div>

                  <div>
                    <div className="product-details">
                      <h5>SKU :</h5>
                      <p>KS5576</p>
                    </div>
                  </div>

                  <div>
                    <div className="product-details">
                      <h5>Availability :</h5>
                      <p>In Stock</p>
                    </div>

                    <div>
                      <div className="product-details">
                        <h5>Color :</h5>
                        <Colors />
                      </div>
                    </div>

                    <div>
                      <div className="product-details">
                        <h5>Size :</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="titel">
                    Honer T1 1GB Ram 8GB Rom 7inc full HD 4G
                  </h5>
                  <h6 className="price mb-3">$ 125</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand :</h5>
                      <p>Honor</p>
                    </div>
                  </div>

                  <div>
                    <div className="product-details">
                      <h5>Type :</h5>
                      <p>Smart Watch</p>
                    </div>
                  </div>

                  <div>
                    <div className="product-details">
                      <h5>SKU :</h5>
                      <p>KS5576</p>
                    </div>
                  </div>

                  <div>
                    <div className="product-details">
                      <h5>Availability :</h5>
                      <p>In Stock</p>
                    </div>

                    <div>
                      <div className="product-details">
                        <h5>Color :</h5>
                        <Colors />
                      </div>
                    </div>

                    <div>
                      <div className="product-details">
                        <h5>Size :</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="titel">
                    Honer T1 1GB Ram 8GB Rom 7inc full HD 4G
                  </h5>
                  <h6 className="price mb-3">$ 125</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand :</h5>
                      <p>Honor</p>
                    </div>
                  </div>

                  <div>
                    <div className="product-details">
                      <h5>Type :</h5>
                      <p>Smart Watch</p>
                    </div>
                  </div>

                  <div>
                    <div className="product-details">
                      <h5>SKU :</h5>
                      <p>KS5576</p>
                    </div>
                  </div>

                  <div>
                    <div className="product-details">
                      <h5>Availability :</h5>
                      <p>In Stock</p>
                    </div>

                    <div>
                      <div className="product-details">
                        <h5>Color :</h5>
                        <Colors />
                      </div>
                    </div>

                    <div>
                      <div className="product-details">
                        <h5>Size :</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct
import React from 'react'
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";

const WishList = () => {
  return (
    <>
      <BreadCrum title="WishList" />
      <Meta title={"WishList"} />

      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>

                <div className="py-3 px-3">
                  <h5 className="titel">
                    Honer T1 1GB Ram 8GB Rom 7inc full HD 4G
                  </h5>
                  <h6 className="price">$ 125</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>

                <div className="py-3 px-3">
                  <h5 className="titel">
                    Honer T1 1GB Ram 8GB Rom 7inc full HD 4G
                  </h5>
                  <h6 className="price">$ 125</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>

                <div className="py-3 px-3">
                  <h5 className="titel">
                    Honer T1 1GB Ram 8GB Rom 7inc full HD 4G
                  </h5>
                  <h6 className="price">$ 125</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishList
import React from 'react'
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrum title="Cart" />

      <section className="cart-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quntity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>

              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img src={watch} className="img-fluid " alt="product" />
                  </div>
                  <div className="w-75">
                    <p>Name : Smart Watch</p>
                    <p>Color : red</p>
                    <p>Size : M</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$100.00</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      min={1}
                      max={10}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$100.00</h5>
                </div>
              </div>
            </div>

            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button ">
                  Countinue to Shopping
                </Link>

                <div className="d-flex align-items-end flex-column">
                  <h4>SubTotal : $100</h4>
                  <p>Tax and shipping calculate at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart
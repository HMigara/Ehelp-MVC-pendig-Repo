import React from 'react'
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">eHelp.MVC</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/cart">Cart</a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">eHelp customer (eHelp@gmail.com)</p>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select country
                      </option>
                    </select>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>

                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>

                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Aparment, Suit ,etc"
                      className="form-control"
                    />
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="ZIP"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" />
                        Returnt to cart
                      </Link>
                      <Link to="/" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img src={watch} className="img-fluid" alt="product" />
                    </div>
                    <div>
                      <h5 className="title">smart watch 2023 barnd new</h5>
                      <p>S / #6767r</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5>$ 100</h5>
                  </div>
                </div>
              </div>

              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">subtotal</p>
                  <p className="total-price">$ 250</p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$ 25</p>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">total</h4>
                <h5 className="total-price">$ 300</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout
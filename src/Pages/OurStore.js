import React, { useState } from 'react'
import BreadCrum from '../Components/BreadCrum'
import Meta from '../Components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from "../Components/ProductCard";


const OurStore = () => {
  const [grid,setGrid]= useState(4);
  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrum title="Our Store" />

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>watch</li>
                    <li>TV</li>
                    <li>Phone</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name=""
                        value=""
                      />
                      <label className="form-check-lable" htmlFor="">
                        In stock (1)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name=""
                        value=""
                      />
                      <label className="form-check-lable" htmlFor="">
                        Out of stock (0)
                      </label>
                    </div>
                  </div>

                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>

                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>

                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name=""
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-lable" htmlFor="color-1">
                        S (1)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name=""
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-lable" htmlFor="color-1">
                        M (1)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name=""
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-lable" htmlFor="color-1">
                        L (1)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name=""
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-lable" htmlFor="color-1">
                        XXL (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      LapTop
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      TV
                    </span>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-product mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="random product"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids watch bulk 10 pack for sale</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 100</b>
                    </div>
                  </div>

                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="random product"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids watch bulk 10 pack for sale</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9">
              <div className="filter-sort-grid mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="">low ,high</option>
                      <option value="">high ,low</option>
                      <option value="">unde 100$</option>
                      <option value="">more than 100$</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr.svg"
                        className="img-fluid d-block"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="img-fluid d-block"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="img-fluid d-block"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr4.svg"
                        className="img-fluid d-block"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStore
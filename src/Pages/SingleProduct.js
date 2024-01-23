import React, { useState } from 'react'
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Colors from '../Components/Colors';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
    const props = {
      width: 500,
      height: 500,
      zoomWidth: 500,
      img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7646cf71/images/Titan/Catalog/90140QM03_1.jpg?sw=800&sh=800",
    };
    const [orderdProduct,setOrederedProduct] = useState(true)
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrum title="Product Name" />

      <div className="main-produt-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img src="/images/watch.jpg" className="img-fluid" alt="" />
                </div>
                <div>
                  <img src="/images/watch.jpg" className="img-fluid" alt="" />
                </div>
                <div>
                  <img src="/images/watch.jpg" className="img-fluid" alt="" />
                </div>
                <div>
                  <img src="/images/watch.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="main-product-details">
                <div className="boder-bottom">
                  <h3 className="title">
                    Mens Branded Watch with blue and silver finsh
                  </h3>
                </div>

                <div className="boder-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">(3 reviwes)</p>
                  </div>
                  <a className="review-btn mt-2" href="#review">
                    Write a Review
                  </a>
                </div>

                <div className="boder-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-headder">Type :</h3>{" "}
                    <p className="product-data">abbbs</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-headder">brand :</h3>{" "}
                    <p className="product-data">abbbs</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-headder">Category :</h3>{" "}
                    <p className="product-data">abbbs</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-headder">Tags :</h3>{" "}
                    <p className="product-data">abbbs</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-headder">Avilability :</h3>{" "}
                    <p className="product-data">abbbs</p>
                  </div>

                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-headder">Size :</h3>{" "}
                    <div className="d-flex gap-15 flex-wrap">
                      <span className="badge border border-1 bg-white text-dark border-secondery">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondery">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondery">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondery">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-headder">Color :</h3> <Colors />
                  </div>
                  <div className="d-flex align-items-center gap-10 flex-row mt-2 mb-3">
                    <h3 className="product-headder">Quantity :</h3>{" "}
                    <div className="">
                      <input
                        type="number"
                        className="form-control"
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button boder-0" type="submit">
                        BUY NOW
                      </button>
                      <botton className="button singup" to="/singup">
                        Add to cart
                      </botton>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className='fs-5 me-2' />
                        Add to compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className='fs-5 me-2' />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="disscription-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="bg-white p-3">
                  <h4 className="p-3">Discription</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem aspernatur delectus quibusdam, fuga tenetur enim
                    consectetur eveniet porro dolor deserunt reprehenderit, ut
                    error recusandae consequuntur atque accusantium voluptates.
                    Corporis, architecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="reviews-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 id="review">Reviews</h3>
                <div className="review-inner-wrapper">
                  <div className="reviwe-head d-flex justify-contnt-between align-items-end">
                    <div>
                      <h4 className="mb-2">Customer Reviwes</h4>
                      <div className="d-flex align-items-center  gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on two reviwes</p>
                      </div>
                      {orderdProduct && (
                        <div>
                          <a
                            className=" mb-3 text-dark text-decoration-underline"
                            href=""
                          >
                            Write a reviwe
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="reviwe-form py-4">
                    <h3 className="">Write a Reviwe</h3>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={0}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>

                      <div>
                        <textarea
                          placeholder="Write your Comment here"
                          rows="5"
                          className="form-control w-100"
                          cols="30"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button border-0">
                          Submit Reviwe
                        </button>
                      </div>
                    </form>
                  </div>

                  <div id="review" className="reviews">
                    <div className="reviwe">
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Mihiranga</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className="mt-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Beatae accusamus nemo hic repellat esse iste amet
                        aliquid debitis quos pariatur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="popular-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-headding">Similar sponsored items</h3>
              </div>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SingleProduct
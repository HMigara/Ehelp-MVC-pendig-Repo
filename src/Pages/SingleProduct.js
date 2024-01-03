import React, { useState } from 'react'
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
    const [orderdProduct,setOrederedProduct] = useState(true)
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrum title="Product Name" />

      <div className="main-produt-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
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
                  </div>
                </div>
                {orderdProduct && (
                  <div>
                    <a className='text-dark text-decoration-underline' href="">Write a reviwe</a>
                  </div>
                )}
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
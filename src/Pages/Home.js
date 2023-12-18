import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { BlogCard } from '../Components/BlogCard';
import ProductCard from '../Components/ProductCard';
import SpecialProduct from '../Components/SpecialProduct';
import Meta from "../Components/Meta";


export const Home = () => {
  return (
    <>
      <Meta title="Home" />

      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banne position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner "
                />
                <div className="main-bannet-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPhone 15+ Pro</h5>
                  <p>Starting from $999 to $1499</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="my-banner-set col-6">
              <div className=" d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banne position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner "
                  />
                  <div className="small-bannet-content position-absolute">
                    <h4>Best Sell</h4>
                    <h5>iPhone 15+ Pro</h5>
                    <p>
                      Starting from
                      <br /> $999 to $1499
                    </p>
                  </div>
                </div>

                <div className="small-banne position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner "
                  />
                  <div className="small-bannet-content position-absolute">
                    <h4>NEW ARRIVEL</h4>
                    <h5>BUY iPad Air</h5>
                    <p>
                      Starting from
                      <br /> $999 to $1499
                    </p>
                  </div>
                </div>

                <div className="small-banne position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner "
                  />
                  <div className="small-bannet-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS</h4>
                    <h5>iPhone 15+ Pro</h5>
                    <p>
                      Starting from <br />
                      $999 to $1499
                    </p>
                  </div>
                </div>

                <div className="small-banne position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner "
                  />
                  <div className="small-bannet-content position-absolute">
                    <h4>NEW ARRIVEL</h4>
                    <h5>BUY iPad Air</h5>
                    <p>
                      Starting from <br /> $999 to $1499
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">From all orders over 50$</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Offers</h6>
                    <p className="mb-0">save up to 30%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>affordeble price</h6>
                    <p className="mb-0">barnd new items</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>secure Payments</h6>
                    <p className="mb-0">100% protected payments</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>suppurt 24/7</h6>
                    <p className="mb-0">for the products and services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex align-items-center flex-wrap justify-content-between">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="TV" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart headphone</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphone" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="TV" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart headphone</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphone" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-headding">featured Collection</h3>
            </div>

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="farmous-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/AppleWatch6.jpg"
                  className="img-fluid"
                  alt="laptop"
                />
                <div className="famous-content position-absolute">
                  <h5>Big screen</h5>
                  <h6>iWatch series 7</h6>
                  <p>$50 monthly installments</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/poptab.jpg"
                  className="img-fluid"
                  alt="laptop"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">nano edge Display</h5>
                  <h6 className="text-dark">Huawei Tab 3</h6>
                  <p className="text-dark">$50 monthly installments</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/ipho.jpg" className="img-fluid" alt="laptop" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Cinemati video</h5>
                  <h6 className="text-dark">iPhone 13 pro</h6>
                  <p className="text-dark">$70 monthly installments</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/headset.jpg"
                  className="img-fluid"
                  alt="laptop"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Quality sounds</h5>
                  <h6 className="text-dark">Pinky cat head set</h6>
                  <p className="text-dark">$10 monthly installments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-headding">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="popular-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-headding">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand logo" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand logo" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand logo" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand logo" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand logo" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand logo" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand logo" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand logo" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-headding">Our Lates Blogs</h3>
            </div>

            <div className="row">
              <div className="col-3">
                <BlogCard />
              </div>

              <div className="col-3">
                <BlogCard />
              </div>

              <div className="col-3">
                <BlogCard />
              </div>

              <div className="col-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

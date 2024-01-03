import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  
  return (
    <>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch-1.jpg" className="img-fluid" alt="product" />
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
          </div>

          <div className="product-details">
            <h6 className="brand">Rolex</h6>
            <h5 className="product-titel">Rist watch for thr Ladies</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`discription ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis autem voluptatem architecto quo placeat quae
              repellendus voluptate dolores reprehenderit voluptatibus tempore
              expedita, similique officia quia! Ratione officiis maxime nobis
              incidunt.
            </p>
            ,<p className="price">$75.00.00</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/add-cart.svg" alt="addto cart" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch-1.jpg" className="img-fluid" alt="product" />
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
          </div>

          <div className="product-details">
            <h6 className="brand">Rolex</h6>
            <h5 className="product-titel">Rist watch for thr Ladies</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`discription ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis autem voluptatem architecto quo placeat quae
              repellendus voluptate dolores reprehenderit voluptatibus tempore
              expedita, similique officia quia! Ratione officiis maxime nobis
              incidunt.
            </p>
            ,<p className="price">$75.00.00</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/add-cart.svg" alt="addto cart" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard
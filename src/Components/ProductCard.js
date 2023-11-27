import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className='wishlist-icon position-absolute'>
            <Link><img src="images/wish.svg" alt=""/></Link>
        </div>
        <div className="product-image">
          <img src="images/watch-1.jpg" className='img-fluid' alt="product image" />
          <img src="images/watch.jpg" className='img-fluid' alt="product image" />
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
          ,<p className="price">$75.00.00</p>
        </div>

        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
                <Link><img src="images/add-cart.svg" alt="addto cart"/></Link>
                <Link><img src="images/view.svg" alt="view"/></Link>
                <Link><img src="images/prodcompare.svg" alt="prodcompare"/></Link>
            </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard
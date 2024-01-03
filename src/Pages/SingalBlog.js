import React from 'react'
import BreadCrum from "../Components/BreadCrum";
import Meta from "../Components/Meta";
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";

const SingalBlog = () => {
  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrum title="Blog" />

      <div className="blog-wrappr home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className='d-flex align-items-center gap-10'>
                  <HiOutlineArrowLeft className='fs-5'/>
                  Go Back to Blogs
                </Link>
                <h3 className="titel">have a nice day at here</h3>

                <img
                  src="/images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  aliquam a odio facere blanditiis aperiam officia quia.
                  Obcaecati, inventore molestias laborum eligendi repellat
                  reiciendis esse veritatis aliquam? Sed obcaecati eum iusto
                  quam ipsa in quasi illum corporis vero! Totam delectus
                  dignissimos quam consectetur facilis laborum. Sed ad, iure
                  quae nam incidunt quis placeat vero odit magni enim porro,
                  aliquam ratione provident voluptate saepe? Amet libero natus
                  perspiciatis voluptate aspernatur dolore repellat sint totam
                  quibusdam dolorum vero neque iusto atque aliquid ab in
                  necessitatibus exer citationem, ea eligendi sapiente, itaque
                  laudantium aut iure fugiat? Cumqu e ducimus explicabo corporis
                  omnis blanditiis fugiat optio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingalBlog
import React from 'react'
import BreadCrum from "../Components/BreadCrum";
import Meta from "../Components/Meta";
import { BlogCard } from '../Components/BlogCard';

const Blog = () => {
  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrum title="Blog" />

      <div className="blog-wrappr home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Home</li>
                    <li>Ouer Store</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>

                <div className="col-6 mb-3">
                  <BlogCard />
                </div>

                <div className="col-6 mb-3">
                  <BlogCard />
                </div>

                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog 
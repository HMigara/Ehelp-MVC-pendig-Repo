import React from 'react'
import { Link } from 'react-router-dom'

export const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-img">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">27 Nov 2023</p>
        <h5 className="title">Inventin new VR head set</h5>
        <p className="decs">
          The radiant sun dipped below the horizon, casting a warm glow over the
          tranquil meadow, where colorful wildflowers danced in the gentle
          breeze, creating a picturesque scene of serenity.
        </p>
        <Link className="button" to="/blog/:id">
          Read more
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import "./Blog.scss";

const Blog = () => {
  return (
    <section className="blog content__blog container">
      <h2>Blog</h2>
      <a className="blog__link" href="#">
        Read All
      </a>
      <div className="blog__articles-container">
        <div className="blog__left-column">
          <div className="blog__article blog__article--care-for-jewellery">
            <div className="blog__article-info">
              <p>September 30, 2019</p>
              <h3>How to care for your jewellery</h3>
              <a className="blog__article-link">Read Article</a>
            </div>
          </div>
          <div className="blog__article blog__article--power-of-crystal">
            <div className="blog__article-info">
              <p>September 23, 2019</p>
              <h3>Power of crystals</h3>
              <a className="blog__article-link">Read Article</a>
            </div>
          </div>
        </div>
        <div className="blog__right-column">
          <div className="blog__article blog__article--19-trends blog__article--highlighted">
            <div className="blog__article-info">
              <p>September 16, 2019</p>
              <h3>AW 19 trends</h3>
              <a className="blog__article-link">Read Article</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

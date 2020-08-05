import React from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";

const Blog = () => {
  return (
    <section className="blog content__blog ">
      <div className="container">
        <h2>Blog</h2>
        <Link className="blog__link" to="/underConstruction">
          Read All
        </Link>
        <div className="blog__articles-container">
          <div className="blog__left-column">
            <div className="blog__article blog__article--care-for-jewellery">
              <div className="blog__article-info">
                <p>September 30, 2019</p>
                <h3>How to care for your jewellery</h3>
                <Link className="blog__article-link" to="/underConstruction">
                  Read Article
                </Link>
              </div>
            </div>
            <div className="blog__article blog__article--power-of-crystal">
              <div className="blog__article-info">
                <p>September 23, 2019</p>
                <h3>Power of crystals</h3>
                <Link className="blog__article-link" to="/underConstruction">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
          <div className="blog__right-column">
            <div className="blog__article blog__article--19-trends blog__article--highlighted">
              <div className="blog__article-info">
                <p>September 16, 2019</p>
                <h3>AW 19 trends</h3>
                <Link className="blog__article-link" to="/underConstruction">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

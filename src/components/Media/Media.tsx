import React from "react";
import { Link } from "react-router-dom";
import "./Media.scss";

const Media = () => {
  return (
    <section className="media content__media">
      <div className="container">
        <h2>
          <span>@</span>Chjewellery
        </h2>
        <Link className="media__link" to="/underConstruction">
          Follow Us
        </Link>
        <div className="media__images-container">
          <div className="media__images-container-leftedge">
            <div className="media__image-container media__image-8-container"></div>
            <div className="media__image-container media__image-1-container"></div>
          </div>
          <div className="media__images-container-leftcenter">
            <div className="media__image-container media__image-2-container"></div>
          </div>
          <div className="media__images-container-rightcenter">
            <div className="media__image-container media__image-4-container"></div>
            <div className="media__image-container media__image-5-container"></div>
          </div>
          <div className="media__images-container-rightedge">
            <div className="media__image-container media__image-6-container"></div>
            <div className="media__image-container media__image-7-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;

import React from "react";
import "./Media.scss";

const Media = () => {
  return (
    <section className="media content__media container">
      <h2>
        <span>@</span>Chjewellery
      </h2>
      <a className="media__link" href="#">
        Follow Us
      </a>
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
    </section>
  );
};

export default Media;

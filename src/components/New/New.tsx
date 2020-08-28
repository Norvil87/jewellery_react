import React, { useState } from "react";
import { products } from "../data";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./New.scss";
import "./Slider.scss";

const New = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsMobile = 2;
  const desktopBreakpoint = 1024;
  const tabletBreakpoint = 767;

  const renderProducts = () => {
    const elems: JSX.Element[] = [];

    for (const productId in products) {
      const { name, srcSetWebp, srcSetJpg, imgUrl, price, type } = products[productId];
      elems.push(
        <Product
          key={productId}
          id={productId}
          name={name}
          type={type}
          imgUrl={imgUrl}
          price={price}
          srcSetWebp={srcSetWebp}
          srcSetJpg={srcSetJpg}
          className="new__gallery-item"
        />
      );
    }

    return elems;
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: false,
    responsive: [
      {
        breakpoint: desktopBreakpoint,
        settings: {
          slidesToShow: itemsMobile,
          slidesToScroll: itemsMobile,
        },
      },
      {
        breakpoint: tabletBreakpoint,
        settings: {
          dots: false,
          arrows: false,
          draggable: true,
          slidesToShow: itemsMobile,
          slidesToScroll: itemsMobile,
          afterChange: (current: number) => setCurrentPage(Math.floor(current / 2 + 1)),
        },
      },
    ],
  };

  const items = renderProducts();
  const totalPages = Math.floor(Object.keys(items).length / itemsMobile);

  return (
    <section className="new content__new">
      <div className="container">
        <div className="new__top-container">
          <div>
            <h2>New In</h2>
            <Link className="new__catalog-link" to="/catalog">
              Shop now
            </Link>
          </div>
        </div>
        <Slider {...sliderSettings}>{items}</Slider>
        <div className="new__mobile-pagination">
          <div>
            <span>{`${currentPage} of ${totalPages}`}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;

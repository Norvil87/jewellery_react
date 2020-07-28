import React from "react";
import { Link } from "react-router-dom";

import "./New.scss";
import { products } from "../data";
import { IProduct } from "../types";

import Product from "../Product/Product";

const New = () => {
  const renderProducts = () => {
    const elems: any[] = []; //?

    products.map((product: IProduct) => {
      const { id, name, srcSetWebp, srcSetJpg, imgUrl, price } = product;
      elems.push(
        <Product
          key={id}
          id={id}
          name={name}
          imgUrl={imgUrl}
          price={price}
          srcSetWebp={srcSetWebp}
          srcSetJpg={srcSetJpg}
          className="new__gallery-item"
        />
      );
    });

    return elems;
  };

  return (
    <section className="new content__new container">
      <div className="new__top-container">
        <button className="new__control-button new__control-button--backwards" type="button">
          Back
        </button>
        <div>
          <h2>New In</h2>
          <Link className="new__catalog-link" to="/catalog">
            Shop now
          </Link>
        </div>
        <button className="new__control-button new__control-button--forward" type="button">
          Forward
        </button>
      </div>
      <div className="new__gallery">
        <ul className="new__gallery-list">{renderProducts()}</ul>
      </div>
      <div className="new__pagination">
        <ul className="new__pagination-list new__pagination-list--desktop">
          <li>
            <a href="#" className="current-page">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ul>
        <ul className="new__pagination-list new__pagination-list--tablet">
          <li>
            <a href="#" className="current-page">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">6</a>
          </li>
        </ul>
        <div className="new__pagination-list new__pagination-list--mobile">
          <span>1 </span> of <span> 6</span>
        </div>
      </div>
    </section>
  );
};

export default New;

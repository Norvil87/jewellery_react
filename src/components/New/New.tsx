import React from "react";
import "./New.scss";
import { products } from "../data";
import { IProducts, IProduct } from "../types";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const New = () => {
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

  return (
    <section className="new content__new">
      <div className="container">
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
              <button className="current-page">1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
          </ul>
          <ul className="new__pagination-list new__pagination-list--tablet">
            <li>
              <button className="current-page">1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>4</button>
            </li>
            <li>
              <button>5</button>
            </li>
            <li>
              <button>6</button>
            </li>
          </ul>
          <div className="new__pagination-list new__pagination-list--mobile">
            <span>1 </span> of <span> 6</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;

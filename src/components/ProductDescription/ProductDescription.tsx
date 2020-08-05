import React from "react";
import { IProduct } from "../types";
import "./ProductDescription.scss";

const ProductDescription: React.FC<any> = ({ data, match }) => {
  const product = data.find((product: IProduct) => product.id == match.params.id);
  const { imgUrl, srcSetJpg, srcSetWebp, name, price, additionalInfo } = product;
  const { metalType, stone, size } = additionalInfo;

  return (
    <section className="item content__item">
      <div className="container">
        <h2 className="visually-hidden"></h2>
        <div className="item__container">
          <div className="item__gallery">
            <div className="item__small-images-container">
              <a className="item__image-link">
                <img alt="image not available" />
              </a>
              <a className="item__image-link">
                <img alt="image not available" />
              </a>
              <a className="item__image-link">
                <img alt="image not available" />
              </a>
            </div>
            <div className="item__big-image-container">
              <a className="item__image-link">
                <picture>
                  <source type="image/webp" srcSet={srcSetWebp} />
                  <img src={imgUrl} srcSet={srcSetJpg} alt={name} />
                </picture>
              </a>
              <div className="item__gallery-nav">1 of 4</div>
            </div>
          </div>
          <div className="item__info">
            <div className="item__info-container">
              <h3>{name}</h3>
              <div className="item__price">{`$ ${price}`}</div>
              <div className="item__user-menu">
                <div className="item__user-menu-choice">Description</div>
                <div className="item__user-menu-choice item__user-menu-choice--active">Additional info</div>
              </div>
              <ul className="item__detailed-info">
                <li>
                  <p>Metal type</p>
                  <p>{metalType}</p>
                </li>
                <li>
                  <p>Stone</p>
                  <p>{stone}</p>
                </li>
                <li>
                  <p>Size</p>
                  <p>{size}</p>
                </li>
              </ul>
              <button className="button item__button" type="button">
                Add to cart
              </button>
              <div className="item__delivery">
                <p>14 Day Returns</p>
                <p>2-Year Warranty</p>
                <p>Free Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;

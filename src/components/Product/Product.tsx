import React from "react";
import "./Product.scss";
import { IProduct } from "../types";

const Product: React.FC<IProduct> = ({ name, srcSetWebp, srcSetJpg, imgUrl, price, className }) => (
  <li className={`${className} product`}>
    <a className="new__link" href="#">
      <h3>{name}</h3>
      <div className="product__image-container">
        <picture>
          <source type="image/webp" srcSet={srcSetWebp} />
          <img src={imgUrl} srcSet={srcSetJpg} alt={name} />
        </picture>
      </div>
      <p>$ {price}</p>
    </a>
  </li>
);

export default Product;

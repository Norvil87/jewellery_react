import React from "react";
import "./Product.scss";
import { IProduct } from "../types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPage from "../../pages/ProductPage";

const Product: React.FC<IProduct> = props => {
  const { id, name, srcSetWebp, srcSetJpg, imgUrl, price, className } = props;

  return (
    <>
      <li className={`${className} product`}>
        <Link className="new__link" to={`/products/${id}`}>
          <h3>{name}</h3>
          <div className="product__image-container">
            <picture>
              <source type="image/webp" srcSet={srcSetWebp} />
              <img src={imgUrl} srcSet={srcSetJpg} alt={name} />
            </picture>
          </div>
          <p>$ {price}</p>
        </Link>
      </li>
    </>
  );
};

export default Product;

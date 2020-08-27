import React from "react";
import "./Product.scss";
import { IProduct } from "../types";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../../store/actions";
import { useDispatch } from "react-redux";

const Product: React.FC<IProduct> = props => {
  const { id, name, srcSetWebp, srcSetJpg, imgUrl, price, className } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div className={`${className} product`}>
        <Link className="new__link" to={`/products/${id}`} onClick={() => dispatch(setSelectedProduct(id))}>
          <h3>{name}</h3>
          <div className="product__image-container">
            <picture>
              <source type="image/webp" srcSet={srcSetWebp} />
              <img src={imgUrl} srcSet={srcSetJpg} alt={name} />
            </picture>
          </div>
          <p>$ {price}</p>
        </Link>
      </div>
    </>
  );
};

export default Product;

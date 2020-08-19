import React from "react";
import "./Catalog.scss";
import { IProduct } from "../types";
import Product from "../Product/Product";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/types";

const Catalog = () => {
  const visibleProducts = useSelector((state: IRootState) => state.visibleProducts);

  const renderProducts = () => {
    const elems: any[] = [];

    for (const productId in visibleProducts) {
      const { name, srcSetWebp, srcSetJpg, imgUrl, price, type } = visibleProducts[productId];
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
          className="catalog__item"
        />
      );
    };

    return elems;
  };

  return (
    <section className="catalog">
      <h2 className="visually-hidden">Catalog</h2>
      {Object.keys(visibleProducts).length ? (
        <ul className="catalog__list"> {renderProducts()}</ul>
      ) : (
        <h2 style={{ textAlign: "center" }}>No products at your request</h2>
      )}
    </section>
  );
};

export default Catalog;

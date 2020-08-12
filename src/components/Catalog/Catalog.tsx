import React from "react";
import "./Catalog.scss";
import { IProduct } from "../types";
import Product from "../Product/Product";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/types";

const Catalog = () => {
  const visibleProducts = useSelector((state: IRootState) => state.visibleProducts);

  const renderProducts = () => {
    const products: JSX.Element[] = [];

    visibleProducts.map((product: IProduct) => {
      const { id, name, srcSetWebp, srcSetJpg, imgUrl, price, type } = product;
      products.push(
        <Product
          key={id}
          id={id}
          name={name}
          type={type}
          imgUrl={imgUrl}
          price={price}
          srcSetWebp={srcSetWebp}
          srcSetJpg={srcSetJpg}
          className="catalog__item"
        />
      );
    });

    return products;
  };

  return (
    <section className="catalog">
      <h2 className="visually-hidden">Catalog</h2>
      {visibleProducts.length ? (
        <ul className="catalog__list"> {renderProducts()}</ul>
      ) : (
        <h2 style={{ textAlign: "center" }}>No products at your request</h2>
      )}
    </section>
  );
};

export default Catalog;

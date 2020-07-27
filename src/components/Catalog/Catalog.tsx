import React from "react";

import "./Catalog.scss";

import { products } from "../data";
import { IProduct } from "../types";
import Product from "../Product/Product";

const Catalog = () => {
  const renderProducts = () => {
    const elems: any[] = []; //?

    products.map((product: IProduct) => {
      const { id, name, srcSetWebp, srcSetJpg, imgUrl, price } = product;
      console.log(imgUrl);
      elems.push(
        <Product
          key={id}
          id={id}
          name={name}
          imgUrl={imgUrl}
          price={price}
          srcSetWebp={srcSetWebp}
          srcSetJpg={srcSetJpg}
          className="catalog__item"
        />
      );
    });

    return elems;
  };

  return (
    <section className="catalog">
      <h2 className="visually-hidden">Catalog</h2>
      <ul className="catalog__list">{renderProducts()}</ul>
    </section>
  );
};

export default Catalog;

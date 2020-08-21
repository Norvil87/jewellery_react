import React from "react";
import "./Catalog.scss";
import { IProduct, IProducts } from "../types";
import Product from "../Product/Product";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/types";

const Catalog = () => {
  const { filteredProducts, productsPerPage, currentPage } = useSelector((state: IRootState) => {
    return {
      filteredProducts: state.filteredProducts,
      productsPerPage: state.productsPerPage,
      currentPage: state.currentPage,
    };
  });

  let visibleProducts: IProducts = {};
  console.log(currentPage)
  Object.keys(filteredProducts)
    .splice((currentPage - 1) * productsPerPage, productsPerPage)
    .map(key => {
      
      visibleProducts[key] = filteredProducts[key];
    });

    

  const renderProducts = () => {
    const elems: JSX.Element[] = [];

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
    }

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

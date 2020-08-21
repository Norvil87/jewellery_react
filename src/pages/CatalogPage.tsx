import React from "react";
import Filter from "../components/Filter/Filter";
import Catalog from "../components/Catalog/Catalog";
import Pagination from "../components/Pagination/Pagination";

const CatalogPage = () => (
  <main className="content">
    <h1 className="visually-hidden">Jewellery catalog page</h1>
    <div className="content__top-container content__top-container--catalog">
      <div>
        <h2>ALL JEWELLERY</h2>
        <p>Discover picks of fashion's finest trends in our jewellery catalog</p>
      </div>
    </div>

    <div className="content__catalog-wrapper">
      <div className="container ">
        <Filter />
        <Catalog />
      </div>
      <div className="container">
        <div className="catalog">
          <Pagination />
        </div>
      </div>
    </div>
  </main>
);

export default CatalogPage;

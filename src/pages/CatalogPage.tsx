import React from "react";
import Filter from "../components/Filter/Filter";
import Catalog from "../components/Catalog/Catalog";

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
          <div className="catalog__pagination">
            <button className="catalog__pagination-button" type="button">
              Previous
            </button>
            <ul className="catalog__pagination-list catalog__pagination-list--desktop">
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
            </ul>
            <button className="catalog__pagination-button" type="button">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default CatalogPage;

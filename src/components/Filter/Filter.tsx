import React from "react";
import "./Filter.scss";
import {
  toggleFilterCheckboxVisibility,
  setFilteredProducts,
  setFilterCheckboxVisibility,
  setPrice,
  setFilterVisibility,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/types";
import { products } from "../data";
import PriceSlider from "../PriceSlider/PriceSlider";
import { IProducts } from "../types";

const Filter = () => {
  const { productFilters, priceFilter, filterVisible } = useSelector((state: IRootState) => {
    return {
      productFilters: state.productFilters,
      priceFilter: state.priceFilter,
      filterVisible: state.filterVisible,
    };
  });
  const dispatch = useDispatch();
  const desktopBreakpoint = 1023;

  window.addEventListener("resize", () => {
    if (window.innerWidth > desktopBreakpoint && !filterVisible) {
      dispatch(setFilterVisibility(true));
    }
  });

  const handleApplyButtonClick = (evt: React.MouseEvent) => {
    evt.preventDefault();

    const filteredProducts: IProducts = {};
    for (const productId in products) {
      const product = products[productId];

      if (
        productFilters[product.type] &&
        product.price >= priceFilter.minCurrent &&
        product.price <= priceFilter.maxCurrent
      ) {
        filteredProducts[productId] = product;
      }
    }
    dispatch(setFilteredProducts(filteredProducts));
  };

  const handleFilterClick = (name: string) => () => {
    dispatch(toggleFilterCheckboxVisibility(name));
  };

  const handleClearButtonClick = () => {
    for (const name in productFilters) {
      dispatch(setFilterCheckboxVisibility(name, true));
    }
    dispatch(setPrice([priceFilter.minDefault, priceFilter.maxDefault]));
  };

  const handleShowFilterButtonClick = () => {
    dispatch(setFilterVisibility(true));
  };

  const handleCloseFilterButtonClick = () => {
    dispatch(setFilterVisibility(false));
  };

  return (
    <section className="filter">
      <h2 className="visually-hidden">Filters</h2>
      <button className="button filter__show-button" type="button" onClick={handleShowFilterButtonClick}>
        Filter
      </button>
      <form
        className={`filter__form ${!filterVisible && "hidden"}`}
        action="#"
        method="POST"
        encType="multipart/form-data"
        autoComplete="on"
      >
        <fieldset className="filter__fieldset filter__fieldset--product unfolded">
          <h3>Product</h3>
          <div>
            <div className="filter__input-container">
              <input
                id="necklace"
                className="visually-hidden"
                type="checkbox"
                value="necklace"
                onClick={handleFilterClick("necklace")}
                defaultChecked
              />
              <label htmlFor="necklace" className="filter__label">
                Necklaces
              </label>
            </div>
            <div className="filter__input-container">
              <input
                id="chocker"
                className="visually-hidden"
                type="checkbox"
                value="chocker"
                onClick={handleFilterClick("choker")}
                defaultChecked
              />
              <label htmlFor="chocker" className="filter__label">
                Chokers
              </label>
            </div>
            <div className="filter__input-container">
              <input
                id="ring"
                className="visually-hidden"
                type="checkbox"
                value="ring"
                onClick={handleFilterClick("ring")}
                defaultChecked
              />
              <label htmlFor="ring" className="filter__label">
                Rings
              </label>
            </div>
            <div className="filter__input-container">
              <input
                id="earrings"
                className="visually-hidden"
                type="checkbox"
                value="earrings"
                onClick={handleFilterClick("earrings")}
                defaultChecked
              />
              <label htmlFor="earrings" className="filter__label">
                Earrings
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="filter__fieldset">
          <h3>Material</h3>
          <div>
            <p>More filters here</p>
          </div>
        </fieldset>
        <fieldset className="filter__fieldset">
          <h3>Collection</h3>
          <div>
            <p>More filters here</p>
          </div>
        </fieldset>
        <fieldset className="filter__fieldset filter__fieldset--price unfolded">
          <h3>Price</h3>
          <PriceSlider />
        </fieldset>
        <button className="button filter__button filter__button--submit" type="submit" onClick={handleApplyButtonClick}>
          Apply
        </button>
        <button className="filter__button filter__button--clear" type="reset" onClick={handleClearButtonClick}>
          Clear All
        </button>
        <button className="filter__button filter__button--close" type="button" onClick={handleCloseFilterButtonClick}>
          Close filters
        </button>
      </form>
    </section>
  );
};

export default Filter;

import React from "react";
import "./Filter.scss";
import { toggleFilterVisibility, setVisibleProducts } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/types";
import { products } from "../data";
import PriceSlider from "../PriceSlider/PriceSlider";

const Filter = () => {
  const filters = useSelector((state: IRootState) => state.filters);
  const dispatch = useDispatch();

  const handleApplyButtonClick = (evt: React.MouseEvent) => {
    evt.preventDefault();

    const filteredProducts = products.filter(product => {
      return filters[product.type];
    });

    dispatch(setVisibleProducts(filteredProducts));
  };

  const handleFilterClick = (name: string) => () => {
    dispatch(toggleFilterVisibility(name));
  };

  return (
    <section className="filter">
      <h2 className="visually-hidden">Filters</h2>
      <button className="button filter__show-button" type="button">
        Filter
      </button>
      <form className="filter__form" action="#" method="POST" encType="multipart/form-data" autoComplete="on">
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
          <div className="filter__slider-container">
            <div className="filter__slider">
              <div className="filter__slider-track"></div>
              <div className="filter__slider-price filter__slider-price--min">
                <div className="filter__slider-thumb filter__slider-thumb--min"></div>
                <div className="filter__slider-output">$ 55</div>
              </div>
              <div className="filter__slider-price filter__slider-price--max">
                <div className="filter__slider-thumb filter__slider-thumb--max"></div>
                <div className="filter__slider-output">$ 155</div>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="filter__fieldset filter__fieldset--price unfolded">
          <h3>Price</h3>
          <PriceSlider />
        </fieldset>
        
        <button className="button filter__button filter__button--submit" type="submit" onClick={handleApplyButtonClick}>
          Apply
        </button>
        <button className="filter__button filter__button--clear" type="reset">
          Clear All
        </button>
        <button className="filter__button filter__button--close" type="button">
          Close filters
        </button>
      </form>
    </section>
  );
};

export default Filter;

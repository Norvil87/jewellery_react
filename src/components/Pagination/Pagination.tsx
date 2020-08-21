import React from "react";
import "./Pagination.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/actions";
import { IRootState } from "../../store/types";
import { products } from "../data";

const Pagination = () => {
  const { currentPage, filteredProducts, productsPerPage } = useSelector((state: IRootState) => {
    return {
      currentPage: state.currentPage,
      filteredProducts: state.filteredProducts,
      productsPerPage: state.productsPerPage,
    };
  });
  const dispatch = useDispatch();

  const handlePreviousButtonClick = () => {
    dispatch(setCurrentPage(false));
  };

  const handlePageButtonClick = (number: number) => () => {
    dispatch(setCurrentPage(false, number));
  };

  const handleNextButtonClick = () => {
    dispatch(setCurrentPage(true));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Object.keys(filteredProducts).length / productsPerPage); i++) {
      pageNumbers.push(
        <li key={i}>
          <button className={`${currentPage === i ? "current-page" : ""}`} onClick={handlePageButtonClick(i)}>
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="catalog__pagination">
      <button className="catalog__pagination-button" type="button" onClick={handlePreviousButtonClick}>
        Previous
      </button>
      <ul className="catalog__pagination-list catalog__pagination-list--desktop">{renderPageNumbers()}</ul>
      <button className="catalog__pagination-button" type="button" onClick={handleNextButtonClick}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

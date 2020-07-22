import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__top-container">
        <form className="header__search-form" action="#" method="POST" encType="multipart/form-data" autoComplete="on">
          <div className="header__input-container">
            <input id="header-search" type="search" name="header-search" placeholder="Type here to search" />
            <label className="visually-hidden header__label">search</label>
          </div>
        </form>
        <button className="header__menu-button" type="button">
          <svg className="header__icon-hamburger" width="25" height="16" role="img" aria-label="Open menu">
            <use xlinkHref="#icon-hamburger" aria-hidden="true"></use>
          </svg>
        </button>
        <div className="header__logo-container">
          <a className="header__logo-link">
            <svg
              className="header__logo-icon header__logo-icon--desktop"
              width="66"
              height="66"
              role="img"
              aria-label="Логотип магазина Jewelerry"
            >
              <use xlinkHref="#icon-logo-desktop" aria-hidden="true"></use>
            </svg>
            <svg
              className="header__logo-icon header__logo-icon--mobile"
              width="52"
              height="52"
              role="img"
              aria-label="Логотип магазина Jewelerry"
            >
              <use xlinkHref="#icon-logo-mobile" aria-hidden="true"></use>
            </svg>
          </a>
        </div>
        <div className="header__user-container">
          <button className="header__user-button" type="button">
            Login
          </button>
          <a className="header__user-cart-link" href="#">
            Cart <span>0</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

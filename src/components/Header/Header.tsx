import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import "./Header.scss";
import "./MobileMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/types";
import { setLoginModalVisibility, setMobileMenuVisibility } from "../../../src/store/actions";

const Header = (props: RouteComponentProps) => {
  const { cartItemsTotal, mobileMenuVisible } = useSelector((state: IRootState) => {
    return {
      cartItemsTotal: state.cartItemsTotal,
      mobileMenuVisible: state.mobileMenuVisible,
    };
  });

  const isMainPage = props.location.pathname === "/";
  const desktopBreakpoint = 1023;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setMobileMenuVisibility(!mobileMenuVisible));
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > desktopBreakpoint) {
      dispatch(setMobileMenuVisibility(false));
    }
  });

  return (
    <>
      <header className="header">
        <div className="container header__top-container">
          <form
            className="header__search-form"
            action="#"
            method="POST"
            encType="multipart/form-data"
            autoComplete="on"
          >
            <div className="header__input-container">
              <input id="header-search" type="search" name="header-search" placeholder="Type here to search" />
              <label htmlFor="header-search" className="visually-hidden header__label">
                search
              </label>
            </div>
          </form>
          <button className="header__menu-button" type="button" onClick={handleClick}>
            <svg className="header__icon-hamburger" width="25" height="16" role="img" aria-label="Open menu">
              <use xlinkHref="#icon-hamburger" aria-hidden="true"></use>
            </svg>
          </button>
          <div className="header__logo-container">
            <Link className="header__logo-link" to="/">
              <svg
                className="header__logo-icon header__logo-icon--desktop"
                width="66"
                height="66"
                role="img"
                aria-label="Jewelerry logo"
              >
                <use xlinkHref="#icon-logo-desktop" aria-hidden="true"></use>
              </svg>
              <svg
                className="header__logo-icon header__logo-icon--mobile"
                width="52"
                height="52"
                role="img"
                aria-label="Jewelerry logo"
              >
                <use xlinkHref="#icon-logo-mobile" aria-hidden="true"></use>
              </svg>
            </Link>
          </div>
          <div className="header__user-container">
            <button
              className="header__user-button"
              type="button"
              onClick={() => {
                dispatch(setLoginModalVisibility(true));
              }}
            >
              Login
            </button>
            <Link className="header__user-cart-link" to="/underConstruction">
              Cart <span>{cartItemsTotal}</span>
            </Link>
          </div>
        </div>
      </header>
      <header className={`header header--nav ${isMainPage ? "header--index" : ""}`}>
        <nav className="container header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/catalog">
                What’s new
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/catalog">
                Chokers
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/catalog">
                Necklaces
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/catalog">
                Rings
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/catalog">
                Earrings
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <header className={`header container mobile-menu ${!mobileMenuVisible ? "hidden" : ""}`}>
        <div className="header__top-container mobile-menu__top-container">
          <button className="header__menu-button" type="button" onClick={handleClick}>
            <svg className="header__icon-hamburger" width="25" height="16" role="img" aria-label="Open menu">
              <use xlinkHref="#icon-hamburger-droppable" aria-hidden="true"></use>
            </svg>
          </button>
          <div className="header__logo-container">
            <a className="header__logo-link">
              <svg
                className="header__logo-icon header__logo-icon--desktop"
                width="66"
                height="66"
                role="img"
                aria-label="Jewelerry logo"
              >
                <use xlinkHref="#icon-logo-desktop-droppable" aria-hidden="true"></use>
              </svg>
              <svg
                className="header__logo-icon header__logo-icon--mobile"
                width="52"
                height="52"
                role="img"
                aria-label="Jewelerry logo"
              >
                <use xlinkHref="#icon-logo-mobile-droppable" aria-hidden="true"></use>
              </svg>
            </a>
          </div>
          <div className="header__user-container mobile-menu__user-container"></div>
        </div>
        <form
          className="mobile-menu__search-form"
          action="#"
          method="POST"
          encType="multipart/form-data"
          autoComplete="on"
        >
          <div className="mobile-menu__input-container">
            <input id="mobile-menu-search" type="search" name="header-search" />
            <label htmlFor="mobile-menu-search" className="visually-hidden header__label">
              search
            </label>
          </div>
        </form>
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">
              <Link className="mobile-menu__link" to="/catalog">
                What’s new
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link className="mobile-menu__link" to="/catalog">
                Chokers
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link className="mobile-menu__link" to="/catalog">
                Necklaces
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link className="mobile-menu__link" to="/catalog">
                Rings
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link className="mobile-menu__link" to="/catalog">
                Earrings
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="mobile-menu__nav mobile-menu__nav--secondary">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">
              <Link className="mobile-menu__link" to="/underConstruction">
                About CH
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link className="mobile-menu__link" to="/underConstruction">
                Stores & Hours
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link className="mobile-menu__link" to="/underConstruction">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <button className="mobile-menu__user-button" type="button">
          Login
        </button>
      </header>
    </>
  );
};

export default withRouter(Header);

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top-container">
          <h2>The good stuff in your inbox</h2>
          <p>News and updates from CH. No spam, we promise.</p>
          <form className="footer__form" action="#" method="POST" encType="multipart/form-data" autoComplete="on">
            <div className="footer__form-input-container">
              <input id="footer-email" type="email" name="email" placeholder="Your E-mail" />
              <label htmlFor="footer-email" className="visually-hidden">Subscribe with email</label>
            </div>
            <button className="footer__form-button" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <ul className="footer__nav-list footer__nav-list--left">
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/underConstruction">
              Ordering & Payment
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/underConstruction">
              Terms & Conditions
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/underConstruction">
              Returns & Exchanges
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/underConstruction">
              Delivery
            </Link>
          </li>
        </ul>
        <ul className="footer__nav-list footer__nav-list--right">
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/underConstruction">
              About CH
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/underConstruction">
              Stores & Hours
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/underConstruction">
              Jobs
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/underConstruction">
              Contact Us
            </Link>
          </li>
        </ul>
        <ul className="footer__social-list">
          <li className="footer__social-item footer__social-item--facebook">
            <Link className="footer__social-link footer__social-link--facebook" to="http://facebook.com">
              Facebook
            </Link>
          </li>
          <li className="footer__social-item footer__social-item--instagramm">
            <Link className="footer__social-link footer__social-link--instagramm" to="http://instagramm.com">
              Instagram
            </Link>
          </li>
          <li className="footer__social-item">
            <Link className="footer__social-link footer__social-link--pinterest" to="http://pinterest.com">
              Pinterest
            </Link>
          </li>
          <li className="footer__social-item">
            <Link className="footer__social-link footer__social-link--twitter" to="http://twitter.com">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

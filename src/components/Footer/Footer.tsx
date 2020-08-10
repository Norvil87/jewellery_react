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
            <a className="footer__social-link footer__social-link--facebook" href="http://facebook.com">
              Facebook
            </a>
          </li>
          <li className="footer__social-item footer__social-item--instagramm">
            <a className="footer__social-link footer__social-link--instagramm" href="http://instagramm.com">
              Instagram
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link footer__social-link--pinterest" href="http://pinterest.com">
              Pinterest
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link footer__social-link--twitter" href="http://twitter.com">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

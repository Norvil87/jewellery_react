import React from "react";
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
              <label className="visually-hidden">Subscribe with email</label>
            </div>
            <button className="footer__form-button" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <ul className="footer__nav-list footer__nav-list--left">
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              Ordering & Payment
            </a>
          </li>
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              Terms & Conditions
            </a>
          </li>
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              Returns & Exchanges
            </a>
          </li>
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              Delivery
            </a>
          </li>
        </ul>
        <ul className="footer__nav-list footer__nav-list--right">
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              About CH
            </a>
          </li>
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              Stores & Hours
            </a>
          </li>
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              Jobs
            </a>
          </li>
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="footer__social-list">
          <li className="footer__social-item footer__social-item--facebook">
            <a className="footer__social-link footer__social-link--facebook" href="#">
              Facebook
            </a>
          </li>
          <li className="footer__social-item footer__social-item--instagramm">
            <a className="footer__social-link footer__social-link--instagramm" href="#">
              Instagram
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link footer__social-link--pinterest" href="#">
              Pinterest
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link footer__social-link--twitter" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

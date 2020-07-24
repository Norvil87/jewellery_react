import React from "react";
import "./New.scss";
import "../Product/Product.scss"; //temp

import image from "../../img/products/layered-choker-necklace@1x.jpg";

const New = () => {
  return (
    <section className="new content__new container">
      <div className="new__top-container">
        <button className="new__control-button new__control-button--backwards" type="button">
          Back
        </button>
        <div>
          <h2>New In</h2>
          <a className="new__catalog-link" href="catalog.html">
            Shop now
          </a>
        </div>
        <button className="new__control-button new__control-button--forward" type="button">
          Forward
        </button>
      </div>
      <div className="new__gallery">
        <ul className="new__gallery-list">
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Necklace with amethyst</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="../img/products/purple-gemstone-necklace@1x.webp 1x, ../img/products/purple-gemstone-necklace@2x.webp 2x"
                  />
                  <img
                    src="img/products/purple-gemstone-necklace@1x.jpg"
                    srcSet="img/products/purple-gemstone-necklace@1x.jpg 1x, img/products/purple-gemstone-necklace@2x.jpg 2x"
                    alt="purple-gemstone-necklace"
                  />
                </picture>
              </div>
              <p>$ 145</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Layered сhoker</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    // srcSet="../../img/products/layered-choker-necklace@1x.webp 1x, ../../img/products/layered-choker-necklace@2x.webp 2x"
                  />
                  <img
                    src={image}
                    //srcSet="./img/products/layered-choker-necklace@1x.jpg 1x, ./img/products/layered-choker-necklace@2x.jpg 2x"
                    alt="layered-choker-necklace"
                  />
                </picture>
              </div>
              <p>$ 115</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Gold chain</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/products/dainty-gold-necklace@1x.webp 1x, img/products/dainty-gold-necklace@2x.webp 2x"
                  />
                  <img
                    src="img/products/dainty-gold-necklace@1x.jpg"
                    srcSet="img/products/dainty-gold-necklace@1x.jpg 1x, img/products/dainty-gold-necklace@2x.jpg 2x"
                    alt="dainty-gold-necklace"
                  />
                </picture>
              </div>
              <p>$ 215</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Galaxy earrings</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x"
                  />
                  <img
                    src="img/products/galaxy-earrings@1x.jpg"
                    srcSet="img/products/galaxy-earrings@1x.jpg 1x, img/products/galaxy-earrings@2x.jpg 2x"
                    alt="galaxy-earrings"
                  />
                </picture>
              </div>
              <p>$ 95</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Double pearl earrings</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/products/double-pearl-earrings@1x.webp 1x, img/products/double-pearl-earrings@2x.webp 2x"
                  />
                  <img
                    src="img/products/double-pearl-earrings@1x.jpg"
                    srcSet="img/products/double-pearl-earrings@1x.jpg 1x, img/products/double-pearl-earrings@2x.jpg 2x"
                    alt="Double pearl earrings"
                  />
                </picture>
              </div>
              <p>$ 115</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Choker with gold bead</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/products/black-choker-gold-bead@1x.webp 1x, img/products/black-choker-gold-bead@2x.webp 2x"
                  />
                  <img
                    src="img/products/black-choker-gold-bead@1x.jpg"
                    srcSet="img/products/black-choker-gold-bead@1x.jpg 1x, img/products/black-choker-gold-bead@2x.jpg 2x"
                    alt="Double pearl earrings"
                  />
                </picture>
              </div>
              <p>$ 55</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Gold layered necklace</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/products/gold-layered-necklace@1x.webp 1x, img/products/gold-layered-necklace@2x.webp 2x"
                  />
                  <img
                    src="img/products/gold-layered-necklace@1x.jpg"
                    srcSet="img/products/gold-layered-necklace@1x.jpg 1x, img/products/gold-layered-necklace@2x.jpg 2x"
                    alt="Gold layered necklace"
                  />
                </picture>
              </div>
              <p>$ 155</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Blue gemstone pendant</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/products/blue-gemstone-pendant@1x.webp 1x, img/products/blue-gemstone-pendant@2x.webp 2x"
                  />
                  <img
                    src="img/products/blue-gemstone-pendant@1x.jpg"
                    srcSet="img/products/blue-gemstone-pendant@1x.jpg 1x, img/products/blue-gemstone-pendant@2x.jpg 2x"
                    alt="Choker with gold bead"
                  />
                </picture>
              </div>
              <p>$ 105</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Boho earrings</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/products/boho-earrings@1x.webp 1x, img/products/boho-earrings@2x.webp 2x"
                  />
                  <img
                    src="img/products/boho-earrings@1x.jpg"
                    srcSet="img/products/boho-earrings@1x.jpg 1x, img/products/boho-earrings@2x.jpg 2x"
                    alt="Boho earrings"
                  />
                </picture>
              </div>
              <p>$ 75</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Gold bird necklace</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/products/bird-necklace@1x.webp 1x, img/products/bird-necklace@2x.webp 2x"
                  />
                  <img
                    src="img/products/bird-necklace@1x.jpg"
                    srcSet="img/products/bird-necklace@1x.jpg 1x, img/products/bird-necklace@2x.jpg 2x"
                    alt="Gold bird necklace"
                  />
                </picture>
              </div>
              <p>$ 135</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Black leather choker</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/products/black-leather-choker-necklace@1x.webp 1x, img/products/black-leather-choker-necklace@2x.webp 2x"
                  />
                  <img
                    src="img/products/black-leather-choker-necklace@1x.jpg"
                    srcSet="img/products/black-leather-choker-necklace@1x.jpg 1x, img/products/black-leather-choker-necklace@2x.jpg 2x"
                    alt="Black leather choker"
                  />
                </picture>
              </div>
              <p>$ 85</p>
            </a>
          </li>
          <li className="new__gallery-item product">
            <a className="new__link" href="#">
              <h3>Necklace with amethyst</h3>
              <div className="product__image-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/products/purple-gemstone-necklace@1x.webp 1x, img/products/purple-gemstone-necklace@2x.webp 2x"
                  />
                  <img
                    src="img/products/purple-gemstone-necklace@1x.jpg"
                    srcSet="img/products/purple-gemstone-necklace@1x.jpg 1x, img/products/purple-gemstone-necklace@2x.jpg 2x"
                    alt="Necklace with amethyst"
                  />
                </picture>
              </div>
              <p>$ 145</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="new__pagination">
        <ul className="new__pagination-list new__pagination-list--desktop">
          <li>
            <a href="#" className="current-page">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ul>
        <ul className="new__pagination-list new__pagination-list--tablet">
          <li>
            <a href="#" className="current-page">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">6</a>
          </li>
        </ul>
        <div className="new__pagination-list new__pagination-list--mobile">
          <span>1 </span> of <span> 6</span>
        </div>
      </div>
    </section>
  );
};

export default New;

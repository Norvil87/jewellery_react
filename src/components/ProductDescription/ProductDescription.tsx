import React from "react";
import "./ProductDescription.scss";

const ProductDescription: React.FC<any> = ({ data, match }: any) => {
  console.log(match);
  const product = data.find((product: any) => product.id == match.params.id);
  console.log(product);
  return (
    <section className="item content__item container">
      <h2 className="visually-hidden"></h2>
      <div className="item__container">
        <div className="item__gallery">
          <div className="item__small-images-container">
            <a className="item__image-link" href="#">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/products/goldNecklace/gold-necklace-for-women@1x.webp 1x, img/products/goldNecklace/gold-necklace-for-women@2x.webp 2x"
                />
                <img
                  src="img/products/goldNecklace/gold-necklace-for-women@1x.jpg"
                  srcSet="img/products/goldNecklace/gold-necklace-for-women@1x.jpg 1x, img/products/goldNecklace/gold-necklace-for-women@2x.jpg 2x"
                  alt="gold-necklace"
                />
              </picture>
            </a>
            <a className="item__image-link" href="#">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/products/goldNecklace/pretty-gold-necklace@1x.webp 1x, img/products/goldNecklace/pretty-gold-necklace@2x.webp 2x"
                />
                <img
                  src="img/products/goldNecklace/pretty-gold-necklace@1x.jpg"
                  srcSet="img/products/goldNecklace/pretty-gold-necklace@1x.jpg 1x, img/products/goldNecklace/pretty-gold-necklace@2x.jpg 2x"
                  alt="gold-necklace"
                />
              </picture>
            </a>
            <a className="item__image-link" href="#">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/products/goldNecklace/womens-necklace-set@1x.webp 1x, img/products/goldNecklace/womens-necklace-set@2x.webp 2x"
                />
                <img
                  src="img/products/goldNecklace/womens-necklace-set@1x.jpg"
                  srcSet="img/products/goldNecklace/womens-necklace-set@1x.jpg 1x, img/products/goldNecklace/womens-necklace-set@2x.jpg 2x"
                  alt="gold-necklace"
                />
              </picture>
            </a>
          </div>
          <div className="item__big-image-container">
            <a className="item__image-link" href="#">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/products/goldNecklace/necklace-detail@1x.webp 1x, img/products/goldNecklace/necklace-detail@2x.webp 2x"
                />
                <img
                  src="img/products/goldNecklace/necklace-detail@1x.jpg"
                  srcSet="img/products/goldNecklace/necklace-detail@1x.jpg 1x, img/products/goldNecklace/necklace-detail@2x.jpg 2x"
                  alt="gold-necklace"
                />
              </picture>
            </a>
            <div className="item__gallery-nav">1 of 4</div>
          </div>
        </div>
        <div className="item__info">
          <div className="item__info-container">
            <h3></h3>
            <div className="item__price">$ 115</div>
            <div className="item__user-menu">
              <div className="item__user-menu-choice">Description</div>
              <div className="item__user-menu-choice item__user-menu-choice--active">Additional info</div>
            </div>
            <ul className="item__detailed-info">
              <li>
                <p>Metal type</p>
                <p>Gold 585</p>
              </li>
              <li>
                <p>Stone</p>
                <p>Turquoise</p>
              </li>
              <li>
                <p>Size</p>
                <p>18” / 20”</p>
              </li>
            </ul>
            <button className="button item__button" type="button">
              Add to cart
            </button>
            <div className="item__delivery">
              <p>14 Day Returns</p>
              <p>2-Year Warranty</p>
              <p>Free Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;

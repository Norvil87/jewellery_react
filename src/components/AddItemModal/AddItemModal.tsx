import React from "react";
import "./AddItemModal.scss";

const AddItemModal = () => {
  return (
    <div className="addItem">
      <div className="addItem__content">
        <h2>The item was added to your cart</h2>
        <div className="addItem__container">
          <div className="addItem__image-container">
            <picture>
              <source
                type="image/webp"
                srcSet="img/products/goldNecklace/necklace-detail@1x.webp 1x, img/products/goldNecklace/necklace-detail@2x.webp 2x"
              />
              <img
                src="img/products/goldNecklace/necklace-detail@1x.jpg"
                srcSet="img/products/goldNecklace/necklace-detail@1x.jpg 1x, img/products/goldNecklace/necklace-detail@2x.jpg 2x"
                alt="Elephant earrings"
              />
            </picture>
          </div>
          <div className="addItem__info">
            <h3>Gold Necklace</h3>
            <p>$ 115</p>
          </div>
          <div className="addItem__quantity">
            <button className="addItem__quantity-button addItem__quantity-button--add" type="button">
              add one item
            </button>
            <p>1</p>
            <button className="addItem__quantity-button addItem__quantity-button--remove" type="button">
              remove one item
            </button>
          </div>
        </div>
        <div className="addItem__total">
          <div className="addItem__total-goods">
            You have <span>1</span> item in the cart
          </div>
          <div className="addItem__total-cost">
            Cart subtotal: $ <span>115</span>
          </div>
        </div>
        <div className="addItem__links-container">
          <a className="button addItem__link addItem__link--continue" href="catalog.html">
            Continue shopping
          </a>
          <a className="button addItem__link addItem__link--checkout" href="#">
            Checkout
          </a>
        </div>
        <button className="addItem__button-close" type="button">
          close modal
        </button>
      </div>
    </div>
  );
};

export default AddItemModal;

import React from "react";
import "./AddItemModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  toggleAddItemModalVisibility,
  incrementSelectedProductQuantity,
  decrementSelectedProductQuantity,
  updateCartItems,
} from "../../store/actions";
import { IRootState } from "../../store/types";
import { products } from "../data";

const AddItemModal = () => {
  const dispatch = useDispatch();
  const selectedProductId = useSelector((state: IRootState) => state.selectedProductId);
  const selectedProductQuantity = useSelector((state: IRootState) => state.selectedProductQuantity);
  const cartItems = useSelector((state: IRootState) => state.cartItems);
 const { name, price, imgUrl, srcSetJpg, srcSetWebp } = products[selectedProductId];

  const handleIncrementButtonClick = () => {
    dispatch(incrementSelectedProductQuantity());
    dispatch(updateCartItems());
  };

  const handleDecrementButtonClick = () => {
    dispatch(decrementSelectedProductQuantity());
    dispatch(updateCartItems());
  };

  return (
    <div className="addItem">
      <div className="addItem__content">
        <h2>The item was added to your cart</h2>
        <div className="addItem__container">
          <div className="addItem__image-container">
            <picture>
              <source type="image/webp" srcSet={srcSetWebp} />
              <img src={imgUrl} srcSet={srcSetJpg} alt="Elephant earrings" />
            </picture>
          </div>
          <div className="addItem__info">
            <h3>{name}</h3>
            <p>{`$ ${price}`}</p>
          </div>
          <div className="addItem__quantity">
            <button
              className="addItem__quantity-button addItem__quantity-button--add"
              type="button"
              onClick={handleIncrementButtonClick}
            >
              add one item
            </button>
            <p>{selectedProductQuantity}</p>
            <button
              className="addItem__quantity-button addItem__quantity-button--remove"
              type="button"
              onClick={handleDecrementButtonClick}
            >
              remove one item
            </button>
          </div>
        </div>
        <div className="addItem__total">
          <div className="addItem__total-goods">
            You have <span>{selectedProductQuantity}</span> item(s) in the cart
          </div>
          <div className="addItem__total-cost">
            Cart subtotal:<span>{` $ ${price * selectedProductQuantity}`}</span>
          </div>
        </div>
        <div className="addItem__links-container">
          <Link
            className="button addItem__link addItem__link--continue"
            to="/catalog"
            onClick={() => dispatch(toggleAddItemModalVisibility())}
          >
            Continue shopping
          </Link>
          <Link
            className="button addItem__link addItem__link--checkout"
            to="/underConstruction"
            onClick={() => dispatch(toggleAddItemModalVisibility())}
          >
            Checkout
          </Link>
        </div>
        <button
          className="addItem__button-close"
          type="button"
          onClick={() => dispatch(toggleAddItemModalVisibility())}
        >
          close modal
        </button>
      </div>
    </div>
  );
};

export default AddItemModal;

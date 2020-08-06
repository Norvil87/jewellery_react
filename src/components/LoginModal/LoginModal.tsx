import React from "react";
import "./LoginModal.scss";
import { toggleLoginModalVisibility } from "../../store/actions";
import { useDispatch } from "react-redux";

const LoginModal = () => {
  const dispatch = useDispatch();

  return (
    <div className="login" /* onClick={() => dispatch(toggleLoginModalVisibility())} */>
      <div className="login__content">
        <div className="login__content-container">
          <h2>Log In</h2>
          <form className="login__form" action="#" method="post" encType="multipart/form-data" autoComplete="on">
            <div className="login__input-container login__input-container--email">
              <input id="login-email" type="email" name="email" placeholder="Your E-mail" required />
              <label className="visually-hidden" htmlFor="login-email">
                Enter email
              </label>
            </div>
            <div className="login__input-container login__input-container--password">
              <input id="login-password" type="password" name="password" required placeholder="Password" />
              <label className="visually-hidden" htmlFor="login-password">
                Enter password
              </label>
            </div>
            <a className="login__password-reset">Forgot your password?</a>
            <button className="button login__button login__button--submit" type="submit">
              Log In
            </button>
            <button
              className="login__button login__button--close"
              type="button"
              onClick={() => dispatch(toggleLoginModalVisibility())}
            >
              close modal
            </button>
          </form>
          <div className="login__sign-up">
            Don’t have an account?{" "}
            <a className="login__sign-up-link" href="#">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

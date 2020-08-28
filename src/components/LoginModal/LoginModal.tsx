import React, { useRef } from "react";
import "./LoginModal.scss";
import { setLoginModalVisibility } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { HashLink as Link } from "react-router-hash-link";

const LoginModal = () => {
  const dispatch = useDispatch();
  const modalOverlay = useRef(null);
  const closeBtn = useRef(null);
  const { register, handleSubmit, errors, clearErrors } = useForm();

  const handleClick = (evt: React.MouseEvent) => {
    if (evt.target === modalOverlay.current || evt.target === closeBtn.current) {
      dispatch(setLoginModalVisibility(false));
    }
  };

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="login" ref={modalOverlay} onClick={handleClick}>
      <div className="login__content">
        <div className="login__content-container">
          <h2>Log In</h2>
          <form
            className="login__form"
            action="#"
            method="post"
            encType="multipart/form-data"
            autoComplete="on"
            onSubmit={handleSubmit(onSubmit)}
            onChange={() => clearErrors()}
          >
            <div className="login__input-container login__input-container--email">
              <input
                id="login-email"
                name="email"
                placeholder="Your E-mail"
                ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
              />
              {errors.email?.type === "required" && <span className="login__errorMsg">This field is required</span>}
              {errors.email?.type === "pattern" && <span className="login__errorMsg">Invalid email</span>}
              <label className="visually-hidden" htmlFor="login-email">
                Enter email
              </label>
            </div>
            <div className="login__input-container login__input-container--password">
              <input id="login-password" name="password" placeholder="Password" ref={register({ required: true })} />
              {errors.password?.type === "required" && <span className="login__errorMsg">This field is required</span>}
              <label className="visually-hidden" htmlFor="login-password">
                Enter password
              </label>
            </div>
            <Link
              className="login__password-reset"
              to="/underConstruction"
              onClick={() => dispatch(setLoginModalVisibility(false))}
            >
              Forgot your password?
            </Link>
            <button className="button login__button login__button--submit" type="submit">
              Log In
            </button>
            <button className="login__button login__button--close" type="button" ref={closeBtn}>
              close modal
            </button>
          </form>
          <div className="login__sign-up">
            Don’t have an account?{" "}
            <Link className="login__sign-up-link" to="/#test" onClick={() => dispatch(setLoginModalVisibility(false))}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

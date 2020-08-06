import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import { reducer } from "./store/reducers";

import "./scss/index.scss";
import "./scss/variables.scss";
import "./img/icon-logo-desktop.svg";
import "./img/icon-logo-mobile.svg";
import "./img/icon-hamburger.svg";
import "./img/icon-hamburger-droppable.svg";

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

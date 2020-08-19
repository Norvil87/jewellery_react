import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import UnderConstruction from "./UnderConstruction/UnderConstruction";
import LoginModal from "./LoginModal/LoginModal";
import AddItemModal from "./AddItemModal/AddItemModal";
import MainPage from "../pages/MainPage";
import CatalogPage from "../pages/CatalogPage";
import ProductPage from "../pages/ProductPage";
import "../scss/content.scss";
import "../scss/common.scss";
import { useSelector } from "react-redux";
import { IRootState } from "../store/types";

const App = () => {
  const loginModalVisible = useSelector((state: IRootState) => state.loginModalVisible);
  const cartModalVisible = useSelector((state: IRootState) => state.addItemModalVisible);

  /* var iframe = document.createElement("iframe");
  var html = "<p>Iframeadadfad</p>";
  document.body.appendChild(iframe);
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(html);
  iframe.contentWindow.document.close(); */

  return (
    <>
      <Router>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route path="/catalog" component={CatalogPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/" exact component={MainPage} />
            <Route path="/underConstruction" component={UnderConstruction} />
          </Switch>
        </div>
        <Footer />
        {loginModalVisible && <LoginModal />}
        {cartModalVisible && <AddItemModal />}
      </Router>
    </>
  );
};

export default App;

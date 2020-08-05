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
import { products } from "./data";
import "../scss/content.scss";
import "../scss/common.scss";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/products/:id" render={props => <ProductPage data={products} {...props} />} />
          <Route path="/" exact component={MainPage} />
          <Route path="/underConstruction" component={UnderConstruction} />
        </Switch>
        <Footer />
        {/* <LoginModal />
        <AddItemModal /> */}
      </Router>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "../pages/MainPage";
import CatalogPage from "../pages/CatalogPage";
import ProductPage from "../pages/ProductPage";
import { products } from "./data";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/products/:id" render={props => <ProductPage data={products} {...props} />} />
          <Route path="/" exact component={MainPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

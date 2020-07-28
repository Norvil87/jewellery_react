import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "../pages/MainPage";
import CatalogPage from "../pages/CatalogPage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/catalog">
            <CatalogPage />
          </Route>
          <Route path="/" exact>
            <MainPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

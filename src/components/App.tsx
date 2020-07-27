import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "../pages/MainPage";
import CatalogPage from "../pages/CatalogPage";

const App = () => {
  return (
    <>
      <Header />
      {/* <MainPage /> */}
      <CatalogPage />
      <Footer />
    </>
  );
};

export default App;

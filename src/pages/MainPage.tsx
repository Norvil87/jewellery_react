import React from "react";

import New from "../components/New/New";
import Blog from "../components/Blog/Blog";
import Faq from "../components/Faq/Faq";
import Media from "../components/Media/Media";

const MainPage = () => (
  <main className="content">
    <h1 className="visually-hidden">Jewellery main page</h1>
    <div className="content__top-container content__top-container--index">
      <div>
        <h2>Perfection</h2>
        <p>made to be yours</p>
      </div>
    </div>
    <New />
    <Blog />
    <Faq />
    <Media />
  </main>
);

export default MainPage;

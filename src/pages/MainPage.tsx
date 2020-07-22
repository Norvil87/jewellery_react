import React from "react";
import '../scss/content.scss';
import '../scss/common.scss';

const MainPage = () => {
  return (
    <>
      <main className="content">
        <h1 className="visually-hidden">Jewellery main page</h1>
        <div className="content__top-container content__top-container--index">
          <div>
            <h2>Perfection</h2>
            <p>made to be yours</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;

import React from "react";
import "./Faq.scss";

const Faq = () => {
  return (
    <section className="faq content__faq container">
          <h2>Frequently asked questions</h2>
          <ul className="faq__list">
            <li className="faq__item unfolded">
              <h3>What materials are the jewellery made of?</h3>
              <p>Our jewellerry is made of solid gold, silver or leather. Also, some jewellery contains precious and semiprecious stones and crystals.</p>
            </li>
            <li className="faq__item">
              <h3>Which countries do you deliver to?</h3>
              <p>Answer here</p>
            </li>
            <li className="faq__item">
              <h3>What are the payment methods?</h3>
              <p>Answer here</p>
            </li>
            <li className="faq__item">
              <h3>Can I return the jewellery if it didn’t fit me?</h3>
              <p>Answer here</p>
            </li>
          </ul>
        </section>
  );
};

export default Faq;

import React, { useState } from "react";
import "./Faq.scss";
import { faqData } from "../data";
import { IFaq } from "../types";

const Faq = () => {
  const [folded, toggleFolded] = useState(faqData.map(faq => true));

  const handleClick = (id: number) => () => {
    toggleFolded([...folded, (folded[id] = !folded[id])]);
  };

  const renderItems = () => {
    const faqs: JSX.Element[] = [];
    faqData.map((faq: IFaq) => {
      const { id, question, answer } = faq;
      faqs.push(
        <li key={id} className={`faq__item ${folded[id] ? "" : "unfolded"}`}>
          <h3 onClick={handleClick(id)}>{question}</h3>
          <p>{answer}</p>
        </li>
      );
    });
    return faqs;
  };

  return (
    <section className="faq content__faq">
      <div className="container">
        <h2>Frequently asked questions</h2>
        <ul className="faq__list">{renderItems()}</ul>
      </div>
    </section>
  );
};

export default Faq;

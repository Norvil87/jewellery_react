import React from "react";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import New from "../components/New/New";
import "../scss/content.scss";
import "../scss/common.scss";

const ProductPage = (props: any) => {
  
  return (
    <main className="content">
      <h1 className="visually-hidden">Jewellery product page</h1>
      <ProductDescription {...props} />
      <New />
    </main>
  );
};

export default ProductPage;

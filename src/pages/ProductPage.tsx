import React from "react";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import New from "../components/New/New";

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

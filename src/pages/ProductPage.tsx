import React from "react";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import New from "../components/New/New";
import { RouteProps } from "react-router-dom";

const ProductPage = (props: RouteProps) => {  
  return (
    <main className="content">
      <h1 className="visually-hidden">Jewellery product page</h1>
      <ProductDescription {...props} />
      <New />
    </main>
  );
};

export default ProductPage;

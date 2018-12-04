import React from "react";

import Product from "./Product";

const ProductsArea = () => {
  return (
    <div id="productsArea" className="container">
      <div className="card-columns">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductsArea;

import React from "react";

import Product from "./Product";
import productsList from "../../lib/products";

const ProductsArea = props => {
  const { onModalButtonClick } = props;
  return (
    <div id="productsArea" className="container">
      <div className="card-columns">
        {productsList.map(product => {
          return (
            <Product
              key={product.id}
              handleModalButtonClick={() => onModalButtonClick(product)}
              {...product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsArea;

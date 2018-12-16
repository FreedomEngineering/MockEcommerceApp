import React from "react";
import { v4 } from "uuid";

import Product from "./Product";

const productsList = [
  {
    id: v4(),
    name: "HDMI Cable",
    image: "https://via.placeholder.com/200",
    price: "10.99",
    shortDescription: "A useful cable",
    longDescription:
      "This cable is HDMI. It is very useful. So great, much fun."
  },
  {
    id: v4(),
    name: "Speakers",
    image: "https://via.placeholder.com/200",
    price: "29.97",
    shortDescription: "A set of nice speakers",
    longDescription:
      "Speakers are great and make sounds louder. Great value, such sound."
  }
];

const ProductsArea = () => {
  return (
    <div id="productsArea" className="container">
      <div className="card-columns">
        {productsList.map(product => {
          return (
            <Product
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              shortDescription={product.shortDescription}
              longDescription={product.longDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsArea;

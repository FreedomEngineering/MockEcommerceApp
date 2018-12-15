import React from "react";

import Product from "./Product";

const hdmiCable = {
  name: "HDMI Cable",
  image: "https://via.placeholder.com/200",
  price: "10.99",
  shortDescription: "A useful cable",
  longDescription: "This cable is HDMI. It is very useful. So great, much fun."
};

const ProductsArea = () => {
  return (
    <div id="productsArea" className="container">
      <div className="card-columns">
        <Product
          name={hdmiCable.name}
          image={hdmiCable.image}
          price={hdmiCable.price}
          shortDescription={hdmiCable.shortDescription}
          longDescription={hdmiCable.longDescription}
        />
        <Product
          name="Speakers"
          image="https://via.placeholder.com/200"
          price="29.97"
          shortDescription="A set of nice speakers"
          longDescription="Speakers are great and make sounds louder. Great value, such sound."
        />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductsArea;

import React from "react";

import { ModalButton } from "./Modal";

const Product = props => {
  const { image, name, price, shortDescription } = props;
  return (
    <div className="card product">
      <div className="card-body">
        <img
          className="shadow rounded img-thumbnail"
          src={image}
          alt="Card image cap"
        />
        <hr />
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
        <p className="card-text">{shortDescription}</p>
        <ModalButton product={props} />
      </div>
    </div>
  );
};

export default Product;

import React from "react";

import { ModalButton } from "./Modal";

const Product = () => {
  return (
    <div className="card product">
      <div className="card-body">
        <img
          className="shadow rounded img-thumbnail"
          src="https://via.placeholder.com/200"
          alt="Card image cap"
        />
        <hr />
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Price</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <ModalButton />
      </div>
    </div>
  );
};

export default Product;

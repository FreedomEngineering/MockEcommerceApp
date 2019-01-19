import React from "react";
import { v4 } from "uuid";

export const ModalButton = props => {
  const { handleModalButtonClick } = props;
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target="#productModal"
      onClick={handleModalButtonClick}
    >
      Launch demo modal
    </button>
  );
};

const Modal = props => {
  const { product, handleCartButtonClick, cart } = props;
  console.log("cart", cart);

  const isItemInCart = cart.indexOf(product.id) > -1;

  const longDescription =
    product.longDescription &&
    product.longDescription.split("\n").map(desc => (
      <p key={v4()} className="text-justify">
        {desc}
      </p>
    ));

  return (
    <div
      className="modal fade"
      id="productModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="productModalTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <img
                    className="img-fluid rounded mx-auto d-block p-3"
                    src={product.image}
                    alt="Card image cap"
                  />
                </div>
                <div className="col-md-12 col-lg-6">
                  <h1>{product.name}</h1>
                  <h6>{product.price}</h6>
                  <hr />
                  <h4>{product.shortDescription}</h4>
                  <button
                    className={`btn btn-block btn-${
                      isItemInCart ? "warning" : "primary"
                    }`}
                    onClick={() => handleCartButtonClick(product.id)}
                  >
                    {isItemInCart ? "Remove From Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <h3>Product Description</h3>
                  {longDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";

export const ModalButton = props => {
  const { product } = props;
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target="#productModal"
      onClick={() => console.log("modal clicked", product)}
    >
      Launch demo modal
    </button>
  );
};

const Modal = () => {
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
            <h5 className="modal-title" id="productModalTitle">
              Modal title
            </h5>
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
                    src="https://via.placeholder.com/200"
                    alt="Card image cap"
                  />
                </div>
                <div className="col-md-12 col-lg-6">
                  <h1>Product name</h1>
                  <h6>Price</h6>
                  <hr />
                  <h4>Short Description</h4>
                  <button className="btn btn-block btn-primary">
                    Add To Cart
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <h3>Long Description</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

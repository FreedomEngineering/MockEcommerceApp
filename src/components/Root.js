import React, { Component } from "react";

import Callout from "./Callout";
import ProductsArea from "./ProductsArea";
import Modal from "./Modal";

class Root extends Component {
  constructor(props) {
    super(props);
    this.onModalButtonClick = this.onModalButtonClick.bind(this);
    this.state = {};
  }

  onModalButtonClick(product) {
    this.setState({
      modalProduct: product
    });
  }

  render() {
    console.log("state", this.state);
    return (
      <div id="homePage">
        <Callout />
        <ProductsArea onModalButtonClick={this.onModalButtonClick} />
        <Modal />
      </div>
    );
  }
}

export default Root;

import React, { Component } from "react";

import Callout from "./Callout";
import ProductsArea from "./ProductsArea";
import Modal from "./Modal";

class Root extends Component {
  render() {
    return (
      <div id="homePage">
        <Callout />
        <ProductsArea />
        <Modal />
      </div>
    );
  }
}

export default Root;

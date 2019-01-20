import React, { Component } from "react";

import Callout from "./Callout";
import ProductsArea from "./ProductsArea";
import Modal from "./Modal";

class Root extends Component {
  constructor(props) {
    super(props);
    this.onModalButtonClick = this.onModalButtonClick.bind(this);
    this.handleCartButtonClick = this.handleCartButtonClick.bind(this);

    const serializedCart = window.localStorage.getItem("cart");
    const cart = serializedCart ? JSON.parse(serializedCart) : [];

    this.state = {
      modalProduct: {},
      cart
    };
  }

  handleCartButtonClick(id) {
    const { cart } = this.state;

    const index = cart.indexOf(id);
    const isProductInCart = index > -1;

    let newCart;
    if (isProductInCart) {
      newCart = cart.slice(0, index).concat(cart.slice(index + 1));
    } else {
      newCart = cart.concat(id);
    }

    this.setState({ cart: newCart }, () => {
      window.localStorage.setItem("cart", JSON.stringify(newCart));
    });
  }

  onModalButtonClick(product) {
    this.setState({
      modalProduct: product
    });
  }

  render() {
    const { modalProduct, cart } = this.state;
    return (
      <div id="homePage">
        <Callout />
        <ProductsArea onModalButtonClick={this.onModalButtonClick} />
        <Modal
          product={modalProduct}
          cart={cart}
          handleCartButtonClick={this.handleCartButtonClick}
        />
      </div>
    );
  }
}

export default Root;

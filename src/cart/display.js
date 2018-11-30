import React, { Component } from "react";
import Top from "../navbar.js";
import Footer from "../footer.js";
import { Container, Row, Media } from "reactstrap";
import Cart from "./cart.js";

export default class CartDisp extends Component {
  render() {
    return (
      <div>
        <Top />

        <Cart />

        <Footer />
      </div>
    );
  }
}

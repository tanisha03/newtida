import React, { Component } from "react";
import Example from "./products.js";
import Top from "./navbar.js";
import Car from "./carousel.js";
import "./grid.css";
import Social from "./social.js";
import Versocial from "./versocial.js";
import Footer from "./footer.js";

export default class Photo extends Component {
  render() {
    return (
      <div>
        <Top />
        <Car />
        <div className="txt" style={{ textAlign: "center" }}>
          -----COLLECTION-----
        </div>
        <Example />
        <Versocial />
        <Social />
        <Footer />
      </div>
    );
  }
}

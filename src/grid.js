import React, { Component } from "react";
import Example from "./products.js";
import { Container, Row, Col } from "reactstrap";
import Top from "./navbar.js";
import Car from "./carousel.js";
import "./grid.css";

export default class Photo extends Component {
  render() {
    return (
      <div>
        <Top />
        <Car />
        <div className="txt">---------PRODUCTS----------</div>
        <Example />
        <Example />
        <Example />
      </div>
    );
  }
}

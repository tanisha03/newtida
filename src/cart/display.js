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
        <Row>
          <Media>
            <Media left href="#">
              <Media object data-src alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>dsfdf</Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
        </Row>
        <Footer />
      </div>
    );
  }
}

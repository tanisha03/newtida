import React from "react";
import { Row, Media, Container } from "reactstrap";

const CartList = ({ cartList }) => (
  <Container>
    {cartList.map((cart, index) => (
      <Row>
        <Media key={index}>
          <Media left href="#">
            <Media
              object
              data-src="{cart.url}/64x64"
              alt="Generic placeholder image"
            />
          </Media>
          <Media body>
            <Media heading>{cart.title}</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </Row>
    ))}
  </Container>
);

export { CartList };

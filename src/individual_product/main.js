import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import p1 from "./1.jpg";

export default class Grid extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginBottom: 50 }}>
          <Row>
            <Col xs="6">
              <img src={p1} style={{ width: 500 }} />
            </Col>
            <Col xs="6">
              <h3>Printed Tshirt</h3>
              <h5>Rs. 1000</h5>
              <p>
                dfuis udy hfyiusd yhfs skfh fiusdd hfsd skhfusd sukhfsf dfhds
                shfjd sdhdfj sehfush
              </p>
              <div style={{ marginTop: 30 }}>Apparel size</div>
              <div>
                <span style={{ marginRight: 20 }}>S</span>
                <span style={{ marginRight: 20 }}>M</span>
                <span style={{ marginRight: 20 }}>L</span>
              </div>
              <div style={{ marginTop: 30 }}>
                <span style={{ marginRight: 30 }}>SIZING GUIDE</span>
                <span style={{ marginRight: 30 }}>INFO AND CARE</span>
              </div>
              <div>
                <Container fluid style={{ marginTop: 30 }}>
                  <Row>
                    <Col xs="6">
                      <Button>ADD TO CART</Button>
                    </Col>

                    <Col xs="6">
                      <Button>BUY NOW</Button>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div style={{ marginTop: 30 }}>ygda jgsd yas gds djadgd</div>
              <hr />
              <div>ygda jgsd yas gds djadgd</div>
              <div>ygda jgsd yas gds djadgd</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

import React from "react";
import { Container, Row, Col } from "reactstrap";
import p1 from "./1.jpg";
import p2 from "./2.jpg";
import p3 from "./3.jpg";
import p4 from "./4.jpg";
import p5 from "./5.jpg";
import "./products.css";

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6" sm="6" className="col">
            <div className="box">
              <img src={p1} className="p1" />
            </div>

            <Row>
              <Col sm="6" className="col">
                <div className="box">
                  <img src={p2} className="p2" />
                </div>
              </Col>
              <Col sm="6" className="col">
                <div className="box">
                  <img src={p2} className="p2" />
                </div>
              </Col>
            </Row>
          </Col>

          <Col sm="6" className="col">
            <div className="box">
              <img src={p3} className="p3" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
